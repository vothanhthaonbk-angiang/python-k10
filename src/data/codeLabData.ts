export interface CodeLabTask {
  id: number;
  title: string;
  level: 'Cơ bản' | 'Thông hiểu' | 'Vận dụng';
  desc: string;
  code: string;
  hint: string;
}

export const CODE_LAB_TASKS: CodeLabTask[] = [
  {
    id: 1,
    title: "Bài 1 — Lệnh xuất print()",
    level: "Cơ bản",
    desc: "Nhiệm vụ: hiển thị lời chào và kết quả của phép tính 12 + 8.",
    code: 'print("Xin chào Python!")\nprint(12 + 8)',
    hint: "Dùng print(...) để hiển thị nội dung. Chuỗi ký tự đặt trong dấu nháy."
  },
  {
    id: 2,
    title: "Bài 2 — Biến và lệnh gán",
    level: "Cơ bản",
    desc: "Nhiệm vụ: gán giá trị cho hai biến a, b rồi in tổng của chúng.",
    code: "a = 7\nb = 5\ntong = a + b\nprint(tong)",
    hint: "Dùng dấu = để gán giá trị; phép cộng hai biến viết là a + b."
  },
  {
    id: 3,
    title: "Bài 3 — Nhập dữ liệu",
    level: "Cơ bản",
    desc: "Nhiệm vụ: chuyển chuỗi '16' thành số nguyên rồi cộng thêm 4. Không cần nhập từ bàn phím.",
    code: 's = "16"\nn = int(s)\nprint(n + 4)',
    hint: "input() trả về chuỗi. Hàm int(...) chuyển chuỗi số hợp lệ thành số nguyên."
  },
  {
    id: 4,
    title: "Bài 4 — Câu lệnh if",
    level: "Thông hiểu",
    desc: "Nhiệm vụ: kiểm tra n = 9 là số chẵn hay lẻ bằng phép chia lấy dư %.",
    code: 'n = 9\nif n % 2 == 0:\n    print("Số chẵn")\nelse:\n    print("Số lẻ")',
    hint: "Một số nguyên chẵn khi n % 2 == 0. Nhớ dấu hai chấm và thụt lề khối lệnh."
  },
  {
    id: 5,
    title: "Bài 5 — Vòng lặp for",
    level: "Thông hiểu",
    desc: "Nhiệm vụ: in các số từ 0 đến 4 bằng range(5).",
    code: "for i in range(5):\n    print(i)",
    hint: "range(5) tạo các giá trị 0, 1, 2, 3, 4; số 5 không nằm trong dãy."
  },
  {
    id: 6,
    title: "Bài 6 — Tích lũy trong vòng lặp",
    level: "Vận dụng",
    desc: "Nhiệm vụ: tính tổng các số từ 1 đến 5.",
    code: "tong = 0\nfor i in range(1, 6):\n    tong = tong + i\nprint(tong)",
    hint: "Khởi tạo tong = 0, sau đó cộng lần lượt từng giá trị i. range(1, 6) kết thúc trước 6."
  }
];
