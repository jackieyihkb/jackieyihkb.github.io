(() => {
  "use strict";

  // Send readers to off-site destinations (DOI pages, databases, profiles)
  // in a new tab, while keeping internal navigation in the current one.
  const host = window.location.hostname;

  document.querySelectorAll("a[href]").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#")) return;

    let url;
    try {
      url = new URL(href, window.location.href);
    } catch {
      return;
    }

    const isWeb = url.protocol === "http:" || url.protocol === "https:";
    if (isWeb && url.hostname !== host) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
  });
})();
