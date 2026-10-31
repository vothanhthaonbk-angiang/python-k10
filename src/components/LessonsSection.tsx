import React, { useState, useMemo } from 'react';
import { Lesson } from '../types';
import { LESSONS_DATA } from '../data/lessonsData';
import { 
  BookOpen, 
  CheckCircle, 
  Play, 
  Clock, 
  X, 
  Copy, 
  Check, 
  RotateCcw, 
  Search,
  Bot,
  Sparkles,
  ShieldAlert,
  MessageSquareCode,
  ChevronDown,
  ChevronUp,
  ChevronsUpDown,
  BookMarked,
  Home
} from 'lucide-react';

interface LessonsSectionProps {
  completedLessons: string[];
  onToggleCompleteLesson: (lessonId: string) => void;
  onResetProgress: () => void;
  onLoadCodeToLab: (code: string) => void;
  onNavigateToLab: () => void;
  onNavigateHome?: () => void;
}

const CATEGORIES = [
  { id: 'all', label: 'Tất cả 17 bài' },
  { id: 'start', label: 'Khởi đầu (Bài 16-18)' },
  { id: 'control', label: 'Rẽ nhánh & Lặp (Bài 19-21)' },
  { id: 'data', label: 'List & Xâu (Bài 22-25)' },
  { id: 'function', label: 'Hàm & Biến (Bài 26-28)' },
  { id: 'debug', label: 'Gỡ lỗi & Dự án (Bài 29-32)' },
];

