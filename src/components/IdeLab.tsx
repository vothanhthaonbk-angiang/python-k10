import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  RotateCcw, 
  Trash2, 
  Copy, 
  Download, 
  Check, 
  Loader2, 
  Terminal, 
  Sliders, 
  Layers, 
  CornerDownLeft,
  AlertTriangle,
  Clock,
  Sparkles,
  HelpCircle,
  Bot,
  X,
  MessageSquareCode,
  Home,
  Smartphone,
  Zap,
  ShieldCheck
} from 'lucide-react';
import { getPyodide, runPythonCode, ExecutionResult } from '../services/pyodideService';
import { runLightweightPython, isLowEndOrOlderDevice } from '../utils/lightweightPythonRunner';
import { safeStorage } from '../utils/safeStorage';
import { CODE_PRESETS } from '../data/presetsData';
import { PythonCodeLabSection } from './PythonCodeLabSection';

interface IdeLabProps {
  currentCode: string;
  onChangeCode: (code: string) => void;
  onNavigateHome?: () => void;
}

export const IdeLab: React.FC<IdeLabProps> = ({ currentCode, onChangeCode, onNavigateHome }) => {
  const [labMode, setLabMode] = useState<'codelab' | 'ide'>('codelab');
  const [stdinText, setStdinText] = useState<string>('Long Xuyen\n10\n20');
  const [activeInputTab, setActiveInputTab] = useState<'editor' | 'stdin'>('editor');
  const [output, setOutput] = useState<string>('Kết quả chạy sẽ xuất hiện tại đây sau khi bạn nhấn "Chạy Python".');

  // Engine selection: 'light' (pure-JS instant runner, 0MB, optimized for older phones) vs 'pyodide' (full Wasm)
  const [engineMode, setEngineMode] = useState<'light' | 'pyodide'>(() => {
    try {
      const saved = safeStorage.getItem('pythonEduEngineMode');
      if (saved === 'light' || saved === 'pyodide') return saved;
      return 'light'; // Default to light: instant, 0MB download, 100% stable on all phones
    } catch {
      return 'light';
    }
  });

  const [statusMsg, setStatusMsg] = useState<string>(() => 
    engineMode === 'light' 
      ? '⚡ Chế độ Siêu Nhẹ (0MB, Tối ưu máy cũ/yếu) đã sẵn sàng!' 
      : 'Đang kiểm tra trình chạy Python…'
  );
  const [isPyodideReady, setIsPyodideReady] = useState<boolean>(() => engineMode === 'light');
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [executionDuration, setExecutionDuration] = useState<number | null>(null);
  const [fontSize, setFontSize] = useState<number>(14);
  const [copied, setCopied] = useState<boolean>(false);
  const [showAiModal, setShowAiModal] = useState<boolean>(false);
  const [selectedPromptType, setSelectedPromptType] = useState<'debug' | 'testcase' | 'explain' | 'optimize'>('debug');
  const [copiedAiPrompt, setCopiedAiPrompt] = useState<boolean>(false);

  // Interactive input prompt state (in-console prompt instead of window.prompt)
  const [isAwaitingInput, setIsAwaitingInput] = useState<boolean>(false);
  const [interactivePromptMsg, setInteractivePromptMsg] = useState<string>('');
  const [interactiveInputValue, setInteractiveInputValue] = useState<string>('');
  const inputResolverRef = useRef<((val: string) => void) | null>(null);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const interactiveInputRef = useRef<HTMLInputElement>(null);

  // Preload Pyodide only if user selects Pyodide mode
  useEffect(() => {
    let isMounted = true;
    if (engineMode === 'pyodide') {
      setStatusMsg('Đang nạp nhân Pyodide WebAssembly...');
      getPyodide()
        .then(() => {
          if (isMounted) {
            setIsPyodideReady(true);
            setStatusMsg('Sẵn sàng! Trình thông dịch Pyodide WebAssembly đã nạp hoàn tất.');
          }
        })
        .catch((err) => {
          if (isMounted) {
            setStatusMsg('Không thể nạp Pyodide: ' + String(err?.message || err) + '. Đề xuất chuyển sang Chế độ Siêu Nhẹ.');
          }
        });
    } else {
      setIsPyodideReady(true);
      setStatusMsg('⚡ Chế độ Siêu Nhẹ (0MB tải, tức thì - Tối ưu mọi thiết bị) đã sẵn sàng.');
    }
    return () => {
      isMounted = false;
    };
  }, [engineMode]);

  // Handle Tab key in code editor for 4 spaces indent
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const target = e.currentTarget;
      const start = target.selectionStart;
      const end = target.selectionEnd;

      const indent = '    '; // 4 spaces
      const newCode = currentCode.substring(0, start) + indent + currentCode.substring(end);
      onChangeCode(newCode);

      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.selectionStart = textareaRef.current.selectionEnd = start + 4;
        }
      }, 0);
    }
  };

  // Helper to insert symbols easily on mobile devices (iOS / Android)
  const insertSymbolAtCursor = (symbol: string) => {
    if (!textareaRef.current) return;
    const target = textareaRef.current;
    const start = target.selectionStart ?? currentCode.length;
    const end = target.selectionEnd ?? currentCode.length;
    const newCode = currentCode.substring(0, start) + symbol + currentCode.substring(end);
    onChangeCode(newCode);
    setTimeout(() => {
      target.focus();
      const newPos = start + symbol.length;
      target.setSelectionRange(newPos, newPos);
    }, 10);
  };

  // Run the code using selected engine (Lightweight runner for older phones or Pyodide Wasm)
  const handleRunCode = async () => {
    if (isRunning) return;
    setIsRunning(true);
    setExecutionDuration(null);
    setOutput('Đang thực thi mã nguồn Python...');
    setStatusMsg(engineMode === 'light' ? 'Đang chạy qua bộ thông dịch Siêu Nhẹ...' : 'Đang chạy qua Pyodide Wasm...');

    const handleInteractiveInput = async (promptMsg: string) => {
      setIsAwaitingInput(true);
      setInteractivePromptMsg(promptMsg || 'Nhập dữ liệu: ');
      setInteractiveInputValue('');

      setTimeout(() => {
        interactiveInputRef.current?.focus();
      }, 100);

      return new Promise<string>((resolve) => {
        inputResolverRef.current = resolve;
      });
    };

    try {
      if (engineMode === 'light') {
        const res = await runLightweightPython(
          currentCode,
          stdinText,
          handleInteractiveInput
        );

        setExecutionDuration(res.durationMs);

        if (res.error) {
          setOutput(res.error);
          setStatusMsg('Chương trình phát hiện lỗi cú pháp hoặc ngoại lệ.');
        } else {
          const out = res.stdout ? res.stdout : '(Chương trình chạy thành công và không in ra màn hình)';
          setOutput(out);
          setStatusMsg(`⚡ Thực thi hoàn tất trong ${res.durationMs} ms (Chế độ Siêu Nhẹ - Tiết kiệm RAM).`);
        }
      } else {
        // Pyodide Wasm runner
        try {
          const res: ExecutionResult = await runPythonCode(
            currentCode,
            stdinText,
            handleInteractiveInput
          );

          setExecutionDuration(res.durationMs);

          if (res.error) {
            setOutput(res.error);
            setStatusMsg('Chương trình phát hiện lỗi. Hãy đọc thông báo và sửa mã.');
          } else {
            const out = res.stdout ? res.stdout : '(Chương trình chạy thành công và không in ra màn hình)';
            setOutput(out);
            setStatusMsg(`Thực thi hoàn tất trong ${res.durationMs} ms (Pyodide Wasm).`);
          }
        } catch (wasmErr: any) {
          console.warn('Pyodide run error, suggesting lightweight engine:', wasmErr);
          setOutput(
            `⚠️ Pyodide WebAssembly không thể hoàn tất (có thể do thiết bị thiếu bộ nhớ RAM hoặc chưa tải xong thư viện 20MB).\n\nLỗi: ${String(wasmErr?.message || wasmErr)}\n\n💡 KHUYÊN DÙNG: Bấm vào nút "⚡ Chế độ Siêu Nhẹ (0MB)" ở thanh công cụ để chạy mượt mà ngay lập tức!`
          );
          setStatusMsg('Đề xuất chuyển sang Chế độ Siêu Nhẹ để chạy mượt hơn.');
        }
      }
    } catch (err: any) {
      setOutput('Lỗi ngoại lệ: ' + String(err?.message || err));
      setStatusMsg('Chương trình dừng đột ngột.');
    } finally {
      setIsRunning(false);
      setIsAwaitingInput(false);
    }
  };

  const handleSendInteractiveInput = () => {
    if (inputResolverRef.current) {
      inputResolverRef.current(interactiveInputValue);
      inputResolverRef.current = null;
      setIsAwaitingInput(false);
      setInteractiveInputValue('');
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadCode = () => {
    const blob = new Blob([currentCode], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'bai_tap_python_angiang.py';
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleLoadPreset = (presetId: string) => {
    const found = CODE_PRESETS.find((p) => p.id === presetId);
    if (found) {
      onChangeCode(found.code);
      setOutput(`Đã nạp mẫu: "${found.title}".\nNhấn "▶ Chạy Python" để xem kết quả.`);
    }
  };

  // Line numbering helper
  const lineNumbers = currentCode.split('\n').map((_, i) => i + 1);

  return (
    <section id="thuc-hanh" className="py-8 bg-white border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mode Selector Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 p-2 bg-[#f0f6ff] rounded-2xl border border-sky-200">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLabMode('codelab')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black flex items-center gap-2 transition-all cursor-pointer ${
                labMode === 'codelab'
                  ? 'bg-[#0d3d78] text-white shadow-md'
                  : 'text-slate-700 hover:text-[#0d3d78] hover:bg-white/80'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Python Code Lab 10 (Nhiệm vụ cấp độ & Gợi ý)</span>
            </button>

            <button
              onClick={() => setLabMode('ide')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black flex items-center gap-2 transition-all cursor-pointer ${
                labMode === 'ide'
                  ? 'bg-[#0d3d78] text-white shadow-md'
                  : 'text-slate-700 hover:text-[#0d3d78] hover:bg-white/80'
              }`}
            >
              <Terminal className="w-4 h-4 text-sky-400" />
              <span>Phòng thực hành Tự do (IDE Chuyên sâu & 14 Bài mẫu SGK)</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            {onNavigateHome && (
              <button
                onClick={onNavigateHome}
                className="bg-white hover:bg-sky-50 text-slate-700 hover:text-[#0d3d78] text-xs font-bold px-3 py-2 rounded-xl border border-sky-200 flex items-center gap-1.5 transition-all shadow-2xs cursor-pointer hover:border-blue-300"
                title="Trở về đầu trang chủ"
              >
                <Home className="w-3.5 h-3.5 text-blue-600" />
                <span className="hidden sm:inline">Trở về trang chủ</span>
                <span className="sm:hidden">Trang chủ</span>
              </button>
            )}
            <div className="text-xs text-slate-500 font-semibold px-2 hidden md:block">
              {labMode === 'codelab' ? '6 bài luyện chuẩn SGK kèm gợi ý' : 'Môi trường soạn thảo & Stdin đầy đủ'}
            </div>
          </div>
        </div>

        {/* If in Code Lab 10 Mode: Render PythonCodeLabSection */}
        {labMode === 'codelab' ? (
          <PythonCodeLabSection
            onSendCodeToFullIde={(code) => {
              onChangeCode(code);
              setLabMode('ide');
            }}
          />
        ) : (
          /* Full IDE Mode */
          <>
            {/* Section Heading */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-5">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-[#0d3d78] flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-blue-600" />
                  Phòng thực hành Python Chuyên sâu
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Thực thi trực tiếp mã nguồn. Hỗ trợ <strong className="text-amber-600 font-semibold">Chế độ Siêu Nhẹ (0MB)</strong> chạy mượt trên mọi điện thoại cũ (iOS/Android RAM 1-2GB) và <strong className="text-blue-600 font-semibold">Chế độ Wasm Đầy đủ</strong>.
                </p>
              </div>

              {/* Controls: Engine Selector & Presets */}
              <div className="flex flex-wrap items-center gap-2">
                {/* Engine Selector Toggle */}
                <div className="flex items-center bg-[#e8f1fc] p-1 rounded-xl border border-sky-300">
                  <button
                    type="button"
                    onClick={() => {
                      setEngineMode('light');
                      safeStorage.setItem('pythonEduEngineMode', 'light');
                      setStatusMsg('⚡ Đã chuyển sang Chế độ Siêu Nhẹ (0MB, Tức thì, bảo vệ RAM điện thoại cũ).');
                    }}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                      engineMode === 'light'
                        ? 'bg-amber-500 text-slate-950 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                    title="Chế độ siêu nhẹ: 0MB tải về, chạy tức thì, tối ưu tuyệt đối cho iPhone/Android đời cũ hoặc máy RAM 1-2GB"
                  >
                    <Zap className="w-3.5 h-3.5 fill-current" />
                    <span>Siêu Nhẹ (Máy cũ/yếu)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setEngineMode('pyodide');
                      safeStorage.setItem('pythonEduEngineMode', 'pyodide');
                      setStatusMsg('Đang kích hoạt Chế độ Đầy đủ (Pyodide Wasm)...');
                    }}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                      engineMode === 'pyodide'
                        ? 'bg-[#0d3d78] text-white shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                    title="Chế độ đầy đủ: Chạy Pyodide WebAssembly chuẩn Python 3.12 (cần mạng tốt tải 20MB và RAM >= 3GB)"
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Đầy đủ (Wasm)</span>
                  </button>
                </div>

                {/* Quick preset selector */}
                <div className="flex items-center gap-2 bg-[#f0f7ff] p-2 rounded-xl border border-sky-200">
                  <span className="text-xs font-bold text-[#0d3d78] flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5 text-blue-600" />
                    Mẫu:
                  </span>
                  <select
                    onChange={(e) => handleLoadPreset(e.target.value)}
                    defaultValue=""
                    className="text-xs bg-white text-slate-800 border border-sky-300 rounded-lg px-2.5 py-1.5 font-medium outline-none cursor-pointer hover:border-blue-500 max-w-[180px] truncate"
                  >
                    <option value="" disabled>-- Chọn chương trình mẫu --</option>
                    {CODE_PRESETS.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* The IDE Container */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Code Editor + Tabs (7 cols) */}
          <div className="lg:col-span-7 bg-[#10243b] rounded-2xl shadow-xl border border-slate-700 overflow-hidden flex flex-col">
            {/* Editor Top Toolbar */}
            <div className="bg-[#0b1c30] px-4 py-2.5 border-b border-slate-700/80 flex items-center justify-between flex-wrap gap-2">
              {/* Tab selector */}
              <div className="flex items-center gap-1 bg-[#152e4d] p-1 rounded-lg">
                <button
                  onClick={() => setActiveInputTab('editor')}
                  className={`text-xs px-3 py-1 rounded-md font-semibold transition-colors cursor-pointer ${
                    activeInputTab === 'editor'
                      ? 'bg-blue-600 text-white shadow'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Mã nguồn (.py)
                </button>
                <button
                  onClick={() => setActiveInputTab('stdin')}
                  className={`text-xs px-3 py-1 rounded-md font-semibold transition-colors cursor-pointer flex items-center gap-1 ${
                    activeInputTab === 'stdin'
                      ? 'bg-blue-600 text-white shadow'
                      : 'text-slate-300 hover:text-white'
                  }`}
                  title="Dữ liệu nhập chuẩn cho lệnh input()"
                >
                  <span>Dữ liệu vào (Stdin)</span>
                  {stdinText.trim() && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  )}
                </button>
              </div>

              {/* Font zoom and action utilities */}
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <div className="flex items-center bg-[#152e4d] rounded-lg px-2 py-0.5 border border-slate-700">
                  <span className="text-[11px] text-slate-400 mr-1.5 font-mono">Cỡ chữ:</span>
                  <button
                    onClick={() => setFontSize((s) => Math.max(12, s - 1))}
                    className="hover:text-white font-mono px-1 font-bold"
                    title="Giảm cỡ chữ"
                  >
                    -
                  </button>
                  <span className="font-mono text-[11px] px-1 text-sky-300">{fontSize}px</span>
                  <button
                    onClick={() => setFontSize((s) => Math.min(22, s + 1))}
                    className="hover:text-white font-mono px-1 font-bold"
                    title="Tăng cỡ chữ"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleCopyCode}
                  className="bg-[#152e4d] hover:bg-[#1e3f68] p-1.5 rounded-lg text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Sao chép toàn bộ mã nguồn"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>

                <button
                  onClick={handleDownloadCode}
                  className="bg-[#152e4d] hover:bg-[#1e3f68] p-1.5 rounded-lg text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Tải tệp .py về máy tính"
                >
                  <Download className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onChangeCode('')}
                  className="bg-[#152e4d] hover:bg-rose-900/40 p-1.5 rounded-lg text-slate-300 hover:text-rose-300 transition-colors cursor-pointer"
                  title="Xóa sạch trình soạn thảo"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Editor Main Content Area */}
            {activeInputTab === 'editor' ? (
              <>
                <div className="relative flex-1 min-h-[380px] max-h-[520px] flex overflow-hidden bg-[#10243b]">
                  {/* Line numbers gutter */}
                  <div
                    className="py-4 px-3 bg-[#0d1e33] border-r border-slate-700/60 select-none text-right font-mono text-slate-500 font-medium text-xs leading-relaxed"
                    style={{ fontSize: `${fontSize}px` }}
                  >
                    {lineNumbers.map((num) => (
                      <div key={num} className="leading-relaxed">
                        {num}
                      </div>
                    ))}
                  </div>

                  {/* Textarea code editor */}
                  <textarea
                    ref={textareaRef}
                    value={currentCode}
                    onChange={(e) => onChangeCode(e.target.value)}
                    onKeyDown={handleKeyDown}
                    spellCheck={false}
                    autoCapitalize="off"
                    autoCorrect="off"
                    className="flex-1 p-4 bg-transparent text-[#d9f2ff] font-mono leading-relaxed outline-none resize-none overflow-y-auto selection:bg-blue-600/70"
                    style={{ fontSize: `${fontSize}px` }}
                    aria-label="Khung soạn thảo mã nguồn Python"
                  />
                </div>

                {/* Mobile & Touch Quick-Keys Toolbar (iOS / Android / Touch devices) */}
                <div className="bg-[#091728] px-3 py-1.5 border-t border-slate-700/60 flex items-center gap-1.5 overflow-x-auto select-none">
                  <span className="text-[11px] font-bold text-amber-300 shrink-0 font-mono flex items-center gap-1">
                    <Smartphone className="w-3.5 h-3.5 text-amber-400" />
                    <span className="hidden xs:inline">Phím nhanh:</span>
                  </span>
                  {[
                    { label: 'Tab', value: '    ' },
                    { label: ':', value: ':' },
                    { label: '" "', value: '""' },
                    { label: "' '", value: "''" },
                    { label: '( )', value: '()' },
                    { label: '[ ]', value: '[]' },
                    { label: '=', value: ' = ' },
                    { label: '==', value: ' == ' },
                    { label: '!=', value: ' != ' },
                    { label: '#', value: '# ' },
                    { label: 'print()', value: 'print()' },
                    { label: 'input()', value: 'input()' },
                    { label: 'int()', value: 'int()' },
                    { label: 'len()', value: 'len()' },
                    { label: 'if', value: 'if ' },
                    { label: 'else:', value: 'else:\n    ' },
                    { label: 'for i in', value: 'for i in range():' },
                  ].map((item, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => insertSymbolAtCursor(item.value)}
                      className="px-2.5 py-1 bg-[#152e4d] hover:bg-sky-600 active:bg-sky-700 text-sky-100 hover:text-white rounded-md text-xs font-mono font-medium shrink-0 transition-colors border border-slate-700/70 cursor-pointer shadow-sm active:scale-95"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              /* Stdin Tab Content */
              <div className="p-4 bg-[#0d1e33] min-h-[380px] max-h-[520px] flex flex-col">
                <div className="flex items-center justify-between text-xs text-sky-200 mb-2">
                  <span className="font-bold flex items-center gap-1.5">
                    <CornerDownLeft className="w-4 h-4 text-emerald-400" />
                    Dữ liệu nhập chuẩn (Standard Input - Stdin)
                  </span>
                  <span className="text-slate-400">Mỗi dòng tương ứng với 1 lần gọi input()</span>
                </div>
                <textarea
                  value={stdinText}
                  onChange={(e) => setStdinText(e.target.value)}
                  placeholder="Nhập các dữ liệu bạn muốn đưa vào chương trình ở đây. Mỗi lần input() trong Python sẽ tự động đọc 1 dòng..."
                  className="flex-1 p-3.5 bg-[#10243b] text-sky-100 font-mono text-xs sm:text-sm rounded-xl border border-slate-700 outline-none resize-none leading-relaxed"
                  spellCheck={false}
                />
                <div className="mt-2 text-[11px] text-slate-400">
                  💡 Rất tiện lợi cho việc kiểm thử các bài toán HSG và bài thi có nhiều dòng dữ liệu đầu vào mà không cần bấm gõ từng lần.
                </div>
              </div>
            )}

            {/* Bottom Actions Toolbar */}
            <div className="bg-[#0b1c30] p-3 border-t border-slate-700/80 flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleRunCode}
                  disabled={isRunning}
                  className="bg-[#0878ef] hover:bg-[#0065d3] disabled:opacity-50 text-white font-extrabold text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-blue-600/30 flex items-center gap-2 transition-all cursor-pointer hover:scale-105 active:scale-95"
                >
                  {isRunning ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Đang chạy...
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-white" />
                      Chạy Python
                    </>
                  )}
                </button>

                <button
                  onClick={() => {
                    onChangeCode('for i in range(1, 6):\n    print("Xin chào học sinh An Giang!", i)');
                    setOutput('Đã nạp đoạn mã lặp ví dụ. Bấm "Chạy Python" để thực thi.');
                  }}
                  className="bg-[#152e4d] hover:bg-[#1f426d] text-sky-200 font-semibold text-xs px-3 py-2 rounded-xl border border-slate-700 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Nạp ví dụ nhanh
                </button>

                <button
                  onClick={() => setShowAiModal(true)}
                  className="bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs px-3 py-2 rounded-xl flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
                >
                  <Bot className="w-3.5 h-3.5" />
                  Gợi ý Prompt AI
                </button>
              </div>

              {/* Status Indicator */}
              <div className="text-xs flex items-center gap-2">
                {engineMode === 'light' ? (
                  <span className="flex items-center gap-1.5 text-amber-300 font-bold bg-[#142844] px-2.5 py-1 rounded-lg border border-amber-400/40" title="Chế độ siêu nhẹ: không ngốn RAM, không cần tải Wasm">
                    <Zap className="w-3.5 h-3.5 fill-current text-amber-400" />
                    <span>Siêu Nhẹ (0MB - Tối ưu máy cũ)</span>
                  </span>
                ) : isPyodideReady ? (
                  <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Pyodide Wasm sẵn sàng
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 text-amber-300 font-medium">
                    <Loader2 className="w-3 h-3 animate-spin" />
                    Đang nạp Pyodide...
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Terminal Output + In-console Input (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl shadow-xl border border-sky-200 overflow-hidden flex flex-col">
            {/* Terminal Header */}
            <div className="bg-[#f0f7ff] px-4 py-3 border-b border-sky-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#0d3d78]" />
                <h3 className="font-bold text-[#0d3d78] text-sm">
                  📟 Kết quả chạy (Console)
                </h3>
              </div>

              <div className="flex items-center gap-2">
                {executionDuration !== null && (
                  <span className="text-[11px] bg-sky-100 text-[#0d3d78] font-mono px-2 py-0.5 rounded flex items-center gap-1 border border-sky-200">
                    <Clock className="w-3 h-3" />
                    {executionDuration} ms
                  </span>
                )}
                <button
                  onClick={() => setOutput('')}
                  className="text-xs text-slate-500 hover:text-slate-800 bg-white hover:bg-slate-100 px-2 py-1 rounded border border-slate-200 transition-colors cursor-pointer"
                  title="Xóa nội dung màn hình console"
                >
                  Xóa kết quả
                </button>
              </div>
            </div>

            {/* Terminal Output Display */}
            <div className="flex-1 p-4 bg-[#f8fbff] min-h-[320px] max-h-[460px] overflow-y-auto font-mono text-xs sm:text-sm text-slate-800 leading-relaxed border-b border-sky-100">
              <pre className="whitespace-pre-wrap font-mono">
                {output}
              </pre>

              {/* Interactive In-Console Input Prompt when Python code prompts for input() */}
              {isAwaitingInput && (
                <div className="mt-4 p-3 bg-amber-50 border border-amber-300 rounded-xl shadow-sm animate-in fade-in">
                  <div className="text-xs font-bold text-amber-900 mb-1.5 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>Chương trình yêu cầu nhập dữ liệu:</span>
                  </div>
                  <div className="text-xs text-slate-700 font-mono mb-2">
                    {interactivePromptMsg}
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      ref={interactiveInputRef}
                      type="text"
                      value={interactiveInputValue}
                      onChange={(e) => setInteractiveInputValue(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSendInteractiveInput();
                      }}
                      placeholder="Gõ câu trả lời vào đây..."
                      className="flex-1 bg-white border border-amber-400 rounded-lg px-3 py-1.5 text-xs text-slate-900 outline-none focus:ring-2 focus:ring-amber-500"
                    />
                    <button
                      onClick={handleSendInteractiveInput}
                      className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs px-3 py-1.5 rounded-lg flex items-center gap-1 cursor-pointer transition-all"
                    >
                      <span>Gửi</span>
                      <CornerDownLeft className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Terminal Footer Notes */}
            <div className="p-3 bg-white text-xs text-slate-500 flex items-start gap-2">
              <HelpCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
              <div className="leading-snug">
                <b>Trạng thái:</b> {statusMsg}
                <div className="text-[11px] text-slate-400 mt-0.5">
                  Bạn có thể dùng thẻ <b>"Dữ liệu vào (Stdin)"</b> để chuẩn bị trước nhiều dòng dữ liệu cho bài toán phức tạp.
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )}
  </div>

      {/* Educational AI Prompt Assistant Modal */}
      {showAiModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-purple-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-purple-800 to-indigo-900 p-5 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center text-amber-300">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-white">
                    Trợ lý AI Học tập: Gợi ý Prompt Sư phạm
                  </h3>
                  <p className="text-[11px] text-purple-200">
                    Kỹ năng giao tiếp và học cùng AI theo Chương trình Đổi mới Giáo dục số
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowAiModal(false)}
                className="text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-1.5 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 space-y-4 text-slate-800">
              {/* Prompt category tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'debug', label: '🔍 Gỡ lỗi (Debug)' },
                  { id: 'testcase', label: '📊 Sinh Test Case' },
                  { id: 'explain', label: '💡 Giải thích mã' },
                  { id: 'optimize', label: '✨ Tối ưu chuẩn PEP8' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setSelectedPromptType(tab.id as any);
                      setCopiedAiPrompt(false);
                    }}
                    className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                      selectedPromptType === tab.id
                        ? 'bg-purple-100 text-purple-900 border-purple-400 shadow-2xs'
                        : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-purple-50'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Rendered prompt preview */}
              <div className="bg-slate-900 rounded-2xl p-4 border border-slate-800 text-white space-y-2">
                <div className="flex items-center justify-between text-xs text-purple-300 border-b border-slate-800 pb-2">
                  <span className="font-mono flex items-center gap-1.5 text-amber-300 text-[11px] font-bold">
                    <MessageSquareCode className="w-3.5 h-3.5" />
                    Prompt đã tích hợp sẵn đoạn mã trong trình soạn thảo:
                  </span>
                  <button
                    onClick={() => {
                      let text = '';
                      if (selectedPromptType === 'debug') {
                        text = `Em là học sinh lớp 10 THPT đang thực hành Python Chủ đề 5. Dưới đây là đoạn mã nguồn của em:\n\n\`\`\`python\n${currentCode}\n\`\`\`\n\nKhi chạy em thấy kết quả chưa đúng hoặc báo lỗi. Hãy đóng vai Trợ lý giáo dục Tin học 10 giúp em:\n1. Giải thích lỗi sai ở đâu (cú pháp, ngoại lệ hay logic)?\n2. Hướng dẫn em cách tự sửa lỗi mà không làm hộ toàn bộ bài.`;
                      } else if (selectedPromptType === 'testcase') {
                        text = `Em là học sinh lớp 10 THPT. Dưới đây là chương trình Python của em:\n\n\`\`\`python\n${currentCode}\n\`\`\`\n\nHãy tạo cho em một bảng gồm 5 bộ dữ liệu kiểm thử (test cases) bao gồm Input và Output kỳ vọng (Expected Output), có cả trường hợp thông thường và trường hợp biên (số âm, số 0, giá trị ranh giới).`;
                      } else if (selectedPromptType === 'explain') {
                        text = `Hãy đóng vai giáo viên Tin học 10 giải thích từng câu lệnh trong đoạn mã sau bằng ngôn ngữ đơn giản, gần gũi với học sinh:\n\n\`\`\`python\n${currentCode}\n\`\`\``;
                      } else {
                        text = `Nhận xét đoạn mã sau của học sinh lớp 10 về tính rõ ràng, quy tắc đặt tên biến PEP8 và gợi ý cách viết ngắn gọn, đúng chuẩn Pythonic:\n\n\`\`\`python\n${currentCode}\n\`\`\``;
                      }
                      navigator.clipboard.writeText(text);
                      setCopiedAiPrompt(true);
                      setTimeout(() => setCopiedAiPrompt(false), 2000);
                    }}
                    className="bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
                  >
                    {copiedAiPrompt ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-300" />
                        <span>Đã chép prompt!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Sao chép Prompt đầy đủ</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="font-mono text-xs text-sky-100 bg-slate-950 p-3 rounded-xl max-h-48 overflow-y-auto leading-relaxed whitespace-pre-wrap select-all">
                  {selectedPromptType === 'debug' && (
                    <>
                      Em là học sinh lớp 10 THPT đang thực hành Python Chủ đề 5. Dưới đây là đoạn mã nguồn của em:
                      {'\n\n'}```python{'\n'}{currentCode}{'\n'}```{'\n\n'}
                      Khi chạy em thấy kết quả chưa đúng hoặc báo lỗi. Hãy đóng vai Trợ lý giáo dục Tin học 10 giúp em:
                      {'\n'}1. Giải thích lỗi sai ở đâu (cú pháp, ngoại lệ hay logic)?
                      {'\n'}2. Hướng dẫn em cách tự sửa lỗi mà không làm hộ toàn bộ bài.
                    </>
                  )}
                  {selectedPromptType === 'testcase' && (
                    <>
                      Em là học sinh lớp 10 THPT. Dưới đây là chương trình Python của em:
                      {'\n\n'}```python{'\n'}{currentCode}{'\n'}```{'\n\n'}
                      Hãy tạo cho em một bảng gồm 5 bộ dữ liệu kiểm thử (test cases) bao gồm Input và Output kỳ vọng (Expected Output), có cả trường hợp thông thường và trường hợp biên (số âm, số 0, giá trị ranh giới).
                    </>
                  )}
                  {selectedPromptType === 'explain' && (
                    <>
                      Hãy đóng vai giáo viên Tin học 10 giải thích từng câu lệnh trong đoạn mã sau bằng ngôn ngữ đơn giản, gần gũi với học sinh:
                      {'\n\n'}```python{'\n'}{currentCode}{'\n'}```
                    </>
                  )}
                  {selectedPromptType === 'optimize' && (
                    <>
                      Nhận xét đoạn mã sau của học sinh lớp 10 về tính rõ ràng, quy tắc đặt tên biến PEP8 và gợi ý cách viết ngắn gọn, đúng chuẩn Pythonic:
                      {'\n\n'}```python{'\n'}{currentCode}{'\n'}```
                    </>
                  )}
                </div>
              </div>

              {/* Digital Competency Advice */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900 space-y-1">
                <div className="font-bold text-amber-950 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  Quy tắc phát triển Năng lực số khi tương tác với AI:
                </div>
                <ul className="list-disc list-inside space-y-0.5 text-slate-700 text-[11px]">
                  <li>Không yêu cầu AI làm bài thay để sao chép kết quả; hãy yêu cầu AI <b>hướng dẫn tư duy</b>.</li>
                  <li>Luôn kiểm chứng lại kết quả bằng cách chạy thử trực tiếp trên phòng Lab này.</li>
                  <li>Cảnh giác với hiện tượng <b>ảo giác (Hallucination)</b>: AI có thể đưa ra cú pháp sai hoặc thư viện không có trong SGK.</li>
                </ul>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-slate-50 px-5 py-3 border-t border-slate-200 text-right">
              <button
                onClick={() => setShowAiModal(false)}
                className="bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold px-4 py-2 rounded-xl transition-colors cursor-pointer"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
