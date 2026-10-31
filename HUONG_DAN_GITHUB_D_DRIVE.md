# 📦 HƯỚNG DẪN LƯU VÀO THƯ MỤC Ổ ĐĨA D:\ VÀ ĐƯA LÊN GITHUB

Tài liệu này hướng dẫn chi tiết cách lưu toàn bộ mã nguồn website **"Học tốt Python - THPT Nguyễn Bỉnh Khiêm"** vào ổ đĩa `D:\` trên máy tính và đưa lên GitHub một cách nhanh chóng, chuẩn xác.

---

## BƯỚC 1: TẢI VÀ GIẢI NÉN VÀO THƯ MỤC D:\

1. **Tải file mã nguồn:**
   - Bạn có thể tải file nén mã nguồn **`source_code.zip`** (hoặc nhấn nút **"Tải mã nguồn (.ZIP) cho GitHub"** ngay trên giao diện web).
   - Nếu bạn muốn tải bản xuất bản chạy trực tiếp (không cần cài Node.js), tải file **`dist.zip`**.

2. **Lưu và giải nén vào ổ đĩa D:**
   - Di chuyển file `source_code.zip` vào ổ đĩa `D:\`.
   - Nhấp chuột phải vào file `source_code.zip` ➔ chọn **Extract All...** (hoặc giải nén bằng WinRAR/7-Zip).
   - Đặt tên thư mục giải nén, ví dụ:
     ```text
     D:\Hoc-Tot-Python-NBK\
     ```
   - Cấu trúc thư mục trong `D:\Hoc-Tot-Python-NBK` sẽ gồm:
     ```text
     D:\Hoc-Tot-Python-NBK\
     ├── .gitignore
     ├── .env.example
     ├── README.md
     ├── package.json
     ├── tsconfig.json
     ├── vite.config.ts
     ├── index.html
     ├── public/
     │   └── assets/
     └── src/
         ├── App.tsx
         ├── main.tsx
         ├── index.css
         ├── components/
         ├── data/
         ├── services/
         └── types/
     ```

---

## BƯỚC 2: TẠO REPOSITORY TRÊN GITHUB

1. Truy cập vào **[https://github.com](https://github.com)** và đăng nhập tài khoản của bạn.
2. Nhấn nút **"+"** ở góc trên bên phải ➔ chọn **New repository**.
3. Điền thông tin:
   - **Repository name:** `hoc-tot-python-thpt-nguyen-binh-khiem` (hoặc tên tùy chọn).
   - **Description:** `Website học và thực hành lập trình Python - THPT Nguyễn Bỉnh Khiêm, An Giang`.
   - Chọn chế độ: **Public** (Công khai) hoặc **Private** (Riêng tư).
   - **LƯU Ý:** Không tích chọn *"Add a README file"*, *"Add .gitignore"* vì dự án đã có sẵn các file chuẩn này.
4. Nhấn **Create repository**.
5. Copy đường dẫn kho mã nguồn dạng HTTPS, ví dụ:
   `https://github.com/TÊN_GITHUB_CỦA_BẠN/hoc-tot-python-thpt-nguyen-binh-khiem.git`

---

## BƯỚC 3: ĐƯA DỰ ÁN LÊN GITHUB BẰNG DÒNG LỆNH (GIT BASH HOẶC TERMINAL)

Mở **Git Bash** (hoặc Command Prompt / Terminal trong VS Code) tại thư mục `D:\Hoc-Tot-Python-NBK`:

```bash
# 1. Di chuyển vào thư mục dự án trên ổ D
d:
cd D:\Hoc-Tot-Python-NBK

# 2. Khởi tạo kho Git cục bộ
git init

# 3. Thêm tất cả các file vào Git (đã tự loại trừ node_modules qua .gitignore)
git add .

# 4. Lưu vết phiên bản đầu tiên
git commit -m "Phiên bản đầu tiên: Website Học tốt Python - THPT Nguyễn Bỉnh Khiêm"

# 5. Đổi tên nhánh chính thành main
git branch -M main

# 6. Liên kết với kho chứa GitHub của bạn (thay bằng URL GitHub của bạn)
git remote add origin https://github.com/TÊN_GITHUB_CỦA_BẠN/hoc-tot-python-thpt-nguyen-binh-khiem.git

# 7. Đẩy toàn bộ mã nguồn lên GitHub
git push -u origin main
```

*(Lần đầu tiên đẩy lên, trình duyệt sẽ mở cửa sổ yêu cầu bạn đăng nhập và xác thực tài khoản GitHub).*

---

## BƯỚC 4: (TÙY CHỌN) TRIỂN KHAI WEBSITE MIỄN PHÍ TỪ GITHUB

Sau khi đã có mã nguồn trên GitHub, bạn có thể triển khai website hoạt động 24/7 hoàn toàn miễn phí:

### Cách 1: Đưa lên Vercel (Khuyên dùng - Nhanh nhất)
1. Truy cập **[https://vercel.com](https://vercel.com)** ➔ Đăng nhập bằng tài khoản GitHub.
2. Chọn **"Add New..."** ➔ **"Project"**.
3. Chọn kho `hoc-tot-python-thpt-nguyen-binh-khiem` vừa đẩy lên.
4. Nhấn **Deploy**. Vercel sẽ tự động build và cấp một tên miền miễn phí (dạng `ten-du-an.vercel.app`).

### Cách 2: Đưa lên GitHub Pages
1. Trong file `package.json`, chạy lệnh tạo bản build:
   ```bash
   npm run build
   ```
2. Thư mục `dist/` chứa trang web tĩnh hoàn chỉnh. Bạn có thể triển khai nhánh `gh-pages` hoặc dùng GitHub Actions để xuất bản tự động.

---

## BƯỚC 5: CHẠY VÀ CHỈNH SỬA CỤC BỘ TRÊN MÁY TÍNH

Khi cần phát triển hoặc chỉnh sửa nội dung bài học:
1. Đảm bảo máy tính đã cài đặt **Node.js** (tải tại [nodejs.org](https://nodejs.org/)).
2. Mở thư mục `D:\Hoc-Tot-Python-NBK` bằng **Visual Studio Code**.
3. Mở Terminal (`Ctrl + ~`) và gõ:
   ```bash
   # Cài đặt thư viện
   npm install

   # Chạy máy chủ thử nghiệm
   npm run dev
   ```
4. Mở trình duyệt xem tại: `http://localhost:3000`

---
*Tác giả: ThS. Võ Thị Thanh Thảo - THPT Nguyễn Bỉnh Khiêm, tỉnh An Giang*  
*Email: vothanhthaoangiang@gmail.com*
