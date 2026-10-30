(() => {
  "use strict";

  const links = Array.from(document.querySelectorAll(".album-photos a[data-lightbox]"));
  if (!links.length) return;

  const overlay = document.createElement("div");
  overlay.className = "lightbox";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-label", "Photograph viewer");
  overlay.innerHTML = `
    <p class="lightbox-count" aria-live="polite"></p>
    <button type="button" class="lightbox-close" aria-label="Close photograph viewer">&times;</button>
    <button type="button" class="lightbox-prev" aria-label="Previous photograph">&#8592;</button>
    <figure class="lightbox-figure">
      <img alt="" decoding="async">
      <figcaption class="lightbox-caption"></figcaption>
    </figure>
    <button type="button" class="lightbox-next" aria-label="Next photograph">&#8594;</button>
  `;
  document.body.appendChild(overlay);

  const image = overlay.querySelector("img");
  const caption = overlay.querySelector(".lightbox-caption");
  const counter = overlay.querySelector(".lightbox-count");
  const closeButton = overlay.querySelector(".lightbox-close");
  const prevButton = overlay.querySelector(".lightbox-prev");
  const nextButton = overlay.querySelector(".lightbox-next");
  const controls = [closeButton, prevButton, nextButton];
  const pageRegions = [
    document.querySelector(".site-header"),
    document.querySelector("main"),
    document.querySelector(".site-footer"),
  ].filter(Boolean);

  let index = 0;
  let lastFocus = null;

  function preload(i) {
    const next = links[(i + links.length) % links.length];
    const img = new Image();
    img.src = next.href;
  }

  function show(i) {
    index = (i + links.length) % links.length;
    const link = links[index];
    const thumb = link.querySelector("img");

    image.src = link.href;
    image.alt = thumb ? thumb.alt : "";

    const text = link.dataset.caption || "";
    caption.textContent = text;
    caption.hidden = !text;
    counter.textContent = `${index + 1} / ${links.length}`;

    preload(index + 1);
    preload(index - 1);
  }

  function open(i, trigger) {
    lastFocus = trigger || document.activeElement;
    show(i);
    overlay.classList.add("is-open");
    document.documentElement.classList.add("lightbox-open");
    pageRegions.forEach((region) => { region.inert = true; });
    closeButton.focus({ preventScroll: true });
  }

  function close() {
    overlay.classList.remove("is-open");
    document.documentElement.classList.remove("lightbox-open");
    image.removeAttribute("src");
    pageRegions.forEach((region) => { region.inert = false; });
    if (lastFocus) lastFocus.focus({ preventScroll: true });
  }

  links.forEach((link, i) => {
    link.addEventListener("click", (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      open(i, link);
    });
  });

  closeButton.addEventListener("click", close);
  prevButton.addEventListener("click", () => show(index - 1));
  nextButton.addEventListener("click", () => show(index + 1));

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) close();
  });

  document.addEventListener("keydown", (event) => {
    if (!overlay.classList.contains("is-open")) return;

    if (event.key === "Escape") {
      event.preventDefault();
      close();
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      show(index - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      show(index + 1);
    } else if (event.key === "Tab") {
      const current = controls.indexOf(document.activeElement);
      const step = event.shiftKey ? -1 : 1;
      const next = (current + step + controls.length) % controls.length;
      event.preventDefault();
      controls[next].focus();
    }
  });

  let touchStartX = null;
  overlay.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].clientX;
  }, { passive: true });

  overlay.addEventListener("touchend", (event) => {
    if (touchStartX === null) return;
    const dx = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) show(index + (dx < 0 ? 1 : -1));
    touchStartX = null;
  }, { passive: true });
})();
