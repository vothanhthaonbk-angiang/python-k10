import React, { useState } from 'react';
import { FileCode, Home, Download, Github, Terminal, Copy, Check, HardDrive, FolderArchive } from 'lucide-react';

interface ResourcesSectionProps {
  onNavigateHome?: () => void;
}

export const ResourcesSection: React.FC<ResourcesSectionProps> = ({ onNavigateHome }) => {
  const [copiedStep, setCopiedStep] = useState<boolean>(false);

  const gitCommands = `# 1. Mở Git Bash/Terminal tại thư mục dự án trên ổ D
d:
cd D:\\Hoc-Tot-Python-NBK

# 2. Khởi tạo Git và lưu phiên bản đầu tiên
git init
git add .
git commit -m "Khoi tao website Hoc tot Python - THPT Nguyen Binh Khiem"

# 3. Đổi tên nhánh sang main và liên kết repo GitHub của bạn
git branch -M main
git remote add origin https://github.com/<TEN-TAI-KHOAN-GITHUB>/hoc-tot-python-nbk.git

# 4. Đẩy mã nguồn lên GitHub
git push -u origin main`;

  const handleCopyCommands = () => {
    navigator.clipboard.writeText(gitCommands);
    setCopiedStep(true);
    setTimeout(() => setCopiedStep(false), 2500);
  };

  return (
    <section id="tai-lieu" className="py-8 bg-white border-t border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

        {/* GitHub & Packaging Section */}
        <div className="bg-gradient-to-br from-[#0c3668] to-[#124d92] rounded-2xl p-5 sm:p-6 text-white shadow-lg border border-sky-300/30">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-white/15">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-400/20 text-amber-300 border border-amber-400/30">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-black text-amber-300 flex items-center gap-2">
                  Đóng Gói Dự Án & Sẵn Sàng Đưa Lên GitHub
                </h3>
                <p className="text-xs sm:text-sm text-sky-100 mt-0.5">
                  Tải gói mã nguồn (.ZIP) để lưu vào thư mục <b>D:\</b> trên máy tính và đưa lên GitHub.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              {onNavigateHome && (
                <button
                  onClick={onNavigateHome}
                  className="bg-white/10 hover:bg-white/20 text-sky-100 hover:text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-white/20 flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Trở về đầu trang chủ"
                >
                  <Home className="w-3.5 h-3.5 text-amber-300" />
                  <span>Trang chủ</span>
                </button>
              )}
            </div>
          </div>

          {/* Download cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
            {/* Card 1: Source Code ZIP for GitHub */}
            <div className="bg-white/10 hover:bg-white/15 transition-all border border-white/15 rounded-xl p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-amber-300 font-bold text-sm mb-1">
                  <FolderArchive className="w-4 h-4" />
                  <span>1. Gói Mã Nguồn Đầy Đủ (Dành cho GitHub)</span>
                </div>
                <p className="text-xs text-sky-100 leading-relaxed">
                  Bao gồm toàn bộ file nguồn (`src/`, `public/`, `package.json`, `vite.config.ts`, `.gitignore`, `README.md`, tài liệu hướng dẫn). Đã loại bỏ sẵn thư mục nặng, giải nén trực tiếp vào <b>D:\Hoc-Tot-Python-NBK</b>.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between gap-3">
                <span className="text-[11px] text-sky-200 font-mono">source_code.zip</span>
                <a
                  href="./source_code.zip"
                  download="source_code.zip"
                  className="bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-extrabold px-3.5 py-2 rounded-lg flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Tải Mã Nguồn (.ZIP)</span>
                </a>
              </div>
            </div>

            {/* Card 2: Production Dist ZIP for Hosting / GitHub Pages */}
            <div className="bg-white/10 hover:bg-white/15 transition-all border border-white/15 rounded-xl p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-sky-200 font-bold text-sm mb-1">
                  <HardDrive className="w-4 h-4 text-emerald-300" />
                  <span>2. Gói Web Biên Dịch (Dành cho GitHub Pages / Hosting)</span>
                </div>
                <p className="text-xs text-sky-100 leading-relaxed">
                  Bản đóng gói tĩnh tối ưu hóa (`dist/`), có thể chạy trực tiếp trên web server, tải lên nhánh <b>gh-pages</b> hoặc kéo thả lên Vercel / Netlify chạy ngay lập tức.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between gap-3">
                <span className="text-[11px] text-sky-200 font-mono">dist.zip</span>
                <a
                  href="./dist.zip"
                  download="dist.zip"
                  className="bg-white hover:bg-sky-50 text-[#0d3d78] text-xs font-extrabold px-3.5 py-2 rounded-lg flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Tải Bản Build (.ZIP)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick steps to put on D:\ and Git Commands */}
          <div className="mt-5 bg-slate-950/40 rounded-xl p-4 border border-white/10">
            <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                <Terminal className="w-4 h-4 text-amber-400" />
                <span>Các bước thực hiện trên máy tính (Lưu vào ổ D:\ và đẩy lên GitHub):</span>
              </div>
              <button
                onClick={handleCopyCommands}
                className="bg-white/10 hover:bg-white/20 text-xs text-sky-100 px-2.5 py-1 rounded-md flex items-center gap-1.5 transition-colors cursor-pointer border border-white/10"
              >
                {copiedStep ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-300 font-bold">Đã sao chép!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Sao chép lệnh Git</span>
                  </>
                )}
              </button>
            </div>

            <ol className="text-xs text-sky-100 space-y-1.5 list-decimal list-inside pl-1 mb-3">
              <li>
                <b>Tải file `source_code.zip`</b> ở trên và chuyển vào ổ đĩa <b>D:\</b>.
              </li>
              <li>
                Giải nén thành thư mục <b>D:\Hoc-Tot-Python-NBK</b>.
              </li>
              <li>
                Tạo một repository mới trên GitHub (ví dụ: <code className="text-amber-200 font-mono">hoc-tot-python-nbk</code>).
              </li>
              <li>
                Mở <b>Git Bash</b> hoặc Terminal rồi chạy đoạn lệnh bên dưới:
              </li>
            </ol>

            <pre className="font-mono text-[11px] bg-slate-950 text-sky-200 p-3 rounded-lg overflow-x-auto border border-white/10 select-all leading-relaxed">
              {gitCommands}
            </pre>
          </div>
        </div>

        {/* Quick Syntax Cheatsheet Table */}
        <div className="bg-[#f8fbff] rounded-xl p-4 border border-sky-200 shadow-xs">
          <div className="flex items-center justify-between gap-3 mb-3 flex-wrap">
            <div className="flex items-center gap-2">
              <FileCode className="w-4 h-4 text-blue-600" />
              <h3 className="text-sm font-bold text-[#0d3d78]">
                Tra cứu nhanh cú pháp Python THPT (Cheatsheet)
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">
            <div className="bg-white p-2.5 rounded-lg border border-sky-100 space-y-1">
              <span className="font-bold text-blue-700 block uppercase text-[10px]">1. Xuất Nhập & Ép kiểu</span>
              <div className="font-mono bg-slate-50 p-1.5 rounded text-slate-800 space-y-0.5 text-[11px]">
                <div>print(x, y, sep=" ")</div>
                <div>s = input() # str</div>
                <div>n = int(input()) # int</div>
                <div>x = float(input()) # float</div>
              </div>
            </div>

            <div className="bg-white p-2.5 rounded-lg border border-sky-100 space-y-1">
              <span className="font-bold text-emerald-700 block uppercase text-[10px]">2. Rẽ nhánh & Vòng lặp</span>
              <div className="font-mono bg-slate-50 p-1.5 rounded text-slate-800 space-y-0.5 text-[11px]">
                <div>if a &gt; 0 and b &lt; 5:</div>
                <div>elif a == 0: ... else: ...</div>
                <div>for i in range(1, n+1):</div>
                <div>while dieu_kien: ...</div>
              </div>
            </div>

            <div className="bg-white p-2.5 rounded-lg border border-sky-100 space-y-1">
              <span className="font-bold text-purple-700 block uppercase text-[10px]">3. Xử lý Chuỗi (String)</span>
              <div className="font-mono bg-slate-50 p-1.5 rounded text-slate-800 space-y-0.5 text-[11px]">
                <div>s.find("abc") # vị trí xâu</div>
                <div>s.split() # tách từ</div>
                <div>"-".join(list) # nối xâu</div>
                <div>len(s), s.lower(), s.upper()</div>
              </div>
            </div>

            <div className="bg-white p-2.5 rounded-lg border border-sky-100 space-y-1">
              <span className="font-bold text-amber-700 block uppercase text-[10px]">4. Danh sách (List)</span>
              <div className="font-mono bg-slate-50 p-1.5 rounded text-slate-800 space-y-0.5 text-[11px]">
                <div>a.append(x) # thêm cuối</div>
                <div>a.insert(i, x) # chèn tại i</div>
                <div>a.remove(x) # xóa giá trị</div>
                <div>sum(a), min(a), max(a)</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
