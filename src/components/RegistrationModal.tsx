import React, { useState } from 'react';
import { 
  FileSpreadsheet, 
  UserCheck, 
  Phone, 
  GraduationCap, 
  X, 
  CheckCircle, 
  Download, 
  Trash2, 
  PlusCircle, 
  Search,
  Sparkles,
  Users,
  FileText,
  AlertCircle,
  Home
} from 'lucide-react';
import { StudentRegistration } from '../types';
import { exportStudentsToExcel, exportStudentsToCsv } from '../services/excelService';
import confetti from 'canvas-confetti';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGoHome?: () => void;
  registrations: StudentRegistration[];
  onAddRegistration: (registration: Omit<StudentRegistration, 'id' | 'registeredAt'>) => void;
  onDeleteRegistration: (id: string) => void;
  onClearAllRegistrations: () => void;
  onSelectStudentForApp?: (name: string, className: string) => void;
}

const CLASS_OPTIONS = [
  '10A1', '10A2', '10A3', '10A4', '10A5', 
  '10A6', '10A7', '10A8', '10A9', '10A10',
  '10B1', '10B2', '10B3', '10C1', 'Khác'
];

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  onGoHome,
  registrations,
  onAddRegistration,
  onDeleteRegistration,
  onClearAllRegistrations,
  onSelectStudentForApp,
}) => {
  const [activeTab, setActiveTab] = useState<'form' | 'list'>('form');

  // Form states
  const [fullName, setFullName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [className, setClassName] = useState<string>('10A1');
  const [customClass, setCustomClass] = useState<string>('');
  const [notes, setNotes] = useState<string>('Học lập trình Python lớp 10');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [successMsg, setSuccessMsg] = useState<string>('');
  const [downloadNotice, setDownloadNotice] = useState<string>('');

  // Search in list
  const [searchQuery, setSearchQuery] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    const trimmedName = fullName.trim();
    const trimmedPhone = phoneNumber.trim();
    const targetClass = className === 'Khác' ? customClass.trim() : className;

    if (!trimmedName) {
      setErrorMsg('Vui lòng nhập họ và tên học sinh.');
      return;
    }

    if (!trimmedPhone) {
      setErrorMsg('Vui lòng nhập số điện thoại liên hệ.');
      return;
    }

    // Phone format check (Vietnamese phone number: 9 - 11 digits)
    const cleanPhone = trimmedPhone.replace(/[\s.-]/g, '');
    if (!/^[0-9]{9,11}$/.test(cleanPhone)) {
      setErrorMsg('Số điện thoại không hợp lệ (cần từ 9 đến 11 chữ số).');
      return;
    }

    if (!targetClass) {
      setErrorMsg('Vui lòng chọn hoặc nhập tên lớp học.');
      return;
    }

    onAddRegistration({
      fullName: trimmedName,
      phoneNumber: trimmedPhone,
      className: targetClass,
      notes: notes.trim(),
    });

    if (onSelectStudentForApp) {
      onSelectStudentForApp(trimmedName, targetClass);
    }

    setSuccessMsg(`Đăng ký thành công học sinh ${trimmedName} (${targetClass})!`);
    setFullName('');
    setPhoneNumber('');

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
      });
    } catch {
      // safe fallback
    }

    // Auto switch to list after 1.2s or allow view
    setTimeout(() => {
      setActiveTab('list');
      setSuccessMsg('');
    }, 1200);
  };

  const handleExportExcel = (targetList?: StudentRegistration[]) => {
    const listToExport = targetList || (filteredRegistrations.length > 0 ? filteredRegistrations : registrations);
    if (!listToExport || listToExport.length === 0) {
      setDownloadNotice('⚠️ Danh sách trống, vui lòng thêm học sinh trước khi xuất file.');
      setTimeout(() => setDownloadNotice(''), 3000);
      return;
    }

    const success = exportStudentsToExcel(listToExport);
    if (success) {
      setDownloadNotice(`✅ Đã xuất thành công tệp Excel (.xlsx) với ${listToExport.length} học sinh!`);
      setTimeout(() => setDownloadNotice(''), 4000);
    }
  };

  const handleExportCsv = (targetList?: StudentRegistration[]) => {
    const listToExport = targetList || (filteredRegistrations.length > 0 ? filteredRegistrations : registrations);
    if (!listToExport || listToExport.length === 0) {
      setDownloadNotice('⚠️ Danh sách trống, vui lòng thêm học sinh trước khi xuất file.');
      setTimeout(() => setDownloadNotice(''), 3000);
      return;
    }

    const success = exportStudentsToCsv(listToExport);
    if (success) {
      setDownloadNotice(`✅ Đã xuất thành công tệp CSV (.csv) với ${listToExport.length} học sinh!`);
      setTimeout(() => setDownloadNotice(''), 4000);
    }
  };

  const handleAddSampleData = () => {
    const samples = [
      { fullName: 'Nguyễn Văn An', phoneNumber: '0918123456', className: '10A1', notes: 'Bồi dưỡng HSG Tin học' },
      { fullName: 'Trần Thị Mai', phoneNumber: '0987654321', className: '10A2', notes: 'Lập trình ứng dụng Python' },
      { fullName: 'Lê Hoàng Minh', phoneNumber: '0903112233', className: '10A1', notes: 'Ôn tập Chủ đề 5 SGK' },
      { fullName: 'Phạm Hồng Nhung', phoneNumber: '0934567890', className: '10A3', notes: 'Thực hành Pyodide lớp 10' },
    ];

    samples.forEach((sample) => onAddRegistration(sample));
    setDownloadNotice('✅ Đã thêm 4 học sinh mẫu vào danh sách.');
    setTimeout(() => setDownloadNotice(''), 3000);
  };

  const filteredRegistrations = registrations.filter((r) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      r.fullName.toLowerCase().includes(q) ||
      r.phoneNumber.includes(q) ||
      r.className.toLowerCase().includes(q)
    );
  });

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-3xl w-full shadow-2xl border border-sky-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0d3d78] to-[#1259af] p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300">
              <FileSpreadsheet className="w-5 h-5 text-emerald-300" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
                Đăng ký học & Xuất File Excel
                <span className="text-[10px] font-bold bg-emerald-400 text-slate-950 px-2 py-0.5 rounded-full uppercase">
                  .XLSX / .CSV
                </span>
              </h2>
              <p className="text-xs text-sky-200 mt-0.5">
                Trường THPT Nguyễn Bỉnh Khiêm · Môn Tin học 10 · Giáo viên: Võ Thị Thanh Thảo
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                if (onGoHome) onGoHome();
              }}
              className="bg-white/10 hover:bg-white/20 text-sky-100 hover:text-white font-bold text-xs px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer border border-white/20"
              title="Trở về đầu trang chủ"
            >
              <Home className="w-3.5 h-3.5 text-amber-300" />
              <span>Trang chủ</span>
            </button>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab switch & Quick Export Bar */}
        <div className="bg-[#f0f7ff] px-5 py-2.5 border-b border-sky-200 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2 bg-white p-1 rounded-xl border border-sky-200">
            <button
              onClick={() => setActiveTab('form')}
              className={`text-xs px-3.5 py-1.5 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'form'
                  ? 'bg-[#0878ef] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#0d3d78]'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5" />
              Đăng ký học
            </button>
            <button
              onClick={() => setActiveTab('list')}
              className={`text-xs px-3.5 py-1.5 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'list'
                  ? 'bg-[#0878ef] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#0d3d78]'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              Danh sách đã lưu ({registrations.length})
            </button>
          </div>

          {/* Dual Export Buttons (.xlsx and .csv) */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => handleExportExcel()}
              disabled={registrations.length === 0}
              className="bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-white font-extrabold text-xs px-3 py-1.5 rounded-xl shadow-xs flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              title="Tải tệp Microsoft Excel (.xlsx)"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Tải Excel (.xlsx)</span>
            </button>

            <button
              onClick={() => handleExportCsv()}
              disabled={registrations.length === 0}
              className="bg-sky-700 hover:bg-sky-600 disabled:opacity-40 text-white font-bold text-xs px-2.5 py-1.5 rounded-xl shadow-xs flex items-center gap-1 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              title="Tải tệp CSV chuẩn UTF-8"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>CSV</span>
            </button>
          </div>
        </div>

        {/* Global Download Notice */}
        {downloadNotice && (
          <div className="bg-emerald-50 border-b border-emerald-200 px-5 py-2 text-xs text-emerald-800 font-semibold flex items-center justify-between animate-in fade-in">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>{downloadNotice}</span>
            </div>
            <button
              onClick={() => setDownloadNotice('')}
              className="text-emerald-700 hover:text-emerald-900 text-[11px]"
            >
              Đóng
            </button>
          </div>
        )}

        {/* Content Area */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1">
          {activeTab === 'form' ? (
            /* Tab 1: Registration Form */
            <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
              <div className="bg-sky-50 border border-sky-200 rounded-2xl p-4 text-xs text-slate-700 leading-relaxed">
                <p className="font-semibold text-[#0d3d78] mb-1">
                  📋 Thông tin đăng ký học tập môn Tin học Python lớp 10:
                </p>
                <p>
                  Học sinh điền thông tin bên dưới để giáo viên ghi nhận danh sách lớp. Dữ liệu được lưu trữ trực tiếp và giáo viên có thể xuất thành tệp <b>Microsoft Excel (.xlsx)</b> hoặc <b>CSV (.csv)</b> bất kỳ lúc nào.
                </p>
              </div>

              {errorMsg && (
                <div className="p-3 bg-rose-50 border border-rose-300 rounded-xl text-xs text-rose-700 font-semibold flex items-center gap-2 animate-in fade-in">
                  <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {successMsg && (
                <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-xl text-xs text-emerald-800 font-semibold flex items-center gap-2 animate-in fade-in">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>{successMsg}</span>
                </div>
              )}

              {/* Tên học sinh */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#0d3d78] flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4 text-blue-600" />
                  Họ và tên học sinh <span className="text-rose-500">*</span>:
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Ví dụ: Nguyễn Văn An"
                  className="w-full bg-slate-50 border border-slate-300 focus:bg-white focus:border-blue-500 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 outline-none transition-all"
                  required
                />
              </div>

              {/* Số điện thoại */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#0d3d78] flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-emerald-600" />
                  Số điện thoại liên hệ <span className="text-rose-500">*</span>:
                </label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Ví dụ: 0918123456"
                  className="w-full bg-slate-50 border border-slate-300 focus:bg-white focus:border-blue-500 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 outline-none transition-all"
                  required
                />
              </div>

              {/* Lớp */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#0d3d78] flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-indigo-600" />
                  Lớp học <span className="text-rose-500">*</span>:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <select
                    value={className}
                    onChange={(e) => setClassName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 focus:bg-white focus:border-blue-500 rounded-xl px-3 py-2 text-xs sm:text-sm font-semibold text-slate-900 outline-none cursor-pointer"
                  >
                    {CLASS_OPTIONS.map((c) => (
                      <option key={c} value={c}>
                        Lớp {c}
                      </option>
                    ))}
                  </select>

                  {className === 'Khác' && (
                    <input
                      type="text"
                      value={customClass}
                      onChange={(e) => setCustomClass(e.target.value)}
                      placeholder="Gõ tên lớp (VD: 10 Chuyên...)"
                      className="w-full bg-slate-50 border border-slate-300 focus:bg-white focus:border-blue-500 rounded-xl px-3 py-2 text-xs font-semibold text-slate-900 outline-none"
                    />
                  )}
                </div>
              </div>

              {/* Ghi chú */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-600 block">
                  Mục tiêu / Ghi chú học tập (tùy chọn):
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="VD: Bồi dưỡng HSG, Ôn tập kiểm tra định kỳ..."
                  className="w-full bg-slate-50 border border-slate-300 focus:bg-white focus:border-blue-500 rounded-xl px-3.5 py-2 text-xs text-slate-700 outline-none"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-[#0878ef] hover:bg-[#0065d3] text-white font-extrabold text-sm py-3 px-4 rounded-xl shadow-md shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <UserCheck className="w-4 h-4" />
                  Đăng ký học
                </button>
              </div>
            </form>
          ) : (
            /* Tab 2: Registrations Management List */
            <div className="space-y-4">
              {/* List Toolbar */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-200">
                <div className="relative w-full sm:w-64">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Tìm theo tên, SĐT, lớp..."
                    className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg outline-none font-medium text-slate-800"
                  />
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto justify-end flex-wrap">
                  {registrations.length === 0 && (
                    <button
                      onClick={handleAddSampleData}
                      className="text-xs bg-sky-100 hover:bg-sky-200 text-sky-800 font-bold px-2.5 py-1.5 rounded-lg flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <PlusCircle className="w-3.5 h-3.5" />
                      Nạp mẫu học sinh
                    </button>
                  )}

                  <button
                    onClick={() => handleExportExcel(filteredRegistrations)}
                    disabled={registrations.length === 0}
                    className="text-xs bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
                    title="Xuất bảng Excel (.xlsx)"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Xuất Excel (.xlsx)</span>
                  </button>

                  <button
                    onClick={() => handleExportCsv(filteredRegistrations)}
                    disabled={registrations.length === 0}
                    className="text-xs bg-sky-700 hover:bg-sky-600 disabled:opacity-50 text-white font-bold px-2.5 py-1.5 rounded-lg flex items-center gap-1 transition-all shadow-xs cursor-pointer"
                    title="Xuất bảng CSV (.csv)"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>CSV</span>
                  </button>

                  {registrations.length > 0 && (
                    <button
                      onClick={onClearAllRegistrations}
                      className="text-xs text-rose-600 hover:text-rose-800 bg-rose-50 hover:bg-rose-100 p-1.5 rounded-lg border border-rose-200 transition-colors cursor-pointer"
                      title="Xóa toàn bộ danh sách"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Table */}
              {registrations.length === 0 ? (
                <div className="p-10 text-center text-slate-400 space-y-2 border-2 border-dashed border-slate-200 rounded-2xl">
                  <FileSpreadsheet className="w-10 h-10 mx-auto text-slate-300" />
                  <p className="text-sm font-semibold text-slate-600">
                    Chưa có học sinh nào đăng ký trong danh sách.
                  </p>
                  <p className="text-xs text-slate-400">
                    Chuyển sang tab "Đăng ký học" để điền thông tin hoặc nhấn "Nạp mẫu học sinh" để thử nghiệm xuất file.
                  </p>
                </div>
              ) : (
                <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-[#0d3d78] text-white uppercase text-[10px] tracking-wider font-extrabold">
                        <tr>
                          <th className="py-2.5 px-3 text-center w-12">STT</th>
                          <th className="py-2.5 px-3">Họ và tên học sinh</th>
                          <th className="py-2.5 px-3">Số điện thoại</th>
                          <th className="py-2.5 px-3 text-center">Lớp</th>
                          <th className="py-2.5 px-3">Ngày đăng ký</th>
                          <th className="py-2.5 px-3">Mục tiêu</th>
                          <th className="py-2.5 px-3 text-center w-14">Xóa</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-medium text-slate-700 bg-white">
                        {filteredRegistrations.map((st, idx) => (
                          <tr key={st.id} className="hover:bg-sky-50/60 transition-colors">
                            <td className="py-2 px-3 text-center font-bold text-slate-400">
                              {idx + 1}
                            </td>
                            <td className="py-2 px-3 font-bold text-[#0d3d78]">
                              {st.fullName}
                            </td>
                            <td className="py-2 px-3 font-mono text-emerald-700 font-semibold">
                              {st.phoneNumber}
                            </td>
                            <td className="py-2 px-3 text-center">
                              <span className="bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded-full text-[11px]">
                                {st.className}
                              </span>
                            </td>
                            <td className="py-2 px-3 text-[11px] text-slate-400">
                              {st.registeredAt}
                            </td>
                            <td className="py-2 px-3 text-[11px] text-slate-500 max-w-xs truncate">
                              {st.notes || 'Học lập trình Python'}
                            </td>
                            <td className="py-2 px-3 text-center">
                              <button
                                onClick={() => onDeleteRegistration(st.id)}
                                className="text-slate-400 hover:text-rose-600 p-1 rounded transition-colors cursor-pointer"
                                title="Xóa học sinh này"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Excel notice banner */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3.5 text-xs text-emerald-900 flex items-center justify-between gap-3 flex-wrap">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>
                    Tổng số: <b>{registrations.length} học sinh</b>
                    {searchQuery ? ` (đang lọc ${filteredRegistrations.length} học sinh)` : ''}.
                    Nhấn vào nút bên cạnh để tải danh sách về máy tính.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleExportExcel(filteredRegistrations)}
                    disabled={registrations.length === 0}
                    className="bg-emerald-700 hover:bg-emerald-800 disabled:opacity-40 text-white font-bold text-xs px-3 py-1.5 rounded-lg flex items-center gap-1 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Tải Excel (.xlsx)
                  </button>
                  <button
                    onClick={() => handleExportCsv(filteredRegistrations)}
                    disabled={registrations.length === 0}
                    className="bg-sky-700 hover:bg-sky-800 disabled:opacity-40 text-white font-bold text-xs px-2.5 py-1.5 rounded-lg flex items-center gap-1 cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    Tải CSV
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-5 py-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Trường THPT Nguyễn Bỉnh Khiêm · GV: <b>Võ Thị Thanh Thảo</b></span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                if (onGoHome) onGoHome();
              }}
              className="bg-[#0d3d78] hover:bg-[#154b8d] text-white font-bold px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
            >
              <Home className="w-3.5 h-3.5 text-amber-300" />
              <span>Trở về trang chủ</span>
            </button>
            <button
              onClick={onClose}
              className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold px-4 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
