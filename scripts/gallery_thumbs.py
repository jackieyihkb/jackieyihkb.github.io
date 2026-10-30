#!/usr/bin/env python3
"""Generate 720px WebP thumbnails for every photo under assets/photos/.

Each event folder keeps its own thumbs/ directory, e.g.

    assets/photos/hong-kong/lab/2024-01.webp
    assets/photos/hong-kong/lab/thumbs/2024-01.webp

Run from the repository root:

    python3 scripts/gallery_thumbs.py
"""

from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
PHOTOS = ROOT / "assets" / "photos"
EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp"}
MAX_EDGE = 720
QUALITY = 82


def main() -> None:
    sources = sorted(
        p
        for p in PHOTOS.rglob("*")
        if p.is_file()
        and p.suffix.lower() in EXTENSIONS
        and "thumbs" not in p.parts
    )
    for src in sources:
        thumb_dir = src.parent / "thumbs"
        thumb_dir.mkdir(exist_ok=True)
        dest = thumb_dir / f"{src.stem}.webp"

        with Image.open(src) as image:
            image = ImageOps.exif_transpose(image)
            if image.mode not in ("RGB", "L"):
                image = image.convert("RGB")
            image.thumbnail((MAX_EDGE, MAX_EDGE), Image.Resampling.LANCZOS)
            image.save(dest, "WEBP", quality=QUALITY, method=6)

        print(f"{src.relative_to(ROOT)} -> {dest.relative_to(ROOT)}")

    print(f"\n{len(sources)} thumbnails written.")


if __name__ == "__main__":
    main()
