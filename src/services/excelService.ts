import * as XLSX from 'xlsx';
import { StudentRegistration } from '../types';

/**
 * Trình hỗ trợ tải file an toàn trên mọi trình duyệt và iframe
 */
function triggerDownload(blob: Blob, fileName: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}

/**
 * Xuất danh sách học sinh đăng ký thành tệp Microsoft Excel (.xlsx)
 */
export function exportStudentsToExcel(students: StudentRegistration[]): boolean {
  if (!students || students.length === 0) {
    return false;
  }

  try {
    // Chuyển đổi dữ liệu sang mảng đối tượng với tiêu đề tiếng Việt rõ ràng
    const rows = students.map((student, index) => ({
      'STT': index + 1,
      'Họ và tên học sinh': student.fullName,
      'Số điện thoại': student.phoneNumber,
      'Lớp': student.className,
      'Ngày đăng ký': student.registeredAt,
      'Mục tiêu / Ghi chú': student.notes || 'Học lập trình Python lớp 10',
    }));

    // Tạo worksheet từ mảng dữ liệu JSON
    const worksheet = XLSX.utils.json_to_sheet(rows);

    // Căn chỉnh độ rộng các cột tối ưu cho Microsoft Excel và Google Sheets
    worksheet['!cols'] = [
      { wch: 6 },   // STT
      { wch: 28 },  // Họ và tên học sinh
      { wch: 16 },  // Số điện thoại
      { wch: 12 },  // Lớp
      { wch: 22 },  // Ngày đăng ký
      { wch: 32 },  // Mục tiêu / Ghi chú
    ];

    // Tạo workbook và gắn sheet vào
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'DS_HocSinh');

    // Tạo mốc thời gian cho tên file
    const now = new Date();
    const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    const fileName = `Danh_sach_hoc_sinh_dang_ky_Python_THPT_NguyenBinhKhiem_${dateStr}.xlsx`;

    // Xuất nhị phân sang Blob và kích hoạt tải về an toàn
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8',
    });

    triggerDownload(blob, fileName);
    return true;
  } catch (error) {
    console.error('Lỗi khi xuất tệp Excel:', error);
    // Fallback sang định dạng CSV nếu thư viện Excel gặp sự cố
    return exportStudentsToCsv(students);
  }
}

/**
 * Xuất danh sách học sinh đăng ký thành tệp CSV chuẩn UTF-8 (có BOM)
 * Đảm bảo hiển thị chuẩn tiếng Việt có dấu trong mọi phiên bản Excel
 */
export function exportStudentsToCsv(students: StudentRegistration[]): boolean {
  if (!students || students.length === 0) {
    return false;
  }

  try {
    const headers = ['STT', 'Họ và tên học sinh', 'Số điện thoại', 'Lớp', 'Ngày đăng ký', 'Mục tiêu / Ghi chú'];
    const rows = students.map((s, index) => [
      index + 1,
      `"${s.fullName.replace(/"/g, '""')}"`,
      `"${s.phoneNumber}"`,
      `"${s.className}"`,
      `"${s.registeredAt}"`,
      `"${(s.notes || '').replace(/"/g, '""')}"`,
    ]);

    // Thêm ký tự UTF-8 BOM (\uFEFF) ở đầu file để Excel mở trực tiếp không bị lỗi font tiếng Việt
    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

    const now = new Date();
    const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    const fileName = `Danh_sach_hoc_sinh_dang_ky_Python_THPT_NguyenBinhKhiem_${dateStr}.csv`;

    triggerDownload(blob, fileName);
    return true;
  } catch (error) {
    console.error('Lỗi khi xuất tệp CSV:', error);
    return false;
  }
}
