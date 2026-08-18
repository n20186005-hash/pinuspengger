from pathlib import Path
from PIL import Image, ImageDraw

OUT = Path(__file__).resolve().parents[1] / "public"

def make_icon(size: int, filename: str):
    image = Image.new("RGBA", (size, size), "#f3f1e9")
    draw = ImageDraw.Draw(image)
    s = size / 64
    stroke = max(1, round(5 * s))
    pine = "#1f3a32"
    gold = "#d9a441"
    points = [(16*s,48*s),(16*s,30*s),(32*s,16*s),(48*s,30*s),(48*s,48*s)]
    draw.line(points, fill=pine, width=stroke, joint="curve")
    for needle in [[(17*s,20*s),(22*s,12*s),(27*s,20*s)],[(27*s,17*s),(32*s,7*s),(37*s,17*s)],[(37*s,20*s),(42*s,12*s),(47*s,20*s)]]:
        draw.line(needle, fill=pine, width=max(1,round(4*s)), joint="curve")
    draw.arc((24*s,40*s,40*s,56*s), 180, 360, fill=gold, width=stroke)
    image.save(OUT / filename, "PNG")

for size, name in [(16, "favicon-16.png"), (32, "favicon-32.png"), (180, "apple-touch-icon.png")]:
    make_icon(size, name)
