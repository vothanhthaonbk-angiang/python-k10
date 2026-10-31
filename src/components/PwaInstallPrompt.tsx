import React, { useState, useEffect } from 'react';
import { Smartphone, Download, Share, PlusSquare, CheckCircle, X, HelpCircle, ArrowRight, Laptop } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface PwaInstallPromptProps {
  forceOpenModal?: boolean;
  onCloseForceModal?: () => void;
}

export const PwaInstallPrompt: React.FC<PwaInstallPromptProps> = ({
  forceOpenModal = false,
  onCloseForceModal,
}) => {
  const { isInstalled, isStandalone, isIOS, isAndroid, canPromptDirectly, triggerInstall } = usePWAInstall();
  const [showBanner, setShowBanner] = useState<boolean>(false);
  const [showGuideModal, setShowGuideModal] = useState<boolean>(false);

  useEffect(() => {
    if (forceOpenModal) {
      setShowGuideModal(true);
    }
  }, [forceOpenModal]);

  useEffect(() => {
    // Check if dismissed previously in this session
    const isDismissed = sessionStorage.getItem('python10_pwa_banner_dismissed');
    if (!isStandalone && !isDismissed) {
      // Delay showing banner slightly to avoid layout shift
      const timer = setTimeout(() => setShowBanner(true), 1500);
      return () => clearTimeout(timer);
    }
  }, [isStandalone]);

  const handleDismissBanner = () => {
    setShowBanner(false);
    sessionStorage.setItem('python10_pwa_banner_dismissed', 'true');
  };

  const handleInstallClick = async () => {
    if (canPromptDirectly) {
      const installed = await triggerInstall();
      if (installed) {
        setShowBanner(false);
      }
    } else {
      setShowGuideModal(true);
    }
  };

  const closeGuideModal = () => {
    setShowGuideModal(false);
    if (onCloseForceModal) {
      onCloseForceModal();
    }
  };

  // If already standalone and not explicitly forced open, don't render banner
  if (isStandalone && !showGuideModal) {
    return null;
  }

  return (
    <>
      {/* Floating Bottom Banner for Mobile (iOS & Android) */}
      {showBanner && !isStandalone && (
        <aside 
          aria-label="Cài đặt ứng dụng trên điện thoại"
          className="fixed bottom-3 left-3 right-3 sm:left-auto sm:right-4 sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-4 duration-300"
        >
          <div className="bg-[#0a2e5c]/95 backdrop-blur-md text-white p-3.5 sm:p-4 rounded-2xl shadow-2xl border border-sky-400/40 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-sky-500 to-amber-400 p-0.5 shrink-0 shadow-md">
                <img 
                  src="./pwa-192x192.png" 
                  alt="Python 10 Icon" 
                  className="w-full h-full rounded-[10px] object-cover bg-[#071e3d]"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="font-bold text-sm text-white truncate">Cài App Python 10</span>
                  <span className="text-[10px] bg-amber-400/20 text-amber-300 font-semibold px-1.5 py-0.5 rounded border border-amber-400/30">
                    iOS / Android
                  </span>
                </div>
                <p className="text-xs text-sky-200 truncate">
                  Chạy mượt như app cài sẵn, học tập tiện lợi
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <button
                onClick={handleInstallClick}
                className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold px-3 py-1.5 rounded-xl text-xs flex items-center gap-1 shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{canPromptDirectly ? 'Cài ngay' : 'Cách cài'}</span>
              </button>
              <button
                onClick={handleDismissBanner}
                className="text-sky-300 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
                title="Đóng thông báo"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* Comprehensive Install Guide Modal for iOS Safari, Android, and Desktop */}
      {showGuideModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div 
            className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-sky-100 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#0d3d78] to-[#07244a] text-white p-5 flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-400 to-amber-400 p-0.5 shadow-md shrink-0">
                  <img 
                    src="./pwa-192x192.png" 
                    alt="Logo Python 10" 
                    className="w-full h-full rounded-[14px] object-cover bg-[#071e3d]"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">Cài đặt Ứng dụng Python 10</h3>
                  <p className="text-xs text-sky-200">Hỗ trợ đầy đủ iOS (iPhone/iPad), Android & Máy tính</p>
                </div>
              </div>
              <button
                onClick={closeGuideModal}
                className="text-white/70 hover:text-white p-1.5 rounded-xl hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 max-h-[75vh] overflow-y-auto space-y-5 text-slate-700">
              {/* Status Notice */}
              {isStandalone ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex items-center gap-3 text-emerald-800">
                  <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0" />
                  <div className="text-sm">
                    <strong>Ứng dụng đã được cài đặt!</strong> Bạn đang trải nghiệm Python 10 ở chế độ ứng dụng độc lập (Standalone App).
                  </div>
                </div>
              ) : null}

              {/* iOS Instructions */}
              <div className={`p-4 rounded-2xl border ${isIOS ? 'bg-sky-50/70 border-sky-200 ring-2 ring-sky-400/30' : 'bg-slate-50 border-slate-200'}`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-5 h-5 text-sky-600" />
                    <span className="font-bold text-slate-900 text-sm">
                      Dành cho iOS (iPhone / iPad - Safari)
                    </span>
                  </div>
                  {isIOS && (
                    <span className="text-[10px] font-bold bg-sky-600 text-white px-2 py-0.5 rounded-full">
                      Thiết bị của bạn
                    </span>
                  )}
                </div>

                <ol className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-sky-200 text-sky-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      Mở ứng dụng này bằng trình duyệt <strong>Safari</strong> trên iPhone/iPad.
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-sky-200 text-sky-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      Nhấn vào nút <strong>Chia sẻ</strong> <Share className="w-4 h-4 inline-block text-sky-600 mx-1 align-sub" /> ở thanh công cụ dưới cùng Safari.
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-sky-200 text-sky-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      Cuộn danh sách tác vụ và chọn <strong>"Thêm vào MH chính"</strong> (Add to Home Screen) <PlusSquare className="w-4 h-4 inline-block text-slate-700 mx-1 align-sub" />.
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-sky-200 text-sky-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      Nhấn <strong>Thêm (Add)</strong> ở góc trên bên phải để hoàn tất. Biểu tượng Python 10 sẽ xuất hiện ngay ngoài màn hình chính của bạn!
                    </div>
                  </li>
                </ol>
              </div>

              {/* Android Instructions */}
              <div className={`p-4 rounded-2xl border ${isAndroid ? 'bg-amber-50/70 border-amber-200 ring-2 ring-amber-400/30' : 'bg-slate-50 border-slate-200'}`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-5 h-5 text-amber-600" />
                    <span className="font-bold text-slate-900 text-sm">
                      Dành cho Android (Chrome / Samsung Internet)
                    </span>
                  </div>
                  {isAndroid && (
                    <span className="text-[10px] font-bold bg-amber-600 text-white px-2 py-0.5 rounded-full">
                      Thiết bị của bạn
                    </span>
                  )}
                </div>

                {canPromptDirectly ? (
                  <div className="mb-3">
                    <button
                      onClick={handleInstallClick}
                      className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold py-2.5 px-4 rounded-xl text-sm flex items-center justify-center gap-2 shadow-sm transition-all active:scale-98 cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      Nhấn vào đây để Cài đặt ngay lên Android
                    </button>
                  </div>
                ) : (
                  <ol className="space-y-3 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-amber-200 text-amber-900 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                      <div>
                        Mở bằng trình duyệt <strong>Google Chrome</strong> trên điện thoại.
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-amber-200 text-amber-900 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                      <div>
                        Nhấn vào biểu tượng <strong>dấu 3 chấm (⋮)</strong> ở góc trên bên phải màn hình.
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-amber-200 text-amber-900 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                      <div>
                        Chọn <strong>"Cài đặt ứng dụng"</strong> (hoặc "Thêm vào màn hình chính").
                      </div>
                    </li>
                  </ol>
                )}
              </div>

              {/* Desktop Instructions */}
              <div className="p-4 rounded-2xl border bg-slate-50 border-slate-200">
                <div className="flex items-center gap-2 mb-2">
                  <Laptop className="w-5 h-5 text-slate-600" />
                  <span className="font-bold text-slate-900 text-sm">
                    Dành cho Máy tính (Chrome / Edge / Cốc Cốc)
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Trên thanh địa chỉ trình duyệt, hãy nhấn vào biểu tượng <strong>Cài đặt (biểu tượng máy tính nhỏ hoặc dấu tải xuống ⤓)</strong> ở góc phải thanh nhập URL để cài đặt ứng dụng độc lập mở ra như một phần mềm máy tính riêng biệt.
                </p>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 pt-1">
                <div className="p-2.5 rounded-xl bg-slate-100 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Không tốn dung lượng App Store</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-100 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Chạy toàn màn hình, mượt mà</span>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-slate-50 p-4 border-t border-slate-200 flex justify-end">
              <button
                onClick={closeGuideModal}
                className="bg-[#0d3d78] hover:bg-[#124b8f] text-white font-bold px-5 py-2 rounded-xl text-sm transition-colors cursor-pointer"
              >
                Đã hiểu
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
