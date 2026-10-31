import React from 'react';
import { BookOpen, Code2, Award, CheckCircle2, FileSpreadsheet, Sparkles, Sliders, Terminal, Github, Smartphone } from 'lucide-react';

interface NavbarProps {
  progressPercent: number;
  completedLessonsCount: number;
  totalLessonsCount: number;
  completedExercisesCount: number;
  totalExercisesCount: number;
  registrationCount?: number;
  onOpenCertificate: () => void;
  onOpenRegistration: () => void;
  onOpenBackgroundModal?: () => void;
  onOpenInstallApp?: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  progressPercent,
  completedLessonsCount,
  totalLessonsCount,
  registrationCount = 0,
  onOpenCertificate,
  onOpenRegistration,
  onOpenBackgroundModal,
  onOpenInstallApp,
  onNavigate,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#0d3d78] text-white shadow-md border-b border-[#1c559d]">
      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-4 flex-wrap">
        {/* Brand identity */}
        <div 
          onClick={() => onNavigate('trang-chu')}
          className="flex items-center gap-2 cursor-pointer group select-none"
        >
          <div className="p-1.5 rounded-lg bg-white/10 text-amber-300 border border-white/10 group-hover:bg-white/20 transition-all">
            <Terminal className="w-4 h-4 text-amber-300" />
          </div>
          <div>
            <div className="text-xs sm:text-sm font-bold text-sky-100 group-hover:text-white transition-colors">
              Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính
            </div>
          </div>
        </div>

        {/* Navigation links */}
        <nav className="flex items-center gap-1 sm:gap-2 flex-wrap text-sm font-medium">
          <button
            onClick={() => onNavigate('trang-chu')}
            className="px-3 py-1.5 rounded-lg text-sky-100 hover:text-white hover:bg-white/10 transition-colors"
          >
            Trang chủ
          </button>
          <button
            onClick={() => onNavigate('khoa-hoc')}
            className="px-3 py-1.5 rounded-lg text-sky-100 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-1.5"
          >
            <BookOpen className="w-4 h-4 text-sky-300" />
            Khóa học
          </button>
          <button
            onClick={() => onNavigate('thuc-hanh')}
            className="px-3 py-1.5 rounded-lg text-sky-100 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-1.5"
          >
            <Code2 className="w-4 h-4 text-sky-300" />
            Code Lab 10
          </button>
          <button
            onClick={() => onNavigate('bai-tap')}
            className="px-3 py-1.5 rounded-lg text-sky-100 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-1.5"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-300" />
            Bài tập tự chấm
          </button>
          <button
            onClick={() => onNavigate('trac-nghiem')}
            className="px-3 py-1.5 rounded-lg text-sky-100 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-1.5"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            Quiz Master
          </button>
          <button
            onClick={() => onNavigate('tai-lieu')}
            className="px-3 py-1.5 rounded-lg text-sky-100 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-1.5"
            title="Tải mã nguồn và hướng dẫn đưa lên GitHub"
          >
            <Github className="w-4 h-4 text-amber-300" />
            <span>GitHub / Tài liệu</span>
          </button>
        </nav>

        {/* Progress & Certificate CTA */}
        <div className="flex items-center gap-2.5">
          {/* Progress pill */}
          <div 
            onClick={() => onNavigate('khoa-hoc')}
            className="hidden sm:flex items-center gap-2 bg-[#082d5a] px-3 py-1.5 rounded-lg border border-[#1b5194] cursor-pointer hover:border-sky-400 transition-colors"
            title={`Đã hoàn thành ${completedLessonsCount}/${totalLessonsCount} chủ đề`}
          >
            <div className="text-right">
              <div className="text-[11px] text-sky-300 font-semibold leading-none">Tiến độ học</div>
              <div className="text-xs font-bold text-white">{progressPercent}%</div>
            </div>
            <div className="w-12 h-2 bg-slate-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-emerald-400 transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Background customizer toggle */}
          {onOpenBackgroundModal && (
            <button
              onClick={onOpenBackgroundModal}
              className="bg-white/10 hover:bg-white/20 text-sky-200 hover:text-white p-2 rounded-lg text-xs flex items-center transition-all cursor-pointer border border-white/10"
              title="Cài đặt hình nền trường học và độ tương phản"
            >
              <Sliders className="w-4 h-4" />
            </button>
          )}

          {/* Install App on iOS / Android */}
          {onOpenInstallApp && (
            <button
              onClick={onOpenInstallApp}
              className="bg-sky-800/80 hover:bg-sky-700 text-sky-100 hover:text-white font-bold px-2.5 py-1.5 rounded-lg text-xs flex items-center gap-1.5 transition-all cursor-pointer border border-sky-400/30"
              title="Cài đặt ứng dụng lên iPhone, iPad, Android hoặc Máy tính"
            >
              <Smartphone className="w-3.5 h-3.5 text-amber-300" />
              <span className="hidden sm:inline">Cài App</span>
            </button>
          )}

          {/* Registration & Excel Button */}
          <button
            onClick={onOpenRegistration}
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-3 py-1.5 rounded-lg text-xs sm:text-sm flex items-center gap-1.5 shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
            title="Đăng ký thông tin học sinh và xuất file Excel (.xlsx)"
          >
            <FileSpreadsheet className="w-4 h-4 text-emerald-200" />
            <span className="hidden xs:inline">Đăng ký học</span>
            {registrationCount > 0 && (
              <span className="bg-emerald-900/60 text-emerald-200 text-[10px] px-1.5 py-0.2 rounded-full font-mono">
                {registrationCount}
              </span>
            )}
          </button>

          {/* Certificate Button */}
          <button
            onClick={onOpenCertificate}
            className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-3 py-1.5 rounded-lg text-xs sm:text-sm flex items-center gap-1.5 shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Award className="w-4 h-4 text-amber-900" />
            <span className="hidden xs:inline">Chứng nhận</span>
          </button>
        </div>
      </div>
    </header>
  );
};
