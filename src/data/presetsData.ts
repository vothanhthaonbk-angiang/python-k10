import { CodePreset } from '../types';

export const CODE_PRESETS: CodePreset[] = [
  {
    id: 'bai16-first',
    title: '1. Bài 16 · Chương trình đầu tiên (Bai1.py)',
    category: 'Bài 16 · Trang 89',
    description: 'Chương trình đầu tiên làm quen với lệnh print() và phép toán',
    code: `# Bài 16 (SGK Trang 89): Chương trình đầu tiên
print("=" * 45)
print("TRƯỜNG THPT NGUYỄN BỈNH KHIÊM")
print("CHỦ ĐỀ 5: GIẢI QUYẾT VẤN ĐỀ VỚI SỰ TRỢ GIÚP CỦA MÁY TÍNH")
print("=" * 45)

print("Xin chào các bạn học sinh lớp 10!")
print("1 + 3 * 5 =", 1 + 3 * 5)
print("Chúc các bạn học tốt môn Tin học với ngôn ngữ Python!")`,
  },
  {
    id: 'bai17-circle',
    title: '2. Bài 17 · Chu vi & diện tích hình tròn',
    category: 'Bài 17 · Trang 96',
    description: 'Nhiệm vụ 2: Biến và phép gán tính chu vi, diện tích hình tròn',
    code: `# Bài 17 - Nhiệm vụ 2 (SGK Trang 96)
# Gán giá trị cho bán kính R = 4.5
R = 4.5
pi = 3.14

chu_vi = 2 * R * pi
dien_tich = pi * (R ** 2)

print("Bán kính R =", R)
print("Chu vi hình tròn là:   ", round(chu_vi, 3))
print("Diện tích hình tròn là:", round(dien_tich, 3))`,
  },
  {
    id: 'bai18-io',
    title: '3. Bài 18 · Lệnh vào ra & ép kiểu int/float',
    category: 'Bài 18 · Trang 100',
    description: 'Nhiệm vụ 1: Nhập ba số nguyên m, n, p từ bàn phím và tính tổng',
    code: `# Bài 18 - Nhiệm vụ 1 & 2 (SGK Trang 100)
# Nhập ba số nguyên từ bàn phím bằng lệnh int(input())
m = int(input("Nhập số nguyên m: "))
n = int(input("Nhập số nguyên n: "))
p = int(input("Nhập số nguyên p: "))

tong = m + n + p
print(f"Tổng ba số {m} + {n} + {p} là: {tong}")

# Nhập tên và tuổi
ten = input("Nhập họ tên học sinh: ")
tuoi = int(input("Nhập tuổi: "))
print(f"Học sinh: {ten}, {tuoi} tuổi (Lớp 10 THPT Nguyễn Bỉnh Khiêm)")`,
  },
  {
    id: 'bai19-electricity',
    title: '4. Bài 19 · Tính tiền điện sinh hoạt bậc thang',
    category: 'Bài 19 · Trang 104',
    description: 'Nhiệm vụ 2: Câu lệnh rẽ nhánh if/elif/else tính tiền điện tiêu thụ',
    code: `# Bài 19 - Nhiệm vụ 2 (SGK Trang 104): Tính tiền điện sinh hoạt lũy kế
k = float(input("Nhập số kWh điện tiêu thụ của gia đình: "))

if k <= 50:
    t = k * 1.678
elif k <= 100:
    t = 50 * 1.678 + (k - 50) * 1.734
else:
    t = 50 * 1.678 + 50 * 1.734 + (k - 100) * 2.014

print(f"Số kWh tiêu thụ: {k} kWh")
print("Số tiền điện phải trả là:", round(t, 2), "nghìn đồng")`,
  },
  {
    id: 'bai20-divisors',
    title: '5. Bài 20 · Liệt kê & đếm ước số của n',
    category: 'Bài 20 · Trang 107',
    description: 'Vòng lặp for với range() tìm các ước số và đếm ước thực sự',
    code: `# Bài 20 - Thực hành (SGK Trang 107)
n = int(input("Nhập số tự nhiên n: "))
count = 0

print(f"Các ước số của {n} là:", end=" ")
for k in range(1, n + 1):
    if n % k == 0:
        print(k, end=" ")
        if k < n:
            count += 1
print()
print(f"Số lượng ước số thực sự (nhỏ hơn {n}) là: {count}")`,
  },
  {
    id: 'bai21-alphabet',
    title: '6. Bài 21 · In bảng chữ cái từ A đến Z (Mã ASCII)',
    category: 'Bài 21 · Trang 110',
    description: 'Vòng lặp while và hàm chr() in bảng chữ cái 10 kí tự mỗi hàng',
    code: `# Bài 21 - Nhiệm vụ 2 (SGK Trang 110): In bảng chữ cái từ A đến Z
i = 0
k = 65  # Mã ASCII của chữ cái 'A' là 65, 'Z' là 90

print("Bảng chữ cái tiếng Anh in hoa (3 hàng):")
while k <= 90:
    i = i + 1
    if i % 10 == 0:
        print(chr(k))
    else:
        print(chr(k), end=" ")
    k = k + 1`,
  },
  {
    id: 'bai23-filter',
    title: '7. Bài 23 · Xóa các phần tử số âm khỏi List',
    category: 'Bài 23 · Trang 117',
    description: 'Nhiệm vụ 2: Duyệt danh sách và xóa phần tử có giá trị nhỏ hơn 0',
    code: `# Bài 23 - Nhiệm vụ 2 (SGK Trang 117): Xóa các phần tử âm
A = [0, 1, -3, -10, 5, 9, -20, 55]
print("Danh sách ban đầu:", A)

i = 0
while i < len(A):
    if A[i] < 0:
        A.remove(A[i])
    else:
        i += 1

print("Danh sách sau khi xóa các số âm:", A)`,
  },
  {
    id: 'bai25-name-split',
    title: '8. Bài 25 · Tách Họ, Tên đệm và Tên học sinh',
    category: 'Bài 25 · Trang 126',
    description: 'Nhiệm vụ 3: Sử dụng split() và join() để phân tích họ tên đầy đủ',
    code: `# Bài 25 - Nhiệm vụ 3 (SGK Trang 126): Tách Họ, Tên đệm, Tên
hoten = "Nguyễn Bỉnh Khiêm"
slist = hoten.split()

ho = slist[0]
ten = slist[-1]
dem = " ".join(slist[1:-1])

print("Họ tên học sinh:", hoten)
print("1. Họ:     ", ho)
print("2. Tên đệm:", dem)
print("3. Tên:    ", ten)`,
  },
  {
    id: 'bai26-prime-fn',
    title: '9. Bài 26 · Thiết lập hàm kiểm tra số nguyên tố',
    category: 'Bài 26 · Trang 129',
    description: 'Nhiệm vụ 2: Thiết lập hàm prime(n) trả về True/False',
    code: `# Bài 26 - Nhiệm vụ 2 (SGK Trang 129): Hàm prime(n)
def prime(n):
    if n <= 1:
        return False
    c = 0
    k = 1
    while k < n:
        if n % k == 0:
            c = c + 1
        k = k + 1
    return (c == 1)

# Kiểm tra các số từ 2 đến 30
print("Các số nguyên tố nhỏ hơn 30:")
for x in range(2, 30):
    if prime(x):
        print(x, end=" ")
print()`,
  },
  {
    id: 'bai30-gcd-debug',
    title: '10. Bài 30 · Kiểm thử & in vết tìm UCLN',
    category: 'Bài 30 · Trang 147',
    description: 'In các giá trị trung gian qua từng vòng lặp để gỡ lỗi (debug)',
    code: `# Bài 30 (SGK Trang 147): Kiểm thử tìm UCLN (in vết trung gian)
m = 20
n = 16
k = 0

print(f"Bắt đầu tìm UCLN của ({m}, {n}):")
while m != n:
    k = k + 1
    if m < n:
        n = n - m
    else:
        m = m - n
    print(f"  Vòng lặp {k}: m = {m:2}, n = {n:2}")

print(f"==> Kết quả UCLN = {m}")`,
  },
  {
    id: 'bai31-factorize',
    title: '11. Bài 31 · Phân tích thừa số nguyên tố',
    category: 'Bài 31 · Trang 149',
    description: 'Nhiệm vụ 1: Phân tích số tự nhiên n = p1 * p2 * ... * pk',
    code: `# Bài 31 - Nhiệm vụ 1 (SGK Trang 149): Phân tích thừa số nguyên tố
n = 100
m = n
k = 2
NT = []

while m > 1:
    while m % k != 0:
        k = k + 1
    NT.append(k)
    m = m // k

if len(NT) == 1:
    print(n, "là số nguyên tố.")
else:
    print(f"{n} là hợp số, phân tích thành thừa số nguyên tố:")
    print(f"{n} = " + " * ".join(map(str, NT)))`,
  },
  {
    id: 'bai31-quadratic',
    title: '12. Bài 31 · Giải phương trình bậc hai ax² + bx + c = 0',
    category: 'Bài 31 · Trang 151',
    description: 'Nhiệm vụ 2: Cấu trúc chương trình hoàn chỉnh với các hàm con',
    code: `# Bài 31 - Nhiệm vụ 2 (SGK Trang 151-152): Giải PT bậc hai
def sqrt(x):
    return x ** 0.5

def GiaiPT1(b, c):
    if b != 0:
        print("Phương trình bậc nhất có 1 nghiệm duy nhất:", round(-c / b, 2))
    elif c == 0:
        print("Phương trình có vô số nghiệm.")
    else:
        print("Phương trình vô nghiệm.")

def GiaiPT2(a, b, c):
    if a == 0:
        GiaiPT1(b, c)
    else:
        delta = b * b - 4 * a * c
        if delta > 0:
            x1 = (-b + sqrt(delta)) / (2 * a)
            x2 = (-b - sqrt(delta)) / (2 * a)
            print("Phương trình có 2 nghiệm phân biệt:")
            print("  x1 =", round(x1, 2), ", x2 =", round(x2, 2))
        elif delta == 0:
            x = -b / (2 * a)
            print("Phương trình có nghiệm kép: x =", round(x, 2))
        else:
            print("Phương trình vô nghiệm thực (delta < 0).")

# Thử giải PT: x² - 5x + 6 = 0
print("Giải phương trình x² - 5x + 6 = 0:")
GiaiPT2(1, -5, 6)`,
  },
  {
    id: 'bai32-planets',
    title: '13. Bài 32 · Trọng lượng trên các hành tinh',
    category: 'Bài 32 · Trang 154',
    description: 'Nhiệm vụ 2: Bài toán liên môn Vật lí tính trọng lực P = P0 * g / 9.8',
    code: `# Bài 32 - Nhiệm vụ 2 (SGK Trang 154): Trọng lượng trên các hành tinh
planet = ["Mặt Trăng", "Hoả tinh", "Kim tinh", "Mộc tinh", "Thổ tinh", "Mặt Trời"]
gravities = [1.62, 3.711, 8.83, 24.79, 10.44, 274.0]

# Giả sử một học sinh nặng 50 kg -> Trọng lượng trên Trái Đất P0 = 50 * 9.8 = 490 N
P_earth = 490.0

print(f"Trọng lượng trên Trái Đất P0 = {P_earth} N")
print("-" * 45)
for i in range(len(planet)):
    P = round(P_earth * gravities[i] / 9.8, 2)
    print(f"Hành tinh {planet[i]:10}: {P:8} N")`,
  },
  {
    id: 'bai32-valid-date',
    title: '14. Bài 32 · Kiểm tra tính hợp lệ ngày-tháng-năm',
    category: 'Bài 32 · Trang 155',
    description: 'Nhiệm vụ 3: Thuật toán kiểm tra năm nhuận và ngày hợp lệ',
    code: `# Bài 32 - Nhiệm vụ 3 (SGK Trang 155): Kiểm tra ngày tháng năm hợp lệ
def nhuan(year):
    return (year % 400 == 0) or (year % 4 == 0 and year % 100 != 0)

chuoi_ngay = "29-02-2024"
tg = chuoi_ngay.split("-")
day, month, year = int(tg[0]), int(tg[1]), int(tg[2])

thang = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
if nhuan(year):
    thang[2] = 29

if year > 0 and 1 <= month <= 12 and 1 <= day <= thang[month]:
    print(f"Bộ dữ liệu [{chuoi_ngay}] là ngày HỢP LỆ trong lịch dương.")
    if nhuan(year):
        print(f"Năm {year} là năm nhuận (tháng 2 có 29 ngày).")
else:
    print(f"Bộ dữ liệu [{chuoi_ngay}] KHÔNG HỢP LỆ.")`,
  },
];
