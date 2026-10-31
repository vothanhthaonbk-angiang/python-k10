import React, { useState } from 'react';
import { Exercise, TestCase } from '../types';
import { EXERCISES_DATA } from '../data/exercisesData';
import { runPythonCode } from '../services/pyodideService';
import { 
  CheckCircle2, 
  XCircle, 
  Play, 
  Send, 
  HelpCircle, 
  Award, 
  Code, 
  Loader2, 
  Eye, 
  EyeOff,
  Sparkles,
  ArrowRight,
  Home
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ExercisesSectionProps {
  completedExercises: string[];
  onCompleteExercise: (exerciseId: string) => void;
  onSendCodeToLab: (code: string) => void;
  onNavigateToLab: () => void;
  onNavigateHome?: () => void;
}

interface TestResult {
  testId: number;
  input: string;
  expected: string;
  actual: string;
  passed: boolean;
  error?: string;
  durationMs: number;
}

export const ExercisesSection: React.FC<ExercisesSectionProps> = ({
  completedExercises,
  onCompleteExercise,
  onSendCodeToLab,
  onNavigateToLab,
  onNavigateHome,
}) => {
  const [selectedExId, setSelectedExId] = useState<string>(EXERCISES_DATA[0].id);
  const selectedExercise = EXERCISES_DATA.find((e) => e.id === selectedExId) || EXERCISES_DATA[0];

  const [studentCode, setStudentCode] = useState<{ [id: string]: string }>({
    [selectedExercise.id]: selectedExercise.starterCode,
  });

  const [isGrading, setIsGrading] = useState<boolean>(false);
  const [testResults, setTestResults] = useState<TestResult[] | null>(null);
  const [showSolution, setShowSolution] = useState<boolean>(false);

  const currentCode = studentCode[selectedExercise.id] !== undefined
    ? studentCode[selectedExercise.id]
    : selectedExercise.starterCode;

  const handleSelectExercise = (ex: Exercise) => {
    setSelectedExId(ex.id);
    setTestResults(null);
    setShowSolution(false);
    if (studentCode[ex.id] === undefined) {
      setStudentCode((prev) => ({ ...prev, [ex.id]: ex.starterCode }));
    }
  };

  const handleCodeChange = (newCode: string) => {
    setStudentCode((prev) => ({ ...prev, [selectedExercise.id]: newCode }));
  };

  // Run auto-grading across all test cases
  const handleGradeCode = async () => {
    setIsGrading(true);
    setTestResults(null);

    const results: TestResult[] = [];
    let allPassed = true;

    for (const tc of selectedExercise.testCases) {
      try {
        const res = await runPythonCode(currentCode, tc.input);

        // Normalize output (strip whitespace/newlines)
        const actualNorm = res.stdout.trim().replace(/\r\n/g, '\n');
        const expectedNorm = tc.expectedOutput.trim().replace(/\r\n/g, '\n');

        const passed = !res.error && actualNorm === expectedNorm;
        if (!passed) allPassed = false;

        results.push({
          testId: tc.id,
          input: tc.input,
          expected: tc.expectedOutput,
          actual: res.stdout,
          passed,
          error: res.error,
          durationMs: res.durationMs,
        });
      } catch (err: any) {
        allPassed = false;
        results.push({
          testId: tc.id,
          input: tc.input,
          expected: tc.expectedOutput,
          actual: '',
          passed: false,
          error: String(err?.message || err),
          durationMs: 0,
        });
      }
    }

    setTestResults(results);
    setIsGrading(false);

    if (allPassed) {
      onCompleteExercise(selectedExercise.id);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch {
        // safe fallback
      }
    }
  };

  return (
    <section id="bai-tap" className="py-8 bg-[#f0f7ff] border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-[#0d3d78] flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              Bài tập Lập trình Python
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Thực hành giải bài toán Tin học THPT – Hệ thống tự động chấm điểm theo từng Test Case.
            </p>
          </div>

          <div className="flex items-center gap-3">
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

            <div className="text-xs text-slate-600 bg-white px-3 py-2 rounded-xl border border-sky-200 shadow-xs">
              Đã hoàn thành: <b className="text-emerald-700">{completedExercises.length} / {EXERCISES_DATA.length} bài</b>
            </div>
          </div>
        </div>

        {/* Exercises Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Exercise List (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="bg-white rounded-2xl p-4 border border-sky-200 shadow-sm">
              <h3 className="font-extrabold text-sm text-[#0d3d78] mb-3 uppercase tracking-wide">
                Danh sách bài tập ({EXERCISES_DATA.length})
              </h3>
              <div className="space-y-2">
                {EXERCISES_DATA.map((ex) => {
                  const isDone = completedExercises.includes(ex.id);
                  const isSelected = ex.id === selectedExercise.id;

                  return (
                    <button
                      key={ex.id}
                      onClick={() => handleSelectExercise(ex)}
                      className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'bg-[#0878ef] text-white border-blue-600 shadow-md font-semibold'
                          : 'bg-white hover:bg-sky-50 text-slate-800 border-sky-100'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="text-xs font-bold flex items-center gap-1.5">
                          <span>{ex.title}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[11px] opacity-85">
                          <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                            isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                          }`}>
                            {ex.difficulty}
                          </span>
                          <span>{ex.category}</span>
                        </div>
                      </div>

                      {isDone && (
                        <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${
                          isSelected ? 'text-amber-300' : 'text-emerald-500'
                        }`} />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Exercise Details & Code Editor (8 cols) */}
          <div className="lg:col-span-8 space-y-5">
            {/* Exercise Problem Description Card */}
            <div className="bg-white rounded-2xl p-5 border border-sky-200 shadow-sm space-y-4">
              <div className="flex items-start justify-between flex-wrap gap-2">
                <div>
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    {selectedExercise.category}
                  </span>
                  <h3 className="text-xl font-extrabold text-[#0d3d78] mt-1">
                    {selectedExercise.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-xs px-2.5 py-1 rounded-full font-bold ${
                    selectedExercise.difficulty === 'Dễ'
                      ? 'bg-emerald-100 text-emerald-800'
                      : selectedExercise.difficulty === 'Trung bình'
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-rose-100 text-rose-800'
                  }`}>
                    Độ khó: {selectedExercise.difficulty}
                  </span>
                </div>
              </div>

              {/* Problem Content */}
              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-[#f8fbff] p-4 rounded-xl border border-sky-100">
                <p className="whitespace-pre-line mb-3 font-medium">
                  {selectedExercise.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2 border-t border-sky-100">
                  <div>
                    <span className="font-bold text-slate-900 block mb-0.5">Dữ liệu vào (Input):</span>
                    <span className="text-slate-600">{selectedExercise.inputFormat}</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block mb-0.5">Dữ liệu ra (Output):</span>
                    <span className="text-slate-600">{selectedExercise.outputFormat}</span>
                  </div>
                </div>
                <div className="mt-2 text-[11px] text-slate-500">
                  <b>Ràng buộc:</b> {selectedExercise.constraints}
                </div>
              </div>

              {/* Sample Test Case Preview */}
              <div>
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">
                  Ví dụ minh họa (Test mẫu):
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-slate-900 rounded-xl p-3 font-mono text-xs text-sky-200 border border-slate-800">
                    <span className="text-[10px] text-slate-400 block mb-1">Đầu vào (Input):</span>
                    <pre className="whitespace-pre-wrap">{selectedExercise.testCases[0]?.input}</pre>
                  </div>
                  <div className="bg-slate-900 rounded-xl p-3 font-mono text-xs text-emerald-300 border border-slate-800">
                    <span className="text-[10px] text-slate-400 block mb-1">Đầu ra mong muốn (Output):</span>
                    <pre className="whitespace-pre-wrap">{selectedExercise.testCases[0]?.expectedOutput}</pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Code Workspace Card */}
            <div className="bg-[#10243b] rounded-2xl shadow-xl border border-slate-700 overflow-hidden flex flex-col">
              <div className="bg-[#0b1c30] px-4 py-3 border-b border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-200">
                  <Code className="w-4 h-4 text-sky-400" />
                  <span>solution.py</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      onSendCodeToLab(currentCode);
                      onNavigateToLab();
                    }}
                    className="text-xs text-sky-300 hover:text-white flex items-center gap-1 cursor-pointer"
                  >
                    Mở trong Phòng thực hành <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setShowSolution(!showSolution)}
                    className="text-xs text-amber-300 hover:text-amber-200 bg-amber-400/10 px-2 py-1 rounded border border-amber-400/20 flex items-center gap-1 cursor-pointer"
                  >
                    {showSolution ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    <span>{showSolution ? 'Ẩn lời giải' : 'Gợi ý đáp án'}</span>
                  </button>
                </div>
              </div>

              {/* Code Textarea */}
              <div className="p-4 bg-[#10243b]">
                <textarea
                  value={currentCode}
                  onChange={(e) => handleCodeChange(e.target.value)}
                  className="w-full h-48 bg-transparent text-sky-100 font-mono text-xs sm:text-sm outline-none resize-none leading-relaxed"
                  spellCheck={false}
                  placeholder="# Hãy viết mã nguồn Python của bạn tại đây..."
                />
              </div>

              {/* Solution reveal if toggled */}
              {showSolution && (
                <div className="bg-[#071322] p-4 border-t border-amber-500/30">
                  <div className="text-xs font-bold text-amber-400 mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Mã nguồn tham khảo:
                  </div>
                  <pre className="font-mono text-xs text-emerald-300 whitespace-pre-wrap">
                    {selectedExercise.solutionCode}
                  </pre>
                  <button
                    onClick={() => handleCodeChange(selectedExercise.solutionCode)}
                    className="mt-2 text-xs text-sky-300 hover:underline cursor-pointer"
                  >
                    ↳ Nhấn vào đây để sao chép code gợi ý vào khung soạn thảo
                  </button>
                </div>
              )}

              {/* Grading Actions Footer */}
              <div className="bg-[#0b1c30] p-3 border-t border-slate-700 flex items-center justify-between">
                <button
                  onClick={() => handleCodeChange(selectedExercise.starterCode)}
                  className="text-xs text-slate-400 hover:text-white cursor-pointer"
                >
                  Khôi phục mã ban đầu
                </button>

                <button
                  onClick={handleGradeCode}
                  disabled={isGrading}
                  className="bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-extrabold text-sm px-6 py-2.5 rounded-xl shadow-lg shadow-emerald-700/30 flex items-center gap-2 cursor-pointer transition-all hover:scale-105 active:scale-95"
                >
                  {isGrading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Đang chấm bài...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Nộp bài & Chấm tự động
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Test Results Banner */}
            {testResults && (
              <div className="bg-white rounded-2xl p-5 border border-sky-200 shadow-md space-y-3 animate-in fade-in">
                <div className="flex items-center justify-between">
                  <h4 className="font-extrabold text-[#0d3d78] text-base flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-500" />
                    Kết quả chấm bài chi tiết
                  </h4>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                    testResults.every((t) => t.passed)
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-rose-100 text-rose-800'
                  }`}>
                    {testResults.filter((t) => t.passed).length} / {testResults.length} Test Case chính xác
                  </span>
                </div>

                <div className="space-y-2">
                  {testResults.map((t, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-xl border text-xs font-mono flex flex-col gap-1.5 ${
                        t.passed
                          ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                          : 'bg-rose-50 border-rose-200 text-rose-950'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold flex items-center gap-1.5">
                          {t.passed ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          ) : (
                            <XCircle className="w-4 h-4 text-rose-600" />
                          )}
                          Test #{t.testId}: {t.passed ? 'CHÍNH XÁC (Accepted)' : 'CHƯA ĐÚNG (Wrong Answer)'}
                        </span>
                        <span className="text-[11px] text-slate-500 font-sans">
                          {t.durationMs} ms
                        </span>
                      </div>

                      {!t.passed && (
                        <div className="mt-1 space-y-1 text-[11px] bg-white/70 p-2 rounded-lg border border-rose-200 font-mono">
                          <div>
                            <span className="text-slate-500">Đầu vào: </span>
                            <span className="text-slate-800 font-bold">{JSON.stringify(t.input)}</span>
                          </div>
                          <div>
                            <span className="text-slate-500">Kết quả của bạn: </span>
                            <span className="text-rose-600 font-bold">{t.error ? t.error : JSON.stringify(t.actual.trim())}</span>
                          </div>
                          <div>
                            <span className="text-slate-500">Kết quả mong đợi: </span>
                            <span className="text-emerald-700 font-bold">{JSON.stringify(t.expected.trim())}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {testResults.every((t) => t.passed) && (
                  <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-3 text-xs text-emerald-900 font-semibold text-center">
                    🎉 Tuyệt vời! Bạn đã vượt qua toàn bộ Test Case của bài này và được cộng điểm vào tiến độ.
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
