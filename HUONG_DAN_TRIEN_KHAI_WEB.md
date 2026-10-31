# HƯỚNG DẪN ĐƯA WEBSITE LÊN MẠNG INTERNET (WEB HOSTING)
### Ứng dụng: Lập trình Python trực tuyến - THPT Nguyễn Bỉnh Khiêm · Tỉnh An Giang

---

## 📦 CÁC GÓI ĐÃ ĐƯỢC ĐÓNG GÓI SẴN

1. **`dist/` & `dist.zip` (Gói Web tĩnh thành phẩm - Khuyên dùng)**:
   - Đã được biên dịch tối ưu (HTML, CSS, JavaScript, WebAssembly Pyodide).
   - Đã cấu hình đường dẫn tương đối (`base: './'`), tương thích 100% với mọi loại web server, tên miền phụ hoặc thư mục con.
   - **Chỉ cần giải nén và tải lên hosting là website chạy ngay lập tức**, không cần cài đặt thêm Node.js hay npm trên server.

2. **`source_code.zip` (Toàn bộ mã nguồn dự án)**:
   - Dành cho thầy/cô hoặc quản trị viên muốn tiếp tục nâng cấp, chỉnh sửa mã nguồn với React + Vite + TypeScript + Tailwind CSS.

---

## 🚀 CÁCH 1: ĐƯA LÊN VERCEL HOẶC NETLIFY (MIỄN PHÍ - 30 GIÂY)

### Dùng Netlify Drop:
1. Truy cập [app.netlify.com/drop](https://app.netlify.com/drop)
2. Kéo thả thư mục `dist` (hoặc giải nén `dist.zip` rồi kéo thư mục đó vào trình duyệt).
3. Đợi 5 giây, Netlify sẽ cấp ngay một đường link website chính thức dạng: `https://ten-tuy-chon.netlify.app` chạy online 24/7.

### Dùng Vercel:
1. Đăng ký tài khoản miễn phí tại [vercel.com](https://vercel.com).
2. Tạo dự án mới, liên kết với GitHub hoặc tải thư mục `dist` lên.

---

## 🚀 CÁCH 2: ĐƯA LÊN GITHUB PAGES (MIỄN PHÍ DÀNH CHO GIÁO DỤC)

1. Tạo một Repository mới trên GitHub (ví dụ: `hoc-tot-python`).
2. Tải toàn bộ nội dung trong thư mục `dist/` (gồm file `index.html` và thư mục `assets/`) lên nhánh `main` hoặc `gh-pages`.
3. Vào **Settings** của Repo > Chọn mục **Pages** > Chọn nguồn phát hành từ nhánh `main` (root) > Nhấn **Save**.
4. Website sẽ xuất hiện tại địa chỉ: `https://<ten-tai-khoan>.github.io/hoc-tot-python/`.

---

## 🚀 CÁCH 3: ĐƯA LÊN HOSTING CỦA TRƯỜNG HOẶC CPANEL / DIRECTADMIN

1. Đăng nhập vào trang quản trị cPanel / DirectAdmin của trường hoặc hosting cá nhân.
2. Mở trình quản lý file (**File Manager**), tìm đến thư mục `public_html` (hoặc thư mục web con bạn muốn chứa trang).
3. Tải file `dist.zip` lên và chọn **Extract (Giải nén)** trực tiếp tại đây.
4. Đảm bảo file `index.html` nằm ngay trong thư mục gốc của trang web. Website đã sẵn sàng hoạt động!

---

## 🌐 LINK TRỰC TUYẾN ĐANG HOẠT ĐỘNG SẴN CỦA GOOGLE CLOUD
Ứng dụng hiện đang được vận hành trực tiếp trên nền tảng điện toán đám mây:
- **Link chia sẻ (Shared App URL)**:
  `https://ais-pre-2ynbe2ergzcavoketd4txw-896913950579.asia-southeast1.run.app`
