from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "public" / "assets-src"
TARGET = ROOT / "public" / "assets"
TARGET.mkdir(parents=True, exist_ok=True)

EXPECTED = [
    "pinus-pengger-hand.jpg",
    "pinus-pengger-forest.jpg",
    "pinus-pengger-entrance.jpeg",
    "pinus-pengger-sunset.jpg",
    "pinus-pengger-topographic-banner.png",
    "pinus-pengger-route-pattern.png",
    "pinus-pengger-wood-frame.png",
    "pinus-pengger-logo.png",
]
if not SOURCE.is_dir() or not all((SOURCE / name).is_file() for name in EXPECTED):
    raise SystemExit(
        "Source images missing. Place the original photos in public/assets-src/ "
        f"(expected: {', '.join(EXPECTED)}) and run this script again.\n"
        "Output files are written to public/assets/ (Astro copies them to dist/ automatically)."
    )


def save_webp(source_name: str, target_name: str, max_edge: int, quality: int = 84):
    with Image.open(SOURCE / source_name) as image:
        image = image.convert("RGB")
        image.thumbnail((max_edge, max_edge), Image.Resampling.LANCZOS)
        image.save(TARGET / target_name, "WEBP", quality=quality, method=6)


def save_transparent_logo():
    with Image.open(SOURCE / "pinus-pengger-logo.png") as image:
        image = image.convert("RGBA")
        image.thumbnail((720, 720), Image.Resampling.LANCZOS)
        pixels = image.load()
        for y in range(image.height):
            for x in range(image.width):
                red, green, blue, alpha = pixels[x, y]
                if red > 150 and blue > 110 and green < 100:
                    pixels[x, y] = (red, green, blue, 0)
        image.save(TARGET / "pinus-pengger-logo.png", "PNG", optimize=True)


save_webp("pinus-pengger-hand.jpg", "pinus-pengger-hand.webp", 1800)
save_webp("pinus-pengger-forest.jpg", "pinus-pengger-forest.webp", 1400)
save_webp("pinus-pengger-entrance.jpeg", "pinus-pengger-entrance.webp", 1400)
save_webp("pinus-pengger-sunset.jpg", "pinus-pengger-sunset.webp", 1400)
save_webp("pinus-pengger-topographic-banner.png", "pinus-pengger-topographic-banner.webp", 1600, 82)
save_webp("pinus-pengger-route-pattern.png", "pinus-pengger-route-pattern.webp", 1000, 80)
save_webp("pinus-pengger-wood-frame.png", "pinus-pengger-wood-frame.webp", 1400, 82)
save_transparent_logo()
