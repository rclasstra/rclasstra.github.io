// rClassTra landing — tiny progressive enhancements (no dependencies).
(function () {
  "use strict";

  // ---- Theme toggle (persists in localStorage under 'theme', like the app) ----
  var root = document.documentElement;
  function currentTheme() { return root.getAttribute("data-theme") === "light" ? "light" : "dark"; }
  function swapThemedImages(theme) {
    var imgs = document.querySelectorAll("img[data-light][data-dark]");
    for (var i = 0; i < imgs.length; i++) {
      var src = theme === "light" ? imgs[i].getAttribute("data-light") : imgs[i].getAttribute("data-dark");
      if (src && imgs[i].getAttribute("src") !== src) imgs[i].setAttribute("src", src);
    }
  }
  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    try { localStorage.setItem("theme", theme); } catch (e) {}
    swapThemedImages(theme);
  }
  swapThemedImages(currentTheme());
  var themeBtn = document.getElementById("themeToggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      applyTheme(currentTheme() === "light" ? "dark" : "light");
    });
  }

  // Mobile nav toggle
  var toggle = document.getElementById("menuToggle");
  var links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") links.classList.remove("open");
    });
  }

  // ---- Lightbox: click any screenshot to zoom ----
  (function () {
    var selector = ".frame img, .phone img, .hero-shot img, .ps-media img, .topology img";
    var zoomables = document.querySelectorAll(selector);
    if (!zoomables.length) return;

    var box = document.createElement("div");
    box.className = "lightbox";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-modal", "true");
    box.innerHTML =
      '<button class="lightbox-close" aria-label="Close">&times;</button>' +
      '<img alt="" />' +
      '<div class="lightbox-hint">Click anywhere or press Esc to close</div>';
    document.body.appendChild(box);
    var boxImg = box.querySelector("img");

    function open(src, alt) {
      boxImg.setAttribute("src", src);
      boxImg.setAttribute("alt", alt || "");
      box.classList.add("open");
      document.body.style.overflow = "hidden";
    }
    function close() {
      box.classList.remove("open");
      document.body.style.overflow = "";
      // Clear src after the transition so it doesn't flash on next open.
      setTimeout(function () { if (!box.classList.contains("open")) boxImg.removeAttribute("src"); }, 250);
    }

    for (var i = 0; i < zoomables.length; i++) {
      zoomables[i].addEventListener("click", function () {
        open(this.currentSrc || this.src, this.alt);
      });
    }
    // Close on backdrop click, close button, or the image itself.
    box.addEventListener("click", function () { close(); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && box.classList.contains("open")) close();
    });
  })();

  // Reveal-on-scroll. Elements with .reveal fade/slide in once visible.
  var items = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if (!("IntersectionObserver" in window) || items.length === 0) {
    items.forEach(function (el) { el.classList.add("in"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
  items.forEach(function (el) {
    if (!el.classList.contains("in")) io.observe(el);
  });
})();
