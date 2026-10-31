import React, { useState, useEffect } from 'react';
import { QUIZ_MASTER_QUESTIONS, QuizMasterQuestion } from '../data/quizMasterData';
import { 
  Sparkles, 
  RotateCcw, 
  CheckCircle, 
  XCircle, 
  ArrowRight, 
  Award, 
  Check, 
  HelpCircle,
  BookOpen,
  Shuffle
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface PythonQuizMasterProps {
  onScoreUpdate?: (score: number, total: number) => void;
  onOpenCertificate?: () => void;
}

interface Outcome {
  item: QuizMasterQuestion;
  selected: number;
  ok: boolean;
}

function shuffleArray<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

export const PythonQuizMaster: React.FC<PythonQuizMasterProps> = ({
  onScoreUpdate,
  onOpenCertificate,
}) => {
  const [order, setOrder] = useState<QuizMasterQuestion[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [outcomes, setOutcomes] = useState<Outcome[]>([]);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  // Initialize and shuffle quiz on mount
  useEffect(() => {
    startNewQuiz();
  }, []);

  const startNewQuiz = () => {
    const shuffled = shuffleArray(QUIZ_MASTER_QUESTIONS);
    setOrder(shuffled);
    setIndex(0);
    setSelected(null);
    setChecked(false);
    setScore(0);
    setOutcomes([]);
    setIsFinished(false);
  };

  const currentItem = order[index];

  const handlePick = (choiceIdx: number) => {
    if (checked) return;
    setSelected(choiceIdx);
  };

  const handleCheckOrNext = () => {
    if (!currentItem) return;

    if (!checked) {
      if (selected === null) return;
      setChecked(true);
      const isCorrect = selected === currentItem.correct;
      const newScore = isCorrect ? score + 1 : score;
      if (isCorrect) {
        setScore(newScore);
      }
      setOutcomes((prev) => [...prev, { item: currentItem, selected, ok: isCorrect }]);
      return;
    }

    // If already checked, proceed to next question or finish
    if (index < order.length - 1) {
      setIndex((prev) => prev + 1);
      setSelected(null);
      setChecked(false);
    } else {
      setIsFinished(true);
      if (onScoreUpdate) {
        onScoreUpdate(score, order.length);
      }
      if (score >= 8) {
        try {
          confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });
        } catch {}
      }
    }
  };

  if (!currentItem && !isFinished) {
    return <div className="p-6 text-center text-slate-500">Đang chuẩn bị câu hỏi...</div>;
  }

  const progressPct = order.length > 0 ? (index / order.length) * 100 : 0;

  return (
    <div className="bg-white rounded-3xl border border-sky-200/80 shadow-md overflow-hidden">
      {/* Top Banner Header */}
      <div className="bg-gradient-to-r from-[#10213d] via-[#16386b] to-[#244b8f] text-white p-5 sm:p-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="text-[11px] font-black uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              TIN HỌC 10 · KẾT NỐI TRI THỨC
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
              Python Quiz Master
            </h3>
            <p className="text-xs sm:text-sm text-sky-200 mt-0.5">
              Ôn kiến thức Python qua câu hỏi ngắn, phản hồi tức thì và tổng kết kết quả.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={startNewQuiz}
              className="bg-white/10 hover:bg-white/20 text-sky-100 hover:text-white px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 border border-white/10 transition-all cursor-pointer"
              title="Xáo trộn câu hỏi và làm bài mới"
            >
              <Shuffle className="w-3.5 h-3.5 text-amber-300" />
              Làm bài mới
            </button>
          </div>
        </div>
      </div>

      <div className="p-5 sm:p-8 max-w-4xl mx-auto">
        {!isFinished ? (
          <div>
            {/* Meta Row: Counter & Topic */}
            <div className="flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-slate-600 mb-2">
              <span className="bg-sky-50 text-[#0d3d78] px-3 py-1 rounded-full border border-sky-200">
                Câu {index + 1} / {order.length}
              </span>
              <span className="text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 font-semibold">
                Chủ đề: {currentItem.topic}
              </span>
            </div>

            {/* Progress bar */}
            <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden mb-6 border border-slate-200">
              <div 
                className="h-full bg-amber-400 transition-all duration-300 rounded-full"
                style={{ width: `${progressPct}%` }}
              />
            </div>

            {/* Question Text */}
            <h4 className="text-base sm:text-lg font-black text-[#0d3d78] mb-5 leading-relaxed">
              {currentItem.q}
            </h4>

            {/* Choices Grid */}
            <div className="grid gap-3 mb-5">
              {currentItem.a.map((choiceTxt, cIdx) => {
                const choiceLabel = String.fromCharCode(65 + cIdx); // A, B, C, D
                const isSelected = selected === cIdx;
                const isCorrect = cIdx === currentItem.correct;

                let btnStyle = 'border-slate-200 bg-white hover:border-blue-400 hover:bg-sky-50/50 text-slate-800';

                if (checked) {
                  if (isCorrect) {
                    btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold ring-2 ring-emerald-500/30';
                  } else if (isSelected && !isCorrect) {
                    btnStyle = 'border-rose-400 bg-rose-50 text-rose-900 line-through';
                  } else {
                    btnStyle = 'border-slate-200 bg-slate-50 text-slate-400 opacity-60';
                  }
                } else if (isSelected) {
                  btnStyle = 'border-blue-600 bg-blue-50 text-blue-950 font-bold ring-2 ring-blue-500/30';
                }

                return (
                  <button
                    key={cIdx}
                    disabled={checked}
                    onClick={() => handlePick(cIdx)}
                    className={`w-full text-left p-3.5 sm:p-4 rounded-xl border text-sm transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs flex-shrink-0 ${
                        isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'
                      }`}>
                        {choiceLabel}
                      </span>
                      <span>{choiceTxt}</span>
                    </div>

                    {checked && isCorrect && (
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    )}
                    {checked && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-600 flex-shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Immediate Feedback Box */}
            {checked && (
              <div className={`p-4 rounded-2xl mb-5 text-xs sm:text-sm leading-relaxed border animate-fadeIn ${
                selected === currentItem.correct
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                  : 'bg-rose-50 border-rose-300 text-rose-900'
              }`}>
                <div className="flex items-start gap-2.5">
                  {selected === currentItem.correct ? (
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                  )}
                  <div>
                    <div className="font-extrabold mb-0.5">
                      {selected === currentItem.correct
                        ? 'Chính xác!'
                        : `Chưa đúng. Đáp án đúng là: ${String.fromCharCode(65 + currentItem.correct)}. ${currentItem.a[currentItem.correct]}`}
                    </div>
                    <div className="text-slate-700 mt-1 font-medium">
                      💡 {currentItem.why}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Actions Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100">
              <button
                onClick={startNewQuiz}
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                Làm lại từ đầu
              </button>

              <button
                disabled={selected === null}
                onClick={handleCheckOrNext}
                className={`font-black px-6 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all cursor-pointer ${
                  selected === null
                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                    : checked
                      ? 'bg-emerald-600 hover:bg-emerald-500 text-white hover:scale-105'
                      : 'bg-[#0878ef] hover:bg-[#0065d3] text-white hover:scale-105'
                }`}
              >
                {!checked ? (
                  <span>Kiểm tra đáp án</span>
                ) : index === order.length - 1 ? (
                  <>
                    <span>Xem kết quả tổng kết</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    <span>Câu tiếp theo</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
            <p className="text-[11px] text-slate-400 mt-4">
              Mỗi câu đúng được 1 điểm. Hệ thống phản hồi tức thì và tự động tổng hợp danh sách câu cần xem lại ở cuối bài.
            </p>
          </div>
        ) : (
          /* Result Summary Screen */
          <div className="space-y-6 animate-fadeIn text-center sm:text-left">
            <div className="bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50 rounded-2xl p-6 sm:p-8 border border-sky-200 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <div className="text-xs font-black uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-1 rounded-full inline-block mb-2">
                  KẾT QUẢ LUYỆN TẬP QUIZ MASTER
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0d3d78]">
                  Hoàn thành lượt ôn tập!
                </h3>
                <p className="text-sm text-slate-600 mt-1 max-w-lg">
                  {score >= 8
                    ? 'Rất xuất sắc! Bạn đã nắm vững các kiến thức lập trình cốt lõi.'
                    : score >= 5
                    ? 'Khá tốt! Hãy xem lại phần giải thích của các câu chưa đúng để đạt điểm tối đa nhé.'
                    : 'Hãy ôn lại các khái niệm cơ bản trong phần 17 bài học rồi làm lại bài nhé.'}
                </p>
              </div>

              <div className="text-center bg-white p-5 rounded-2xl border border-sky-200 shadow-sm min-w-44">
                <div className="text-xs font-bold text-slate-500 uppercase">Điểm số của bạn</div>
                <div className="text-4xl sm:text-5xl font-black text-[#0878ef] mt-1">
                  {score} / {order.length}
                </div>
                <div className="text-xs font-bold text-emerald-600 mt-1">
                  {Math.round((score / order.length) * 100)}% Chính xác
                </div>
              </div>
            </div>

            {/* Review Section: "Các câu cần xem lại" */}
            <div className="text-left space-y-3">
              <h4 className="text-base sm:text-lg font-black text-[#0d3d78] flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-amber-500" />
                Các câu cần xem lại & Lời giải chi tiết:
              </h4>

              {outcomes.filter((x) => !x.ok).length === 0 ? (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-900 text-sm font-bold flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  Xuất sắc! Bạn đã trả lời đúng tất cả 10 câu hỏi của Quiz Master!
                </div>
              ) : (
                <div className="space-y-3">
                  {outcomes
                    .filter((x) => !x.ok)
                    .map((itemOutcome, oIdx) => (
                      <div
                        key={oIdx}
                        className="bg-rose-50/70 border border-rose-200 rounded-2xl p-4 text-xs sm:text-sm space-y-1.5"
                      >
                        <div className="font-bold text-rose-900 flex items-center gap-2">
                          <span className="bg-rose-200 text-rose-900 px-2 py-0.5 rounded text-[11px]">
                            {itemOutcome.item.topic}
                          </span>
                          <span>{itemOutcome.item.q}</span>
                        </div>
                        <div className="text-slate-800">
                          <span className="font-bold text-emerald-700">Đáp án đúng: </span>
                          <span className="font-semibold">
                            {String.fromCharCode(65 + itemOutcome.item.correct)}. {itemOutcome.item.a[itemOutcome.item.correct]}
                          </span>
                        </div>
                        <div className="text-slate-600 italic bg-white/80 p-2.5 rounded-xl border border-rose-100">
                          💡 Giải thích: {itemOutcome.item.why}
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-200">
              <button
                onClick={startNewQuiz}
                className="bg-[#0878ef] hover:bg-[#0065d3] text-white font-extrabold px-5 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all cursor-pointer hover:scale-105"
              >
                <RotateCcw className="w-4 h-4" />
                Làm bài mới (Bộ câu hỏi xáo trộn)
              </button>

              {onOpenCertificate && score >= 5 && (
                <button
                  onClick={onOpenCertificate}
                  className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-5 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all cursor-pointer hover:scale-105"
                >
                  <Award className="w-4 h-4 text-amber-950" />
                  Xem & In Chứng nhận hoàn thành
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
