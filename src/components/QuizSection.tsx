import React, { useState, useMemo } from 'react';
import { QUIZ_QUESTIONS } from '../data/quizData';
import { PythonQuizMaster } from './PythonQuizMaster';
import { 
  Sparkles, 
  CheckCircle, 
  XCircle, 
  HelpCircle, 
  RotateCcw, 
  Award,
  Filter,
  Bot,
  Layers,
  BookOpen,
  Home
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuizSectionProps {
  onScoreUpdate: (score: number, total: number) => void;
  onOpenCertificate: () => void;
  onNavigateHome?: () => void;
}

const CATEGORY_FILTERS = [
  { id: 'all', label: `Tất cả (${QUIZ_QUESTIONS.length} câu)` },
  { id: 'core', label: '📘 Kiến thức cốt lõi SGK' },
  { id: 'code', label: '💻 Đọc hiểu & Đoán kết quả mã' },
  { id: 'ai', label: '🤖 Ứng dụng AI & Đạo đức số' },
  { id: 'nls', label: '💡 Năng lực số (NLS)' },
];

const LESSON_FILTERS = [
  { id: 'all', label: 'Toàn bộ 17 bài' },
  { id: 'bai-16', label: 'Bài 16: Ngôn ngữ bậc cao & Python' },
  { id: 'bai-17', label: 'Bài 17: Biến và lệnh gán' },
  { id: 'bai-18', label: 'Bài 18: Lệnh vào ra đơn giản' },
  { id: 'bai-19', label: 'Bài 19: Câu lệnh rẽ nhánh if' },
  { id: 'bai-20', label: 'Bài 20: Câu lệnh lặp for' },
  { id: 'bai-21', label: 'Bài 21: Câu lệnh lặp while' },
  { id: 'bai-22', label: 'Bài 22: Kiểu dữ liệu danh sách' },
  { id: 'bai-23', label: 'Bài 23: Các lệnh làm việc với danh sách' },
  { id: 'bai-24', label: 'Bài 24: Xâu kí tự' },
  { id: 'bai-25', label: 'Bài 25: Các lệnh làm việc với xâu' },
  { id: 'bai-26', label: 'Bài 26: Hàm trong Python' },
  { id: 'bai-27', label: 'Bài 27: Tham số của hàm' },
  { id: 'bai-28', label: 'Bài 28: Phạm vi của biến' },
  { id: 'bai-29', label: 'Bài 29: Nhận biết lỗi chương trình' },
  { id: 'bai-30', label: 'Bài 30: Kiểm thử và gỡ lỗi' },
  { id: 'bai-31', label: 'Bài 31: Thực hành viết chương trình' },
  { id: 'bai-32', label: 'Bài 32: Ôn tập & Dự án liên môn' },
];

export const QuizSection: React.FC<QuizSectionProps> = ({
  onScoreUpdate,
  onOpenCertificate,
  onNavigateHome,
}) => {
  const [quizMode, setQuizMode] = useState<'master' | 'bank'>('master');
  const [selectedAnswers, setSelectedAnswers] = useState<{ [qId: number]: string }>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [selectedLesson, setSelectedLesson] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Filter questions
  const filteredQuestions = useMemo(() => {
    return QUIZ_QUESTIONS.filter((q) => {
      const matchLesson = selectedLesson === 'all' || q.lessonId === selectedLesson;
      let matchCat = true;
      if (selectedCategory === 'ai') {
        matchCat = q.category === 'Ứng dụng AI & Đạo đức số';
      } else if (selectedCategory === 'nls') {
        matchCat = q.category === 'Năng lực số (NLS)' || Boolean(q.competencyTag && q.competencyTag.includes('NL'));
      } else if (selectedCategory === 'core') {
        matchCat = q.category === 'Kiến thức cốt lõi';
      } else if (selectedCategory === 'code') {
        matchCat = q.category === 'Đọc hiểu mã lệnh' || Boolean(q.codeSnippet);
      }
      return matchLesson && matchCat;
    });
  }, [selectedLesson, selectedCategory]);

  const totalFiltered = filteredQuestions.length;

  const handleSelectOption = (qId: number, optionId: string) => {
    if (submitted) return; // Prevent changing after submission
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optionId }));
  };

  const handleCalculateScore = () => {
    let correctCount = 0;
    filteredQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });

    setSubmitted(true);
    onScoreUpdate(correctCount, totalFiltered);

    const ratio = totalFiltered > 0 ? correctCount / totalFiltered : 0;
    if (ratio >= 0.75) {
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
        });
      } catch {
        // safe
      }
    }
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setSubmitted(false);
  };

  const correctCount = filteredQuestions.filter(
    (q) => selectedAnswers[q.id] === q.correctAnswer
  ).length;

  const answeredInFilter = filteredQuestions.filter((q) => selectedAnswers[q.id]).length;

  return (
    <section id="trac-nghiem" className="py-8 bg-white border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mode Selector Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 p-2 bg-[#f0f6ff] rounded-2xl border border-sky-200">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setQuizMode('master')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black flex items-center gap-2 transition-all cursor-pointer ${
                quizMode === 'master'
                  ? 'bg-[#0d3d78] text-white shadow-md'
                  : 'text-slate-700 hover:text-[#0d3d78] hover:bg-white/80'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Python Quiz Master (Từng câu & Phản hồi tức thì)</span>
            </button>

            <button
              onClick={() => setQuizMode('bank')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black flex items-center gap-2 transition-all cursor-pointer ${
                quizMode === 'bank'
                  ? 'bg-[#0d3d78] text-white shadow-md'
                  : 'text-slate-700 hover:text-[#0d3d78] hover:bg-white/80'
              }`}
            >
              <BookOpen className="w-4 h-4 text-sky-400" />
              <span>Ngân hàng Trắc nghiệm 17 bài SGK ({QUIZ_QUESTIONS.length} câu)</span>
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
              {quizMode === 'master' ? 'Chế độ luyện thi nhanh 10 câu' : 'Chế độ nộp bài cả đề thi'}
            </div>
          </div>
        </div>

        {/* If in Quiz Master Mode: Render PythonQuizMaster */}
        {quizMode === 'master' ? (
          <PythonQuizMaster
            onScoreUpdate={onScoreUpdate}
            onOpenCertificate={onOpenCertificate}
          />
        ) : (
          /* Full 17-Lesson Question Bank Mode */
          <>
            {/* Section Heading */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-[#0d3d78] flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-500" />
                  Ngân hàng Trắc nghiệm Toàn diện 17 Bài SGK
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  {QUIZ_QUESTIONS.length} câu hỏi bám sát chuẩn kiến thức SGK Tin học 10 Kết nối tri thức (Chủ đề 5: Lập trình Python, Bài 16 - Bài 32), tích hợp đọc hiểu mã lệnh và năng lực số.
                </p>
              </div>

              <div className="flex items-center gap-2">
                {submitted && (
                  <button
                    onClick={handleResetQuiz}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs px-3 py-2 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Làm lại bài thi
                  </button>
                )}
              </div>
            </div>

        {/* Filters Bar */}
        <div className="bg-[#f6faff] p-3.5 rounded-2xl border border-sky-200/80 mb-6 space-y-3">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {CATEGORY_FILTERS.map((cat) => {
                const active = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setSubmitted(false);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                      active
                        ? 'bg-[#0d3d78] text-white shadow-2xs'
                        : 'bg-white text-slate-600 hover:bg-sky-50 border border-sky-100'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Lesson Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-600 flex items-center gap-1 whitespace-nowrap">
                <Filter className="w-3.5 h-3.5 text-blue-600" />
                Lọc theo bài:
              </span>
              <select
                value={selectedLesson}
                onChange={(e) => {
                  setSelectedLesson(e.target.value);
                  setSubmitted(false);
                }}
                className="bg-white border border-sky-200 text-slate-800 text-xs font-medium rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer max-w-full"
              >
                {LESSON_FILTERS.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Score Banner when submitted */}
        {submitted && (
          <div className="mb-8 p-6 bg-gradient-to-r from-[#0d3d78] to-[#1a5eb2] text-white rounded-3xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 animate-in fade-in">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-amber-400 text-slate-950 font-black text-2xl flex items-center justify-center shadow">
                {correctCount}/{totalFiltered}
              </div>
              <div>
                <h3 className="text-xl font-black text-white">
                  {correctCount >= Math.round(totalFiltered * 0.8)
                    ? '🎉 Xuất sắc! Bạn nắm rất vững kiến thức & năng lực số.'
                    : correctCount >= Math.round(totalFiltered * 0.5)
                    ? '👍 Khá tốt! Hãy đọc kĩ giải thích các câu chưa chính xác.'
                    : '📖 Hãy xem lại phần lưu ý AI & NLS của các bài để củng cố!'}
                </h3>
                <p className="text-xs sm:text-sm text-sky-200 mt-0.5">
                  Bạn trả lời đúng {correctCount} trên tổng số {totalFiltered} câu hỏi đang chọn ({totalFiltered > 0 ? Math.round((correctCount / totalFiltered) * 100) : 0}%).
                </p>
              </div>
            </div>

            <button
              onClick={onOpenCertificate}
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm px-5 py-3 rounded-xl shadow flex items-center gap-2 cursor-pointer transition-transform hover:scale-105 active:scale-95 flex-shrink-0"
            >
              <Award className="w-4 h-4 text-amber-950" />
              Xem Chứng nhận học tập
            </button>
          </div>
        )}

        {/* Quiz Questions List */}
        <div className="space-y-6">
          {filteredQuestions.map((q, idx) => {
            const studentChoice = selectedAnswers[q.id];
            const isCorrect = studentChoice === q.correctAnswer;
            const lessonNumber = q.lessonId ? q.lessonId.replace('bai-', '') : '';

            return (
              <div
                key={q.id}
                className="bg-[#f8fbff] rounded-2xl p-5 border border-sky-200 shadow-xs transition-all"
              >
                {/* Question Tags & Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-[#0d3d78] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                      {idx + 1}
                    </span>
                    {lessonNumber && (
                      <span className="bg-sky-100 text-[#0d3d78] text-[11px] font-bold px-2 py-0.5 rounded-md border border-sky-200">
                        Bài {lessonNumber} SGK
                      </span>
                    )}
                    {q.category && (
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md border ${
                        q.category === 'Ứng dụng AI & Đạo đức số'
                          ? 'bg-purple-100 text-purple-800 border-purple-200'
                          : q.category === 'Năng lực số (NLS)'
                          ? 'bg-amber-100 text-amber-800 border-amber-200'
                          : q.category === 'Đọc hiểu mã lệnh'
                          ? 'bg-emerald-100 text-emerald-800 border-emerald-200'
                          : 'bg-blue-100 text-blue-800 border-blue-200'
                      }`}>
                        {q.category}
                      </span>
                    )}
                    {q.competencyTag && (
                      <span className="text-[10px] font-semibold text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200">
                        {q.competencyTag}
                      </span>
                    )}
                  </div>

                  {submitted && (
                    <div>
                      {isCorrect ? (
                        <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full flex items-center gap-1">
                          <CheckCircle className="w-3.5 h-3.5" /> Đúng (+1đ)
                        </span>
                      ) : (
                        <span className="text-xs font-bold text-rose-700 bg-rose-100 px-2.5 py-1 rounded-full flex items-center gap-1">
                          <XCircle className="w-3.5 h-3.5" /> Sai
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Question Text */}
                <h3 className="text-sm sm:text-base font-bold text-[#0d3d78] mb-3 leading-snug">
                  {q.question}
                </h3>

                {/* Optional code snippet */}
                {q.codeSnippet && (
                  <div className="mb-4 bg-slate-900 rounded-xl p-3 border border-slate-800 font-mono text-xs text-sky-200">
                    <pre className="whitespace-pre-wrap">{q.codeSnippet}</pre>
                  </div>
                )}

                {/* Options Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {q.options.map((opt) => {
                    const isSelected = studentChoice === opt.id;
                    const isTargetCorrect = opt.id === q.correctAnswer;

                    let optionStyle = 'bg-white hover:bg-sky-50 border-sky-200 text-slate-800';
                    if (isSelected) {
                      optionStyle = 'bg-blue-50 border-blue-500 text-blue-900 font-semibold ring-2 ring-blue-400/20';
                    }

                    if (submitted) {
                      if (isTargetCorrect) {
                        optionStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold ring-2 ring-emerald-400/30';
                      } else if (isSelected && !isTargetCorrect) {
                        optionStyle = 'bg-rose-50 border-rose-500 text-rose-950 line-through';
                      }
                    }

                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => handleSelectOption(q.id, opt.id)}
                        disabled={submitted}
                        className={`p-3 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-start gap-3 cursor-pointer ${optionStyle}`}
                      >
                        <span className={`w-6 h-6 rounded-md font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'
                        }`}>
                          {opt.id.toUpperCase()}
                        </span>
                        <span className="flex-1 font-sans">{opt.text}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Explanation Box when submitted */}
                {submitted && (
                  <div className="mt-4 p-3.5 bg-sky-50 border border-sky-200 rounded-xl text-xs text-slate-700 space-y-1.5 animate-in fade-in">
                    <div className="font-bold text-[#0d3d78] flex items-center gap-1.5">
                      <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
                      Giải thích sư phạm & Năng lực số:
                    </div>
                    <p className="leading-relaxed">
                      {q.explanation}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredQuestions.length === 0 && (
          <div className="bg-white p-8 rounded-xl border border-sky-200 text-center text-slate-500 text-xs">
            Không có câu hỏi nào phù hợp với bộ lọc hiện tại.
          </div>
        )}

            {/* Submit Bottom Bar */}
            {!submitted && filteredQuestions.length > 0 && (
              <div className="mt-8 text-center">
                <button
                  onClick={handleCalculateScore}
                  disabled={answeredInFilter === 0}
                  className="bg-[#0878ef] hover:bg-[#0065d3] disabled:opacity-50 text-white font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-2xl shadow-lg shadow-blue-500/25 cursor-pointer transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-2"
                >
                  <CheckCircle className="w-5 h-5" />
                  Nộp bài & Kiểm tra kết quả ({answeredInFilter}/{totalFiltered} câu đã làm)
                </button>
                <p className="text-xs text-slate-400 mt-2">
                  Xem ngay phân tích giải thích đáp án và năng lực số tương ứng sau khi nộp bài.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};
