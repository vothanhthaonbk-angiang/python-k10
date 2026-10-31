export interface QuizMasterQuestion {
  topic: string;
  q: string;
  a: string[];
  correct: number;
  why: string;
}

export const QUIZ_MASTER_QUESTIONS: QuizMasterQuestion[] = [
  {
    topic: "Biến và lệnh gán",
    q: "Sau khi chạy đoạn lệnh x = 5; x = x + 2, giá trị của x là gì?",
    a: ["5", "2", "7", "x + 2"],
    correct: 2,
    why: "Lệnh gán thứ hai lấy giá trị hiện tại của x (5), cộng 2 rồi gán lại cho x."
  },
  {
    topic: "Kiểu dữ liệu",
    q: "Kiểu dữ liệu của giá trị 3.14 trong Python là gì?",
    a: ["int", "float", "str", "bool"],
    correct: 1,
    why: "Số thực như 3.14 thuộc kiểu float."
  },
  {
    topic: "Lệnh xuất",
    q: "Lệnh nào thường dùng để đưa thông tin ra màn hình?",
    a: ["input()", "print()", "int()", "type()"],
    correct: 1,
    why: "print() hiển thị dữ liệu ra màn hình."
  },
  {
    topic: "Lệnh nhập",
    q: "Hàm input() trả về dữ liệu thuộc kiểu nào nếu không chuyển đổi?",
    a: ["int", "float", "str", "bool"],
    correct: 2,
    why: "input() trả về chuỗi ký tự; muốn dùng như số cần chuyển đổi kiểu."
  },
  {
    topic: "Điều kiện",
    q: "Cấu trúc nào dùng để rẽ nhánh theo điều kiện trong Python?",
    a: ["if", "for", "print", "import"],
    correct: 0,
    why: "if kiểm tra điều kiện để lựa chọn khối lệnh thực hiện."
  },
  {
    topic: "Toán tử so sánh",
    q: "Biểu thức 4 >= 4 cho kết quả nào?",
    a: ["False", "True", "4", "Lỗi cú pháp"],
    correct: 1,
    why: ">= có nghĩa là lớn hơn hoặc bằng; 4 bằng 4 nên kết quả là True."
  },
  {
    topic: "Vòng lặp for",
    q: "range(3) tạo ra dãy giá trị nào khi duyệt bằng for?",
    a: ["1, 2, 3", "0, 1, 2", "0, 1, 2, 3", "3, 2, 1"],
    correct: 1,
    why: "range(3) tạo các số nguyên 0, 1, 2; điểm kết thúc 3 không được lấy."
  },
  {
    topic: "Vòng lặp while",
    q: "Vòng lặp while tiếp tục thực hiện khi nào?",
    a: ["Điều kiện đúng", "Điều kiện sai", "Chương trình chưa có biến", "Luôn đúng một lần"],
    correct: 0,
    why: "while lặp khi biểu thức điều kiện còn True."
  },
  {
    topic: "Toán tử số học",
    q: "Trong Python, 7 // 2 cho kết quả nào?",
    a: ["3.5", "1", "3", "4"],
    correct: 2,
    why: "// là phép chia lấy phần nguyên theo quy tắc làm tròn xuống; 7 // 2 bằng 3."
  },
  {
    topic: "Lỗi chương trình",
    q: "Tên biến nào dưới đây hợp lệ trong Python?",
    a: ["2diem", "diem-toan", "diem_toan", "class"],
    correct: 2,
    why: "Tên biến có thể chứa chữ, số và dấu gạch dưới, nhưng không bắt đầu bằng số hoặc trùng từ khóa."
  }
];
