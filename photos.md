---
title: Gallery
classes:
  - wide
  - fullwidth
  - page-photos
---

Photos from the lab, from conferences and from fieldwork.

This page builds itself from the `assets/photos/` folder in the repository, so
adding pictures never means editing this file &mdash; just drop the image files
in and they appear here on the next build.

{%- assign photo_exts = ".jpg,.jpeg,.png,.webp,.gif" -%}

{%- comment -%} count the images first so we know whether to show a placeholder {%- endcomment -%}
{%- assign photo_count = 0 -%}
{%- for f in site.static_files -%}
  {%- assign ext = f.extname | downcase -%}
  {%- if f.path contains "/assets/photos/" and photo_exts contains ext -%}
    {%- assign photo_count = photo_count | plus: 1 -%}
  {%- endif -%}
{%- endfor -%}

{% if photo_count > 0 %}
Showing **{{ photo_count }}** photo{% if photo_count != 1 %}s{% endif %}. Click
any image to open it full size.

<div class="photo-grid">
{%- for f in site.static_files -%}
  {%- assign ext = f.extname | downcase -%}
  {%- if f.path contains "/assets/photos/" and photo_exts contains ext %}
  <a href="{{ f.path | relative_url }}" target="_blank" rel="noopener">
    <img src="{{ f.path | relative_url }}" alt="" loading="lazy">
  </a>
  {%- endif -%}
{%- endfor %}
</div>

{% else %}
<div class="notice--info" markdown="1">
**No photos here yet.**

To fill this page, put image files into the `assets/photos/` folder of the
repository. Any `.jpg`, `.jpeg`, `.png`, `.webp` or `.gif` in that folder shows
up here automatically &mdash; no editing required. Landscape images around
1600&times;1000 look best in the grid.
</div>
{% endif %}
