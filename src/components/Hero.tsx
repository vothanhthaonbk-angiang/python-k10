import React from 'react';
import { Play, BookOpen, Terminal, Sparkles, Smartphone } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onOpenInstallApp?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenInstallApp }) => {
  return (
    <div id="trang-chu" className="relative overflow-hidden bg-gradient-to-r from-[#0a2e5c]/95 via-[#0d3d78]/90 to-[#124b8f]/95 text-white py-6 border-b border-sky-800/80 shadow-md backdrop-blur-sm">
      {/* Decorative subtle ambient light */}
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-48 h-48 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
          {/* Main Info */}
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-1.5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wide bg-amber-400 text-slate-950 shadow-sm">
                <Sparkles className="w-3 h-3 text-slate-950" />
                Chuyên đề Tin học 10
              </span>
              <span className="text-[11px] font-semibold text-sky-200 bg-white/10 px-2 py-0.5 rounded-md border border-white/10">
                17 bài học SGK Kết nối tri thức
              </span>
            </div>

            <h1 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-white flex items-center gap-2.5 drop-shadow-sm">
              <Terminal className="w-6 h-6 text-amber-300 flex-shrink-0" />
              Lập trình Python trực tuyến
            </h1>
            <p className="text-xs sm:text-sm text-sky-100/90 mt-1.5 max-w-2xl leading-relaxed font-medium">
              Nền tảng học tập bám sát SGK Tin học 10, tích hợp trình biên dịch Python WebAssembly trực tiếp trên trình duyệt, bài tập tự chấm và trắc nghiệm kiến thức.
            </p>
          </div>

          {/* Primary Call-to-Actions (No duplicate navigation clutter) */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('khoa-hoc')}
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold px-4 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all cursor-pointer hover:scale-[1.02] active:scale-95"
            >
              <BookOpen className="w-4 h-4 text-slate-950" />
              <span>Bắt đầu học ngay</span>
            </button>

            <button
              onClick={() => onNavigate('thuc-hanh')}
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all border border-white/25 hover:border-white/50 cursor-pointer shadow-sm hover:scale-[1.02] active:scale-95"
            >
              <Play className="w-3.5 h-3.5 fill-current text-sky-300" />
              <span>Phòng thực hành Code</span>
            </button>

            {onOpenInstallApp && (
              <button
                onClick={onOpenInstallApp}
                className="bg-sky-900/60 hover:bg-sky-800/80 text-sky-100 hover:text-white font-bold px-3.5 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all border border-sky-400/40 cursor-pointer shadow-sm hover:scale-[1.02] active:scale-95"
                title="Cài đặt trên iOS và Android"
              >
                <Smartphone className="w-4 h-4 text-amber-300" />
                <span>Cài App iOS/Android</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