export const LessonsSection: React.FC<LessonsSectionProps> = ({
  completedLessons,
  onToggleCompleteLesson,
  onResetProgress,
  onLoadCodeToLab,
  onNavigateToLab,
  onNavigateHome,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  // State storing IDs of currently expanded lessons
  const [expandedLessonIds, setExpandedLessonIds] = useState<string[]>([]);
  const [copiedCodeKey, setCopiedCodeKey] = useState<string | null>(null);
  const [copiedPromptKey, setCopiedPromptKey] = useState<string | null>(null);

  // Filter lessons
  const filteredLessons = useMemo(() => {
    return LESSONS_DATA.filter((lesson) => {
      // Category filter
      const num = parseInt(lesson.number, 10);
      let matchCat = true;
      if (selectedCategory === 'start') matchCat = num >= 16 && num <= 18;
      else if (selectedCategory === 'control') matchCat = num >= 19 && num <= 21;
      else if (selectedCategory === 'data') matchCat = num >= 22 && num <= 25;
      else if (selectedCategory === 'function') matchCat = num >= 26 && num <= 28;
      else if (selectedCategory === 'debug') matchCat = num >= 29 && num <= 32;

      // Search filter
      const query = searchQuery.toLowerCase().trim();
      const matchSearch =
        !query ||
        lesson.title.toLowerCase().includes(query) ||
        lesson.description.toLowerCase().includes(query) ||
        lesson.topics.some((t) => t.toLowerCase().includes(query)) ||
        lesson.number.includes(query) ||
        (lesson.digitalCompetence &&
          (lesson.digitalCompetence.aiActivity.toLowerCase().includes(query) ||
           lesson.digitalCompetence.samplePrompt.toLowerCase().includes(query)));

      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const progressPercent = Math.round(
    (completedLessons.length / LESSONS_DATA.length) * 100
  );

  const toggleLesson = (lessonId: string) => {
    setExpandedLessonIds((prev) =>
      prev.includes(lessonId)
        ? prev.filter((id) => id !== lessonId)
        : [...prev, lessonId]
    );
  };

  const handleExpandAll = () => {
    setExpandedLessonIds(filteredLessons.map((l) => l.id));
  };

  const handleCollapseAll = () => {
    setExpandedLessonIds([]);
  };

  const handleCopyCode = (code: string, key: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeKey(key);
    setTimeout(() => setCopiedCodeKey(null), 2000);
  };

  const handleCopyPrompt = (promptText: string, key: string) => {
    navigator.clipboard.writeText(promptText);
    setCopiedPromptKey(key);
    setTimeout(() => setCopiedPromptKey(null), 2000);
  };

  const handleOpenInLab = (code: string) => {
    onLoadCodeToLab(code);
    onNavigateToLab();
  };

  return (
    <section id="khoa-hoc" className="py-8 bg-[#f6faff] border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Compact Progress */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-[#0d3d78] flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#0878ef]" />
              Chuyên đề 5: Lập trình Python & Năng lực số
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              17 bài học bám sát SGK Tin học 10. Nhấp vào tên bài để xem nội dung bài giảng, ví dụ code và hoạt động AI.
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

            <div className="flex items-center gap-4 bg-white px-3.5 py-2 rounded-xl border border-sky-100 shadow-2xs">
              <div className="text-right">
                <div className="text-xs font-bold text-[#0d3d78]">
                  Tiến độ: {completedLessons.length}/{LESSONS_DATA.length} bài
                </div>
                <div className="w-28 sm:w-36 bg-slate-100 h-2 rounded-full overflow-hidden mt-1">
                  <div
                    className="bg-emerald-500 h-full transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
              {completedLessons.length > 0 && (
                <button
                  onClick={onResetProgress}
                  className="text-slate-400 hover:text-slate-600 text-xs p-1 rounded-lg hover:bg-slate-50 cursor-pointer"
                  title="Đặt lại tiến độ"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Filter Categories, Search Bar, Expand/Collapse Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
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

          <div className="flex items-center gap-2">
            <div className="relative flex-1 sm:w-60">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Tìm bài học..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white pl-8 pr-3 py-1.5 text-xs rounded-lg border border-sky-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Quick Expand All / Collapse All buttons */}
            <div className="flex items-center gap-1 flex-shrink-0">
              <button
                onClick={handleExpandAll}
                className="bg-white hover:bg-sky-50 text-slate-700 hover:text-[#0d3d78] text-xs font-semibold px-2.5 py-1.5 rounded-lg border border-sky-200 transition-colors cursor-pointer"
                title="Mở rộng tất cả các bài"
              >
                Mở tất cả
              </button>
              <button
                onClick={handleCollapseAll}
                className="bg-white hover:bg-sky-50 text-slate-700 hover:text-[#0d3d78] text-xs font-semibold px-2.5 py-1.5 rounded-lg border border-sky-200 transition-colors cursor-pointer"
                title="Thu gọn tất cả"
              >
                Thu gọn
              </button>
            </div>
          </div>
        </div>

        {/* Collapsible Lesson List: Only lesson title shown by default */}
        <div className="space-y-3">
          {filteredLessons.map((lesson) => {
            const isCompleted = completedLessons.includes(lesson.id);
            const isExpanded = expandedLessonIds.includes(lesson.id);

            return (
              <div
                key={lesson.id}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden shadow-2xs ${
                  isExpanded 
                    ? 'border-blue-400 ring-2 ring-blue-500/10 shadow-md' 
                    : 'border-sky-200/80 hover:border-blue-300 hover:shadow-xs'
                }`}
              >
                {/* Lesson Header Title Row (Clickable Accordion Trigger) */}
                <div
                  onClick={() => toggleLesson(lesson.id)}
                  className={`p-3.5 sm:p-4 flex items-center justify-between gap-3 cursor-pointer select-none transition-colors ${
                    isExpanded 
                      ? 'bg-gradient-to-r from-blue-50/80 to-sky-50/50 border-b border-sky-100' 
                      : 'hover:bg-slate-50/80'
                  }`}
                >
                  {/* Left: Number, Title, Chapter */}
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    {/* Badge number */}
                    <div className={`px-2.5 py-1 rounded-xl text-xs font-black uppercase tracking-wide flex-shrink-0 text-white ${lesson.badgeColor}`}>
                      {lesson.sgkPage || `Bài ${lesson.number}`}
                    </div>

                    {/* Lesson Title */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className={`text-sm sm:text-base font-extrabold truncate transition-colors ${
                          isExpanded ? 'text-[#0878ef]' : 'text-[#0d3d78]'
                        }`}>
                          {lesson.title}
                        </h3>
                        {isCompleted && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.2 rounded-full flex-shrink-0">
                            <CheckCircle className="w-3 h-3 text-emerald-600" />
                            Đã học
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-500 truncate mt-0.5 flex items-center gap-2">
                        {lesson.bookChapter && <span>{lesson.bookChapter}</span>}
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-400" />
                          {lesson.duration}
                        </span>
                        {lesson.digitalCompetence && (
                          <>
                            <span className="hidden sm:inline">•</span>
                            <span className="hidden sm:inline-flex items-center gap-1 text-purple-700 font-semibold">
                              <Bot className="w-3 h-3 text-purple-600" />
                              NLS & AI
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right: Actions & Expand/Collapse Toggle */}
                  <div className="flex items-center gap-2 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
                    {/* Quick Complete Toggle Button */}
                    <button
                      onClick={() => onToggleCompleteLesson(lesson.id)}
                      className={`text-xs py-1.5 px-2.5 rounded-lg border font-semibold flex items-center gap-1 transition-all cursor-pointer ${
                        isCompleted
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                          : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border-slate-200'
                      }`}
                      title={isCompleted ? 'Bỏ đánh dấu hoàn thành' : 'Đánh dấu đã học xong'}
                    >
                      <CheckCircle className={`w-3.5 h-3.5 ${isCompleted ? 'text-emerald-600' : 'text-slate-400'}`} />
                      <span className="hidden md:inline">{isCompleted ? 'Đã học' : 'Xong'}</span>
                    </button>

                    {/* Accordion Chevron Button */}
                    <button
                      onClick={() => toggleLesson(lesson.id)}
                      className={`p-1.5 rounded-lg border text-slate-500 transition-all cursor-pointer ${
                        isExpanded 
                          ? 'bg-blue-600 text-white border-blue-600 shadow-xs' 
                          : 'bg-slate-50 hover:bg-sky-100 border-slate-200 text-slate-700'
                      }`}
                      title={isExpanded ? 'Thu gọn nội dung' : 'Bấm để xem nội dung bài'}
                    >
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Expanded Detailed Lesson Content */}
                {isExpanded && (
                  <div className="p-4 sm:p-6 space-y-6 text-slate-800 bg-white border-t border-slate-100 animate-in fade-in slide-in-from-top-1 duration-200">
                    {/* Overview & Goal */}
                    <div className="bg-sky-50 border-l-4 border-[#0878ef] p-4 rounded-r-xl">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#0878ef] uppercase tracking-wide mb-1">
                        <BookMarked className="w-4 h-4" />
                        Mục tiêu & Khởi động bài học:
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                        {selectedLessonContentOverview(lesson)}
                      </p>
                    </div>

                    {/* Digital Competence & AI Innovation Box */}
                    {lesson.digitalCompetence && (
                      <div className="bg-gradient-to-br from-indigo-50/90 via-purple-50/70 to-sky-50 border border-indigo-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-3.5">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-indigo-100 pb-2.5">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-xs flex-shrink-0">
                              <Bot className="w-4 h-4" />
                            </div>
                            <div>
                              <h4 className="font-bold text-sm text-indigo-950 flex items-center gap-1.5">
                                Khung Năng lực số (NLS) & Đổi mới ứng dụng AI
                                <span className="bg-purple-100 text-purple-700 text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-purple-200">
                                  GDPT 2018
                                </span>
                              </h4>
                              <p className="text-[11px] text-indigo-700">
                                Phát triển tư duy máy tính, kỹ năng tương tác prompt chuẩn sư phạm và làm chủ công nghệ
                              </p>
                            </div>
                          </div>

                          {/* Competency Badges */}
                          <div className="flex flex-wrap gap-1">
                            {lesson.digitalCompetence.coreCompetencies.map((comp, idx) => (
                              <span key={idx} className="text-[10px] font-bold bg-white text-indigo-800 px-2 py-0.5 rounded-md border border-indigo-200 shadow-2xs">
                                {comp.split(' - ')[0]}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Core competencies detail */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          {lesson.digitalCompetence.coreCompetencies.map((comp, idx) => (
                            <div key={idx} className="bg-white/80 p-2 rounded-lg border border-indigo-100 text-[11px] text-indigo-950 font-medium">
                              • {comp}
                            </div>
                          ))}
                        </div>

                        {/* AI Learning Activity */}
                        <div>
                          <div className="text-xs font-bold text-indigo-900 mb-1 flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                            Hoạt động học tập kết hợp AI trong bài:
                          </div>
                          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-white p-3 rounded-xl border border-indigo-100">
                            {lesson.digitalCompetence.aiActivity}
                          </p>
                        </div>

                        {/* Prompt Template for AI Tutor */}
                        <div className="bg-slate-900 rounded-xl p-3.5 border border-slate-800 text-white shadow-inner">
                          <div className="flex items-center justify-between text-xs text-indigo-300 mb-2">
                            <span className="font-mono text-[11px] flex items-center gap-1.5 text-amber-300 font-bold">
                              <MessageSquareCode className="w-3.5 h-3.5" />
                              Prompt chuẩn sư phạm cho AI Trợ giảng:
                            </span>
                            <button
                              onClick={() => handleCopyPrompt(lesson.digitalCompetence!.samplePrompt, lesson.id)}
                              className="bg-indigo-600 hover:bg-indigo-500 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg flex items-center gap-1 transition-all cursor-pointer shadow-xs"
                            >
                              {copiedPromptKey === lesson.id ? (
                                <>
                                  <Check className="w-3 h-3 text-emerald-300" />
                                  <span>Đã chép prompt!</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3 h-3" />
                                  <span>Sao chép Prompt</span>
                                </>
                              )}
                            </button>
                          </div>
                          <p className="text-xs font-mono text-sky-100 bg-slate-950/80 p-3 rounded-lg border border-slate-800/80 select-all leading-relaxed whitespace-pre-wrap">
                            {lesson.digitalCompetence.samplePrompt}
                          </p>
                        </div>

                        {/* AI Caution & Critical Thinking */}
                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900 flex items-start gap-2">
                          <ShieldAlert className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-amber-950">Tư duy phản biện & Đạo đức AI: </span>
                            <span>{lesson.digitalCompetence.aiCaution}</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Lesson Knowledge Sections */}
                    <div className="space-y-6">
                      {lesson.content.sections.map((section, idx) => {
                        const codeKey = `${lesson.id}_sec_${idx}`;
                        return (
                          <div key={idx} className="space-y-3 border-t border-slate-100 pt-4">
                            <h4 className="font-extrabold text-base sm:text-lg text-[#0d3d78]">
                              {section.heading}
                            </h4>
                            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                              {section.explanation}
                            </p>

                            {section.codeExample && (
                              <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800">
                                <div className="bg-slate-800 px-3.5 py-1.5 flex items-center justify-between text-xs text-slate-300">
                                  <span className="font-mono text-[11px] text-sky-300">Ví dụ minh họa (SGK Tin học 10):</span>
                                  <div className="flex items-center gap-2">
                                    <button
                                      onClick={() => handleCopyCode(section.codeExample!, codeKey)}
                                      className="hover:text-white flex items-center gap-1 cursor-pointer text-[11px]"
                                    >
                                      {copiedCodeKey === codeKey ? (
                                        <>
                                          <Check className="w-3 h-3 text-emerald-400" />
                                          <span className="text-emerald-400">Đã chép</span>
                                        </>
                                      ) : (
                                        <>
                                          <Copy className="w-3 h-3" />
                                          <span>Sao chép</span>
                                        </>
                                      )}
                                    </button>
                                    <button
                                      onClick={() => handleOpenInLab(section.codeExample!)}
                                      className="bg-emerald-600 hover:bg-emerald-500 text-white px-2 py-0.5 rounded text-[11px] font-bold flex items-center gap-1 cursor-pointer"
                                    >
                                      <Play className="w-2.5 h-2.5 fill-white" />
                                      Chạy mã
                                    </button>
                                  </div>
                                </div>
                                <pre className="p-3.5 text-xs font-mono text-sky-200 overflow-x-auto leading-relaxed">
                                  {section.codeExample}
                                </pre>
                                {section.outputExample && (
                                  <div className="bg-[#0a121f] p-3 border-t border-slate-800">
                                    <div className="text-[10px] uppercase font-mono text-slate-400 mb-1">
                                      Kết quả hiển thị:
                                    </div>
                                    <pre className="text-xs font-mono text-emerald-300 whitespace-pre-wrap">
                                      {section.outputExample}
                                    </pre>
                                  </div>
                                )}
                              </div>
                            )}

                            {section.tips && (
                              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-900 flex items-start gap-2">
                                <span className="font-bold">💡 Lưu ý:</span>
                                <span>{section.tips}</span>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Summary key points (Hộp kiến thức) */}
                    <div className="bg-[#f0f7ff] p-4 rounded-xl border border-sky-200">
                      <h4 className="font-bold text-[#0d3d78] text-sm mb-2 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                        Hộp kiến thức ghi nhớ (SGK Tin học 10):
                      </h4>
                      <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc list-inside">
                        {lesson.content.summary.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom Actions for Lesson */}
                    <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                      <button
                        onClick={() => onToggleCompleteLesson(lesson.id)}
                        className={`text-xs sm:text-sm font-bold px-4 py-2 rounded-xl border flex items-center gap-2 cursor-pointer transition-all ${
                          isCompleted
                            ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                            : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                        }`}
                      >
                        <CheckCircle className="w-4 h-4" />
                        {isCompleted ? 'Đã đánh dấu hoàn thành' : 'Đánh dấu đã học xong'}
                      </button>

                      <button
                        onClick={() => handleOpenInLab(lesson.sampleCode)}
                        className="bg-[#0878ef] hover:bg-[#0065d3] text-white font-bold text-xs sm:text-sm px-4 py-2 rounded-xl shadow-md flex items-center gap-2 cursor-pointer transition-all hover:scale-[1.02]"
                      >
                        <Play className="w-4 h-4 fill-white" />
                        Mở bài thực hành này trong IDE
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredLessons.length === 0 && (
          <div className="bg-white p-8 rounded-xl border border-sky-200 text-center text-slate-500 text-xs">
            Không tìm thấy bài học nào phù hợp với từ khóa "{searchQuery}".
          </div>
        )}
      </div>
    </section>
  );
};

// Helper for overview text
function selectedLessonContentOverview(lesson: Lesson): string {
  return lesson.content.overview || lesson.description;
}
