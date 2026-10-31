import { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // =========================================================================
  // --- BÀI 16: NGÔN NGỮ LẬP TRÌNH BẬC CAO VÀ PYTHON ---
  // =========================================================================
  {
    id: 1,
    lessonId: 'bai-16',
    category: 'Kiến thức cốt lõi',
    competencyTag: 'NLa - Quản lý môi trường lập trình',
    question: 'Trong môi trường lập trình Python (Python IDLE), chế độ gõ lệnh trực tiếp (Interactive Mode) được nhận biết bằng dấu nhắc nào sau đây?',
    options: [
      { id: 'a', text: '>>>' },
      { id: 'b', text: '...' },
      { id: 'c', text: '$$$' },
      { id: 'd', text: ':::' },
    ],
    correctAnswer: 'a',
    explanation: 'Dấu nhắc >>> là biểu tượng đặc trưng của chế độ gõ lệnh trực tiếp trong Python IDLE hoặc Terminal. Khi gõ một câu lệnh và nhấn Enter, trình thông dịch Python sẽ dịch và trả về kết quả ngay lập tức.',
  },
  {
    id: 2,
    lessonId: 'bai-16',
    category: 'Đọc hiểu mã lệnh',
    competencyTag: 'NLc - Phân tích biểu thức số học',
    question: 'Trong Python 3, kết quả in ra màn hình của câu lệnh sau là gì?',
    codeSnippet: 'print(7 / 2, 15 / 3)',
    options: [
      { id: 'a', text: '3.5 5.0' },
      { id: 'b', text: '3 5' },
      { id: 'c', text: '3.5 5' },
      { id: 'd', text: '3 5.0' },
    ],
    correctAnswer: 'a',
    explanation: 'Theo SGK Tin 10 KNTT, phép toán chia / trong Python luôn trả về kết quả thuộc kiểu số thực (float), kể cả khi phép chia hết (15 / 3 = 5.0). Muốn chia lấy phần nguyên ta dùng toán tử //.',
  },
  {
    id: 3,
    lessonId: 'bai-16',
    category: 'Ứng dụng AI & Đạo đức số',
    competencyTag: 'NLd - Ứng dụng AI & Phản biện số',
    question: 'Khi yêu cầu Trợ lý AI viết mã Python in dòng chữ "Xin chào", nếu AI đưa ra câu lệnh: print "Xin chào", học sinh có năng lực số cần phát hiện điều gì?',
    codeSnippet: 'print "Xin chào"',
    options: [
      { id: 'a', text: 'Câu lệnh hoàn toàn đúng và chạy tốt trên mọi phiên bản Python hiện tại.' },
      { id: 'b', text: 'Đây là cú pháp cũ của Python 2; trong Python 3 chuẩn SGK bắt buộc phải dùng hàm print("Xin chào") có cặp ngoặc tròn, nếu không sẽ báo lỗi SyntaxError.' },
      { id: 'c', text: 'Cần thay thế dấu nháy kép bằng ba dấu gạch dưới.' },
      { id: 'd', text: 'Python không có lệnh print, phải dùng lệnh echo.' },
    ],
    correctAnswer: 'b',
    explanation: 'Năng lực số đòi hỏi học sinh biết phản biện kết quả của AI. Python 2 xem print là statement, nhưng từ Python 3 (chuẩn SGK Tin học 10 KNTT), print là một hàm bắt buộc có dấu ngoặc tròn: print("Xin chào").',
  },

  // =========================================================================
  // --- BÀI 17: BIẾN VÀ LỆNH GÁN ---
  // =========================================================================
  {
    id: 4,
    lessonId: 'bai-17',
    category: 'Kiến thức cốt lõi',
    competencyTag: 'NLc - Quy tắc định danh trong lập trình',
    question: 'Theo quy tắc đặt tên biến trong Python (SGK Tin học 10 KNTT), tên biến nào sau đây là KHÔNG HỢP LỆ?',
    options: [
      { id: 'a', text: '_tong_diem' },
      { id: 'b', text: 'diem_toan10A' },
      { id: 'c', text: '2024_hoc_sinh' },
      { id: 'd', text: 'soLuong' },
    ],
    correctAnswer: 'c',
    explanation: 'Quy tắc đặt tên biến trong Python: Chỉ gồm chữ cái, chữ số và dấu gạch dưới (_), và TUYỆT ĐỐI KHÔNG ĐƯỢC bắt đầu bằng chữ số. Tên "2024_hoc_sinh" bắt đầu bằng chữ số 2 nên sẽ báo lỗi cú pháp SyntaxError.',
  },
  {
    id: 5,
    lessonId: 'bai-17',
    category: 'Đọc hiểu mã lệnh',
    competencyTag: 'NLc - Phép toán chia nguyên và chia dư',
    question: 'Đoạn mã Python sau in ra kết quả gì?',
    codeSnippet: 'a = 17\nb = 5\nprint(a // b, a % b)',
    options: [
      { id: 'a', text: '3.4 2' },
      { id: 'b', text: '3 2' },
      { id: 'c', text: '3 0.4' },
      { id: 'd', text: '2 3' },
    ],
    correctAnswer: 'b',
    explanation: 'Toán tử // là phép chia lấy phần nguyên (17 // 5 = 3). Toán tử % là phép chia lấy phần dư (17 % 5 = 2). Kết quả in ra là: 3 2.',
  },
  {
    id: 6,
    lessonId: 'bai-17',
    category: 'Năng lực số (NLS)',
    competencyTag: 'NLc - Phép gán đồng thời (Multiple Assignment)',
    question: 'Quan sát đoạn mã gán đồng thời sau. Giá trị in ra của x và y lần lượt là gì?',
    codeSnippet: 'x, y = 5, 12\nx, y = y, x + y\nprint(x, y)',
    options: [
      { id: 'a', text: '12 17' },
      { id: 'b', text: '12 24' },
      { id: 'c', text: '5 17' },
      { id: 'd', text: '17 12' },
    ],
    correctAnswer: 'a',
    explanation: 'Trong Python, biểu thức bên phải dấu gán được tính toán trước: y có giá trị 12, x + y có giá trị 5 + 12 = 17. Sau đó gán đồng thời x = 12 và y = 17. Kết quả in ra là 12 17.',
  },

  // =========================================================================
  // --- BÀI 18: CÁC LỆNH VÀO RA ĐƠN GIẢN ---
  // =========================================================================
  {
    id: 7,
    lessonId: 'bai-18',
    category: 'Kiến thức cốt lõi',
    competencyTag: 'NLc - Xử lý kiểu dữ liệu nhập xuất',
    question: 'Mặc định, hàm input() trong Python luôn trả về dữ liệu thuộc kiểu nào?',
    options: [
      { id: 'a', text: 'int (Số nguyên)' },
      { id: 'b', text: 'float (Số thực)' },
      { id: 'c', text: 'str (Xâu kí tự)' },
      { id: 'd', text: 'bool (Logic)' },
    ],
    correctAnswer: 'c',
    explanation: 'Dữ liệu nhận từ bàn phím qua hàm input() luôn là một xâu kí tự (str), kể cả khi người dùng gõ các chữ số. Nếu muốn tính toán số học, lập trình viên bắt buộc phải dùng hàm ép kiểu int() hoặc float().',
  },
  {
    id: 8,
    lessonId: 'bai-18',
    category: 'Đọc hiểu mã lệnh',
    competencyTag: 'NLc - Bẫy nối xâu và ép kiểu',
    question: 'Khi người dùng lần lượt nhập vào số 10 và số 20, đoạn chương trình sau in ra kết quả gì?',
    codeSnippet: 'a = input()\nb = input()\nprint(a + b)',
    options: [
      { id: 'a', text: '30' },
      { id: 'b', text: '1020' },
      { id: 'c', text: '10 20' },
      { id: 'd', text: 'Báo lỗi TypeError' },
    ],
    correctAnswer: 'b',
    explanation: 'Vì input() trả về xâu kí tự, biến a nhận "10" và b nhận "20". Toán tử + giữa hai xâu kí tự là phép ghép/nối xâu, kết quả là "1020". Để cộng được 30, cần viết: print(int(a) + int(b)).',
  },
  {
    id: 9,
    lessonId: 'bai-18',
    category: 'Ứng dụng AI & Đạo đức số',
    competencyTag: 'NLa - Định dạng xuất chuẩn với sep và end',
    question: 'Đoạn mã Python sau in ra nội dung gì trên màn hình?',
    codeSnippet: 'print("Tin", "10", sep="-", end="!")\nprint("KNTT")',
    options: [
      { id: 'a', text: 'Tin-10!KNTT' },
      { id: 'b', text: 'Tin 10!\\nKNTT' },
      { id: 'c', text: 'Tin-10\\nKNTT!' },
      { id: 'd', text: 'Tin 10-KNTT!' },
    ],
    correctAnswer: 'a',
    explanation: 'Tham số sep="-" quy định kí tự ngăn cách giữa các giá trị in ("Tin-10"). Tham số end="!" quy định kí tự kết thúc dòng thay vì xuống dòng mặc định. Do đó dòng print tiếp theo in ngay liền kề tạo thành: Tin-10!KNTT.',
  },

  // =========================================================================
  // --- BÀI 19: CÂU LỆNH RẼ NHÁNH IF ---
  // =========================================================================
  {
    id: 10,
    lessonId: 'bai-19',
    category: 'Kiến thức cốt lõi',
    competencyTag: 'NLc - Cú pháp và quy tắc thụt lề if',
    question: 'Quy tắc nào sau đây là BẮT BUỘC khi viết câu lệnh rẽ nhánh if trong Python?',
    options: [
      { id: 'a', text: 'Điều kiện sau if phải đặt trong cặp ngoặc nhọn { }.' },
      { id: 'b', text: 'Cuối dòng có điều kiện if hoặc else phải có dấu hai chấm (:), và khối lệnh bên trong phải thụt đầu dòng (Indentation).' },
      { id: 'c', text: 'Bắt buộc phải kết thúc khối lệnh bằng từ khóa end if.' },
      { id: 'd', text: 'Sau mỗi câu lệnh con phải có dấu chấm phẩy (;).' },
    ],
    correctAnswer: 'b',
    explanation: 'Trong Python, cú pháp bắt buộc là: if <điều kiện>: và else:. Khối lệnh con thuộc nhánh if/else bắt buộc phải thụt đầu dòng (thường là 4 dấu cách). Vi phạm thụt lề sẽ báo lỗi IndentationError.',
  },
  {
    id: 11,
    lessonId: 'bai-19',
    category: 'Đọc hiểu mã lệnh',
    competencyTag: 'NLc - Đánh giá biểu thức logic phức hợp',
    question: 'Cho x = 12. Biểu thức logic sau đây trả về giá trị gì?',
    codeSnippet: 'x = 12\nkq = (x % 2 == 0) and not (x > 15 or x < 10)\nprint(kq)',
    options: [
      { id: 'a', text: 'True' },
      { id: 'b', text: 'False' },
      { id: 'c', text: 'None' },
      { id: 'd', text: 'Báo lỗi cú pháp' },
    ],
    correctAnswer: 'a',
    explanation: 'x = 12 nên x % 2 == 0 là True. Biểu thức (x > 15 or x < 10) là False (vì 12 không lớn hơn 15 cũng không nhỏ hơn 10). Do đó not(False) là True. Cuối cùng, True and True cho kết quả True.',
  },
  {
    id: 12,
    lessonId: 'bai-19',
    category: 'Ứng dụng AI & Đạo đức số',
    competencyTag: 'NLc - Kiểm thử ranh giới thuật toán với AI',
    question: 'Khi lập trình phân loại học lực (Giỏi: đtb >= 8.0, Khá: 6.5 <= đtb < 8.0), học sinh cần cung cấp bộ test case nào để phát hiện AI viết nhầm dấu so sánh > thành >= hoặc ngược lại?',
    options: [
      { id: 'a', text: '[9.5, 7.5, 5.5]' },
      { id: 'b', text: '[8.0, 7.9, 6.5, 6.4]' },
      { id: 'c', text: '[100, 200, 300]' },
      { id: 'd', text: '[-1, -5, -10]' },
    ],
    correctAnswer: 'b',
    explanation: 'Năng lực số trong kiểm thử phần mềm yêu cầu chọn các giá trị tại đúng ranh giới chuyển tiếp (boundary values: 8.0, 7.9, 6.5, 6.4). Nếu AI dùng nhầm đtb > 8.0 thì học sinh có đtb = 8.0 sẽ bị xếp sai loại.',
  },

  // =========================================================================
  // --- BÀI 20: CÂU LỆNH LẶP FOR ---
  // =========================================================================
  {
    id: 13,
    lessonId: 'bai-20',
    category: 'Kiến thức cốt lõi',
    competencyTag: 'NLc - Vùng lặp với hàm range',
    question: 'Hàm range(1, 10, 2) trong Python sẽ tạo ra dãy số gồm các phần tử nào?',
    options: [
      { id: 'a', text: '1, 3, 5, 7, 9' },
      { id: 'b', text: '1, 3, 5, 7, 9, 11' },
      { id: 'c', text: '2, 4, 6, 8, 10' },
      { id: 'd', text: '1, 2, 3, 4, 5, 6, 7, 8, 9' },
    ],
    correctAnswer: 'a',
    explanation: 'Cú pháp range(start, stop, step): bắt đầu từ 1, bước nhảy 2, kết thúc trước giá trị 10. Ta được các số: 1, 3, 5, 7, 9. Số tiếp theo là 11 đã >= stop (10) nên không thuộc dãy.',
  },
  {
    id: 14,
    lessonId: 'bai-20',
    category: 'Đọc hiểu mã lệnh',
    competencyTag: 'NLc - Bảng vết vòng lặp tính tổng lẻ',
    question: 'Đoạn mã Python sau in ra giá trị của biến s là bao nhiêu?',
    codeSnippet: 's = 0\nfor i in range(1, 6):\n    if i % 2 != 0:\n        s += i\nprint(s)',
    options: [
      { id: 'a', text: '9' },
      { id: 'b', text: '15' },
      { id: 'c', text: '6' },
      { id: 'd', text: '25' },
    ],
    correctAnswer: 'a',
    explanation: 'range(1, 6) sinh các giá trị i: 1, 2, 3, 4, 5. Các giá trị thỏa mãn i % 2 != 0 (số lẻ) là 1, 3, 5. Tổng s = 1 + 3 + 5 = 9.',
  },
  {
    id: 15,
    lessonId: 'bai-20',
    category: 'Năng lực số (NLS)',
    competencyTag: 'NLd - Nhận diện lỗi lệch một giá trị (Off-by-one)',
    question: 'Muốn tính tổng các số tự nhiên từ 1 đến N (kể cả N), câu lệnh lặp for nào sau đây là ĐÚNG chuẩn SGK?',
    options: [
      { id: 'a', text: 'for i in range(1, N):' },
      { id: 'b', text: 'for i in range(1, N + 1):' },
      { id: 'c', text: 'for i in range(0, N):' },
      { id: 'd', text: 'for i in range(N):' },
    ],
    correctAnswer: 'b',
    explanation: 'Trong hàm range(start, stop), cận trên stop luôn không được lấy (chỉ chạy đến stop - 1). Vì vậy, muốn vòng lặp chạy đến số N, bắt buộc stop phải là N + 1: range(1, N + 1).',
  },

  // =========================================================================
  // --- BÀI 21: CÂU LỆNH LẶP WHILE ---
  // =========================================================================
  {
    id: 16,
    lessonId: 'bai-21',
    category: 'Kiến thức cốt lõi',
    competencyTag: 'NLc - Nguyên lý vòng lặp while',
    question: 'Câu lệnh lặp while trong Python hoạt động theo nguyên tắc nào?',
    options: [
      { id: 'a', text: 'Thực hiện lặp với số lần xác định trước được khai báo ở đầu chương trình.' },
      { id: 'b', text: 'Kiểm tra điều kiện trước, tiếp tục lặp khi điều kiện còn True, dừng lại ngay khi điều kiện nhận giá trị False.' },
      { id: 'c', text: 'Luôn thực hiện thân vòng lặp ít nhất 1 lần rồi mới kiểm tra điều kiện.' },
      { id: 'd', text: 'Tự động dừng sau 100 lần lặp.' },
    ],
    correctAnswer: 'b',
    explanation: 'Theo SGK Tin học 10 KNTT, vòng lặp while kiểm tra biểu thức điều kiện trước mỗi lần lặp. Nếu điều kiện True thì thực hiện thân vòng lặp; nếu False thì kết thúc vòng lặp ngay lập tức.',
  },
  {
    id: 17,
    lessonId: 'bai-21',
    category: 'Đọc hiểu mã lệnh',
    competencyTag: 'NLc - Vết thuật toán chia đôi với while',
    question: 'Đoạn mã Python sau in ra màn hình giá trị của biến dem là bao nhiêu?',
    codeSnippet: 'n = 16\ndem = 0\nwhile n > 1:\n    n = n // 2\n    dem += 1\nprint(dem)',
    options: [
      { id: 'a', text: '3' },
      { id: 'b', text: '4' },
      { id: 'c', text: '5' },
      { id: 'd', text: '16' },
    ],
    correctAnswer: 'b',
    explanation: 'Vết chương trình:\n- Lần 1: n = 8, dem = 1\n- Lần 2: n = 4, dem = 2\n- Lần 3: n = 2, dem = 3\n- Lần 4: n = 1, dem = 4\nLúc này n = 1 nên điều kiện n > 1 nhận giá trị False, vòng lặp dừng. In ra dem = 4.',
  },
  {
    id: 18,
    lessonId: 'bai-21',
    category: 'Ứng dụng AI & Đạo đức số',
    competencyTag: 'NLa - Phòng tránh lỗi vòng lặp vô hạn',
    question: 'Đoạn mã sau bị lỗi "Vòng lặp vô tận" (Infinite Loop) làm treo máy tính. Nguyên nhân chính là gì?',
    codeSnippet: 'k = 1\nwhile k <= 5:\n    print(k, end=" ")',
    options: [
      { id: 'a', text: 'Do trong thân vòng lặp không có câu lệnh thay đổi tăng biến k (như k += 1), khiến k luôn bằng 1 và k <= 5 luôn True.' },
      { id: 'b', text: 'Do toán tử <= không được dùng trong câu lệnh while.' },
      { id: 'c', text: 'Do tham số end=" " bị sai cú pháp.' },
      { id: 'd', text: 'Do biến k chưa được khai báo kiểu dữ liệu.' },
    ],
    correctAnswer: 'a',
    explanation: 'Khi viết vòng lặp while, trong thân vòng lặp bắt buộc phải có câu lệnh làm thay đổi giá trị biến điều khiển để điều kiện lặp dần chuyển về False. Nếu thiếu k += 1, chương trình sẽ in số 1 vô tận.',
  },

  // =========================================================================
  // --- BÀI 22: KIỂU DỮ LIỆU DANH SÁCH ---
  // =========================================================================
  {
    id: 19,
    lessonId: 'bai-22',
    category: 'Kiến thức cốt lõi',
    competencyTag: 'NLc - Cấu trúc và chỉ số danh sách',
    question: 'Cho danh sách A gồm n phần tử trong Python. Quy tắc đánh chỉ số của danh sách này như thế nào?',
    options: [
      { id: 'a', text: 'Chỉ số dương từ 1 đến n; chỉ số âm từ -n đến -1.' },
      { id: 'b', text: 'Chỉ số dương từ 0 đến n - 1; chỉ số âm từ -1 (phần tử cuối) lùi dần về -n (phần tử đầu).' },
      { id: 'c', text: 'Chỉ số luôn bắt đầu từ 1 và không có chỉ số âm.' },
      { id: 'd', text: 'Chỉ số là các kí tự chữ cái a, b, c.' },
    ],
    correctAnswer: 'b',
    explanation: 'SGK Tin 10 KNTT quy định: Danh sách trong Python được đánh chỉ số bắt đầu từ 0 đến len(A) - 1. Ngoài ra, Python hỗ trợ chỉ số âm: A[-1] là phần tử cuối cùng, A[-2] là phần tử áp chót, đến A[-n] là phần tử đầu tiên.',
  },
  {
    id: 20,
    lessonId: 'bai-22',
    category: 'Đọc hiểu mã lệnh',
    competencyTag: 'NLc - Ghép nối danh sách và chỉ số âm',
    question: 'Cho đoạn mã sau. Kết quả in ra màn hình là gì?',
    codeSnippet: 'a = [10, 20, 30]\nb = [40, 50]\nc = a + b\nprint(c[-2])',
    options: [
      { id: 'a', text: '40' },
      { id: 'b', text: '50' },
      { id: 'c', text: '30' },
      { id: 'd', text: '20' },
    ],
    correctAnswer: 'a',
    explanation: 'Phép cộng danh sách a + b tạo ra danh sách c = [10, 20, 30, 40, 50]. Phần tử c[-1] là 50, phần tử c[-2] là 40. Kết quả in ra là: 40.',
  },
  {
    id: 21,
    lessonId: 'bai-22',
    category: 'Ứng dụng AI & Đạo đức số',
    competencyTag: 'NLd - Nhận diện ngoại lệ IndexError',
    question: 'Cho danh sách ds = ["Toán", "Tin", "Lý"]. Khi thực hiện lệnh print(ds[3]), hệ thống sẽ xuất hiện thông báo lỗi nào?',
    codeSnippet: 'ds = ["Toán", "Tin", "Lý"]\nprint(ds[3])',
    options: [
      { id: 'a', text: 'IndexError: list index out of range' },
      { id: 'b', text: 'TypeError: invalid key' },
      { id: 'c', text: 'NameError: name "ds" is not defined' },
      { id: 'd', text: 'ValueError: element not found' },
    ],
    correctAnswer: 'a',
    explanation: 'Danh sách ds có 3 phần tử nên các chỉ số hợp lệ chỉ gồm 0, 1, 2. Truy cập chỉ số 3 đã vượt ra ngoài phạm vi của danh sách, làm phát sinh ngoại lệ IndexError: list index out of range.',
  },

  // =========================================================================
  // --- BÀI 23: MỘT SỐ LỆNH LÀM VIỆC VỚI DỮ LIỆU DANH SÁCH ---
  // =========================================================================
  {
    id: 22,
    lessonId: 'bai-23',
    category: 'Kiến thức cốt lõi',
    competencyTag: 'NLc - Các phương thức thao tác danh sách',
    question: 'Phương thức nào sau đây dùng để chèn một phần tử x vào vị trí chỉ số k trong danh sách A?',
    options: [
      { id: 'a', text: 'A.append(x)' },
      { id: 'b', text: 'A.insert(k, x)' },
      { id: 'c', text: 'A.add(k, x)' },
      { id: 'd', text: 'A.push(k, x)' },
    ],
    correctAnswer: 'b',
    explanation: 'Cú pháp chuẩn SGK Tin học 10 KNTT: A.insert(k, x) dùng để chèn phần tử x vào vị trí có chỉ số k. Phương thức A.append(x) chỉ thêm x vào cuối danh sách.',
  },
  {
    id: 23,
    lessonId: 'bai-23',
    category: 'Đọc hiểu mã lệnh',
    competencyTag: 'NLc - Vết thực thi remove và insert',
    question: 'Quan sát đoạn mã sau. Danh sách a sau khi thực thi có nội dung như thế nào?',
    codeSnippet: 'a = [1, 2, 3, 2, 4]\na.remove(2)\na.insert(1, 9)\nprint(a)',
    options: [
      { id: 'a', text: '[1, 9, 3, 2, 4]' },
      { id: 'b', text: '[9, 1, 3, 4]' },
      { id: 'c', text: '[1, 9, 3, 4]' },
      { id: 'd', text: '[1, 3, 2, 9, 4]' },
    ],
    correctAnswer: 'a',
    explanation: 'Lệnh a.remove(2) tìm và xóa phần tử đầu tiên có giá trị 2, danh sách còn [1, 3, 2, 4]. Lệnh a.insert(1, 9) chèn số 9 vào vị trí chỉ số 1 (đứng sau số 1), ta được danh sách: [1, 9, 3, 2, 4].',
  },
  {
    id: 24,
    lessonId: 'bai-23',
    category: 'Năng lực số (NLS)',
    competencyTag: 'NLd - Kiểm tra điều kiện an toàn với toán tử in',
    question: 'Để xóa phần tử có giá trị x ra khỏi danh sách A mà không bị dừng chương trình do lỗi ValueError (nếu x không có trong A), giải pháp nào sau đây thể hiện năng lực lập trình an toàn?',
    options: [
      { id: 'a', text: 'Cứ gọi trực tiếp A.remove(x) không cần kiểm tra.' },
      { id: 'b', text: 'Dùng cấu trúc điều kiện: if x in A: A.remove(x)' },
      { id: 'c', text: 'Xóa toàn bộ danh sách bằng A.clear() rồi nhập lại.' },
      { id: 'd', text: 'Dùng lệnh del A.' },
    ],
    correctAnswer: 'b',
    explanation: 'Toán tử in kiểm tra xem giá trị x có tồn tại trong danh sách A hay không. Viết if x in A: A.remove(x) giúp ngăn chặn lỗi thời gian chạy ValueError khi x không tồn tại.',
  },

  // =========================================================================
  // --- BÀI 24: XÂU KÍ TỰ ---
  // =========================================================================
  {
    id: 25,
    lessonId: 'bai-24',
    category: 'Kiến thức cốt lõi',
    competencyTag: 'NLc - Tính bất biến của xâu kí tự',
    question: 'Trong Python, xâu kí tự (str) có tính chất bất biến (Immutable). Điều này có nghĩa là gì?',
    options: [
      { id: 'a', text: 'Không thể in xâu kí tự ra màn hình.' },
      { id: 'b', text: 'Không thể thay đổi trực tiếp từng kí tự thông qua chỉ số (lệnh s[0] = "A" sẽ báo lỗi TypeError).' },
      { id: 'c', text: 'Không thể ghép hai xâu kí tự với nhau.' },
      { id: 'd', text: 'Xâu kí tự chỉ chứa được các chữ cái, không chứa được chữ số.' },
    ],
    correctAnswer: 'b',
    explanation: 'Xâu kí tự trong Python là đối tượng bất biến. Khi cố gắng gán kí tự mới qua chỉ số s[i] = ..., Python sẽ báo lỗi TypeError: \'str\' object does not support item assignment. Muốn sửa, ta phải tạo một xâu mới.',
  },
  {
    id: 26,
    lessonId: 'bai-24',
    category: 'Đọc hiểu mã lệnh',
    competencyTag: 'NLc - Cú pháp trích xuất lát cắt xâu',
    question: 'Cho xâu s = "TIN HOC 10". Kết quả của biểu thức lát cắt s[4:7] là gì?',
    codeSnippet: 's = "TIN HOC 10"\nprint(s[4:7])',
    options: [
      { id: 'a', text: '"HOC"' },
      { id: 'b', text: '"HOC "' },
      { id: 'c', text: '" HO"' },
      { id: 'd', text: '"TIN"' },
    ],
    correctAnswer: 'a',
    explanation: 'Chỉ số các kí tự: s[0]=\'T\', s[1]=\'I\', s[2]=\'N\', s[3]=\' \', s[4]=\'H\', s[5]=\'O\', s[6]=\'C\', s[7]=\' \'. Lát cắt s[4:7] lấy từ chỉ số 4 đến 6 (stop - 1), thu được xâu "HOC".',
  },
  {
    id: 27,
    lessonId: 'bai-24',
    category: 'Ứng dụng AI & Đạo đức số',
    competencyTag: 'NLc - Phép toán nhân bản và ghép xâu',
    question: 'Đoạn mã Python sau in ra kết quả gì trên màn hình?',
    codeSnippet: 'msg = "AI" * 3 + "!"\nprint(msg)',
    options: [
      { id: 'a', text: 'AI3!' },
      { id: 'b', text: 'AIAIAI!' },
      { id: 'c', text: 'AI AI AI !' },
      { id: 'd', text: 'Báo lỗi vì không thể nhân chuỗi với số' },
    ],
    correctAnswer: 'b',
    explanation: 'Toán tử * giữa xâu và số nguyên là phép nhân bản (lặp lại) xâu kí tự: "AI" * 3 tạo thành "AIAIAI". Sau đó ghép với "!" bằng toán tử + cho kết quả: AIAIAI!.',
  },

  // =========================================================================
  // --- BÀI 25: MỘT SỐ LỆNH LÀM VIỆC VỚI XÂU KÍ TỰ ---
  // =========================================================================
  {
    id: 28,
    lessonId: 'bai-25',
    category: 'Kiến thức cốt lõi',
    competencyTag: 'NLc - Tách và nối xâu với split và join',
    question: 'Cặp phương thức chuẩn trong Python dùng để "Tách xâu thành danh sách từ" và "Nối danh sách từ thành xâu" lần lượt là:',
    options: [
      { id: 'a', text: 'split() và join()' },
      { id: 'b', text: 'slice() và concat()' },
      { id: 'c', text: 'cut() và merge()' },
      { id: 'd', text: 'divide() và combine()' },
    ],
    correctAnswer: 'a',
    explanation: 'SGK Tin học 10 KNTT quy định rõ: Phương thức s.split() dùng để tách xâu s thành danh sách các từ. Phương thức sep.join(ds) dùng để nối các phần tử của danh sách ds thành một xâu kí tự duy nhất cách nhau bởi sep.',
  },
  {
    id: 29,
    lessonId: 'bai-25',
    category: 'Đọc hiểu mã lệnh',
    competencyTag: 'NLc - Phân tích dữ liệu xâu phân tách dấu phẩy',
    question: 'Đoạn mã sau in ra giá trị gì?',
    codeSnippet: 's = "Ha Noi,Hue,Da Nang,Can Tho"\nds = s.split(",")\nprint(len(ds), ds[1])',
    options: [
      { id: 'a', text: '4 Hue' },
      { id: 'b', text: '4 Ha Noi' },
      { id: 'c', text: '3 Da Nang' },
      { id: 'd', text: '26 Hue' },
    ],
    correctAnswer: 'a',
    explanation: 's.split(",") tách xâu tại dấu phẩy tạo thành danh sách gồm 4 phần tử: [\'Ha Noi\', \'Hue\', \'Da Nang\', \'Can Tho\']. Số phần tử len(ds) là 4, và phần tử tại chỉ số 1 là \'Hue\'. In ra: 4 Hue.',
  },
  {
    id: 30,
    lessonId: 'bai-25',
    category: 'Năng lực số (NLS)',
    competencyTag: 'NLd - Nhận biết giá trị trả về của phương thức find',
    question: 'Khi sử dụng phương thức s.find(sub), nếu xâu con sub KHÔNG xuất hiện trong xâu s thì kết quả trả về là bao nhiêu?',
    options: [
      { id: 'a', text: '0' },
      { id: 'b', text: '-1' },
      { id: 'c', text: 'False' },
      { id: 'd', text: 'Báo lỗi dừng chương trình' },
    ],
    correctAnswer: 'b',
    explanation: 'Phương thức s.find(sub) trả về chỉ số đầu tiên mà sub xuất hiện trong s; nếu không tìm thấy, nó trả về -1 mà không gây lỗi ngắt quãng chương trình. Đây là kiến thức quan trọng khi kiểm tra logic văn bản.',
  },

  // =========================================================================
  // --- BÀI 26: HÀM TRONG PYTHON ---
  // =========================================================================
  {
    id: 31,
    lessonId: 'bai-26',
    category: 'Kiến thức cốt lõi',
    competencyTag: 'NLc - Định nghĩa hàm và lệnh return',
    question: 'Từ khóa nào dùng để bắt đầu định nghĩa một hàm trong Python và điều gì xảy ra nếu hàm không có câu lệnh return?',
    options: [
      { id: 'a', text: 'Từ khóa function; hàm tự động trả về 0.' },
      { id: 'b', text: 'Từ khóa def; hàm sẽ tự động trả về giá trị đặc biệt là None.' },
      { id: 'c', text: 'Từ khóa procedure; hàm báo lỗi cú pháp.' },
      { id: 'd', text: 'Từ khóa func; hàm trả về xâu rỗng.' },
    ],
    correctAnswer: 'b',
    explanation: 'Trong Python, định nghĩa hàm bắt đầu bằng từ khóa def (define). Nếu thân hàm không chứa lệnh return hoặc chỉ có return không kèm giá trị, Python mặc định trả về đối tượng None.',
  },
  {
    id: 32,
    lessonId: 'bai-26',
    category: 'Đọc hiểu mã lệnh',
    competencyTag: 'NLc - Vết gọi hàm lồng nhau',
    question: 'Đoạn mã sau in ra giá trị gì trên màn hình?',
    codeSnippet: 'def tinh(x, y):\n    return x * 2 + y\n\na = tinh(3, 4)\nb = tinh(a, 2)\nprint(b)',
    options: [
      { id: 'a', text: '22' },
      { id: 'b', text: '10' },
      { id: 'c', text: '16' },
      { id: 'd', text: '24' },
    ],
    correctAnswer: 'a',
    explanation: 'Bước 1: a = tinh(3, 4) = 3 * 2 + 4 = 10.\nBước 2: b = tinh(a, 2) = tinh(10, 2) = 10 * 2 + 2 = 22.\nKết quả in ra là 22.',
  },
  {
    id: 33,
    lessonId: 'bai-26',
    category: 'Ứng dụng AI & Đạo đức số',
    competencyTag: 'NLc - Lợi ích của module hóa chương trình',
    question: 'Theo phương pháp luận giải quyết vấn đề bằng máy tính, việc chia nhỏ chương trình thành các hàm (module hóa) mang lại lợi ích lớn nhất nào?',
    options: [
      { id: 'a', text: 'Giúp máy tính chạy tốn ít điện năng hơn.' },
      { id: 'b', text: 'Mã nguồn được tái sử dụng, cấu trúc rõ ràng, dễ bảo trì, dễ kiểm thử độc lập và thuận lợi khi làm việc nhóm.' },
      { id: 'c', text: 'Hạn chế việc người khác sao chép mã nguồn.' },
      { id: 'd', text: 'Bỏ qua được việc khai báo kiểu dữ liệu cho biến.' },
    ],
    correctAnswer: 'b',
    explanation: 'Lợi ích cốt lõi của hàm trong khoa học máy tính: Tái sử dụng mã, tránh lặp lại cùng một đoạn code, giúp chương trình trong sáng, dễ tìm và sửa lỗi từng phần độc lập.',
  },

  // =========================================================================
  // --- BÀI 27: THAM SỐ CỦA HÀM ---
  // =========================================================================
  {
    id: 34,
    lessonId: 'bai-27',
    category: 'Kiến thức cốt lõi',
    competencyTag: 'NLc - Quy tắc khai báo tham số mặc định',
    question: 'Khai báo hàm nào sau đây bị BÁO LỖI CÚ PHÁP (SyntaxError) trong Python?',
    options: [
      { id: 'a', text: 'def tinh(a, b=10):' },
      { id: 'b', text: 'def tinh(a, b, c=5):' },
      { id: 'c', text: 'def tinh(a=10, b):' },
      { id: 'd', text: 'def tinh(a=1, b=2):' },
    ],
    correctAnswer: 'c',
    explanation: 'Quy tắc vàng của Python: Các tham số có giá trị mặc định (default parameters) BẮT BUỘC phải đặt SAU tất cả các tham số thường (positional parameters). Khai báo def tinh(a=10, b): sẽ báo lỗi: SyntaxError: non-default argument follows default argument.',
  },
  {
    id: 35,
    lessonId: 'bai-27',
    category: 'Đọc hiểu mã lệnh',
    competencyTag: 'NLc - Đối số mặc định và truyền theo tên',
    question: 'Cho hàm sau. Kết quả in ra của hai dòng lệnh print là gì?',
    codeSnippet: 'def chao(ten, loi_chao="Xin chao"):\n    return loi_chao + " " + ten\n\nprint(chao("Nam"))\nprint(chao("Hoa", loi_chao="Hello"))',
    options: [
      { id: 'a', text: 'Xin chao Nam\\nHello Hoa' },
      { id: 'b', text: 'Xin chao Nam\\nXin chao Hoa' },
      { id: 'c', text: 'None Nam\\nHello Hoa' },
      { id: 'd', text: 'Báo lỗi vì thiếu đối số' },
    ],
    correctAnswer: 'a',
    explanation: 'Ở lời gọi 1 chao("Nam"), đối số loi_chao không được truyền nên lấy mặc định là "Xin chao" -> "Xin chao Nam". Ở lời gọi 2, loi_chao được chỉ định cụ thể là "Hello" -> "Hello Hoa".',
  },
  {
    id: 36,
    lessonId: 'bai-27',
    category: 'Năng lực số (NLS)',
    competencyTag: 'NLc - Phân biệt tham số và đối số',
    question: 'Thuật ngữ "Tham số" (Parameter) và "Đối số" (Argument) trong SGK Tin học 10 được phân biệt chính xác như thế nào?',
    options: [
      { id: 'a', text: 'Tham số là biến khai báo khi định nghĩa hàm; Đối số là giá trị thực tế truyền vào khi gọi hàm.' },
      { id: 'b', text: 'Tham số luôn là số nguyên; Đối số luôn là xâu kí tự.' },
      { id: 'c', text: 'Tham số dùng cho vòng lặp; Đối số dùng cho câu lệnh rẽ nhánh.' },
      { id: 'd', text: 'Hai khái niệm này hoàn toàn đồng nghĩa và dùng thay thế cho nhau trong mọi trường hợp.' },
    ],
    correctAnswer: 'a',
    explanation: 'SGK Tin học 10 KNTT phân biệt: Tham số (parameters) là các biến được liệt kê trong cặp ngoặc khi định nghĩa hàm. Đối số (arguments) là các giá trị thực tế mà chương trình chuyển cho hàm khi thực hiện lời gọi hàm.',
  },

  // =========================================================================
  // --- BÀI 28: PHẠM VI CỦA BIẾN ---
  // =========================================================================
  {
    id: 37,
    lessonId: 'bai-28',
    category: 'Kiến thức cốt lõi',
    competencyTag: 'NLc - Phân biệt biến cục bộ và biến toàn cục',
    question: 'Biến được tạo ra và gán giá trị bên trong thân một hàm được gọi là biến gì?',
    options: [
      { id: 'a', text: 'Biến toàn cục (Global variable)' },
      { id: 'b', text: 'Biến cục bộ (Local variable)' },
      { id: 'c', text: 'Biến hệ thống' },
      { id: 'd', text: 'Biến tĩnh (Static variable)' },
    ],
    correctAnswer: 'b',
    explanation: 'Biến được tạo bên trong thân hàm là biến cục bộ (Local variable). Biến này chỉ tồn tại và có thể truy cập bên trong phạm vi của hàm đó; khi hàm thực thi xong, biến cục bộ sẽ tự động bị hủy.',
  },
  {
    id: 38,
    lessonId: 'bai-28',
    category: 'Đọc hiểu mã lệnh',
    competencyTag: 'NLc - Từ khóa global thay đổi biến ngoài hàm',
    question: 'Đoạn mã Python sau in ra giá trị của x là bao nhiêu?',
    codeSnippet: 'x = 10\ndef tang():\n    global x\n    x += 5\n\ntang()\nprint(x)',
    options: [
      { id: 'a', text: '10' },
      { id: 'b', text: '15' },
      { id: 'c', text: '5' },
      { id: 'd', text: 'Báo lỗi UnboundLocalError' },
    ],
    correctAnswer: 'b',
    explanation: 'Nhờ có khai báo global x trong thân hàm, hàm tang() có quyền can thiệp và thay đổi giá trị của biến toàn cục x bên ngoài. Sau khi gọi hàm, x từ 10 được cộng thêm 5 thành 15.',
  },
  {
    id: 39,
    lessonId: 'bai-28',
    category: 'Ứng dụng AI & Đạo đức số',
    competencyTag: 'NLc - Hiện tượng Shadowing và Thiết kế phần mềm sạch',
    question: 'Tại sao các kỹ sư phần mềm và giáo trình GDPT 2018 khuyến nghị hạn chế sử dụng biến toàn cục và từ khóa global?',
    options: [
      { id: 'a', text: 'Vì biến toàn cục làm chương trình chạy chậm hơn 100 lần.' },
      { id: 'b', text: 'Vì biến toàn cục có thể bị thay đổi bất ngờ từ nhiều hàm khác nhau, tạo ra hiệu ứng phụ (side effects), khiến mã nguồn khó theo dõi, gỡ lỗi và kiểm thử.' },
      { id: 'c', text: 'Vì Python 3 sẽ sớm bỏ tính năng này.' },
      { id: 'd', text: 'Vì biến toàn cục chỉ lưu được số thực.' },
    ],
    correctAnswer: 'b',
    explanation: 'Thiết kế phần mềm sạch khuyến nghị các hàm nên hoạt động độc lập (pure function), chỉ giao tiếp qua tham số đầu vào và giá trị trả về return. Dùng nhiều global làm tăng độ phụ thuộc và rủi ro lỗi tiềm ẩn.',
  },

  // =========================================================================
  // --- BÀI 29: NHẬN BIẾT LỖI CHƯƠNG TRÌNH ---
  // =========================================================================
  {
    id: 40,
    lessonId: 'bai-29',
    category: 'Kiến thức cốt lõi',
    competencyTag: 'NLc & NLd - Phân loại 3 nhóm lỗi theo SGK',
    question: 'Loại lỗi mà chương trình vẫn biên dịch/thông dịch và chạy trơn tru đến cuối, KHÔNG báo lỗi đỏ nào, nhưng kết quả đầu ra bị SAI lệch so với yêu cầu bài toán được gọi là:',
    options: [
      { id: 'a', text: 'Lỗi cú pháp (SyntaxError)' },
      { id: 'b', text: 'Lỗi ngoại lệ thời gian chạy (Runtime Error)' },
      { id: 'c', text: 'Lỗi ngữ nghĩa / lỗi logic (Logic Error)' },
      { id: 'd', text: 'Lỗi phần cứng máy tính' },
    ],
    correctAnswer: 'c',
    explanation: 'Theo SGK Tin học 10 KNTT, lỗi logic (ngữ nghĩa) là lỗi khó phát hiện nhất vì trình thông dịch không đưa ra cảnh báo nào. Chương trình chạy bình thường nhưng thuật toán hoặc công thức sai nên kết quả đầu ra không chính xác.',
  },
  {
    id: 41,
    lessonId: 'bai-29',
    category: 'Đọc hiểu mã lệnh',
    competencyTag: 'NLc - Nhận diện ngoại lệ thời gian chạy',
    question: 'Đoạn mã sau vi phạm loại lỗi nào trong Python?',
    codeSnippet: 'a = [10, 20, 30]\nprint(a[3])',
    options: [
      { id: 'a', text: 'Lỗi cú pháp (SyntaxError)' },
      { id: 'b', text: 'Lỗi ngoại lệ thời gian chạy (Runtime Error - IndexError)' },
      { id: 'c', text: 'Lỗi logic (Semantic Error)' },
      { id: 'd', text: 'Chương trình hoàn toàn không có lỗi' },
    ],
    correctAnswer: 'b',
    explanation: 'Cú pháp của câu lệnh hoàn toàn đúng ngữ pháp Python (nên không phải SyntaxError). Nhưng khi thực thi, chỉ số 3 vượt quá kích thước mảng nên gây ra ngoại lệ thời gian chạy IndexError.',
  },
  {
    id: 42,
    lessonId: 'bai-29',
    category: 'Ứng dụng AI & Đạo đức số',
    competencyTag: 'NLd - Kỹ năng Prompt Engineering xử lý lỗi với AI',
    question: 'Khi gặp lỗi ZeroDivisionError: division by zero, cách tiếp cận nào thể hiện Năng lực số tốt nhất khi làm việc với Trợ lý AI?',
    options: [
      { id: 'a', text: 'Yêu cầu AI viết một bài giải khác hoàn toàn mà không cần đọc mã cũ.' },
      { id: 'b', text: 'Đọc thông báo lỗi, dán đoạn mã kèm traceback vào AI và hỏi: "Giải thích nguyên nhân xảy ra lỗi ZeroDivisionError tại dòng X và hướng dẫn em cách thêm câu lệnh điều kiện if để kiểm tra mẫu số khác 0".' },
      { id: 'c', text: 'Sao chép bài của bạn cùng lớp để nộp bài kịp giờ.' },
      { id: 'd', text: 'Xóa câu lệnh print để máy tính không báo lỗi.' },
    ],
    correctAnswer: 'b',
    explanation: 'Năng lực số hiện đại coi AI là bạn đồng hành học tập (AI Tutor). Việc chỉ ra vị trí lỗi và yêu cầu giải thích nguyên nhân kèm giải pháp cấu trúc if giúp học sinh hiểu bản chất bài toán và làm chủ tri thức.',
  },

  // =========================================================================
  // --- BÀI 30: KIỂM THỬ VÀ GỠ LỖI CHƯƠNG TRÌNH ---
  // =========================================================================
  {
    id: 43,
    lessonId: 'bai-30',
    category: 'Kiến thức cốt lõi',
    competencyTag: 'NLc - Cấu tạo bộ kiểm thử (Test Case)',
    question: 'Một bộ thử (Test case) hoàn chỉnh dùng trong kiểm thử chương trình bao gồm hai thành phần thiết yếu nào?',
    options: [
      { id: 'a', text: 'Tên tác giả và ngày giờ viết mã.' },
      { id: 'b', text: 'Dữ liệu đầu vào (Input) và Kết quả mong đợi độc lập (Expected Output).' },
      { id: 'c', text: 'Địa chỉ IP và tốc độ CPU máy tính.' },
      { id: 'd', text: 'Số dòng code và dung lượng tệp .py.' },
    ],
    correctAnswer: 'b',
    explanation: 'Theo SGK Tin 10 KNTT (Bài 30): Kiểm thử là chạy chương trình với các bộ dữ liệu thử nghiệm. Mỗi bộ thử gồm dữ liệu vào (Input) và kết quả kì vọng/mong đợi (Expected Output) được tính toán độc lập trước khi chạy.',
  },
  {
    id: 44,
    lessonId: 'bai-30',
    category: 'Đọc hiểu mã lệnh',
    competencyTag: 'NLc - Kỹ thuật in vết chương trình (Print Debugging)',
    question: 'Phương pháp gỡ lỗi truyền thống và trực quan nhất được SGK Tin học 10 khuyến khích học sinh sử dụng khi chưa có công cụ debugger chuyên sâu là:',
    options: [
      { id: 'a', text: 'Đặt các câu lệnh print() tại các vị trí nghi ngờ để theo dõi sự thay đổi giá trị của các biến trung gian qua từng bước thực thi.' },
      { id: 'b', text: 'Đổi tên tất cả các biến thành chữ hoa.' },
      { id: 'c', text: 'Xóa toàn bộ chương trình và viết lại từ đầu.' },
      { id: 'd', text: 'Thêm dấu chấm phẩy vào cuối tất cả các dòng lệnh.' },
    ],
    correctAnswer: 'a',
    explanation: 'Kỹ thuật in vết (Trace print) giúp người lập trình quan sát "dòng chảy dữ liệu" thực tế bên trong bộ nhớ qua từng vòng lặp hoặc nhánh điều kiện, từ đó xác định chính xác dòng lệnh gây ra sai lệch.',
  },
  {
    id: 45,
    lessonId: 'bai-30',
    category: 'Ứng dụng AI & Đạo đức số',
    competencyTag: 'NLe - Trách nhiệm kiểm chứng và bẫy ảo giác AI',
    question: 'Tại sao khi kiểm thử mã nguồn do Trợ lý AI sinh ra, người học BẮT BUỘC phải tự mình tính toán kết quả mong đợi (Expected Output) bằng tay một cách độc lập?',
    options: [
      { id: 'a', text: 'Vì nếu để AI vừa sinh mã, vừa sinh Expected Output thì khi AI gặp ảo giác (Hallucination) hoặc hiểu sai đề bài, cả code và test của AI đều sai khớp với nhau (vòng tròn ngụy biện).' },
      { id: 'b', text: 'Vì máy tính không thể so sánh hai số nguyên.' },
      { id: 'c', text: 'Vì các mô hình AI không biết làm phép cộng trừ.' },
      { id: 'd', text: 'Để kéo dài thời gian làm bài kiểm tra.' },
    ],
    correctAnswer: 'a',
    explanation: 'Nguyên tắc "Human-in-the-loop": AI có thể sinh mã sai nhưng vẫn tạo ra các bộ test case sai tương ứng để "chứng minh" mã của nó đúng. Người học phải độc lập tính toán kết quả kì vọng để giữ vai trò thẩm định chất lượng.',
  },

  // =========================================================================
  // --- BÀI 31: THỰC HÀNH VIẾT CHƯƠNG TRÌNH ĐƠN GIẢN ---
  // =========================================================================
  {
    id: 46,
    lessonId: 'bai-31',
    category: 'Kiến thức cốt lõi',
    competencyTag: 'NLc - Quy trình 4 bước giải quyết bài toán',
    question: 'Quy trình giải quyết vấn đề với sự trợ giúp của máy tính gồm 4 bước theo đúng thứ tự sư phạm chuẩn SGK là:',
    options: [
      { id: 'a', text: '1. Viết mã ngay -> 2. Chạy thử -> 3. Sửa lỗi -> 4. Đọc đề bài' },
      { id: 'b', text: '1. Xác định bài toán (Input/Output) -> 2. Thiết kế thuật toán -> 3. Viết chương trình (Cài đặt) -> 4. Kiểm thử và đánh giá' },
      { id: 'c', text: '1. Dùng AI làm hộ -> 2. Nộp bài -> 3. Chấm điểm -> 4. Xem lại' },
      { id: 'd', text: '1. Đặt tên tệp -> 2. Thiết kế giao diện -> 3. Tắt máy -> 4. Nộp bài' },
    ],
    correctAnswer: 'b',
    explanation: 'Quy trình 4 bước chuẩn khoa học máy tính SGK Tin 10 KNTT: 1. Xác định bài toán (rõ Input, Output và ràng buộc) -> 2. Thiết kế thuật toán -> 3. Cài đặt bằng ngôn ngữ lập trình -> 4. Kiểm thử với nhiều bộ test cases.',
  },
  {
    id: 47,
    lessonId: 'bai-31',
    category: 'Đọc hiểu mã lệnh',
    competencyTag: 'NLc - Thuật toán kiểm tra số nguyên tố chuẩn SGK',
    question: 'Cho hàm kiểm tra số nguyên tố sau. Khi gọi hàm la_nguyen_to(9) và la_nguyen_to(13), kết quả in ra là gì?',
    codeSnippet: 'def la_nguyen_to(n):\n    if n < 2:\n        return False\n    for i in range(2, int(n**0.5) + 1):\n        if n % i == 0:\n            return False\n    return True\n\nprint(la_nguyen_to(9), la_nguyen_to(13))',
    options: [
      { id: 'a', text: 'False True' },
      { id: 'b', text: 'True False' },
      { id: 'c', text: 'True True' },
      { id: 'd', text: 'False False' },
    ],
    correctAnswer: 'a',
    explanation: 'Với n = 9: vòng lặp chạy i = 2, 3. Tại i = 3, 9 % 3 == 0 nên hàm trả về False ngay. Với n = 13: chạy từ 2 đến int(13**0.5)+1 = 4, không có ước nào chia hết nên trả về True. Kết quả in ra: False True.',
  },
  {
    id: 48,
    lessonId: 'bai-31',
    category: 'Ứng dụng AI & Đạo đức số',
    competencyTag: 'NLe - Hợp tác và liêm chính học thuật trong lập trình',
    question: 'Mô hình học tập "Lập trình cặp đôi với Trợ lý AI (Pair Programming with AI)" định vị vai trò của học sinh như thế nào?',
    options: [
      { id: 'a', text: 'Học sinh chỉ cần sao chép y nguyên mã từ AI và nộp bài.' },
      { id: 'b', text: 'Học sinh đóng vai trò "Kỹ sư trưởng" định hướng giải thuật, kiểm soát logic, yêu cầu AI giải thích và tự mình viết lại mã nguồn hoàn chỉnh.' },
      { id: 'c', text: 'Học sinh không được phép sử dụng bất kỳ công cụ số nào.' },
      { id: 'd', text: 'Học sinh yêu cầu AI thi hộ trực tuyến.' },
    ],
    correctAnswer: 'b',
    explanation: 'Giáo dục số hiện đại hướng tới phát triển năng lực tự chủ: Con người thiết kế chiến lược và kiểm định, AI đóng vai trò trợ lý gợi ý và phản biện. Liêm chính học thuật đòi hỏi học sinh phải hiểu tường tận từng dòng mã của mình.',
  },

  // =========================================================================
  // --- BÀI 32: ÔN TẬP VÀ ĐÁNH GIÁ CUỐI CHỦ ĐỀ ---
  // =========================================================================
  {
    id: 49,
    lessonId: 'bai-32',
    category: 'Kiến thức cốt lõi',
    competencyTag: 'NLc - Thuật toán kiểm tra năm nhuận liên môn',
    question: 'Thuật toán kiểm tra năm nhuận dương lịch (Bài toán lịch vạn niên - Bài 32 SGK) được viết bằng biểu thức điều kiện nào sau đây?',
    codeSnippet: '# year là số nguyên dương chỉ năm cần kiểm tra',
    options: [
      { id: 'a', text: '(year % 400 == 0) or (year % 4 == 0 and year % 100 != 0)' },
      { id: 'b', text: 'year % 4 == 0' },
      { id: 'c', text: 'year % 100 == 0' },
      { id: 'd', text: 'year % 4 == 0 or year % 100 == 0' },
    ],
    correctAnswer: 'a',
    explanation: 'Quy tắc năm nhuận chuẩn thiên văn học và SGK: Năm chia hết cho 400 HOẶC (chia hết cho 4 nhưng không chia hết cho 100). Ví dụ năm 2000 là năm nhuận, nhưng năm 1900 không phải là năm nhuận.',
  },
  {
    id: 50,
    lessonId: 'bai-32',
    category: 'Đọc hiểu mã lệnh',
    competencyTag: 'NLc - Tổng hợp thao tác danh sách và hàm tích hợp',
    question: 'Đoạn mã tổng hợp tính điểm trung bình và điểm cao nhất sau in ra kết quả gì?',
    codeSnippet: 'diem = [8.5, 9.0, 7.0, 10.0, 6.5]\ntong = sum(diem)\ndtb = round(tong / len(diem), 2)\nlon_nhat = max(diem)\nprint(dtb, lon_nhat)',
    options: [
      { id: 'a', text: '8.2 10.0' },
      { id: 'b', text: '8.0 9.0' },
      { id: 'c', text: '8.2 9.0' },
      { id: 'd', text: '41.0 10.0' },
    ],
    correctAnswer: 'a',
    explanation: 'tong = sum(diem) = 41.0; len(diem) = 5; dtb = 41.0 / 5 = 8.2; max(diem) = 10.0. Kết quả in ra là: 8.2 10.0.',
  },
  {
    id: 51,
    lessonId: 'bai-32',
    category: 'Ứng dụng AI & Đạo đức số',
    competencyTag: 'NLe - Văn hóa số và Trách nhiệm công dân số',
    question: 'Khi hoàn thành một dự án phần mềm lập trình Python có sử dụng công nghệ hỗ trợ và AI, hành vi nào thể hiện đầy đủ Văn hóa số và Đạo đức AI?',
    options: [
      { id: 'a', text: 'Ghi chú rõ ràng nguồn tài liệu tham khảo, minh bạch việc sử dụng prompt hỗ trợ từ AI, kiểm thử toàn diện mã nguồn và chia sẻ tri thức an toàn.' },
      { id: 'b', text: 'Tự nhận 100% công sức tự viết kể cả khi toàn bộ chương trình do AI viết.' },
      { id: 'c', text: 'Cố tình chèn mã độc vào chương trình để trừng phạt người sao chép.' },
      { id: 'd', text: 'Xóa sạch chú thích để không cho ai khác học hỏi.' },
    ],
    correctAnswer: 'a',
    explanation: 'Chuẩn năng lực số NLe (Đạo đức và văn hóa số GDPT 2018): Học sinh trung thực ghi nhận nguồn dữ liệu, minh bạch trong sử dụng công cụ AI, có trách nhiệm kiểm thử an toàn phần mềm và lan tỏa văn hóa chia sẻ tri thức văn minh.',
  },
];
