import React from 'react';
import { Mail, GraduationCap, Award, ArrowUp, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    const el = document.getElementById('trang-chu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0b3569] text-white border-t border-[#13498a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          {/* Brand & Organization */}
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-white/10 text-amber-300 border border-white/10">
              <GraduationCap className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <strong className="block text-sm sm:text-base tracking-wide uppercase">
                TRƯỜNG THPT NGUYỄN BỈNH KHIÊM
              </strong>
              <span className="text-xs text-sky-200">
                Sở GD&ĐT An Giang · Chuyên đề Tin học 10 (Kết nối tri thức)
              </span>
            </div>
          </div>

          {/* Teacher and Contact */}
          <div className="text-xs text-center md:text-left space-y-1">
            <div className="text-white font-bold flex items-center justify-center md:justify-start gap-1.5">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>Giáo viên phụ trách: <b>VÕ THỊ THANH THẢO</b></span>
            </div>
            <div className="text-sky-200 flex items-center justify-center md:justify-start gap-1.5">
              <Mail className="w-3.5 h-3.5 text-sky-300" />
              <span>Email: <a href="mailto:vothanhthaoangiang@gmail.com" className="text-sky-100 hover:underline">vothanhthaoangiang@gmail.com</a></span>
            </div>
          </div>

          {/* Concise Footer Actions (No redundant full-menu repetition) */}
          <div className="flex items-center gap-3 text-xs text-sky-200">
            <button
              onClick={scrollToTop}
              className="hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5 text-amber-300" />
              <span>Đầu trang</span>
            </button>
            <span>•</span>
            <a
              href="#tai-lieu"
              className="hover:text-white flex items-center gap-1 text-amber-300 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Tài liệu & GitHub</span>
            </a>
            <span>•</span>
            <a
              href="mailto:vothanhthaoangiang@gmail.com?subject=Góp ý Cổng học tốt Python 10"
              className="hover:text-white transition-colors"
            >
              Góp ý
            </a>
          </div>
        </div>

        <div className="mt-5 pt-3.5 border-t border-[#144784] text-center text-[11px] text-sky-300/70">
          © {new Date().getFullYear()} Cổng học tập trực tuyến Tin học 10 · Phục vụ giáo dục phi lợi nhuận.
        </div>
      </div>
    </footer>
  );
};

