# assets/photos/

Drop image files in here and they appear on the **Gallery** page
(https://jackieyihkb.github.io/photos.html) automatically on the next build.

## Layout

```
assets/photos/
├── photo-01.webp … photo-43.webp   → shown under "Trips, fieldwork and everything else"
├── thumbs/                          → 400px grid versions (optional)
└── lab/
    ├── 2024-01.webp … 2026-04.webp  → shown under "Lab life"
    └── thumbs/                      → 400px grid versions (optional)
```

Anything dropped straight into `assets/photos/` (not `lab/`) lands in the second
section. Anything in `lab/` lands in the first.

## Rules

- Supported: `.jpg` `.jpeg` `.png` `.webp` `.gif`
- Files are listed in **alphabetical order**, so a name like `2026-07-lab.webp`
  sorts sensibly
- A `thumbs/` version is used for the grid and the full file opens on click. If a
  photo has no thumbnail the grid just falls back to the full image, so a new
  photo works without generating anything
- Keep full-size images around 1400px on the long edge, ideally under 300 KB
- Images are displayed in a masonry grid, so portrait and landscape both look
  fine — no need to crop them square

## What was used to build the current set

- `photo-01` … `photo-43` were converted from the `psc*.webp` files, kept in
  album order (the file without a number is first)
- `lab/` holds photos from https://longjunwulab.org/recreation.html for
  **2024–2026**, the years of the postdoc. Photos from 2022–2023 were left out.
- Everything was resized to 1400px, EXIF-rotated, and had all metadata stripped
  (which also removes any GPS coordinates)

## Adding more later

1. Put the file in this folder (or `lab/`)
2. To generate a thumbnail too, run the build script
3. Commit and push — no edits to `photos.md` needed
