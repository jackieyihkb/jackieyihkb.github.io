---
title: Gallery
lead: Lab life during my postdoc, fieldwork, and a few trips in between.
---

Photographs from the Department of Ocean Science at HKUST and from fieldwork and
travel between 2024 and 2026. Click any image to open it full size.

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

WU LAB, Department of Ocean Science, HKUST — {{ lab_n }} photographs from
2024–2026.

{% include photo_grid.html section="lab" %}
{% endif %}

{% if own_n > 0 %}
## Trips and fieldwork

{{ own_n }} photographs.

{% include photo_grid.html section="own" %}
{% endif %}

{% if lab_n == 0 and own_n == 0 %}
<p class="note">No photographs have been added yet.</p>
{% endif %}
