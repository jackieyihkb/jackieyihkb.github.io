---
title: Gallery
classes:
  - wide
  - fullwidth
  - page-photos
---

Lab life during my postdoc, and photos from trips and fieldwork. This page reads
the `assets/photos/` folder in the repository directly, so adding a picture never
means editing anything here &mdash; drop the file in and it shows up on the next
build. Click any photo to open it full size.

{%- assign exts = ".jpg,.jpeg,.png,.webp,.gif" -%}
{%- assign lab_n = 0 -%}
{%- assign own_n = 0 -%}
{%- for f in site.static_files -%}
  {%- unless f.path contains "/thumbs/" -%}
    {%- assign e = f.extname | downcase -%}
    {%- if exts contains e and f.path contains "/assets/photos/" -%}
      {%- if f.path contains "/assets/photos/lab/" -%}
        {%- assign lab_n = lab_n | plus: 1 -%}
      {%- else -%}
        {%- assign own_n = own_n | plus: 1 -%}
      {%- endif -%}
    {%- endif -%}
  {%- endunless -%}
{%- endfor -%}

{% if lab_n > 0 %}
## Lab life

WU LAB, Department of Ocean Science, HKUST &mdash; {{ lab_n }} photos from
2024&ndash;2026.

{% include photo_grid.html section="lab" %}
{% endif %}

{% if own_n > 0 %}
## Trips, fieldwork and everything else

{{ own_n }} photos.

{% include photo_grid.html section="own" %}
{% endif %}

{% if lab_n == 0 and own_n == 0 %}
<div class="notice--info" markdown="1">
**No photos here yet.** Put image files into `assets/photos/` (or
`assets/photos/lab/`) and they will appear on this page the next time the site is
built.
</div>
{% endif %}
