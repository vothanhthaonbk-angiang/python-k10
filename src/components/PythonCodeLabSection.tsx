import React, { useState, useRef } from 'react';
import { CODE_LAB_TASKS, CodeLabTask } from '../data/codeLabData';
import { 
  Play, 
  RotateCcw, 
  Lightbulb, 
  Terminal, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  AlertCircle,
  Copy,
  Check
} from 'lucide-react';
import { runPythonCode, ExecutionResult } from '../services/pyodideService';
import { runLightweightPython, isLowEndOrOlderDevice } from '../utils/lightweightPythonRunner';

interface PythonCodeLabSectionProps {
  onSendCodeToFullIde?: (code: string) => void;
}

export const PythonCodeLabSection: React.FC<PythonCodeLabSectionProps> = ({
  onSendCodeToFullIde,
}) => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [taskCodes, setTaskCodes] = useState<{ [id: number]: string }>(() => {
    const initial: { [id: number]: string } = {};
    CODE_LAB_TASKS.forEach((t) => {
      initial[t.id] = t.code;
    });
    return initial;
  });
  const [showHint, setShowHint] = useState<boolean>(false);
  const [output, setOutput] = useState<string>('Chưa chạy chương trình.');
  const [statusMsg, setStatusMsg] = useState<string>('Sẵn sàng. Bấm “Chạy Python” để thực thi mã nguồn.');
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const currentTask = CODE_LAB_TASKS[currentIdx];
  const currentCode = taskCodes[currentTask.id] ?? currentTask.code;

  const handleSelectTask = (idx: number) => {
    setCurrentIdx(idx);
    setShowHint(false);
    setOutput('Chưa chạy chương trình.');
    setStatusMsg('Sẵn sàng. Bấm “Chạy Python” để thực thi mã nguồn.');
  };

  const handleCodeChange = (val: string) => {
    setTaskCodes((prev) => ({
      ...prev,
      [currentTask.id]: val,
    }));
  };

  const handleReset = () => {
    handleCodeChange(currentTask.code);
    setOutput('Đã khôi phục lại mã nguồn mẫu ban đầu.');
    setStatusMsg('Mã mẫu đã được nạp lại.');
  };

  const handleRun = async () => {
    if (isRunning) return;
    setIsRunning(true);
    setOutput('Đang thực thi mã nguồn Python...');
    setStatusMsg('Đang xử lý...');

    try {
      // If low-end or older device, run lightweight runner directly for instant 0MB execution
      if (isLowEndOrOlderDevice()) {
        const res = await runLightweightPython(currentCode, '');
        if (res.error) {
          setOutput(res.error);
          setStatusMsg('Có lỗi cú pháp hoặc ngoại lệ khi thực thi. Hãy xem gợi ý để sửa.');
        } else {
          const out = res.stdout ? res.stdout.trimEnd() : '(Chương trình không tạo đầu ra trên màn hình.)';
          setOutput(out);
          setStatusMsg(`Chạy xong siêu tốc (${res.durationMs} ms)! Chế độ tối ưu máy cũ hoạt động ổn định.`);
        }
        return;
      }

      // Standard run with fallback
      try {
        const res: ExecutionResult = await runPythonCode(currentCode, '');
        if (res.error) {
          setOutput(res.error);
          setStatusMsg('Có lỗi cú pháp hoặc ngoại lệ khi thực thi. Hãy xem gợi ý để sửa.');
        } else {
          const out = res.stdout ? res.stdout.trimEnd() : '(Chương trình không tạo đầu ra trên màn hình.)';
          setOutput(out);
          setStatusMsg(`Chạy xong trong ${res.durationMs} ms!`);
        }
      } catch (wasmErr) {
        // Fallback to lightweight runner if Wasm fails
        console.warn('Wasm runner failed, falling back to lightweight runner:', wasmErr);
        const res = await runLightweightPython(currentCode, '');
        if (res.error) {
          setOutput(res.error);
          setStatusMsg('Có lỗi trong mã nguồn. Hãy xem gợi ý để sửa.');
        } else {
          const out = res.stdout ? res.stdout.trimEnd() : '(Chương trình không tạo đầu ra trên màn hình.)';
          setOutput(out);
          setStatusMsg(`Chạy hoàn tất bằng bộ thông dịch dự phòng nhẹ (${res.durationMs} ms).`);
        }
      }
    } catch (err: any) {
      setOutput('Lỗi: ' + String(err?.message || err));
      setStatusMsg('Có lỗi trong quá trình thực thi.');
    } finally {
      setIsRunning(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const target = e.currentTarget;
      const start = target.selectionStart;
      const end = target.selectionEnd;
      const indent = '    ';
      const updated = currentCode.substring(0, start) + indent + currentCode.substring(end);
      handleCodeChange(updated);
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.selectionStart = textareaRef.current.selectionEnd = start + 4;
        }
      }, 0);
    }
  };

  const levelBadgeClass =
    currentTask.level === 'Cơ bản'
      ? 'bg-blue-100 text-blue-800 border-blue-200'
      : currentTask.level === 'Thông hiểu'
      ? 'bg-amber-100 text-amber-900 border-amber-200'
      : 'bg-emerald-100 text-emerald-900 border-emerald-200';

  return (
    <div className="bg-white rounded-3xl border border-sky-200/80 shadow-md overflow-hidden">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#10213d] via-[#16386b] to-[#244b8f] text-white p-5 sm:p-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="text-[11px] font-black uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              TIN HỌC 10 · KẾT NỐI TRI THỨC
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
              Python Code Lab 10
            </h3>
            <p className="text-xs sm:text-sm text-sky-200 mt-0.5">
              Đọc mã lệnh · dự đoán kết quả · thử nghiệm Python trực tiếp trên trình duyệt.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <span className="text-xs bg-white/10 px-3 py-1.5 rounded-xl border border-white/15 text-sky-200 font-semibold flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-amber-300" />
              6 Bài luyện theo cấp độ chuẩn
            </span>
          </div>
        </div>
      </div>

      {/* Main 2-column layout */}
      <div className="p-4 sm:p-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar: Tasks List */}
          <aside className="lg:col-span-4 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-black text-[#0d3d78] uppercase tracking-wide">
                Danh sách bài luyện
              </h4>
              <span className="text-[11px] text-slate-500 font-semibold">
                {currentIdx + 1}/{CODE_LAB_TASKS.length} bài
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Chọn bài để nạp ví dụ và nhiệm vụ tương ứng.
            </p>

            <div className="space-y-2">
              {CODE_LAB_TASKS.map((task, idx) => {
                const isActive = idx === currentIdx;
                const levelColor =
                  task.level === 'Cơ bản'
                    ? 'text-blue-600 bg-blue-50'
                    : task.level === 'Thông hiểu'
                    ? 'text-amber-700 bg-amber-50'
                    : 'text-emerald-700 bg-emerald-50';

                return (
                  <button
                    key={task.id}
                    onClick={() => handleSelectTask(idx)}
                    className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer flex flex-col gap-1 ${
                      isActive
                        ? 'border-blue-600 bg-blue-50/70 shadow-xs ring-2 ring-blue-500/20'
                        : 'border-slate-200 hover:border-blue-300 hover:bg-slate-50 bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className={`text-xs font-bold ${isActive ? 'text-blue-900' : 'text-slate-800'}`}>
                        {task.title}
                      </span>
                      <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${levelColor}`}>
                        {task.level}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 line-clamp-1">
                      {task.desc}
                    </p>
                  </button>
                );
              })}
            </div>

            <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200 text-[11px] text-amber-900 leading-relaxed">
              💡 <b>Lưu ý:</b> Trình chạy Python dùng Pyodide WebAssembly nạp trực tiếp trong trình duyệt; mã nguồn an toàn tuyệt đối và không cần cài đặt Python.
            </div>
          </aside>

          {/* Right Main Column: Mission, Editor, Controls, Output */}
          <section className="lg:col-span-8 space-y-4">
            {/* Task Info Header */}
            <div className="bg-sky-50/70 rounded-2xl p-4 border border-sky-200/80">
              <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
                <span className={`text-[11px] font-extrabold px-2.5 py-0.5 rounded-full border ${levelBadgeClass}`}>
                  Bài {currentTask.id} · {currentTask.level}
                </span>
                {onSendCodeToFullIde && (
                  <button
                    onClick={() => onSendCodeToFullIde(currentCode)}
                    className="text-xs text-blue-700 hover:text-blue-900 font-bold flex items-center gap-1 cursor-pointer hover:underline"
                  >
                    <span>Mở sang IDE chuyên sâu</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
              <h3 className="text-lg font-black text-[#0d3d78] mt-1">
                {currentTask.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 font-medium mt-1 leading-relaxed">
                {currentTask.desc}
              </p>
            </div>

            {/* Code Editor */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-blue-600" />
                  Mã Python
                </span>
                <button
                  onClick={handleCopy}
                  className="text-slate-500 hover:text-slate-800 text-[11px] font-semibold flex items-center gap-1 cursor-pointer transition-colors"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span className="text-emerald-600">Đã chép</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Sao chép mã</span>
                    </>
                  )}
                </button>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-inner bg-[#101827]">
                <textarea
                  ref={textareaRef}
                  value={currentCode}
                  onChange={(e) => handleCodeChange(e.target.value)}
                  onKeyDown={handleKeyDown}
                  spellCheck={false}
                  rows={8}
                  className="w-full bg-[#101827] text-[#e9f0ff] p-4 text-xs sm:text-sm font-mono leading-relaxed outline-none resize-y"
                  placeholder="Nhập mã Python tại đây..."
                />
              </div>
            </div>

            {/* Controls Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2.5">
              <div className="flex items-center gap-2">
                <button
                  disabled={isRunning}
                  onClick={handleRun}
                  className="bg-[#0878ef] hover:bg-[#0065d3] text-white font-black px-4 py-2 rounded-xl text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all cursor-pointer hover:scale-105 active:scale-95 disabled:opacity-50"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>▶ Chạy Python</span>
                </button>

                <button
                  onClick={handleReset}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-3 py-2 rounded-xl text-xs sm:text-sm flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Khôi phục lại mã mẫu của bài"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Khôi phục mã mẫu</span>
                </button>
              </div>

              {/* Hint Toggle Button */}
              <button
                onClick={() => setShowHint((prev) => !prev)}
                className={`font-bold px-3.5 py-2 rounded-xl text-xs sm:text-sm flex items-center gap-1.5 transition-all cursor-pointer border ${
                  showHint
                    ? 'bg-amber-400 hover:bg-amber-300 text-slate-950 border-amber-500 shadow-xs'
                    : 'bg-amber-50 hover:bg-amber-100 text-amber-900 border-amber-300'
                }`}
              >
                <Lightbulb className="w-3.5 h-3.5 text-amber-800" />
                <span>{showHint ? 'Ẩn gợi ý' : 'Gợi ý'}</span>
              </button>
            </div>

            {/* Hint Notice Box */}
            {showHint && (
              <div className="p-3.5 bg-[#fff7e5] text-[#78510a] rounded-xl border border-amber-300 text-xs sm:text-sm leading-relaxed animate-fadeIn flex items-start gap-2 shadow-xs">
                <Lightbulb className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">Gợi ý cách làm: </span>
                  <span>{currentTask.hint}</span>
                </div>
              </div>
            )}

            {/* Output Console */}
            <div className="space-y-1.5">
              <div className="text-xs font-bold text-slate-700 flex items-center justify-between">
                <span>Kết quả chạy</span>
                <span className="text-[11px] text-slate-400 font-normal">Console</span>
              </div>
              <div className="bg-[#101827] text-[#dce8ff] p-3.5 rounded-xl font-mono text-xs sm:text-sm min-h-20 whitespace-pre-wrap leading-relaxed border border-slate-800 shadow-inner">
                {output}
              </div>
              <p className="text-[11px] text-slate-500 font-medium">
                {statusMsg}
              </p>
            </div>

            {/* Safety Notice */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-500 leading-relaxed flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>
                Lưu ý: Không nhập mật khẩu hoặc thông tin cá nhân vào trình chạy. Toàn bộ mã nguồn được thực thi an toàn ngay trong trình duyệt của bạn.
              </span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
