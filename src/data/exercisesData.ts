import { Exercise } from '../types';

export const EXERCISES_DATA: Exercise[] = [
  {
    id: 'ex-rect',
    title: 'Bài 1: Tính chu vi và diện tích hình chữ nhật',
    difficulty: 'Dễ',
    category: 'Cú pháp & Số học',
    description: `Viết chương trình nhập vào hai số thực là chiều dài $a$ và chiều rộng $b$ của hình chữ nhật từ hai dòng liên tiếp. 
Hãy tính và in ra chu vi và diện tích của hình chữ nhật đó, làm tròn 2 chữ số thập phân.`,
    inputFormat: 'Gồm 2 dòng: dòng 1 là chiều dài a, dòng 2 là chiều rộng b.',
    outputFormat: 'Gồm 2 dòng: dòng 1 in "Chu vi: {chu_vi}", dòng 2 in "Dien tich: {dien_tich}". Làm tròn 2 chữ số thập phân.',
    constraints: '1 <= a, b <= 10^6',
    starterCode: `# Nhập chiều dài và chiều rộng
a = float(input())
b = float(input())

# Hãy viết mã tính chu vi và diện tích tại đây:
`,
    solutionCode: `a = float(input())
b = float(input())

cv = (a + b) * 2
dt = a * b

print(f"Chu vi: {cv:.2f}")
print(f"Dien tich: {dt:.2f}")`,
    testCases: [
      {
        id: 1,
        input: '5\n3',
        expectedOutput: 'Chu vi: 16.00\nDien tich: 15.00',
        isHidden: false,
      },
      {
        id: 2,
        input: '10.5\n4.2',
        expectedOutput: 'Chu vi: 29.40\nDien tich: 44.10',
        isHidden: false,
      },
      {
        id: 3,
        input: '100\n50',
        expectedOutput: 'Chu vi: 300.00\nDien tich: 5000.00',
        isHidden: true,
      },
    ],
  },
  {
    id: 'ex-even-odd',
    title: 'Bài 2: Phân loại số nguyên (Chẵn/Lẻ và Âm/Dương)',
    difficulty: 'Dễ',
    category: 'Rẽ nhánh if-else',
    description: `Cho một số nguyên $n$. Hãy in ra hai dòng:
- Dòng 1: In "CHAN" nếu n là số chẵn, in "LE" nếu n là số lẻ.
- Dòng 2: In "DUONG" nếu n > 0, in "AM" nếu n < 0, và in "KHONG" nếu n = 0.`,
    inputFormat: 'Một số nguyên n duy nhất.',
    outputFormat: 'Gồm 2 dòng theo mô tả.',
    constraints: '-10^9 <= n <= 10^9',
    starterCode: `n = int(input())

# Viết mã kiểm tra n tại đây:
`,
    solutionCode: `n = int(input())

if n % 2 == 0:
    print("CHAN")
else:
    print("LE")

if n > 0:
    print("DUONG")
elif n < 0:
    print("AM")
else:
    print("KHONG")`,
    testCases: [
      {
        id: 1,
        input: '8',
        expectedOutput: 'CHAN\nDUONG',
        isHidden: false,
      },
      {
        id: 2,
        input: '-7',
        expectedOutput: 'LE\nAM',
        isHidden: false,
      },
      {
        id: 3,
        input: '0',
        expectedOutput: 'CHAN\nKHONG',
        isHidden: true,
      },
    ],
  },
  {
    id: 'ex-leap-year',
    title: 'Bài 3: Kiểm tra năm nhuận',
    difficulty: 'Trung bình',
    category: 'Điều kiện logic',
    description: `Một năm dương lịch là năm nhuận nếu chia hết cho 400, hoặc chia hết cho 4 nhưng không chia hết cho 100.
Hãy viết chương trình kiểm tra xem năm $nam$ nhập vào có phải năm nhuận hay không. Nếu có in "NHUAN", ngược lại in "KHONG NHUAN".`,
    inputFormat: 'Một số nguyên dương nam biểu thị năm.',
    outputFormat: 'In "NHUAN" hoặc "KHONG NHUAN".',
    constraints: '1 <= nam <= 10000',
    starterCode: `nam = int(input())

# Viết điều kiện kiểm tra năm nhuận:
`,
    solutionCode: `nam = int(input())

if (nam % 400 == 0) or (nam % 4 == 0 and nam % 100 != 0):
    print("NHUAN")
else:
    print("KHONG NHUAN")`,
    testCases: [
      {
        id: 1,
        input: '2024',
        expectedOutput: 'NHUAN',
        isHidden: false,
      },
      {
        id: 2,
        input: '1900',
        expectedOutput: 'KHONG NHUAN',
        isHidden: false,
      },
      {
        id: 3,
        input: '2000',
        expectedOutput: 'NHUAN',
        isHidden: true,
      },
      {
        id: 4,
        input: '2025',
        expectedOutput: 'KHONG NHUAN',
        isHidden: true,
      },
    ],
  },
  {
    id: 'ex-sum-n',
    title: 'Bài 4: Tính tổng các số tự nhiên từ 1 đến N',
    difficulty: 'Trung bình',
    category: 'Vòng lặp for/while',
    description: `Cho số nguyên dương $N$. Hãy tính tổng $S = 1 + 2 + 3 + ... + N$. In kết quả tổng $S$ ra màn hình.`,
    inputFormat: 'Một số nguyên dương N.',
    outputFormat: 'Một số nguyên duy nhất là giá trị của tổng S.',
    constraints: '1 <= N <= 10^6',
    starterCode: `n = int(input())

# Viết vòng lặp tính tổng S:
`,
    solutionCode: `n = int(input())
tong = 0
for i in range(1, n + 1):
    tong += i
print(tong)`,
    testCases: [
      {
        id: 1,
        input: '5',
        expectedOutput: '15',
        isHidden: false,
      },
      {
        id: 2,
        input: '10',
        expectedOutput: '55',
        isHidden: false,
      },
      {
        id: 3,
        input: '100',
        expectedOutput: '5050',
        isHidden: true,
      },
    ],
  },
  {
    id: 'ex-vowels',
    title: 'Bài 5: Đếm nguyên âm trong chuỗi ký tự',
    difficulty: 'Trung bình',
    category: 'Xử lý chuỗi (String)',
    description: `Cho một câu hoặc từ tiếng Anh/không dấu. Hãy đếm có bao nhiêu nguyên âm ('a', 'e', 'i', 'o', 'u') xuất hiện trong chuỗi (không phân biệt chữ hoa và chữ thường).`,
    inputFormat: 'Một dòng văn bản.',
    outputFormat: 'Một số nguyên là tổng số nguyên âm trong chuỗi.',
    constraints: 'Độ dài chuỗi không quá 1000 ký tự.',
    starterCode: `s = input()

# Viết mã đếm số nguyên âm:
`,
    solutionCode: `s = input().lower()
nguyen_am = "aeiou"
dem = sum(1 for c in s if c in nguyen_am)
print(dem)`,
    testCases: [
      {
        id: 1,
        input: 'An Giang Que Toi',
        expectedOutput: '6',
        isHidden: false,
      },
      {
        id: 2,
        input: 'Python Programming',
        expectedOutput: '4',
        isHidden: false,
      },
      {
        id: 3,
        input: 'Thoai Ngoc Hau',
        expectedOutput: '5',
        isHidden: true,
      },
    ],
  },
  {
    id: 'ex-taxi',
    title: 'Bài 6: Tính cước taxi Châu Đốc - Long Xuyên',
    difficulty: 'Nâng cao',
    category: 'Thuật toán thực tế',
    description: `Một hãng taxi tại An Giang tính cước theo số km đi được $d$ như sau:
- Giá mở cửa (cho 1 km đầu tiên): 15,000 VNĐ.
- Từ km thứ 2 đến km thứ 10: 13,000 VNĐ / km.
- Từ km thứ 11 trở đi: 11,000 VNĐ / km.
- Nếu tổng quãng đường đi vượt quá 50 km, khách hàng được giảm giá 10% trên tổng số tiền cước.

Hãy viết chương trình nhập vào số km $d$ (số nguyên dương) và in ra số tiền cước taxi phải trả (làm tròn số nguyên).`,
    inputFormat: 'Một số nguyên dương d (km).',
    outputFormat: 'Một số nguyên duy nhất là số tiền phải trả (VNĐ).',
    constraints: '1 <= d <= 500',
    starterCode: `d = int(input())

# Viết mã tính tiền taxi theo các mốc:
`,
    solutionCode: `d = int(input())

if d <= 1:
    tien = 15000
elif d <= 10:
    tien = 15000 + (d - 1) * 13000
else:
    tien = 15000 + 9 * 13000 + (d - 10) * 11000

if d > 50:
    tien = tien * 0.9

print(int(tien))`,
    testCases: [
      {
        id: 1,
        input: '1',
        expectedOutput: '15000',
        isHidden: false,
      },
      {
        id: 2,
        input: '5',
        expectedOutput: '67000',
        isHidden: false,
      },
      {
        id: 3,
        input: '55',
        expectedOutput: '564300',
        isHidden: true,
      },
    ],
  },
];
