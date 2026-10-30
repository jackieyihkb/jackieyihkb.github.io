# assets/photos/

The chronological photo archive. Each **event** is a folder; related events sit
inside an **era** folder.

```
assets/photos/
└── hong-kong/
    ├── lab/
    │   ├── 2024-01.webp … 2026-04.webp
    │   └── thumbs/
    └── travels/
        ├── photo-01.webp … photo-43.webp
        └── thumbs/
```

## Adding an album

1. Put the photographs in `assets/photos/<era>/<event>/`.
2. Create `_albums/<event>.md`:

   ```yaml
   ---
   title: Lab life at HKUST
   era: "2024–2026"
   date: "2024–2026"
   place: Hong Kong
   folder: /assets/photos/hong-kong/lab/
   cover: /assets/photos/hong-kong/lab/2026-04.webp
   description: One or two sentences about the set.
   order: 1
   ---
   ```

3. If the era is new, add it to `_data/gallery.yml` (key, name, subtitle, blurb).
4. Run `python3 scripts/gallery_thumbs.py` to build the 720px grid thumbnails.

## Rules

- Supported: `.jpg` `.jpeg` `.png` `.webp` (`.gif` is displayed but not thumbnailed)
- Files are listed alphabetically, so names such as `2026-07-graduation.webp`
  sort sensibly. Prefix photos with an event date when possible.
- Full images should be about 1400–1600px on the long edge and under 300 KB.
- Thumbnails are optional; if one is missing the full image is used.
- Add a caption later by extending the album front matter — the lightbox already
  reads a `data-caption` attribute per photograph.
