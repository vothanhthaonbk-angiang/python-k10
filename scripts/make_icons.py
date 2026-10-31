import subprocess

def run(cmd):
    print("Running:", cmd)
    subprocess.run(cmd, shell=True, check=True)

# 1. Base 512x512 App Icon
cmd_512 = """convert -size 512x512 xc:'#071e3d' \\
  -fill '#0d3d78' -draw "roundrectangle 16,16 496,496 90,90" \\
  -stroke '#38bdf8' -strokewidth 4 -fill '#0a2e5c' -draw "roundrectangle 28,28 484,484 82,82" \\
  -stroke none \\
  -fill '#38bdf8' -draw "roundrectangle 136,110 376,236 44,44" \\
  -fill '#0a2e5c' -draw "rectangle 136,170 256,236" \\
  -fill '#38bdf8' -draw "roundrectangle 190,170 310,236 24,24" \\
  -fill '#f59e0b' -draw "roundrectangle 136,256 376,382 44,44" \\
  -fill '#0a2e5c' -draw "rectangle 256,256 376,322" \\
  -fill '#f59e0b' -draw "roundrectangle 202,256 322,322 24,24" \\
  -fill '#ffffff' -draw "circle 195,152 195,166" \\
  -fill '#071e3d' -draw "circle 317,340 317,354" \\
  -fill '#fbbf24' -font "DejaVu-Sans-Bold" -pointsize 40 -gravity south -annotate +0+52 "PYTHON 10" \\
  public/pwa-512x512.png"""

run(cmd_512)

# 2. Resize to 192x192
run("convert public/pwa-512x512.png -resize 192x192 public/pwa-192x192.png")

# 3. Resize to 180x180 for iOS Apple Touch Icon
run("convert public/pwa-512x512.png -resize 180x180 public/apple-touch-icon.png")

# 4. Maskable 512x512 (Full bleed background, safe zone 80% padded)
cmd_maskable = """convert -size 512x512 xc:'#0a2e5c' \\
  -stroke '#38bdf8' -strokewidth 2 -fill 'none' -draw "circle 256,256 256,60" \\
  -stroke none \\
  -fill '#38bdf8' -draw "roundrectangle 160,140 352,240 36,36" \\
  -fill '#0a2e5c' -draw "rectangle 160,190 256,240" \\
  -fill '#38bdf8' -draw "roundrectangle 204,190 300,240 20,20" \\
  -fill '#f59e0b' -draw "roundrectangle 160,256 352,356 36,36" \\
  -fill '#0a2e5c' -draw "rectangle 256,256 352,306" \\
  -fill '#f59e0b' -draw "roundrectangle 212,256 308,306 20,20" \\
  -fill '#ffffff' -draw "circle 208,175 208,186" \\
  -fill '#071e3d' -draw "circle 304,321 304,332" \\
  -fill '#fbbf24' -font "DejaVu-Sans-Bold" -pointsize 32 -gravity south -annotate +0+80 "PYTHON 10" \\
  public/pwa-maskable-512x512.png"""

run(cmd_maskable)

# 5. Favicon
run("convert public/pwa-192x192.png -resize 32x32 public/favicon.ico")

print("All PWA icons generated successfully!")
