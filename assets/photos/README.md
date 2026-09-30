# assets/photos/

Drop image files in here and they appear on the **Gallery** page
(https://jackieyihkb.github.io/photos.html) automatically on the next build.

- Supported: `.jpg` `.jpeg` `.png` `.webp` `.gif`
- Landscape images around 1600×1000 px look best in the grid
- Keep each file under about 1 MB so the page stays quick to load
- Files are shown in alphabetical order, so a name like `2026-07-lab.jpg`
  sorts sensibly

Anything that is not one of the extensions above (including this file) is
ignored by the gallery.

## Getting photos off QQ Zone (QQ空间)

QQ Zone albums sit behind a login, so they cannot be fetched automatically.
Manual route:

1. Open the album on https://user.qzone.qq.com/ in a browser and log in.
2. Click a photo to open the large view, then save it (right-click → Save image,
   or use the album's download button).
3. Save them somewhere on this computer, then copy the ones you want into this
   folder.
4. Commit and push — the gallery picks them up.

If a photo is large (a phone snapshot can easily be 4–8 MB), it is worth
resizing to ~1600 px wide before committing.
