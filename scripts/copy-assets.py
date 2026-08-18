from pathlib import Path
import shutil

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT.parent / "webdev-static-assets" / "pinus-pengger-delivery"
TARGET = ROOT / "dist" / "assets"

if not SOURCE.is_dir():
    raise SystemExit("Assets missing. Run scripts/prepare-delivery-assets.py first.")

TARGET.mkdir(parents=True, exist_ok=True)
for path in SOURCE.iterdir():
    if path.is_file():
        shutil.copy2(path, TARGET / path.name)
