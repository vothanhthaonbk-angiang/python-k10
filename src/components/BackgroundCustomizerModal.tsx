import React, { useState, useRef } from 'react';
import { 
  X, 
  Image as ImageIcon, 
  Upload, 
  Sliders, 
  RotateCcw, 
  Check, 
  Eye, 
  Sparkles,
  School,
  SunMedium,
  Home
} from 'lucide-react';
import { DEFAULT_SCHOOL_BANNER_PATH, DEFAULT_SCHOOL_BG_SVG } from '../assets/schoolDefaultBg';

interface BackgroundCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGoHome?: () => void;
  backgroundImage: string;
  onUpdateBackgroundImage: (newImage: string) => void;
  bgOpacity: number;
  onUpdateBgOpacity: (opacity: number) => void;
  bgBlur: number;
  onUpdateBgBlur: (blur: number) => void;
  highContrast: boolean;
  onUpdateHighContrast: (contrast: boolean) => void;
}

export const BackgroundCustomizerModal: React.FC<BackgroundCustomizerModalProps> = ({
  isOpen,
  onClose,
  onGoHome,
  backgroundImage,
  onUpdateBackgroundImage,
  bgOpacity,
  onUpdateBgOpacity,
  bgBlur,
  onUpdateBgBlur,
  highContrast,
  onUpdateHighContrast,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);
  const [successToast, setSuccessToast] = useState<string | null>(null);

  if (!isOpen) return null;

  const isOfficialBanner = backgroundImage === DEFAULT_SCHOOL_BANNER_PATH;
  const isSvgPreset = backgroundImage === DEFAULT_SCHOOL_BG_SVG;
  const isCustomUploaded = !isOfficialBanner && !isSvgPreset;

  const handleProcessFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Vui lòng chọn tệp hình ảnh (.jpg, .jpeg, .png, .webp).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        onUpdateBackgroundImage(result);
        setSuccessToast(`Đã áp dụng ảnh "${file.name}" làm hình nền thành công!`);
        setTimeout(() => setSuccessToast(null), 3500);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleProcessFile(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleProcessFile(file);
    }
  };

  const handleSelectOfficialBanner = () => {
    onUpdateBackgroundImage(DEFAULT_SCHOOL_BANNER_PATH);
    setSuccessToast('Đã chọn hình ảnh Banner & Cổng trường THPT Nguyễn Bỉnh Khiêm chính thức!');
    setTimeout(() => setSuccessToast(null), 3000);
  };

  const handleSelectSvgVector = () => {
    onUpdateBackgroundImage(DEFAULT_SCHOOL_BG_SVG);
    setSuccessToast('Đã chọn bản phác họa khuôn viên trường!');
    setTimeout(() => setSuccessToast(null), 3000);
  };

  const handleResetDefault = () => {
    onUpdateBackgroundImage(DEFAULT_SCHOOL_BANNER_PATH);
    onUpdateBgOpacity(75);
    onUpdateBgBlur(1);
    setSuccessToast('Đã khôi phục hình nền trường học mặc định!');
    setTimeout(() => setSuccessToast(null), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-xl w-full border border-sky-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0d3d78] to-[#1a5ea8] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-white/10 rounded-xl text-amber-300 backdrop-blur-sm">
              <School className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Cài đặt Hình nền & Banner Trường học</h3>
              <p className="text-xs text-sky-200">
                Hình ảnh THPT Nguyễn Bỉnh Khiêm & cân chỉnh độ tương phản phông chữ nổi bật
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                if (onGoHome) onGoHome();
              }}
              className="bg-white/10 hover:bg-white/20 text-sky-100 hover:text-white font-bold text-xs px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer border border-white/20"
              title="Trở về đầu trang chủ"
            >
              <Home className="w-3.5 h-3.5 text-amber-300" />
              <span>Trang chủ</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content body */}
        <div className="p-6 space-y-6 overflow-y-auto">
          {successToast && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs sm:text-sm font-semibold flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>{successToast}</span>
            </div>
          )}

          {/* Quick Preset Selector */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-500" />
                Chọn ảnh nền trường có sẵn
              </span>
            </label>
            <div className="grid grid-cols-2 gap-3">
              {/* Official Banner Preset */}
              <button
                type="button"
                onClick={handleSelectOfficialBanner}
                className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer relative overflow-hidden ${
                  isOfficialBanner
                    ? 'border-blue-600 bg-blue-50/80 ring-2 ring-blue-500/30'
                    : 'border-slate-200 hover:border-blue-300 bg-white'
                }`}
              >
                <div className="h-16 rounded-lg overflow-hidden mb-2 bg-slate-900 border border-slate-200 relative">
                  <img
                    src={DEFAULT_SCHOOL_BANNER_PATH}
                    alt="Banner THPT Nguyễn Bỉnh Khiêm"
                    className="w-full h-full object-cover"
                  />
                  {isOfficialBanner && (
                    <div className="absolute top-1 right-1 bg-blue-600 text-white rounded-full p-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                  )}
                </div>
                <div className="text-xs font-bold text-[#0d3d78] truncate">
                  Banner THPT Nguyễn Bỉnh Khiêm
                </div>
                <div className="text-[11px] text-slate-500">
                  Ảnh chính thức từ nhà trường
                </div>
              </button>

              {/* Vector SVG Preset */}
              <button
                type="button"
                onClick={handleSelectSvgVector}
                className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer relative overflow-hidden ${
                  isSvgPreset
                    ? 'border-blue-600 bg-blue-50/80 ring-2 ring-blue-500/30'
                    : 'border-slate-200 hover:border-blue-300 bg-white'
                }`}
              >
                <div className="h-16 rounded-lg overflow-hidden mb-2 bg-sky-100 border border-slate-200 relative">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url("${DEFAULT_SCHOOL_BG_SVG}")` }}
                  />
                  {isSvgPreset && (
                    <div className="absolute top-1 right-1 bg-blue-600 text-white rounded-full p-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                  )}
                </div>
                <div className="text-xs font-bold text-[#0d3d78] truncate">
                  Minh họa Vector sân trường
                </div>
                <div className="text-[11px] text-slate-500">
                  Phong cách đồ họa nhẹ
                </div>
              </button>
            </div>
          </div>

          {/* Upload Area for custom image */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Upload className="w-4 h-4 text-blue-600" />
                Hoặc tải ảnh khác từ máy tính
              </span>
              {isCustomUploaded && (
                <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full">
                  Đang dùng ảnh tự tải
                </span>
              )}
            </label>

            <div
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-2xl p-5 text-center cursor-pointer transition-all ${
                dragOver 
                  ? 'border-blue-500 bg-blue-50/80 scale-[1.01]' 
                  : 'border-slate-300 hover:border-blue-400 bg-slate-50/60 hover:bg-blue-50/30'
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-2">
                <ImageIcon className="w-5 h-5" />
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-800">
                Bấm để chọn tệp ảnh hoặc kéo thả vào đây
              </p>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Hỗ trợ định dạng JPG, JPEG, PNG, WEBP.
              </p>
            </div>
          </div>

          {/* Live Preview Miniature */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <Eye className="w-4 h-4 text-indigo-600" />
                Xem trước hiệu ứng hiển thị & Phông chữ
              </span>
              <button
                onClick={handleResetDefault}
                className="text-xs text-slate-600 hover:text-red-600 flex items-center gap-1 font-medium transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Khôi phục ảnh chính thức
              </button>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-slate-200 h-36 flex items-center justify-center shadow-inner">
              {/* Background preview */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all"
                style={{
                  backgroundImage: `url("${backgroundImage}")`,
                  filter: `blur(${bgBlur}px)`,
                  transform: 'scale(1.05)',
                }}
              />
              {/* Overlay preview */}
              <div 
                className="absolute inset-0 transition-all"
                style={{
                  backgroundColor: `rgba(246, 250, 255, ${bgOpacity / 100})`,
                }}
              />
              {/* Content preview sample */}
              <div className="relative z-10 p-4 text-center max-w-sm bg-white/92 backdrop-blur-md rounded-xl border border-white/80 shadow-md">
                <h4 className={`text-sm font-black text-[#0d3d78] ${highContrast ? 'drop-shadow-sm' : ''}`}>
                  THPT Nguyễn Bỉnh Khiêm · Tin học 10
                </h4>
                <p className="text-xs text-slate-700 font-medium mt-0.5">
                  Phông chữ hiển thị hài hòa, tương phản cao, rõ ràng trên nền trường học!
                </p>
              </div>
            </div>
          </div>

          {/* Tuning Sliders for Typography & Contrast Harmony */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider">
              <Sliders className="w-4 h-4 text-blue-600" />
              Cân chỉnh Độ mờ & Độ nhòe để Phông chữ nổi bật
            </div>

            {/* Opacity Slider */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                <span>Độ che phủ màu nền (Tăng độ rõ của chữ):</span>
                <span className="text-blue-600 font-bold">{bgOpacity}%</span>
              </div>
              <input
                type="range"
                min="30"
                max="95"
                step="5"
                value={bgOpacity}
                onChange={(e) => onUpdateBgOpacity(parseInt(e.target.value, 10))}
                className="w-full accent-blue-600 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-0.5">
                <span>Ảnh trường rõ hơn (30%)</span>
                <span>Khuyên dùng (70% - 80%)</span>
                <span>Chữ cực rõ (95%)</span>
              </div>
            </div>

            {/* Blur Slider */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                <span>Độ nhòe làm dịu nền (Blur):</span>
                <span className="text-blue-600 font-bold">{bgBlur}px</span>
              </div>
              <input
                type="range"
                min="0"
                max="8"
                step="1"
                value={bgBlur}
                onChange={(e) => onUpdateBgBlur(parseInt(e.target.value, 10))}
                className="w-full accent-blue-600 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-0.5">
                <span>Sắc nét (0px)</span>
                <span>Mềm dịu (1px - 2px)</span>
                <span>Nền xóa phông (8px)</span>
              </div>
            </div>

            {/* High Contrast Toggle */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-200">
              <div className="flex items-center gap-2">
                <SunMedium className="w-4 h-4 text-amber-500" />
                <span className="text-xs font-semibold text-slate-700">
                  Chế độ phông chữ tương phản cao (High Contrast)
                </span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={highContrast}
                  onChange={(e) => onUpdateHighContrast(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-9 h-5 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <div className="text-xs text-slate-500 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Mẹo: Kéo thả ảnh vào trang để đổi hình nền bất cứ lúc nào!</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                if (onGoHome) onGoHome();
              }}
              className="px-4 py-2 bg-[#0d3d78] hover:bg-[#154b8d] text-white text-xs sm:text-sm font-bold rounded-xl transition-colors cursor-pointer shadow-xs flex items-center gap-1.5"
            >
              <Home className="w-3.5 h-3.5 text-amber-300" />
              <span>Trở về trang chủ</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs sm:text-sm font-bold rounded-xl transition-colors cursor-pointer"
            >
              Đóng & Lưu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
