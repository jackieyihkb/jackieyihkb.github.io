---
title: Gallery
lead: >-
  Photographs from the lab, conferences, fieldwork and the people in between —
  arranged by period and event.
---

{%- assign exts = ".jpg,.jpeg,.png,.webp,.gif" -%}
{%- assign albums = site.albums | sort: "order" -%}
{%- assign era_groups = albums | group_by: "era" -%}

{% if albums.size > 0 %}
{%- if era_groups.size > 1 %}
<nav class="era-nav" aria-label="Photo archive by period">
  {%- for group in era_groups -%}
    {%- assign era = site.data.gallery.eras | where: "key", group.name | first %}
  <a href="#era-{{ group.name | slugify }}">{{ group.name }}{% if era %} · {{ era.name }}{% endif %}</a>
  {%- endfor %}
</nav>
{%- endif %}

{% for group in era_groups -%}
  {%- assign era = site.data.gallery.eras | where: "key", group.name | first %}
<section class="era" id="era-{{ group.name | slugify }}">
  <header class="era-head">
    <p class="era-years">{{ group.name }}</p>
    <div class="era-intro">
      {%- if era %}
      <h2>{{ era.name }}</h2>
      {%- if era.subtitle %}<p class="era-subtitle">{{ era.subtitle }}</p>{% endif %}
      {%- if era.blurb %}<p class="era-blurb">{{ era.blurb }}</p>{% endif %}
      {%- endif %}
    </div>
  </header>

  <div class="album-grid">
    {%- for album in group.items -%}
      {%- assign count = 0 -%}
      {%- for f in site.static_files -%}
        {%- assign e = f.extname | downcase -%}
        {%- if e == ".jpg" or e == ".jpeg" or e == ".png" or e == ".webp" or e == ".gif" -%}
          {%- if f.path contains album.folder -%}
            {%- unless f.path contains "/thumbs/" -%}
              {%- assign count = count | plus: 1 -%}
            {%- endunless -%}
          {%- endif -%}
        {%- endif -%}
      {%- endfor %}
    <a class="album-card" href="{{ album.url | relative_url }}">
      <figure class="album-cover">
        <img src="{{ album.cover | relative_url }}"
             alt="{{ album.title }} — album cover"
             loading="lazy" decoding="async">
      </figure>
      <div class="album-body">
        <p class="album-meta">
          <span>{{ album.period }}</span>
          <span>{{ count }} photographs</span>
        </p>
        <h3>{{ album.title }}</h3>
        <p>{{ album.description }}</p>
      </div>
    </a>
    {%- endfor %}
  </div>
</section>
{% endfor %}

{% else %}
<p class="note">No photographs have been added yet.</p>
{% endif %}
