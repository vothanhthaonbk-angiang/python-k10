import { Lesson } from '../types';

export const LESSONS_DATA: Lesson[] = [
  {
    id: 'bai-16',
    number: '16',
    bookChapter: 'Chủ đề 5 · Khởi đầu lập trình',
    sgkPage: 'Trang 86',
    title: 'Bài 16. Ngôn ngữ lập trình bậc cao và Python',
    subtitle: 'Làm quen với môi trường lập trình Python, chế độ gõ lệnh và chế độ soạn thảo',
    level: 'Cơ bản',
    duration: '45 phút',
    badgeColor: 'bg-blue-600',
    topics: ['Ngôn ngữ bậc cao', 'Chế độ gõ lệnh trực tiếp (>>>)', 'Chế độ soạn thảo (.py)', 'Lệnh print() và phép toán'],
    description: 'Tìm hiểu ngôn ngữ Python do Guido van Rossum phát triển, phân biệt hai chế độ làm việc trong môi trường Python và viết chương trình đầu tiên.',
    digitalCompetence: {
          "coreCompetencies": [
                "NLa - Khai thác môi trường lập trình số (Chế độ gõ lệnh >>> & Chế độ tệp .py)",
                "NLc - Tư duy thuật toán & hiểu cơ chế thông dịch ngôn ngữ bậc cao",
                "NLe - Văn hóa sử dụng công cụ số và đạo đức công nghệ"
          ],
          "aiActivity": "Sử dụng AI trợ giảng để tìm hiểu nguồn gốc ngôn ngữ Python, so sánh câu lệnh print() với các ngôn ngữ khác và thực hành giao tiếp với AI để giải thích cấu trúc chương trình đầu tiên.",
          "samplePrompt": "Em là học sinh lớp 10 học Bài 16 Tin học. Hãy giải thích cho em sự khác nhau giữa chế độ gõ lệnh trực tiếp (>>>) và chế độ soạn thảo (.py) trong Python bằng ví dụ sinh động nhất.",
          "aiCaution": "Lưu ý phản biện: AI có thể đưa ra cú pháp Python 2 cũ (như print \"Xin chào\" không có ngoặc). Học sinh cần đối chiếu với SGK để luôn dùng đúng cú pháp chuẩn Python 3."
    },
    content: {
      overview: 'Python là ngôn ngữ lập trình bậc cao được tạo ra vào năm 1991. Câu lệnh của Python rất gần với ngôn ngữ tự nhiên, cú pháp ngắn gọn, dễ học và được ứng dụng mạnh mẽ trong trí tuệ nhân tạo, khoa học dữ liệu và giáo dục phổ thông.',
      sections: [
        {
          heading: '1. Ngôn ngữ lập trình bậc cao',
          explanation: 'Các lệnh viết bằng ngôn ngữ máy ở dạng mã nhị phân hay hợp ngữ rất khó nhớ và phụ thuộc máy. Ngôn ngữ lập trình bậc cao (như Python, C/C++, Java) dùng câu lệnh gần gũi với tiếng Anh và toán học, cần một chương trình dịch để chuyển sang ngôn ngữ máy.',
          codeExample: `# Chạy trực tiếp phép tính trong Python
print("Xin chào! 12 * 5 =", 12 * 5)
print("Kết quả phép chia 35 / 4 =", 35 / 4)`,
          outputExample: `Xin chào! 12 * 5 = 60
Kết quả phép chia 35 / 4 = 8.75`,
          tips: 'Python tự động nhận biết số nguyên và số thực, không cần khai báo kiểu dữ liệu thủ công.'
        },
        {
          heading: '2. Môi trường lập trình Python: Hai chế độ làm việc',
          explanation: 'Môi trường Python hỗ trợ hai chế độ: \n- Chế độ gõ lệnh trực tiếp (Interactive Mode): Gõ từng lệnh sau dấu nhắc >>> và nhấn Enter để thực hiện ngay, phù hợp tính toán nhanh.\n- Chế độ soạn thảo (Script Mode): Viết nhiều dòng lệnh trong tệp mã nguồn có đuôi .py rồi lưu và chạy toàn bộ chương trình.',
          codeExample: `# Ví dụ chế độ soạn thảo: Tệp Bai1.py
# Chương trình đầu tiên
print("Xin chào học sinh lớp 10 THPT Nguyễn Bỉnh Khiêm!")
print("Học lập trình Python - Kết nối tri thức với cuộc sống")`,
          outputExample: `Xin chào học sinh lớp 10 THPT Nguyễn Bỉnh Khiêm!
Học lập trình Python - Kết nối tri thức với cuộc sống`,
          tips: 'Kí hiệu # là vị trí bắt đầu dòng chú thích (comment) trong Python, chương trình sẽ bỏ qua không dịch phần này.'
        },
        {
          heading: '3. Lệnh print() và các phép toán đầu tiên',
          explanation: 'Cú pháp lệnh print(): print(v1, v2, ..., vn). Lệnh in ra màn hình các giá trị v1, v2..., giữa các giá trị ngầm định cách nhau bởi một dấu cách.',
          codeExample: `print(12)
print(10, 3.4 + 4.1, "hoà bình")
print("Dãy ba số chẵn:", 2, 4, 6)
print("3 + 7 =", 3 + 7)`,
          outputExample: `12
10 7.5 hoà bình
Dãy ba số chẵn: 2 4 6
3 + 7 = 10`
        }
      ],
      summary: [
        'Ngôn ngữ bậc cao có câu lệnh gần với ngôn ngữ tự nhiên giúp dễ đọc, dễ viết.',
        'Python có hai chế độ: gõ lệnh trực tiếp (dấu nhắc >>>) và chế độ soạn thảo (tệp .py).',
        'Lệnh print() có chức năng đưa dữ liệu ra màn hình thiết bị chuẩn.',
        'Dấu # dùng để viết chú thích trong chương trình.'
      ]
    },
    sampleCode: `# Bài 16: Chương trình đầu tiên (Bai1.py - SGK Tin 10 Trang 89)
print("Xin chào!")
print("1 + 3 * 5 = ", 1 + 3 * 5)
print("Chúc các bạn học sinh THPT Nguyễn Bỉnh Khiêm học tốt Python!")`
  },
  {
    id: 'bai-17',
    number: '17',
    bookChapter: 'Chủ đề 5 · Khởi đầu lập trình',
    sgkPage: 'Trang 91',
    title: 'Bài 17. Biến và lệnh gán',
    subtitle: 'Khái niệm biến, cú pháp lệnh gán, quy tắc đặt tên và các phép toán cơ bản',
    level: 'Cơ bản',
    duration: '45 phút',
    badgeColor: 'bg-blue-600',
    topics: ['Biến & Vùng nhớ', 'Lệnh gán (=)', 'Quy tắc đặt tên biến', 'Phép toán //, %, **', 'Từ khóa (keywords)'],
    description: 'Nắm vững cách thiết lập biến, thực hiện phép gán đồng thời, hiểu quy tắc đặt tên hợp lệ và các phép toán số học cũng như phép nối/lặp xâu kí tự.',
    digitalCompetence: {
          "coreCompetencies": [
                "NLc - Mô hình hóa dữ liệu bằng biến, phân tích độ ưu tiên toán tử //, %, **",
                "NLd - Tự học và tra cứu danh mục từ khóa hệ thống (Keywords)",
                "NLa - Quản lý quy chuẩn định danh trong môi trường số (PEP8)"
          ],
          "aiActivity": "Thực hành tạo bảng biến dữ liệu, yêu cầu AI kiểm tra tính hợp lệ của danh sách tên biến và phát hiện các trường hợp vi phạm quy tắc đặt tên hoặc trùng từ khóa.",
          "samplePrompt": "Tôi có danh sách tên biến sau trong Python: [123_ten, _diemToan, class, tong_diem, my-var]. Hãy chỉ ra tên nào không hợp lệ, giải thích lý do và sửa lại theo chuẩn Python SGK lớp 10.",
          "aiCaution": "Lưu ý phản biện: AI thường dùng quy tắc camelCase của ngôn ngữ khác; học sinh cần chủ động định hướng AI dùng chuẩn snake_case và không đặt tên biến trùng từ khóa SGK."
    },
    content: {
      overview: 'Biến là tên gọi của một vùng nhớ dùng để lưu trữ giá trị (dữ liệu) và giá trị đó có thể được thay đổi khi thực hiện chương trình. Cú pháp cơ bản của lệnh gán là: <biến> = <giá trị>.',
      sections: [
        {
          heading: '1. Khái niệm biến và lệnh gán',
          explanation: 'Khi thực hiện lệnh gán, biểu thức bên phải sẽ được tính toán rồi gán cho biến bên trái. Biến được tạo ra ngay khi có lệnh gán lần đầu tiên.',
          codeExample: `x = 10
y = x**2 - 1
print("Giá trị y =", y)

# Gán nhiều biến đồng thời (SGK Trang 92)
a, b = 10, 3
print("a =", a, ", b =", b)
a, b = b, a # Đổi chỗ giá trị hai biến cực nhanh!
print("Sau khi đổi chỗ: a =", a, ", b =", b)`,
          outputExample: `Giá trị y = 99
a = 10 , b = 3
Sau khi đổi chỗ: a = 3 , b = 10`,
          tips: 'Python cho phép hoán đổi giá trị hai biến a, b = b, a mà không cần dùng biến trung gian t.'
        },
        {
          heading: '2. Quy tắc đặt tên biến & Từ khóa',
          explanation: 'Quy tắc đặt tên biến:\n- Chỉ gồm chữ cái tiếng Anh, chữ số từ 0 đến 9 và kí tự gạch dưới _\n- Không bắt đầu bằng chữ số (ví dụ 123a là sai cú pháp)\n- Phân biệt chữ hoa và chữ thường (ten khác Ten)\n- Không được trùng với các từ khoá (keywords) của Python như: if, else, for, while, in, def, return, True, False, None...',
          codeExample: `# Tên biến hợp lệ
_diem_toan = 9.5
ho_ten10A = "Lê Hoàng"

# Phép nối xâu (+) và lặp xâu (*)
s1 = "Hà Nội"
s2 = "Việt Nam"
print(s1 + " - " + s2)  # Nối xâu
print("123" * 3)       # Lặp xâu 3 lần`,
          outputExample: `Hà Nội - Việt Nam
123123123`
        },
        {
          heading: '3. Các phép toán trên dữ liệu số',
          explanation: 'Các phép toán số học: + (cộng), - (trừ), * (nhân), / (chia ra số thực), // (chia lấy phần nguyên), % (chia lấy phần dư), ** (lũy thừa). Phép lũy thừa có độ ưu tiên cao nhất.',
          codeExample: `a, b = 10, 3
print("Chia thường a / b =", a / b)
print("Chia nguyên a // b =", a // b)
print("Chia dư a % b =", a % b)
print("Lũy thừa a ** b =", a ** b)`,
          outputExample: `Chia thường a / b = 3.3333333333333335
Chia nguyên a // b = 3
Chia dư a % b = 1
Lũy thừa a ** b = 1000`
        }
      ],
      summary: [
        'Biến là tên vùng nhớ lưu trữ dữ liệu. Cú pháp gán: <biến> = <giá trị>.',
        'Tên biến không bắt đầu bằng số, không chứa khoảng trắng, phân biệt hoa - thường.',
        'Các phép toán: // chia lấy nguyên, % chia lấy dư, ** tính lũy thừa.',
        'Toán tử + dùng nối xâu, * dùng lặp xâu.'
      ]
    },
    sampleCode: `# Nhiệm vụ 2 (SGK Trang 96): Tính chu vi và diện tích hình tròn bán kính R
R = 4.5
pi = 3.14

chu_vi = 2 * R * pi
dien_tich = pi * R * R

print("Chu vi hình tròn là:", chu_vi)
print("Diện tích hình tròn là:", dien_tich)`
  },
  {
    id: 'bai-18',
    number: '18',
    bookChapter: 'Chủ đề 5 · Khởi đầu lập trình',
    sgkPage: 'Trang 97',
    title: 'Bài 18. Các lệnh vào ra đơn giản',
    subtitle: 'Nhập dữ liệu với input(), xuất dữ liệu với print() và chuyển đổi kiểu dữ liệu int, float, str',
    level: 'Cơ bản',
    duration: '45 phút',
    badgeColor: 'bg-blue-600',
    topics: ['Lệnh input()', 'Lệnh print()', 'Hàm type()', 'Ép kiểu int(), float(), str()'],
    description: 'Thực hiện nhập dữ liệu từ bàn phím bằng input(), nắm rõ hàm input() luôn trả về xâu kí tự và biết cách ép kiểu dữ liệu sang int và float để tính toán.',
    digitalCompetence: {
          "coreCompetencies": [
                "NLc - Thu thập thông tin từ người dùng và chuyển đổi kiểu dữ liệu (Data Casting)",
                "NLd - Tự phát hiện và khắc phục lỗi chuyển đổi dữ liệu (ValueError)",
                "NLa - Tương tác vào ra chuẩn qua giao diện dòng lệnh"
          ],
          "aiActivity": "Yêu cầu AI mô phỏng quá trình người dùng nhập dữ liệu qua bàn phím, phân tích tại sao nếu không ép kiểu int()/float() thì phép cộng sẽ trở thành phép nối xâu.",
          "samplePrompt": "Hãy giải thích cho học sinh lớp 10 tại sao đoạn mã sau: a = input(); b = input(); print(a + b) khi nhập 5 và 10 lại in ra 510 thay vì 15? Hướng dẫn cách sửa dùng hàm int().",
          "aiCaution": "Lưu ý phản biện: Khi người dùng nhập chuỗi rỗng hoặc chữ vào hàm int(), mã sẽ phát sinh lỗi. Rèn luyện tư duy kiểm soát dữ liệu đầu vào an toàn."
    },
    content: {
      overview: 'Để tương tác với người dùng khi thực hiện chương trình, Python cung cấp lệnh input() để nhập dữ liệu từ bàn phím và print() để đưa dữ liệu ra màn hình.',
      sections: [
        {
          heading: '1. Lệnh input() nhận dữ liệu từ bàn phím',
          explanation: 'Cú pháp: <biến> = input(<Dòng thông báo>). Nội dung người dùng nhập từ bàn phím luôn được coi là một xâu kí tự (str), kể cả khi nhập các chữ số.',
          codeExample: `name = input("Nhập họ tên em: ")
print("Xin chào", name)`,
          outputExample: `Nhập họ tên em: Nguyễn Bỉnh Khiêm
Xin chào Nguyễn Bỉnh Khiêm`,
          tips: 'Muốn kiểm tra kiểu dữ liệu của biến ta dùng hàm type(biến).'
        },
        {
          heading: '2. Chuyển đổi kiểu dữ liệu (Ép kiểu)',
          explanation: 'Vì input() trả về xâu, nếu muốn tính toán số học bắt buộc phải chuyển đổi bằng các hàm:\n- int(): chuyển sang số nguyên (int("123") -> 123)\n- float(): chuyển sang số thực (float("3.14") -> 3.14)\n- str(): chuyển các kiểu khác thành xâu (str(125) -> "125")',
          codeExample: `# Nhập 2 số nguyên và tính tổng
a = int(input("Nhập số a: "))
b = int(input("Nhập số b: "))
print("Tổng =", a + b)

# Ép kiểu số thực
x = float(input("Nhập số thực x: "))
print("Bình phương của x =", x**2)`,
          outputExample: `Nhập số a: 15
Nhập số b: 25
Tổng = 40
Nhập số thực x: 2.5
Bình phương của x = 6.25`,
          tips: 'Nếu người dùng gõ int("12.5") hoặc int("abc"), Python sẽ báo lỗi ValueError.'
        }
      ],
      summary: [
        'Lệnh input() nhập dữ liệu từ bàn phím và luôn trả về kiểu xâu (str).',
        'Các kiểu cơ bản: int (số nguyên), float (số thực), str (xâu), bool (lôgic).',
        'Dùng int(input()) để nhập số nguyên, float(input()) để nhập số thực.',
        'Hàm type() dùng để kiểm tra kiểu dữ liệu của một đối tượng.'
      ]
    },
    sampleCode: `# Thực hành Bài 18 (SGK Trang 100): Nhập 3 số và tính tổng
m = int(input("Nhập số nguyên m: "))
n = int(input("Nhập số nguyên n: "))
p = int(input("Nhập số nguyên p: "))

tong = m + n + p
print(f"Tổng ba số đã nhập là: {m} + {n} + {p} = {tong}")`
  },
  {
    id: 'bai-19',
    number: '19',
    bookChapter: 'Chủ đề 5 · Rẽ nhánh & Lặp',
    sgkPage: 'Trang 101',
    title: 'Bài 19. Câu lệnh rẽ nhánh if',
    subtitle: 'Biểu thức logic, các phép so sánh, toán tử and/or/not và câu lệnh if/else',
    level: 'Cơ bản',
    duration: '45 phút',
    badgeColor: 'bg-emerald-600',
    topics: ['Biểu thức logic bool', 'Phép toán and, or, not', 'Cấu trúc if khuyết', 'Cấu trúc if-else', 'Quy tắc thụt lề'],
    description: 'Học cách kiểm tra điều kiện và thực hiện rẽ nhánh. Ứng dụng giải các bài toán thực tế như kiểm tra chẵn lẻ, tính tiền điện sinh hoạt theo bậc thang.',
    digitalCompetence: {
          "coreCompetencies": [
                "NLc - Tư duy logic rẽ nhánh, biểu thức so sánh và xây dựng cây quyết định",
                "NLd - Ứng dụng giải quyết bài toán đời sống (tính cước, xếp loại)",
                "NLe - Trách nhiệm trong thiết kế thuật toán công bằng và minh bạch"
          ],
          "aiActivity": "Dùng AI sinh các tình huống kiểm thử (edge cases) cho bài toán rẽ nhánh (ví dụ: điểm trung bình âm, điểm > 10, các mốc giao thời tính tiền điện sinh hoạt bậc thang).",
          "samplePrompt": "Cho bài toán tính tiền điện bậc thang theo SGK Tin học 10 Bài 19. Hãy liệt kê 5 bộ giá trị kiểm thử (test cases) bao gồm cả trường hợp biên để em kiểm tra chương trình if-elif-else của mình.",
          "aiCaution": "Lưu ý phản biện: AI có thể viết điều kiện quá dài hoặc lồng nhau phức tạp. Học sinh cần rèn luyện năng lực tối giản biểu thức logic theo chuẩn SGK."
    },
    content: {
      overview: 'Câu lệnh rẽ nhánh giúp máy tính thực hiện các hành động khác nhau tùy thuộc vào điều kiện kiểm tra là True (đúng) hay False (sai).',
      sections: [
        {
          heading: '1. Biểu thức logic và các phép toán',
          explanation: 'Các phép so sánh: <, <=, >, >=, == (bằng nhau), != (khác nhau). Các phép toán logic kết hợp:\n- and: Đúng khi cả 2 vế cùng True\n- or: Đúng khi ít nhất 1 vế True\n- not: Đảo ngược giá trị logic',
          codeExample: `x, y = 10, 5
print(x > 5 and y < 3)   # False vì y < 3 là sai
print(x > 5 or y < 3)    # True vì x > 5 là đúng
print(not (x == 10))     # False`,
          outputExample: `False
True
False`
        },
        {
          heading: '2. Cấu trúc câu lệnh if và if-else',
          explanation: 'Cú pháp if khuyết:\nif <điều kiện>:\n    <khối lệnh>\n\nCú pháp if-else đầy đủ:\nif <điều kiện>:\n    <khối lệnh 1>\nelse:\n    <khối lệnh 2>\n\nChú ý: Sau điều kiện và sau else bắt buộc có dấu hai chấm (:). Khối lệnh phải thụt lề 1 tab hoặc 4 dấu cách.',
          codeExample: `n = int(input("Nhập số tự nhiên n: "))
if n % 2 == 0:
    print(n, "là số chẵn.")
else:
    print(n, "là số lẻ.")`,
          outputExample: `Nhập số tự nhiên n: 18
18 là số chẵn.`
        }
      ],
      summary: [
        'Biểu thức lôgic nhận một trong hai giá trị True hoặc False.',
        'Các phép toán lôgic: and, or, not.',
        'Cú pháp if <điều kiện>: <khối lệnh>, nhớ có dấu hai chấm và thụt lề thống nhất.',
        'elif cho phép nối tiếp kiểm tra nhiều điều kiện liên tiếp.'
      ]
    },
    sampleCode: `# Nhiệm vụ 2 (SGK Trang 104): Tính tiền điện sinh hoạt bậc thang
k = float(input("Nhập số kWh tiêu thụ: "))

if k <= 50:
    tien = k * 1.678
elif k <= 100:
    tien = 50 * 1.678 + (k - 50) * 1.734
else:
    tien = 50 * 1.678 + 50 * 1.734 + (k - 100) * 2.014

print("Số tiền điện phải trả là:", round(tien, 3), "nghìn đồng")`
  },
  {
    id: 'bai-20',
    number: '20',
    bookChapter: 'Chủ đề 5 · Rẽ nhánh & Lặp',
    sgkPage: 'Trang 105',
    title: 'Bài 20. Câu lệnh lặp for',
    subtitle: 'Vòng lặp biết trước số lần lặp với hàm range(), thuật toán tính tổng và đếm ước',
    level: 'Trung bình',
    duration: '45 phút',
    badgeColor: 'bg-emerald-600',
    topics: ['Vùng giá trị range()', 'Cú pháp for ... in range()', 'Thuật toán tính tổng', 'Thuật toán đếm ước'],
    description: 'Nắm vững cách hoạt động của vòng lặp for, vùng giá trị sinh ra bởi range(n) và range(start, stop), áp dụng tính tổng và giải bài toán ước số.',
    digitalCompetence: {
          "coreCompetencies": [
                "NLc - Tư duy lặp xác định với hàm range(), kỹ năng lập bảng vết biến đếm",
                "NLd - Tự động hóa tính toán lặp lại trong môi trường số",
                "NLa - Tối ưu thời gian xử lý và tài nguyên của thuật toán"
          ],
          "aiActivity": "Yêu cầu AI lập bảng theo dõi (trace table) từng bước lặp của biến đếm i và biến tích lũy tong, giúp học sinh trực quan hóa vòng lặp for.",
          "samplePrompt": "Hãy vẽ bảng vết (trace table) từng bước chạy của đoạn mã: s = 0; for i in range(1, 6): s += i; print(s) để em thấy rõ giá trị của i và s qua từng vòng lặp.",
          "aiCaution": "Lưu ý phản biện: Chú ý cận trên của range(start, stop) luôn dừng tại stop - 1. Nếu AI tạo mã range(1, n), cần kiểm tra xem có cần range(1, n + 1) để lấy số n hay không."
    },
    content: {
      overview: 'Vòng lặp for được sử dụng khi cần thực hiện lặp lại một khối lệnh với số lần biết trước hoặc duyệt qua các phần tử của một tập hợp.',
      sections: [
        {
          heading: '1. Cú pháp vòng lặp for và hàm range()',
          explanation: 'Cú pháp: for <i> in range(n): <khối lệnh>.\nHàm range() có các dạng:\n- range(n): sinh dãy từ 0 đến n - 1 (gồm n số)\n- range(start, stop): sinh dãy từ start đến stop - 1\n- range(start, stop, step): bước nhảy step',
          codeExample: `# In dãy từ 1 đến 5
for k in range(1, 6):
    print(k, end=" ")
print()

# Tính tổng S = 0 + 1 + 2 + ... + 9
S = 0
for k in range(10):
    S = S + k
print("Tổng S =", S)`,
          outputExample: `1 2 3 4 5 
Tổng S = 45`,
          tips: 'Tham số end=" " trong print() giúp in các giá trị trên cùng một dòng thay vì xuống dòng.'
        },
        {
          heading: '2. Ứng dụng vòng lặp for: Đếm và tìm ước số',
          explanation: 'Muốn kiểm tra số k có phải là ước của n hay không, ta xét điều kiện n % k == 0.',
          codeExample: `n = 12
print(f"Các ước của {n} là:")
for k in range(1, n + 1):
    if n % k == 0:
        print(k, end=" ")`,
          outputExample: `Các ước của 12 là:
1 2 3 4 6 12 `
        }
      ],
      summary: [
        'for là lệnh lặp với số lần biết trước.',
        'range(stop) trả lại vùng giá trị từ 0 đến stop - 1.',
        'range(start, stop) trả lại vùng giá trị từ start đến stop - 1.',
        'Vòng lặp tự động gán biến chạy lần lượt nhận từng giá trị trong vùng range.'
      ]
    },
    sampleCode: `# Nhiệm vụ 1 & 2 (SGK Trang 107): Liệt kê và đếm các ước thực sự của n
n = int(input("Nhập số tự nhiên n: "))
count = 0

print(f"Các ước của {n}:", end=" ")
for k in range(1, n + 1):
    if n % k == 0:
        print(k, end=" ")
        if k < n:
            count += 1
print()
print(f"Số lượng ước số thực sự (nhỏ hơn {n}) là: {count}")`
  },
  {
    id: 'bai-21',
    number: '21',
    bookChapter: 'Chủ đề 5 · Rẽ nhánh & Lặp',
    sgkPage: 'Trang 108',
    title: 'Bài 21. Câu lệnh lặp while',
    subtitle: 'Vòng lặp với số lần không biết trước, điều kiện dừng, lệnh break và 3 cấu trúc lập trình',
    level: 'Trung bình',
    duration: '45 phút',
    badgeColor: 'bg-emerald-600',
    topics: ['Cú pháp while', 'Điều kiện lặp', 'Lệnh break', '3 cấu trúc lập trình cơ bản'],
    description: 'Sử dụng vòng lặp while để giải các bài toán lặp dựa vào điều kiện động. Hiểu ba cấu trúc điều khiển cơ bản của mọi ngôn ngữ lập trình bậc cao: tuần tự, rẽ nhánh, lặp.',
    digitalCompetence: {
          "coreCompetencies": [
                "NLc - Thuật toán lặp không xác định trước, kiểm soát điều kiện dừng",
                "NLd - Phát hiện và phòng ngừa lỗi vòng lặp vô hạn (Infinite Loop)",
                "NLa - Quản lý tài nguyên tính toán và chống tràn bộ nhớ"
          ],
          "aiActivity": "Thực hành tương tác với AI để phân tích điều kiện lặp while, xác định câu lệnh cập nhật biến lặp để tránh treo máy.",
          "samplePrompt": "Chương trình while của em bị chạy mãi không dừng. Hãy giúp em xem tại sao vòng lặp sau bị lặp vô tận và chỉ ra câu lệnh cập nhật biến lặp còn thiếu: n = 10; while n > 0: print(n)",
          "aiCaution": "Lưu ý phản biện: AI có thể khuyến khích dùng while True kết hợp break. Học sinh cần nắm vững cấu trúc while có điều kiện chuẩn mực trong chương trình phổ thông trước khi dùng break."
    },
    content: {
      overview: 'while thực hiện lặp chừng nào điều kiện vẫn còn True. Khi điều kiện trở thành False, vòng lặp sẽ kết thúc.',
      sections: [
        {
          heading: '1. Cú pháp và cơ chế của while',
          explanation: 'Cú pháp: while <điều kiện>: <khối lệnh>.\nCần đảm bảo trong khối lệnh có thao tác làm thay đổi biến điều kiện để tránh rơi vào vòng lặp vô tận (treo máy).',
          codeExample: `# Tính tổng các số lẻ nhỏ hơn 20
s = 0
k = 1
while k < 20:
    s = s + k
    k = k + 2
print("Tổng các số lẻ nhỏ hơn 20 =", s)`,
          outputExample: `Tổng các số lẻ nhỏ hơn 20 = 100`
        },
        {
          heading: '2. Lệnh can thiệp break & 3 cấu trúc lập trình',
          explanation: 'Lệnh break dùng để dừng và thoát ngay lập tức khỏi vòng lặp.\nBa cấu trúc lập trình cơ bản của ngôn ngữ bậc cao gồm:\n1. Cấu trúc tuần tự: các câu lệnh thực hiện từ trên xuống dưới.\n2. Cấu trúc rẽ nhánh: lựa chọn rẽ nhánh theo điều kiện (if, if-else).\n3. Cấu trúc lặp: lặp lại khối lệnh (for, while).',
          codeExample: `# Thoát sớm bằng break
k = 0
while True:
    print(k, end=" ")
    k += 1
    if k == 5:
        break
print("-> Đã thoát vòng lặp")`,
          outputExample: `0 1 2 3 4 -> Đã thoát vòng lặp`
        }
      ],
      summary: [
        'while là lệnh lặp với số lần không biết trước, lặp cho đến khi <điều kiện> = False.',
        'Lệnh break dùng để thoát ngay khỏi vòng lặp.',
        'Ba cấu trúc cơ bản: tuần tự, rẽ nhánh, lặp.'
      ]
    },
    sampleCode: `# Thực hành Bài 21 (SGK Trang 110): In các chữ cái từ A đến Z bằng mã ASCII
i = 0
k = 65  # Mã ASCII của chữ cái 'A' là 65, 'Z' là 90

print("Bảng chữ cái tiếng Anh in hoa (3 hàng):")
while k <= 90:
    i = i + 1
    if i % 10 == 0:
        print(chr(k))
    else:
        print(chr(k), end=" ")
    k = k + 1`
  },
  {
    id: 'bai-22',
    number: '22',
    bookChapter: 'Chủ đề 5 · Cấu trúc dữ liệu',
    sgkPage: 'Trang 111',
    title: 'Bài 22. Kiểu dữ liệu danh sách (List)',
    subtitle: 'Khởi tạo danh sách, chỉ số truy cập, lệnh len(), lệnh del và phương thức append()',
    level: 'Trung bình',
    duration: '45 phút',
    badgeColor: 'bg-purple-600',
    topics: ['Khởi tạo list []', 'Chỉ số 0 đến len()-1', 'Lệnh del', 'Duyệt mảng for in range()', 'Phương thức append()'],
    description: 'Làm quen với kiểu dữ liệu danh sách để lưu trữ dãy dữ liệu, cách truy cập phần tử qua chỉ số, thêm phần tử vào cuối bằng append() và duyệt danh sách.',
    digitalCompetence: {
          "coreCompetencies": [
                "NLc - Trừu tượng hóa dữ liệu thành cấu trúc danh sách (List)",
                "NLd - Khai phá, duyệt và truy xuất dữ liệu số bằng chỉ số (Index)",
                "NLa - Quản lý bộ sưu tập dữ liệu trên máy tính"
          ],
          "aiActivity": "Dùng AI sinh danh sách dữ liệu mẫu ngẫu nhiên (nhiệt độ các ngày trong tuần, điểm bài thi) và hướng dẫn viết câu lệnh trích xuất phần tử.",
          "samplePrompt": "Tạo giúp em một danh sách Python gồm 7 số thực là nhiệt độ trung bình 7 ngày trong tuần. Sau đó hướng dẫn câu lệnh in phần tử đầu tiên, phần tử cuối cùng (dùng chỉ số âm) và độ dài len().",
          "aiCaution": "Lưu ý phản biện: Luôn cẩn trọng với lỗi IndexError: list index out of range khi chỉ số bắt đầu từ 0 và kết thúc tại len() - 1."
    },
    content: {
      overview: 'List là kiểu dữ liệu danh sách (dãy, mảng) trong Python. Danh sách có thể chứa các phần tử thuộc nhiều kiểu dữ liệu khác nhau và có thể thay đổi kích thước linh hoạt.',
      sections: [
        {
          heading: '1. Khởi tạo danh sách và chỉ số phần tử',
          explanation: 'Danh sách được đặt trong cặp ngoặc vuông [ ].\nChỉ số phần tử bắt đầu từ 0 đến len(danh_sách) - 1.\nLệnh len() trả về độ dài (số lượng phần tử) của danh sách.',
          codeExample: `A = [1, 2, 3, 4, 5]
print("Độ dài:", len(A))
print("Phần tử đầu tiên A[0] =", A[0])
print("Phần tử thứ hai A[1] =", A[1])

# Thay đổi giá trị phần tử
A[1] = 99
print("Sau khi gán lại:", A)

# Xóa phần tử bằng del
del A[0]
print("Sau khi del A[0]:", A)`,
          outputExample: `Độ dài: 5
Phần tử đầu tiên A[0] = 1
Phần tử thứ hai A[1] = 2
Sau khi gán lại: [1, 99, 3, 4, 5]
Sau khi del A[0]: [99, 3, 4, 5]`
        },
        {
          heading: '2. Phương thức append() và duyệt danh sách',
          explanation: 'Cú pháp <danh sách>.append(x) dùng để bổ sung phần tử x vào vị trí cuối cùng của danh sách.',
          codeExample: `ds = []
ds.append("Long Xuyên")
ds.append("Châu Đốc")
ds.append("Tri Tôn")

# Duyệt danh sách qua chỉ số
for i in range(len(ds)):
    print(f"Huyện/Thị {i + 1}: {ds[i]}")`,
          outputExample: `Huyện/Thị 1: Long Xuyên
Huyện/Thị 2: Châu Đốc
Huyện/Thị 3: Tri Tôn`
        }
      ],
      summary: [
        'List là kiểu dữ liệu danh sách: <tên list> = [v1, v2, ..., vn].',
        'Chỉ số danh sách bắt đầu từ 0 đến len() - 1.',
        'Lệnh del dùng để xóa một phần tử theo chỉ số.',
        'Phương thức append() thêm phần tử vào cuối danh sách.'
      ]
    },
    sampleCode: `# Nhiệm vụ 2 (SGK Trang 114): Nhập dãy số và tính trung bình cộng
A = []
n = int(input("Nhập số lượng phần tử n: "))

for i in range(n):
    num = float(input(f"Nhập số thứ {i + 1}: "))
    A.append(num)

tong = sum(A)
tb = tong / len(A)
print("Dãy số đã nhập:", A)
print("Tổng =", tong)
print("Trung bình cộng =", round(tb, 2))`
  },
  {
    id: 'bai-23',
    number: '23',
    bookChapter: 'Chủ đề 5 · Cấu trúc dữ liệu',
    sgkPage: 'Trang 115',
    title: 'Bài 23. Một số lệnh làm việc với dữ liệu danh sách',
    subtitle: 'Toán tử in, duyệt for in A, các lệnh remove, insert, clear và ghép danh sách (+)',
    level: 'Trung bình',
    duration: '45 phút',
    badgeColor: 'bg-purple-600',
    topics: ['Toán tử in', 'Duyệt for k in A', 'clear()', 'remove()', 'insert(index, x)', 'Phép ghép mảng (+)'],
    description: 'Thành thạo các phương thức thao tác danh sách nâng cao: kiểm tra sự tồn tại bằng in, chèn phần tử vào vị trí bất kì bằng insert(), xóa giá trị bằng remove().',
    digitalCompetence: {
          "coreCompetencies": [
                "NLc - Thao tác xử lý dữ liệu động với append, insert, remove, pop, sort",
                "NLd - Quản lý và biến đổi tập dữ liệu số có cấu trúc",
                "NLe - Đảm bảo tính toàn vẹn của dữ liệu trong quá trình xử lý"
          ],
          "aiActivity": "Yêu cầu AI so sánh sự khác nhau về cơ chế hoạt động và ngoại lệ giữa lệnh remove() và del / pop() trong Python.",
          "samplePrompt": "Hãy so sánh chi tiết phương thức remove(x) và pop(i) của danh sách trong Python. Cho ví dụ minh họa và nêu rõ lỗi gì xảy ra nếu phần tử x không có trong danh sách.",
          "aiCaution": "Lưu ý phản biện: Không dùng remove() mà chưa kiểm tra phần tử có nằm trong danh sách (dùng toán tử in) để tránh làm sập chương trình."
    },
    content: {
      overview: 'Python cung cấp bộ công cụ phong phú để thêm, xóa, chèn và duyệt danh sách một cách tự nhiên và ngắn gọn.',
      sections: [
        {
          heading: '1. Duyệt danh sách với toán tử in',
          explanation: 'Toán tử in dùng để kiểm tra phần tử có nằm trong danh sách hay không (trả về True/False), đồng thời cho phép duyệt trực tiếp từng phần tử mà không cần dùng chỉ số.',
          codeExample: `A = [10, 20, 30, 40]
print(20 in A)  # True
print(99 in A)  # False

# Duyệt trực tiếp qua từng phần tử
for k in A:
    print(k, end=" ")`,
          outputExample: `True
False
10 20 30 40 `
        },
        {
          heading: '2. Các phương thức: insert(), remove(), clear()',
          explanation: '- A.insert(index, value): chèn phần tử value vào vị trí index.\n- A.remove(value): xóa phần tử đầu tiên có giá trị bằng value (báo ValueError nếu không có).\n- A.clear(): xóa toàn bộ phần tử trong danh sách.',
          codeExample: `A = [1, 2, 6, 10]
A.insert(2, 5)   # Chèn số 5 vào vị trí chỉ số 2
print("Sau khi chèn:", A)

A.remove(6)      # Xóa số 6
print("Sau khi xóa số 6:", A)

B = [100, 200]
C = A + B        # Phép ghép danh sách
print("Ghép danh sách A + B:", C)`,
          outputExample: `Sau khi chèn: [1, 2, 5, 6, 10]
Sau khi xóa số 6: [1, 2, 5, 10]
Ghép danh sách A + B: [1, 2, 5, 10, 100, 200]`
        }
      ],
      summary: [
        'Toán tử in kiểm tra phần tử có nằm trong danh sách không.',
        'for k in A: duyệt trực tiếp từng phần tử của danh sách.',
        'A.insert(k, x): chèn phần tử x vào vị trí chỉ số k.',
        'A.remove(x): xoá phần tử đầu tiên có giá trị x.'
      ]
    },
    sampleCode: `# Nhiệm vụ 2 (SGK Trang 117): Xóa các phần tử nhỏ hơn 0 trong danh sách
A = [0, 1, -3, -10, 5, 9, -20, 55]
print("Danh sách ban đầu:", A)

i = 0
while i < len(A):
    if A[i] < 0:
        A.remove(A[i])
    else:
        i += 1

print("Danh sách sau khi loại bỏ số âm:", A)`
  },
  {
    id: 'bai-24',
    number: '24',
    bookChapter: 'Chủ đề 5 · Xâu kí tự',
    sgkPage: 'Trang 119',
    title: 'Bài 24. Xâu kí tự',
    subtitle: 'Khái niệm xâu, tính chất bất biến của xâu kí tự, chỉ số truy cập và lệnh duyệt xâu',
    level: 'Trung bình',
    duration: '45 phút',
    badgeColor: 'bg-amber-600',
    topics: ['Kiểu dữ liệu str', 'Tính bất biến (immutable)', 'Chỉ số 0 đến len()-1', 'Duyệt xâu for in', 'Toán tử in kiểm tra xâu con'],
    description: 'Nắm chắc kiểu dữ liệu xâu kí tự (str), hiểu lý do không thể thay đổi từng kí tự tại chỗ, cách duyệt xâu theo chỉ số hoặc theo từng kí tự.',
    digitalCompetence: {
          "coreCompetencies": [
                "NLc - Tư duy xử lý dữ liệu văn bản và xâu kí tự, trích xuất chuỗi con",
                "NLd - Hiểu tính chất bất biến (immutability) của dữ liệu",
                "NLa - Sử dụng công nghệ xử lý ngôn ngữ tự nhiên cơ bản"
          ],
          "aiActivity": "Ứng dụng AI tạo các bài toán thực tế về đảo ngược xâu, kiểm tra tính đối xứng (palindrome) và trích xuất chỉ số âm trong xâu.",
          "samplePrompt": "Giải thích tại sao trong Python không thể thực hiện lệnh s[0] = \"A\" với s = \"hello\"? Hãy hướng dẫn cách tạo ra xâu mới đã được thay thế kí tự đầu tiên.",
          "aiCaution": "Lưu ý phản biện: Hiểu rõ xâu kí tự là bất biến (immutable), mọi thao tác biến đổi đều trả về một xâu mới chứ không thay đổi xâu ban đầu."
    },
    content: {
      overview: 'Xâu kí tự là một dãy các kí tự Unicode. Trong Python, xâu là đối tượng bất biến (immutable) - không thể thay đổi từng kí tự của xâu sau khi đã tạo.',
      sections: [
        {
          heading: '1. Khái niệm và tính chất của xâu kí tự',
          explanation: 'Xâu được đặt trong cặp nháy đơn hoặc nháy kép. Chỉ số đánh số từ 0 đến len(s) - 1. Nếu cố gán s[0] = "A" chương trình sẽ báo TypeError.',
          codeExample: `s = "Tin học 10"
print("Độ dài:", len(s))
print("Kí tự đầu tiên:", s[0])
print("Kí tự cuối cùng:", s[-1])`,
          outputExample: `Độ dài: 10
Kí tự đầu tiên: T
Kí tự cuối cùng: 0`
        },
        {
          heading: '2. Duyệt từng kí tự và kiểm tra xâu con',
          explanation: 'Duyệt theo chỉ số for i in range(len(s)) hoặc duyệt trực tiếp for ch in s. Dùng toán tử in để kiểm tra xâu con.',
          codeExample: `s = "Thoại Ngọc Hầu"
print("Có chứa 'Ngọc' không?", "Ngọc" in s)

# Đếm số khoảng trắng trong xâu
dem_cach = 0
for ch in s:
    if ch == " ":
        dem_cach += 1
print("Số khoảng trắng:", dem_cach)`,
          outputExample: `Có chứa 'Ngọc' không? True
Số khoảng trắng: 2`
        }
      ],
      summary: [
        'Xâu kí tự là dãy các kí tự trong Python, chỉ số từ 0 đến len()-1.',
        'Xâu là đối tượng bất biến, không thể gán lại từng kí tự bằng s[i] = ...',
        'Có thể duyệt xâu bằng for ch in s hoặc for i in range(len(s)).',
        'Toán tử s1 in s2 trả lại True nếu s1 là xâu con của s2.'
      ]
    },
    sampleCode: `# Nhiệm vụ 2 (SGK Trang 121): Kiểm tra xâu S có chứa xâu con "10" không
S = input("Nhập xâu kí tự bất kì: ")

if "10" in S:
    print(f"-> Xâu gốc [{S}] CÓ chứa xâu con '10'")
else:
    print(f"-> Xâu gốc [{S}] KHÔNG chứa xâu con '10'")`
  },
  {
    id: 'bai-25',
    number: '25',
    bookChapter: 'Chủ đề 5 · Xâu kí tự',
    sgkPage: 'Trang 123',
    title: 'Bài 25. Một số lệnh làm việc với xâu kí tự',
    subtitle: 'Tìm kiếm vị trí xâu con với find(), tách xâu bằng split() và nối xâu bằng join()',
    level: 'Trung bình',
    duration: '45 phút',
    badgeColor: 'bg-amber-600',
    topics: ['Lệnh find()', 'Lệnh split()', 'Lệnh join()', 'Tách họ tên đệm', 'Chuẩn hóa văn bản'],
    description: 'Thành thạo 3 phương thức quan trọng bậc nhất khi xử lý xâu: find() để tìm kiếm, split() để tách từ thành danh sách, join() để nối các từ lại với nhau.',
    digitalCompetence: {
          "coreCompetencies": [
                "NLc - Phân tích, chuẩn hóa và xử lý văn bản bằng các phương thức xâu (split, join, find, replace)",
                "NLd - Tự động hóa chuẩn hóa dữ liệu văn bản",
                "NLe - Xử lý thông tin truyền thông số văn minh và chính xác"
          ],
          "aiActivity": "Sử dụng AI để học cách chuẩn hóa một đoạn văn bản có nhiều khoảng trắng thừa, tách danh sách họ tên từ chuỗi nhập vào.",
          "samplePrompt": "Em có chuỗi nhập họ tên bị thừa nhiều dấu cách: \"  Nguyễn   Văn   An  \". Hãy hướng dẫn em dùng các hàm split() và join() trong Python để chuẩn hóa lại thành \"Nguyễn Văn An\".",
          "aiCaution": "Lưu ý phản biện: Hàm find() trả về -1 nếu không tìm thấy, trong khi index() sẽ ném ra ngoại lệ ValueError. Cần kiểm tra kỹ mã do AI sinh ra."
    },
    content: {
      overview: 'Các phương thức find(), split() và join() là những công cụ đắc lực nhất để giải quyết các bài toán xử lý văn bản trong chương trình Tin học 10.',
      sections: [
        {
          heading: '1. Phương thức find() tìm vị trí xâu con',
          explanation: 'Cú pháp: <xâu>.find(<xâu con>) hoặc <xâu>.find(<xâu con>, start).\nTrả về chỉ số vị trí xuất hiện đầu tiên của xâu con. Nếu không tìm thấy, hàm trả về -1.',
          codeExample: `s = "Hà Nội - Đà Nẵng - TP Hồ Chí Minh"
pos = s.find("Đà Nẵng")
print("Vị trí tìm thấy:", pos)
print("Tìm từ không có:", s.find("An Giang"))`,
          outputExample: `Vị trí tìm thấy: 9
Tìm từ không có: -1`
        },
        {
          heading: '2. Phương thức split() và join()',
          explanation: '- <xâu>.split(): tách xâu thành danh sách các từ (ngầm định tách theo khoảng trắng).\n- <kí tự nối>.join(<danh sách>): nối các phần tử của danh sách xâu thành một xâu duy nhất.',
          codeExample: `s = "Tiên học lễ hậu học văn"
ds_tu = s.split()
print("Danh sách từ:", ds_tu)

# Nối lại bằng dấu gạch ngang
xau_noi = "-".join(ds_tu)
print("Xâu nối lại:", xau_noi)`,
          outputExample: `Danh sách từ: ['Tiên', 'học', 'lễ', 'hậu', 'học', 'văn']
Xâu nối lại: Tiên-học-lễ-hậu-học-văn`
        }
      ],
      summary: [
        'find() tìm vị trí xâu con, trả về -1 nếu không tìm thấy.',
        'split() tách xâu thành danh sách các từ.',
        'join() dùng xâu nối để gộp danh sách các xâu thành một xâu mới.',
        'Kết hợp split() và join() giúp chuẩn hóa khoảng trắng thừa cực kỳ hiệu quả.'
      ]
    },
    sampleCode: `# Nhiệm vụ 3 (SGK Trang 126): Tách họ tên học sinh thành Họ, Tên và Tên đệm
hoten = "Nguyễn Bỉnh Khiêm"
slist = hoten.split()

ho = slist[0]
ten = slist[-1]
dem = " ".join(slist[1:-1])

print("Họ tên đầy đủ:", hoten)
print("Họ:", ho)
print("Tên đệm:", dem)
print("Tên:", ten)`
  },
  {
    id: 'bai-26',
    number: '26',
    bookChapter: 'Chủ đề 5 · Hàm & Chương trình con',
    sgkPage: 'Trang 127',
    title: 'Bài 26. Hàm trong Python',
    subtitle: 'Khái niệm chương trình con, hàm có sẵn và cú pháp thiết lập hàm tự định nghĩa def',
    level: 'Trung bình',
    duration: '45 phút',
    badgeColor: 'bg-rose-600',
    topics: ['Khái niệm hàm', 'Hàm có sẵn (built-in)', 'Từ khóa def', 'Lệnh return', 'Gọi hàm'],
    description: 'Tìm hiểu khái niệm chương trình con, phân biệt hàm tích hợp sẵn của Python và cách tự viết hàm với từ khóa def và lệnh return.',
    digitalCompetence: {
          "coreCompetencies": [
                "NLc - Tư duy module hóa (Modular Design), phân rã bài toán lớn thành các hàm con",
                "NLd - Tái sử dụng mã nguồn và trừu tượng hóa thủ tục",
                "NLe - Hợp tác nhóm thông qua phân chia giao diện hàm"
          ],
          "aiActivity": "Yêu cầu AI đóng vai trò người phản biện mã nguồn (Code Reviewer), nhận xét xem hàm học sinh tự viết đã đúng chuẩn, có rõ ràng và dễ tái sử dụng chưa.",
          "samplePrompt": "Em vừa viết hàm tính diện tích tam giác: def dien_tich(a, h): return 0.5 * a * h. Hãy đóng vai giáo viên Tin học 10 nhận xét ưu điểm và viết thêm docstring chuẩn sư phạm cho hàm này.",
          "aiCaution": "Lưu ý phản biện: Phân biệt rành mạch giữa hàm trả về giá trị (có return) và hàm chỉ in kết quả ra màn hình (chỉ có print)."
    },
    content: {
      overview: 'Hàm (function) là một khối lệnh được đặt tên và gom nhóm lại để thực hiện một tác vụ cụ thể, có thể tái sử dụng nhiều lần ở nhiều nơi trong chương trình.',
      sections: [
        {
          heading: '1. Một số hàm thiết kế sẵn của Python',
          explanation: 'Python có rất nhiều hàm có sẵn: abs(x) (trị tuyệt đối), round(x, n) (làm tròn), len(s) (độ dài), type(x), int(x), float(x), str(x), min(), max(), sum()...',
          codeExample: `print("Trị tuyệt đối của -15:", abs(-15))
print("Làm tròn số 3.14159:", round(3.14159, 2))
print("Giá trị lớn nhất:", max(4, 9, 2, 7))`,
          outputExample: `Trị tuyệt đối của -15: 15
Làm tròn số 3.14159: 3.14
Giá trị lớn nhất: 9`
        },
        {
          heading: '2. Thiết lập hàm tự định nghĩa với def',
          explanation: 'Cú pháp:\ndef <tên hàm>(<danh sách tham số>):\n    <khối lệnh>\n    return <giá trị>\n\nLệnh return dùng để trả về kết quả cho nơi gọi hàm và kết thúc hàm ngay lập tức.',
          codeExample: `def tinh_dien_tich_hcn(a, b):
    return a * b

# Gọi hàm
s = tinh_dien_tich_hcn(6, 4)
print("Diện tích hình chữ nhật:", s)`,
          outputExample: `Diện tích hình chữ nhật: 24`
        }
      ],
      summary: [
        'Hàm là nhóm các câu lệnh được đóng gói để thực hiện một nhiệm vụ cụ thể.',
        'Khai báo hàm bắt đầu bằng từ khóa def, tên hàm và danh sách tham số.',
        'Lệnh return trả lại giá trị tính toán và kết thúc hàm.',
        'Hàm không có return sẽ mặc định trả về giá trị None.'
      ]
    },
    sampleCode: `# Nhiệm vụ 2 (SGK Trang 129): Thiết lập hàm kiểm tra số nguyên tố prime(n)
def prime(n):
    if n <= 1:
        return False
    for k in range(2, int(n**0.5) + 1):
        if n % k == 0:
            return False
    return True

# Kiểm tra các số từ 2 đến 20
print("Các số nguyên tố từ 2 đến 20 là:")
for x in range(2, 21):
    if prime(x):
        print(x, end=" ")`
  },
  {
    id: 'bai-27',
    number: '27',
    bookChapter: 'Chủ đề 5 · Hàm & Chương trình con',
    sgkPage: 'Trang 131',
    title: 'Bài 27. Tham số của hàm',
    subtitle: 'Phân biệt tham số (parameter) và đối số (argument), cách truyền giá trị cho hàm',
    level: 'Trung bình',
    duration: '45 phút',
    badgeColor: 'bg-rose-600',
    topics: ['Tham số (parameter)', 'Đối số (argument)', 'Truyền giá trị', 'Tổ chức chương trình con'],
    description: 'Hiểu rõ sự khác biệt giữa tham số khi định nghĩa hàm và đối số khi gọi hàm. Cách sử dụng chương trình con để phân rã bài toán lớn thành các bài toán nhỏ.',
    digitalCompetence: {
          "coreCompetencies": [
                "NLc - Thiết kế giao diện hàm với tham số hình thức, đối số vị trí và đối số mặc định",
                "NLd - Linh hoạt cấu hình chức năng của hàm trong môi trường lập trình",
                "NLa - Đảm bảo tính nhất quán của giao diện lập trình"
          ],
          "aiActivity": "Dùng AI thử nghiệm các trường hợp gọi hàm với các dạng đối số khác nhau, kiểm tra hành vi của đối số mặc định.",
          "samplePrompt": "Viết cho em một ví dụ hàm tính tiền phòng khách sạn có tham số mặc định loai_phong=\"TieuChuan\", giam_gia=0. Giải thích cách gọi hàm khi muốn đổi giảm giá mà giữ nguyên loại phòng.",
          "aiCaution": "Lưu ý phản biện: Cảnh báo việc sử dụng đối số mặc định có kiểu dữ liệu biến đổi (mutable default argument như danh sách rỗng []) có thể lưu vết ngoài ý muốn."
    },
    content: {
      overview: 'Tham số là biến được định nghĩa trong khai báo hàm. Đối số là giá trị cụ thể được truyền vào hàm khi gọi hàm.',
      sections: [
        {
          heading: '1. Phân biệt Tham số và Đối số',
          explanation: 'Khi định nghĩa def f_sum(a, b, c): thì a, b, c là các tham số (parameters).\nKhi gọi lệnh f_sum(10, x, y): thì 10, x, y là các đối số (arguments). Các đối số sẽ được gán giá trị tương ứng cho các tham số.',
          codeExample: `def f(a, b, c):
    return a + b + c

# Gọi hàm với đối số cụ thể
print("Kết quả f(1, 2, 3) =", f(1, 2, 3))
x, y, z = 10, 20, 5
print("Kết quả f(x, y, z) =", f(x, y, z))`,
          outputExample: `Kết quả f(1, 2, 3) = 6
Kết quả f(x, y, z) = 35`
        },
        {
          heading: '2. Cách sử dụng chương trình con hiệu quả',
          explanation: 'Chương trình con giúp chia một bài toán lớn thành các phần việc nhỏ độc lập, làm cho cấu trúc chương trình rõ ràng, dễ hiểu, dễ sửa chữa và tái sử dụng.',
          codeExample: `def tong_duong(A):
    s = 0
    for x in A:
        if x > 0:
            s += x
    return s

ds1 = [0, 2, -1, 5, 10, -3]
ds2 = [1, -10, -11, 8, 2, 0]
print("Tổng số dương dãy 1:", tong_duong(ds1))
print("Tổng số dương dãy 2:", tong_duong(ds2))`,
          outputExample: `Tổng số dương dãy 1: 17
Tổng số dương dãy 2: 11`
        }
      ],
      summary: [
        'Tham số là biến khai báo trong định nghĩa hàm.',
        'Đối số là giá trị thực tế truyền vào khi gọi hàm.',
        'Số lượng đối số khi gọi hàm phải khớp với số lượng tham số trong khai báo hàm.',
        'Dùng chương trình con giúp chia bài toán phức tạp thành các bài toán con.'
      ]
    },
    sampleCode: `# Nhiệm vụ 1 (SGK Trang 134): Thiết lập hàm f_sum(A, b) tính tổng danh sách A
def f_sum(A, b):
    # Nếu b == 0: tính tổng tất cả các số trong A
    # Nếu b != 0: chỉ tính tổng các số dương của A
    s = 0
    for x in A:
        if b == 0 or (b != 0 and x > 0):
            s += x
    return s

ds = [-3, 5, -1, 8, 2, -4]
print("Danh sách A:", ds)
print("Tổng tất cả các số (b=0):", f_sum(ds, 0))
print("Tổng các số dương (b=1):", f_sum(ds, 1))`
  },
  {
    id: 'bai-28',
    number: '28',
    bookChapter: 'Chủ đề 5 · Hàm & Chương trình con',
    sgkPage: 'Trang 136',
    title: 'Bài 28. Phạm vi của biến',
    subtitle: 'Biến cục bộ (local), biến toàn cục (global) và từ khóa global trong Python',
    level: 'Trung bình',
    duration: '45 phút',
    badgeColor: 'bg-rose-600',
    topics: ['Biến cục bộ (local)', 'Biến toàn cục (global)', 'Từ khóa global', 'Phạm vi hiệu lực'],
    description: 'Phân biệt ranh giới hoạt động của biến bên trong hàm và ngoài hàm, tránh lỗi NameError và biết cách dùng từ khóa global khi cần cập nhật biến ngoài hàm.',
    digitalCompetence: {
          "coreCompetencies": [
                "NLc - Quản lý phạm vi hoạt động của biến (Scope), biến cục bộ và toàn cục",
                "NLd - Phòng tránh xung đột định danh trong phần mềm phức tạp",
                "NLa - Kiểm soát vòng đời và an toàn bộ nhớ"
          ],
          "aiActivity": "Yêu cầu AI phân tích lỗi UnboundLocalError và giải thích sơ đồ bộ nhớ khi một hàm cố tình thay đổi biến toàn cục mà chưa khai báo global.",
          "samplePrompt": "Giải thích nguyên nhân đoạn mã sau báo lỗi UnboundLocalError: dem = 0; def tang(): dem += 1; tang(). Nêu 2 cách xử lý: dùng từ khóa global và cách dùng tham số/return (khuyến khích).",
          "aiCaution": "Lưu ý phản biện: Hạn chế tối đa việc lạm dụng từ khóa global trong chương trình, ưu tiên truyền dữ liệu qua tham số và nhận lại qua giá trị trả về của hàm."
    },
    content: {
      overview: 'Mỗi biến trong Python đều có một phạm vi hiệu lực (scope). Biến khai báo trong hàm là biến cục bộ, chỉ có tác dụng bên trong hàm đó.',
      sections: [
        {
          heading: '1. Phạm vi của biến khai báo trong hàm (Biến cục bộ)',
          explanation: 'Các biến khai báo bên trong một hàm chỉ có hiệu lực bên trong hàm đó. Chương trình chính không sử dụng được. Khi hàm kết thúc, biến cục bộ sẽ bị giải phóng khỏi bộ nhớ.',
          codeExample: `def func():
    n = 10  # n là biến cục bộ
    print("Trong hàm: n =", n)

func()
# Lệnh print(n) ở ngoài hàm sẽ báo NameError: name 'n' is not defined`,
          outputExample: `Trong hàm: n = 10`
        },
        {
          heading: '2. Biến toàn cục và từ khóa global',
          explanation: 'Biến khai báo bên ngoài hàm là biến toàn cục (global), có tác dụng trong toàn bộ tệp chương trình. Trong hàm có thể truy cập đọc giá trị của biến toàn cục. Nếu muốn thay đổi giá trị của biến toàn cục bên trong hàm, phải khai báo trước bằng từ khóa global.',
          codeExample: `t = 10  # Biến toàn cục

def cap_nhat():
    global t  # Báo cho Python biết ta muốn dùng biến toàn cục t
    t = t + 5

cap_nhat()
print("Giá trị t sau khi cập nhật =", t)`,
          outputExample: `Giá trị t sau khi cập nhật = 15`
        }
      ],
      summary: [
        'Biến khai báo trong hàm có tính cục bộ (local), chỉ có hiệu lực bên trong hàm.',
        'Biến khai báo bên ngoài hàm là biến toàn cục (global), có hiệu lực trong toàn tệp.',
        'Dùng từ khoá global <tên biến> bên trong hàm nếu muốn thay đổi giá trị biến toàn cục.'
      ]
    },
    sampleCode: `# Nhiệm vụ 2 (SGK Trang 139): Hàm Tach_tu(Str, c) đổi chữ hoa/thường
def Tach_tu(Str, c):
    # c = 0: chuyển thành chữ in hoa
    # c = 1: chuyển thành chữ in thường
    # c = 2: viết hoa chữ cái đầu mỗi từ
    A = Str.split()
    if c == 0:
        return [tu.upper() for tu in A]
    elif c == 1:
        return [tu.lower() for tu in A]
    else:
        return [tu.title() for tu in A]

cau = "Trường THPT Nguyễn Bỉnh Khiêm"
print("Gốc:     ", cau)
print("Hoa:     ", Tach_tu(cau, 0))
print("Thường:  ", Tach_tu(cau, 1))
print("Tiêu đề: ", Tach_tu(cau, 2))`
  },
  {
    id: 'bai-29',
    number: '29',
    bookChapter: 'Chủ đề 5 · Kiểm thử & Gỡ lỗi',
    sgkPage: 'Trang 141',
    title: 'Bài 29. Nhận biết lỗi chương trình',
    subtitle: 'Phân loại lỗi cú pháp (SyntaxError), lỗi ngoại lệ (Runtime Error) và lỗi ngữ nghĩa (Logic Error)',
    level: 'Nâng cao',
    duration: '45 phút',
    badgeColor: 'bg-teal-600',
    topics: ['SyntaxError', 'Runtime Exceptions', 'ZeroDivisionError', 'IndexError', 'TypeError', 'Logic Error'],
    description: 'Nhận diện và phân biệt 3 loại lỗi lập trình cơ bản, đọc thông báo lỗi của Python để xác định đúng nguyên nhân và vị trí phát sinh lỗi.',
    digitalCompetence: {
          "coreCompetencies": [
                "NLc & NLd - Năng lực phân loại và chẩn đoán lỗi chương trình (SyntaxError, RuntimeError, LogicError)",
                "NLd - Đọc hiểu thông báo lỗi hệ thống (Traceback)",
                "NLe - Kiên trì và bình tĩnh giải quyết sự cố công nghệ"
          ],
          "aiActivity": "Thực hành dán thông báo lỗi Traceback vào AI và yêu cầu AI hướng dẫn tìm nguyên nhân gốc rễ mà không đưa ngay lời giải hoàn chỉnh.",
          "samplePrompt": "Chương trình của em báo lỗi: ZeroDivisionError: division by zero tại dòng 5. Hãy giải thích tại sao máy tính không thể chia cho 0 và hướng dẫn em cách thêm câu lệnh if để phòng ngừa lỗi này.",
          "aiCaution": "Lưu ý phản biện: Lỗi ngữ nghĩa (Logic Error) không phát sinh thông báo đỏ từ máy tính. Học sinh phải tự kiểm tra bằng bảng dữ liệu thử, AI không thể tự biết nếu học sinh không mô tả đúng đề bài."
    },
    content: {
      overview: 'Lỗi chương trình (Bug) là điều không thể tránh khỏi khi lập trình. Biết cách nhận dạng và phân loại lỗi giúp học sinh tiết kiệm thời gian sửa bài.',
      sections: [
        {
          heading: '1. Ba loại lỗi lập trình cơ bản',
          explanation: '1. Lỗi cú pháp (SyntaxError): Viết sai cú pháp câu lệnh (quên dấu hai chấm, mở ngoặc mà không đóng ngoặc). Chương trình lập tức dừng lại trước khi chạy.\n2. Lỗi ngoại lệ (Runtime Error / Exception): Xảy ra khi chương trình đang chạy gặp tình huống không thể thực thi (chia cho 0, ép kiểu sai, tràn chỉ số).\n3. Lỗi ngữ nghĩa / lôgic (Logic Error): Chương trình chạy bình thường không có thông báo lỗi nào nhưng kết quả đưa ra bị sai.',
          codeExample: `# Bảng các mã lỗi ngoại lệ thường gặp trong Python:
# ZeroDivisionError: phép chia cho 0
# IndexError: truy cập chỉ số ngoài phạm vi list
# NameError: gọi tên biến hoặc hàm chưa khai báo
# TypeError: sai kiểu dữ liệu của phép toán
# ValueError: giá trị tham số không hợp lệ
# IndentationError: sai khoảng thụt lề dòng lệnh`,
          outputExample: `Bảng tổng hợp các lỗi thường gặp trong SGK Tin học 10 Trang 143`
        },
        {
          heading: '2. Ví dụ thực tế về lỗi lôgic (khó phát hiện nhất)',
          explanation: 'Ví dụ tính tổng 3 số nguyên đầu tiên 1 + 2 + 3 = 6, nhưng người viết viết nhầm for i in range(3): s = s + i thì kết quả chỉ bằng 3 vì range(3) chỉ sinh 0, 1, 2.',
          codeExample: `# Lỗi lôgic tính tổng 1 + 2 + 3
s = 0
for i in range(1, 4):  # Phải là range(1, 4) chứ không phải range(3)
    s += i
print("Tổng đúng là:", s)`,
          outputExample: `Tổng đúng là: 6`
        }
      ],
      summary: [
        'Tổng thể có 3 loại lỗi: Lỗi cú pháp, Lỗi ngoại lệ (Runtime), Lỗi lôgic.',
        'Lỗi cú pháp dừng chương trình ngay lập tức trước khi chạy.',
        'Lỗi ngoại lệ báo tên mã lỗi kèm dòng lệnh sinh ra lỗi (Traceback).',
        'Lỗi lôgic đòi hỏi kiểm tra lại thuật toán bằng các bộ dữ liệu test.'
      ]
    },
    sampleCode: `# Ví dụ nhận diện và phòng ngừa lỗi chia cho 0 (ZeroDivisionError)
a = 10
b = 0

if b != 0:
    thuong = a / b
    print("Thương =", thuong)
else:
    print("Cảnh báo: Không thể chia cho 0! (ZeroDivisionError)")`
  },
  {
    id: 'bai-30',
    number: '30',
    bookChapter: 'Chủ đề 5 · Kiểm thử & Gỡ lỗi',
    sgkPage: 'Trang 145',
    title: 'Bài 30. Kiểm thử và gỡ lỗi chương trình',
    subtitle: 'Phương pháp kiểm thử với các bộ dữ liệu test, kỹ thuật in giá trị trung gian và đặt điểm dừng (breakpoint)',
    level: 'Nâng cao',
    duration: '45 phút',
    badgeColor: 'bg-teal-600',
    topics: ['Kiểm thử (Test)', 'Gỡ lỗi (Debug)', 'Bộ test vùng biên', 'In thông số trung gian', 'Điểm dừng breakpoint'],
    description: 'Học các phương pháp kiểm thử (testing) và gỡ lỗi (debugging) để kiểm soát chất lượng chương trình, phát hiện sớm các lỗi tiềm ẩn ở vùng biên.',
    digitalCompetence: {
          "coreCompetencies": [
                "NLc - Năng lực kiểm thử (Testing) và gỡ lỗi (Debugging), thiết kế ma trận kiểm thử",
                "NLd - Ứng dụng kỹ thuật in biến trung gian (Trace print) và chia đôi để tìm lỗi",
                "NLe - Đảm bảo độ tin cậy và an toàn của sản phẩm số"
          ],
          "aiActivity": "Sử dụng AI để tự động sinh bộ test case phong phú (bao gồm số âm, số 0, số cực lớn, chuỗi rỗng) để kiểm thử độ bền của chương trình.",
          "samplePrompt": "Tôi có hàm kiểm tra số nguyên tố la_so_nguyen_to(n). Hãy sinh cho tôi một bảng gồm 8 trường hợp kiểm thử (test case) gồm: số < 2, số chẵn, số lẻ là nguyên tố, hợp số lớn và giải thích tại sao cần kiểm thử các giá trị đó.",
          "aiCaution": "Lưu ý phản biện: Tuyệt đối không để AI tự tạo test case rồi tự sinh kết quả mà không đối chiếu độc lập; học sinh phải tự giải bài toán bằng tay để có kết quả kỳ vọng (Expected Output) chuẩn xác."
    },
    content: {
      overview: 'Kiểm thử (Test) là việc chạy thử chương trình với các bộ dữ liệu khác nhau để tìm lỗi. Gỡ lỗi (Debug) là quá trình tìm nguyên nhân và sửa các lỗi đó.',
      sections: [
        {
          heading: '1. Thiết lập các bộ dữ liệu kiểm thử (Test Cases)',
          explanation: 'Một bộ test tốt cần bao gồm:\n- Test tiêu biểu: dữ liệu thông thường phổ biến.\n- Test ngẫu nhiên: kiểm tra tính khái quát.\n- Test dữ liệu vùng biên: các giá trị cực tiểu, cực đại, số 0, số âm, xâu rỗng, mảng 1 phần tử...',
          codeExample: `# Kiểm thử hàm tính thương với các bộ test:
# Test 1 (tiêu biểu): a=10, b=2 -> kết quả 5
# Test 2 (biên): a=0, b=5 -> kết quả 0
# Test 3 (ngoại lệ biên): a=5, b=0 -> cảnh báo b=0`,
          outputExample: `Bộ test chuẩn cần bao quát cả trường hợp đặc biệt ở vùng biên.`
        },
        {
          heading: '2. Kỹ thuật in giá trị trung gian để theo dõi biến',
          explanation: 'Bổ sung các lệnh print() vào bên trong vòng lặp hoặc sau mỗi bước tính để quan sát sự thay đổi giá trị của các biến qua từng bước.',
          codeExample: `# Thuật toán tìm UCLN của m và n có in bước trung gian
m, n = 20, 16
buoc = 0
while m != n:
    buoc += 1
    if m < n:
        n = n - m
    else:
        m = m - n
    print(f"Bước {buoc}: m = {m}, n = {n}")
print("-> UCLN =", m)`,
          outputExample: `Bước 1: m = 4, n = 16
Bước 2: m = 4, n = 12
Bước 3: m = 4, n = 8
Bước 4: m = 4, n = 4
-> UCLN = 4`
        }
      ],
      summary: [
        'Cần có nhiều bộ test với độ lớn khác nhau và chú ý bộ test ở vùng biên.',
        'In các thông số trung gian bằng lệnh print() là cách gỡ lỗi trực quan và hiệu quả nhất.',
        'Sử dụng công cụ điểm dừng (breakpoint) cho phép tạm dừng chương trình để theo dõi bộ nhớ.'
      ]
    },
    sampleCode: `# Minh họa Bài 30 (SGK Trang 147): Kiểm thử tìm UCLN có in vết từng vòng lặp
m = int(input("Nhập số tự nhiên m: "))
n = int(input("Nhập số tự nhiên n: "))
k = 0

print(f"Bắt đầu tìm UCLN của ({m}, {n}):")
while m != n:
    k += 1
    if m < n:
        n = n - m
    else:
        m = m - n
    print(f" Vòng lặp {k}: m = {m}, n = {n}")

print(f"==> Kết quả UCLN = {m}")`
  },
  {
    id: 'bai-31',
    number: '31',
    bookChapter: 'Chủ đề 5 · Thực hành & Dự án',
    sgkPage: 'Trang 149',
    title: 'Bài 31. Thực hành viết chương trình đơn giản',
    subtitle: 'Phân tích số nguyên tố n = p1 * p2 * ... và giải phương trình bậc hai ax² + bx + c = 0',
    level: 'Nâng cao',
    duration: '50 phút',
    badgeColor: 'bg-orange-600',
    topics: ['Phân tích thừa số nguyên tố', 'Giải PT bậc hai', 'Tổ chức hàm NhapDL, GiaiPT', 'Kiểm tra ngoại lệ'],
    description: 'Thực hành vận dụng tổng hợp kiến thức biến, rẽ nhánh, vòng lặp và chương trình con để hoàn thành 2 bài toán kinh điển trong SGK Tin học 10.',
    digitalCompetence: {
          "coreCompetencies": [
                "NLc - Năng lực giải quyết vấn đề toàn trình với sự trợ giúp của máy tính (Phân tích -> Thiết kế -> Cài đặt -> Kiểm thử)",
                "NLd - Phối hợp công cụ lập trình số với trợ lý AI",
                "NLe - Tác phong làm việc nhóm và trung thực học thuật số"
          ],
          "aiActivity": "Thực hành đóng vai: Học sinh là Kỹ sư trưởng thiết kế thuật toán, AI là Trợ lý phản biện đề xuất các cải tiến về tính dễ đọc và xử lý ngoại lệ.",
          "samplePrompt": "Em đang làm bài toán phân tích một số thành thừa số nguyên tố (Bài 31 SGK Tin 10). Ý tưởng của em là chia dần cho k từ 2 đến khi m=1. Hãy phân tích xem thuật toán này có điểm nào có thể tối ưu không?",
          "aiCaution": "Lưu ý phản biện: Đạo đức AI: Không sao chép nguyên khối mã nguồn do AI tạo ra; học sinh phải hiểu rõ và tự tay gõ lại từng câu lệnh của chương trình."
    },
    content: {
      overview: 'Bài học thực hành giúp học sinh rèn luyện tư duy thiết kế chương trình từ khâu nhập dữ liệu, xử lý thuật toán đến thông báo kết quả tường minh.',
      sections: [
        {
          heading: '1. Nhiệm vụ 1: Phân tích số nguyên tố thành các thừa số',
          explanation: 'Nhập số tự nhiên n. Nếu n là hợp số thì in ra phân tích n thành tích các thừa số nguyên tố: n = p1 * p2 * ... * pk.',
          codeExample: `n = 100
m = n
k = 2
NT = []
while m > 1:
    while m % k != 0:
        k += 1
    NT.append(k)
    m = m // k

print(f"{n} =", " * ".join(map(str, NT)))`,
          outputExample: `100 = 2 * 2 * 5 * 5`
        },
        {
          heading: '2. Nhiệm vụ 2: Thiết kế chương trình giải phương trình bậc hai',
          explanation: 'Giải phương trình ax² + bx + c = 0. Chương trình được thiết kế dạng module với các hàm: NhapDL(), GiaiPT1(b, c) và GiaiPT2(a, b, c).',
          codeExample: `import math

def giai_pt2(a, b, c):
    if a == 0:
        return "Phương trình bậc nhất" if b != 0 else "Vô số nghiệm hoặc vô nghiệm"
    delta = b**2 - 4*a*c
    if delta > 0:
        x1 = (-b + math.sqrt(delta)) / (2*a)
        x2 = (-b - math.sqrt(delta)) / (2*a)
        return f"x1 = {round(x1, 2)}, x2 = {round(x2, 2)}"
    elif delta == 0:
        return f"x = {round(-b/(2*a), 2)}"
    else:
        return "Vô nghiệm thực"

print("Nghiệm:", giai_pt2(1, -5, 6))`,
          outputExample: `Nghiệm: x1 = 3.0, x2 = 2.0`
        }
      ],
      summary: [
        'Vận dụng vòng lặp while lồng nhau để phân tích thừa số nguyên tố.',
        'Phân rã chương trình giải phương trình bậc hai thành các hàm con giúp mã nguồn trong sáng.',
        'Luôn kiểm tra các trường hợp suy biến khi a = 0 và delta < 0.'
      ]
    },
    sampleCode: `# Nhiệm vụ 1 (SGK Trang 149): Phân tích n thành tích các thừa số nguyên tố
n = int(input("Nhập số tự nhiên n: "))
m = n
k = 2
NT = []

while m > 1:
    while m % k != 0:
        k += 1
    NT.append(k)
    m = m // k

if len(NT) == 0:
    print(n, "không phải là số nguyên tố.")
elif len(NT) == 1:
    print(n, "là số nguyên tố.")
else:
    print(f"{n} là hợp số, phân tích: {n} = " + " * ".join(map(str, NT)))`
  },
  {
    id: 'bai-32',
    number: '32',
    bookChapter: 'Chủ đề 5 · Thực hành & Dự án',
    sgkPage: 'Trang 153',
    title: 'Bài 32. Ôn tập lập trình Python',
    subtitle: 'Dự án liên môn: Tách họ tên học sinh, Trọng lượng trên các hành tinh và Kiểm tra ngày tháng hợp lệ',
    level: 'Nâng cao',
    duration: '50 phút',
    badgeColor: 'bg-orange-600',
    topics: ['Tách họ tên đệm', 'Liên môn Vật lí: Hành tinh', 'Xác thực ngày tháng năm', 'Ôn tập toàn diện'],
    description: 'Tổng kết Chủ đề 5 với các bài toán ứng dụng thực tế phong phú: tách xâu văn bản, tính trọng lực thiên văn và thuật toán lịch vạn niên kiểm tra năm nhuận.',
    digitalCompetence: {
          "coreCompetencies": [
                "NLc - Tổng hợp năng lực giải quyết vấn đề liên môn (Vật lí, Thiên văn, Toán học, Lịch vạn niên)",
                "NLd - Khả năng đóng gói dự án phần mềm hoàn chỉnh",
                "NLe - Văn hóa chia sẻ sản phẩm số, đánh giá đồng đẳng và ứng dụng AI có đạo đức"
          ],
          "aiActivity": "Xây dựng dự án mini liên môn với sự hỗ trợ của AI: Tạo ứng dụng kiểm tra tính hợp lệ của ngày tháng năm và tính trọng lượng của phi hành gia trên các hành tinh.",
          "samplePrompt": "Hãy đóng vai chuyên gia giáo dục STEM hướng dẫn em mở rộng bài toán tính trọng lượng trên các hành tinh (Bài 32) bằng cách thêm tính năng so sánh sức bật nhảy của con người trên Mặt Trăng và Trái Đất.",
          "aiCaution": "Lưu ý phản biện: AI là công cụ khuếch đại tư duy, không thay thế tư duy sáng tạo của con người. Học sinh phải chịu trách nhiệm hoàn toàn về tính chính xác và an toàn của phần mềm mình tạo ra."
    },
    content: {
      overview: 'Bài 32 là đỉnh cao ứng dụng của Chủ đề 5 - học sinh vận dụng kết hợp cả biến, xâu kí tự, danh sách, hàm và cấu trúc điều khiển để giải quyết trọn vẹn các bài toán liên môn.',
      sections: [
        {
          heading: '1. Nhiệm vụ: Trọng lượng của một vật trên các hành tinh (SGK Trang 154)',
          explanation: 'Công thức P = m * g. Trọng lượng trên Trái Đất P0 thì m = P0 / 9.8. Từ đó tính trọng lượng P = P0 * g / 9.8 trên các thiên thể: Mặt Trăng (g=1.62), Hỏa tinh (g=3.711), Kim tinh (g=8.83), Mộc tinh (g=24.79), Thổ tinh (g=10.44), Mặt Trời (g=274.0).',
          codeExample: `planets = ["Mặt Trăng", "Hỏa tinh", "Kim tinh", "Mộc tinh", "Mặt Trời"]
gravities = [1.62, 3.711, 8.83, 24.79, 274.0]

p_earth = 500.0  # 500 N trên Trái Đất (khoảng 51 kg)
for i in range(len(planets)):
    p = round(p_earth * gravities[i] / 9.8, 2)
    print(f"Trọng lượng trên {planets[i]:10}: {p} N")`,
          outputExample: `Trọng lượng trên Mặt Trăng : 82.65 N
Trọng lượng trên Hỏa tinh  : 189.34 N
Trọng lượng trên Kim tinh  : 450.51 N
Trọng lượng trên Mộc tinh  : 1264.8 N
Trọng lượng trên Mặt Trời  : 13979.59 N`
        },
        {
          heading: '2. Nhiệm vụ: Kiểm tra tính hợp lệ của ngày, tháng, năm (SGK Trang 155)',
          explanation: 'Nhập vào chuỗi dạng ngày-tháng-năm (ví dụ 08-02-2024). Kiểm tra xem bộ ba số đó có tạo thành một ngày hợp lệ trong lịch dương hay không.',
          codeExample: `def la_nhuan(year):
    return (year % 400 == 0) or (year % 4 == 0 and year % 100 != 0)

thang_ngay = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
d, m, y = 29, 2, 2024
if la_nhuan(y):
    thang_ngay[2] = 29

hop_le = (y > 0) and (1 <= m <= 12) and (1 <= d <= thang_ngay[m])
print(f"Ngày {d}/{m}/{y} hợp lệ?", hop_le)`,
          outputExample: `Ngày 29/2/2024 hợp lệ? True`
        }
      ],
      summary: [
        'Lập trình là công cụ giải quyết bài toán của các môn khoa học tự nhiên như Toán, Vật lí, Địa lí.',
        'Kỹ năng bẻ nhỏ vấn đề phức tạp thành các hàm con giúp giải quyết bài toán lớn dễ dàng.',
        'Hoàn thành Chủ đề 5 đánh dấu bước trưởng thành vững chắc về tư duy thuật toán của học sinh lớp 10.'
      ]
    },
    sampleCode: `# Nhiệm vụ 3 (SGK Trang 155-156): Kiểm tra tính hợp lệ của ngày - tháng - năm
def nhuan(year):
    return year % 400 == 0 or (year % 4 == 0 and year % 100 != 0)

chuoi = input("Nhập ngày-tháng-năm (VD: 29-02-2024): ")
p = chuoi.split("-")

day = int(p[0])
month = int(p[1])
year = int(p[2])

so_ngay = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
if nhuan(year):
    so_ngay[2] = 29

if year > 0 and 1 <= month <= 12 and 1 <= day <= so_ngay[month]:
    print(f"-> Bộ dữ liệu [{chuoi}] là NGÀY HỢP LỆ!")
    if nhuan(year):
        print(f"   (Năm {year} là năm nhuận, tháng 2 có 29 ngày)")
else:
    print(f"-> Bộ dữ liệu [{chuoi}] KHÔNG HỢP LỆ!")`
  }
];
