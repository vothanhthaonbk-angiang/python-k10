// Banner và hình nền chính thức của Trường THPT Nguyễn Bỉnh Khiêm - An Giang
// Cung cấp bởi Giáo viên / Nhà trường
export const DEFAULT_SCHOOL_BANNER_PATH = './assets/aistudio/baneo_dc14122c.JPG';
export const DEFAULT_SCHOOL_BG_IMAGE = DEFAULT_SCHOOL_BANNER_PATH;

// Bản vẽ minh họa SVG dự phòng
export const DEFAULT_SCHOOL_BG_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="100%" height="100%">
  <defs>
    <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%231e5799" />
      <stop offset="40%" stop-color="%237db9e8" />
      <stop offset="75%" stop-color="%23d6ecff" />
      <stop offset="100%" stop-color="%23eef7ff" />
    </linearGradient>
    <linearGradient id="roofGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%23b83b26" />
      <stop offset="50%" stop-color="%23d1492c" />
      <stop offset="100%" stop-color="%238a2212" />
    </linearGradient>
    <linearGradient id="wallGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%23fff9e6" />
      <stop offset="100%" stop-color="%23faeec7" />
    </linearGradient>
    <linearGradient id="pillarGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="%23e59b20" />
      <stop offset="50%" stop-color="%23f7c468" />
      <stop offset="100%" stop-color="%23c27e10" />
    </linearGradient>
    <linearGradient id="courtyardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%23cbd5e1" />
      <stop offset="30%" stop-color="%23e2e8f0" />
      <stop offset="100%" stop-color="%23f1f5f9" />
    </linearGradient>
  </defs>

  <!-- Sky -->
  <rect width="1920" height="700" fill="url(%23skyGrad)" />
  
  <!-- School Building -->
  <rect x="250" y="320" width="1420" height="240" fill="url(%23wallGrad)" stroke="%23cbd5e1" stroke-width="2" />
  <polygon points="210,320 270,250 1650,250 1710,320" fill="url(%23roofGrad)" />

  <!-- Ground -->
  <polygon points="0,550 1920,550 1920,1080 0,1080" fill="url(%23courtyardGrad)" />

  <!-- Grand Entrance Arch & Signboard -->
  <rect x="440" y="440" width="90" height="420" fill="url(%23pillarGrad)" stroke="%239a5c0b" stroke-width="3" rx="6" />
  <rect x="1390" y="440" width="90" height="420" fill="url(%23pillarGrad)" stroke="%239a5c0b" stroke-width="3" rx="6" />
  <rect x="490" y="450" width="940" height="110" fill="%230d3d78" rx="8" stroke="%23e2e8f0" stroke-width="4" />
  
  <text x="960" y="480" font-family="Arial, sans-serif" font-size="19" font-weight="bold" fill="%23fef08a" text-anchor="middle" letter-spacing="2">
    SỞ GIÁO DỤC VÀ ĐÀO TẠO AN GIANG
  </text>
  <text x="960" y="525" font-family="Arial, sans-serif" font-size="36" font-weight="900" fill="%23ffffff" text-anchor="middle" letter-spacing="3">
    TRƯỜNG THPT NGUYỄN BỈNH KHIÊM
  </text>
  <text x="960" y="550" font-family="Arial, sans-serif" font-size="14" font-weight="600" fill="%2393c5fd" text-anchor="middle" letter-spacing="1">
    CHUYÊN ĐỀ HỌC TỐT PYTHON - CHỦ ĐỀ 5 TIN HỌC 10
  </text>
</svg>`;
