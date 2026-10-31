# Học Tốt Python - THPT Nguyễn Bỉnh Khiêm (An Giang)

Nền tảng học và thực hành lập trình Python trực tuyến dành cho học sinh THPT lớp 10 bám sát **Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính** (Sách giáo khoa Tin học 10 – Bộ sách *Kết nối tri thức với cuộc sống*, Nhà xuất bản Giáo dục Việt Nam).

- **Đơn vị:** Trường THPT Nguyễn Bỉnh Khiêm, tỉnh An Giang
- **Giáo viên thực hiện:** ThS. VÕ THỊ THANH THẢO
- **Email:** vothanhthaoangiang@gmail.com

---

## 🌟 Tính Năng Nổi Bật

1. **17 Bài học bám sát 100% SGK Tin học 10 (Chủ đề 5):**
   - Từ Bài 16 đến Bài 32 (Trang 86 – Trang 156).
   - Nội dung tóm tắt chuẩn "Hộp kiến thức", phân tích ví dụ minh họa và nhiệm vụ thực hành.
   - Nút chuyển mã mẫu vào IDE để chạy ngay chỉ với 1 click.

2. **Phòng thực hành Python WebAssembly (Pyodide v0.27.7):**
   - Chạy trực tiếp 100% trên trình duyệt mà không cần cài đặt Python.
   - Hỗ trợ phím `Tab` thụt lề 4 dấu cách, phóng to/thu nhỏ cỡ chữ, tải file `.py`.
   - Chế độ nhập dữ liệu chuẩn (Stdin) và nhập tương tác trực tiếp trong console.
   - Giải thích lỗi bằng tiếng Việt dễ hiểu (`SyntaxError`, `IndentationError`, `ZeroDivisionError`...).

3. **Menu 14 Mẫu code thực hành chuẩn SGK:**
   - Cung cấp sẵn mã nguồn mẫu của tất cả các bài: *Tính chu vi hình tròn*, *Tính tiền điện bậc thang*, *Ước số*, *Mã ASCII*, *Xóa số âm*, *Tách họ tên đệm*, *Hàm số nguyên tố*, *Debug UCLN*, *Phân tích thừa số nguyên tố*, *Giải PT bậc hai*, *Trọng lượng các hành tinh*, *Kiểm tra ngày tháng năm hợp lệ*.

4. **Hệ thống Bài tập tự chấm (Auto-Judge):**
   - 6 bài tập lập trình với bộ Test Case tự động kiểm tra kết quả (Accepted / Wrong Answer).

5. **Trung tâm Trắc nghiệm kiến thức:**
   - 10 câu hỏi trắc nghiệm đánh giá năng lực kèm giải thích chi tiết đáp án.

6. **Giấy chứng nhận hoàn thành khóa học:**
   - Cấp chứng chỉ chính thức mang tên học sinh, lớp và trường THPT Nguyễn Bỉnh Khiêm có chữ ký xác nhận số của giáo viên phụ trách, hỗ trợ in hoặc lưu file PDF.

7. **Form Đăng ký học sinh & Xuất file Excel (.xlsx):**
   - Đăng ký thông tin: Họ tên, Số điện thoại, Lớp.
   - Lưu trữ an toàn trong `localStorage`.
   - Xuất danh sách học sinh ra file Microsoft Excel (`.xlsx`) chỉ với 1 click.

---

## 🚀 Cài Đặt & Chạy Cục Bộ (Local Development)

Yêu cầu máy tính đã cài đặt **Node.js** (phiên bản 18 trở lên).

```bash
# 1. Cài đặt các thư viện phụ thuộc
npm install

# 2. Khởi động môi trường phát triển
npm run dev

# 3. Mở trình duyệt tại địa chỉ
http://localhost:3000
```

---

## 📦 Biên Dịch Bản Xuất Bản (Build Production)

```bash
# Biên dịch ra thư mục dist/
npm run build
```

Sau khi biên dịch, toàn bộ mã nguồn tĩnh nằm trong thư mục `dist/`, có thể tải lên GitHub Pages, Vercel, Netlify hoặc hosting của nhà trường.
