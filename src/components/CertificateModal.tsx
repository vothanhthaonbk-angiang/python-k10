import React, { useState } from 'react';
import { Award, Printer, X, CheckCircle, GraduationCap, Sparkles, Building2, User, Home } from 'lucide-react';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGoHome?: () => void;
  studentName: string;
  onUpdateStudentName: (name: string) => void;
  schoolName: string;
  onUpdateSchoolName: (school: string) => void;
  completedLessonsCount: number;
  totalLessonsCount: number;
  completedExercisesCount: number;
  totalExercisesCount: number;
  quizScore: number;
  quizTotal: number;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  onGoHome,
  studentName,
  onUpdateStudentName,
  schoolName,
  onUpdateSchoolName,
  completedLessonsCount,
  totalLessonsCount,
  completedExercisesCount,
  totalExercisesCount,
  quizScore,
  quizTotal,
}) => {
  const [localName, setLocalName] = useState<string>(studentName || 'Nguyễn Văn An');
  const [localSchool, setLocalSchool] = useState<string>(schoolName || 'THPT Nguyễn Bỉnh Khiêm');

  if (!isOpen) return null;

  const handleSaveInfo = () => {
    onUpdateStudentName(localName);
    onUpdateSchoolName(localSchool);
  };

  const handlePrint = () => {
    window.print();
  };

  const todayStr = new Date().toLocaleDateString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto print:p-0 print:bg-white">
      <div className="bg-white rounded-3xl max-w-4xl w-full shadow-2xl overflow-hidden border border-amber-300 flex flex-col print:border-none print:shadow-none print:rounded-none">
        {/* Modal Controls (Hidden in print) */}
        <div className="bg-slate-900 text-white p-4 flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2 text-sm font-bold text-amber-300">
            <Award className="w-5 h-5 text-amber-400" />
            Giấy chứng nhận Hoàn thành Chương trình Python THPT
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                if (onGoHome) onGoHome();
              }}
              className="bg-white/10 hover:bg-white/20 text-sky-100 hover:text-white font-bold text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer border border-white/20"
              title="Trở về đầu trang chủ"
            >
              <Home className="w-3.5 h-3.5 text-amber-300" />
              <span>Trang chủ</span>
            </button>
            <button
              onClick={handlePrint}
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              In chứng chỉ
            </button>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Student Customization Form (Hidden in print) */}
        <div className="bg-[#f0f7ff] p-4 border-b border-sky-200 grid grid-cols-1 sm:grid-cols-2 gap-3 print:hidden">
          <div>
            <label className="text-xs font-bold text-[#0d3d78] block mb-1 flex items-center gap-1">
              <User className="w-3.5 h-3.5" />
              Họ và tên học sinh:
            </label>
            <input
              type="text"
              value={localName}
              onChange={(e) => {
                setLocalName(e.target.value);
                onUpdateStudentName(e.target.value);
              }}
              placeholder="Nhập họ và tên..."
              className="w-full bg-white border border-sky-300 rounded-lg px-3 py-1.5 text-xs text-slate-800 font-semibold outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-[#0d3d78] block mb-1 flex items-center gap-1">
              <Building2 className="w-3.5 h-3.5" />
              Trường THPT (tại An Giang):
            </label>
            <input
              type="text"
              value={localSchool}
              onChange={(e) => {
                setLocalSchool(e.target.value);
                onUpdateSchoolName(e.target.value);
              }}
              placeholder="Nhập tên trường THPT..."
              className="w-full bg-white border border-sky-300 rounded-lg px-3 py-1.5 text-xs text-slate-800 font-semibold outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* The Printable Certificate Design */}
        <div className="p-6 sm:p-10 bg-gradient-to-b from-[#fffef9] to-[#faf7ee] text-slate-900 relative border-8 border-double border-[#b08d42] m-3 sm:m-5 rounded-2xl select-none">
          {/* Decorative Corner Ornaments */}
          <div className="absolute top-2 left-2 text-[#b08d42] text-xl font-serif">✦</div>
          <div className="absolute top-2 right-2 text-[#b08d42] text-xl font-serif">✦</div>
          <div className="absolute bottom-2 left-2 text-[#b08d42] text-xl font-serif">✦</div>
          <div className="absolute bottom-2 right-2 text-[#b08d42] text-xl font-serif">✦</div>

          <div className="text-center space-y-4">
            {/* Header / National Motto */}
            <div>
              <div className="text-xs uppercase font-bold tracking-widest text-slate-600">
                CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
              </div>
              <div className="text-xs font-semibold text-slate-500 italic">
                Độc lập – Tự do – Hạnh phúc
              </div>
              <div className="w-24 h-0.5 bg-slate-300 mx-auto mt-1 mb-3"></div>

              <div className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#0d3d78]">
                SỞ GIÁO DỤC VÀ ĐÀO TẠO TỈNH AN GIANG
              </div>
              <div className="text-[11px] text-slate-500 font-medium">
                CỔNG HỌC TẬP & THỰC HÀNH LẬP TRÌNH PYTHON TRỰC TUYẾN
              </div>
            </div>

            {/* Certificate Title */}
            <div className="py-2">
              <div className="w-16 h-16 mx-auto rounded-full bg-amber-100 border-2 border-amber-400 flex items-center justify-center text-amber-700 mb-2 shadow-inner">
                <GraduationCap className="w-9 h-9" />
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-black uppercase text-[#0d3d78] tracking-wide">
                GIẤY CHỨNG NHẬN
              </h1>
              <div className="text-xs sm:text-sm font-serif italic text-amber-900 font-bold tracking-wider mt-1">
                HOÀN THÀNH CHƯƠNG TRÌNH HỌC TỐT PHẦN MỀM PYTHON
              </div>
            </div>

            {/* Recipient */}
            <div className="space-y-1 py-2">
              <div className="text-xs text-slate-500 italic">Chứng nhận trao tặng cho:</div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0d3d78] tracking-tight uppercase font-serif underline decoration-amber-400 decoration-2 underline-offset-4">
                {localName || 'HỌC SINH THPT'}
              </div>
              <div className="text-sm font-semibold text-slate-700">
                Học sinh trường: <b className="text-[#0878ef]">{localSchool || 'THPT tại An Giang'}</b>
              </div>
            </div>

            {/* Achievement Text */}
            <div className="max-w-xl mx-auto text-xs sm:text-sm text-slate-700 leading-relaxed italic">
              Đã hoàn thành xuất sắc các chuyên đề lý thuyết, thực hành viết mã trên phòng máy Pyodide và hoàn thành ngân hàng bài tập lập trình Tin học THPT theo chương trình Giáo dục Phổ thông 2018.
            </div>

            {/* Performance Badges */}
            <div className="grid grid-cols-3 gap-2 max-w-md mx-auto pt-2 text-[11px] font-mono">
              <div className="bg-white/80 p-2 rounded-lg border border-amber-200">
                <div className="text-slate-500">Chuyên đề</div>
                <div className="font-bold text-slate-900 text-sm">{completedLessonsCount}/{totalLessonsCount}</div>
              </div>
              <div className="bg-white/80 p-2 rounded-lg border border-amber-200">
                <div className="text-slate-500">Bài tập nộp</div>
                <div className="font-bold text-slate-900 text-sm">{completedExercisesCount}/{totalExercisesCount}</div>
              </div>
              <div className="bg-white/80 p-2 rounded-lg border border-amber-200">
                <div className="text-slate-500">Trắc nghiệm</div>
                <div className="font-bold text-slate-900 text-sm">{quizScore}/{quizTotal || 10} đ</div>
              </div>
            </div>

            {/* Date & Signatures */}
            <div className="grid grid-cols-2 gap-4 pt-6 text-xs text-slate-800">
              <div className="text-center">
                <div className="font-medium text-slate-500 italic">Xác nhận của hệ thống</div>
                <div className="mt-8 font-black uppercase text-[#0d3d78]">
                  SỞ GD&ĐT AN GIANG
                </div>
                <div className="text-[10px] text-slate-400">Cổng Học tập Số</div>
              </div>

              <div className="text-center">
                <div className="italic text-slate-500">An Giang, ngày {todayStr}</div>
                <div className="font-bold mt-1 text-slate-700">Giáo viên phụ trách chương trình</div>
                <div className="mt-6 font-black uppercase text-[#0d3d78] text-sm">
                  VÕ THỊ THANH THẢO
                </div>
                <div className="text-[10px] text-emerald-700 font-semibold flex items-center justify-center gap-1">
                  <CheckCircle className="w-3 h-3 text-emerald-600" />
                  Đã xác thực chữ ký số
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer (Hidden in print) */}
        <div className="bg-slate-50 p-4 border-t border-slate-200 flex items-center justify-between print:hidden">
          <span className="text-xs text-slate-500">
            💡 Nhấn <b>"In chứng chỉ"</b> để lưu thành tệp PDF hoặc in giấy khen lưu niệm.
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                if (onGoHome) onGoHome();
              }}
              className="bg-[#0d3d78] hover:bg-[#154b8d] text-white font-bold text-xs px-4 py-2 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
            >
              <Home className="w-3.5 h-3.5 text-amber-300" />
              <span>Trở về trang chủ</span>
            </button>
            <button
              onClick={onClose}
              className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs px-4 py-2 rounded-xl transition-colors cursor-pointer"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
