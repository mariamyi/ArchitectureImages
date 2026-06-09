/*
 * script.js — renders the deck from window.SLIDES (slides.js) and wires up
 * navigation: prev/next buttons, arrow keys, touch swipe, and dot indicators.
 */
(function () {
  "use strict";

  var slides = window.SLIDES || [];
  var stage = document.getElementById("stage");
  var prevBtn = document.getElementById("prevBtn");
  var nextBtn = document.getElementById("nextBtn");
  var counter = document.getElementById("counter");
  var groupLabel = document.getElementById("groupLabel");
  var dotsWrap = document.getElementById("dots");
  var live = document.getElementById("liveStatus");

  if (!slides.length || !stage) {
    if (stage) stage.textContent = "No slides found.";
    return;
  }

  var current = 0;

  // ---- Build slides + dots once ----
  slides.forEach(function (slide, i) {
    var section = document.createElement("article");
    section.className = "slide";
    section.id = "slide-" + slide.id;
    section.setAttribute("role", "group");
    section.setAttribute("aria-roledescription", "slide");
    section.setAttribute("aria-label", (i + 1) + " of " + slides.length + ": " + slide.title);

    var group = document.createElement("p");
    group.className = "slide__group";
    group.textContent = slide.group;

    var frame = document.createElement("figure");
    frame.className = "slide__frame";
    frame.style.margin = "0";

    var img = document.createElement("img");
    img.className = "slide__img";
    img.src = slide.src;
    img.alt = slide.alt;
    // Eager-load the first image, lazy-load the rest.
    img.loading = i === 0 ? "eager" : "lazy";
    img.decoding = "async";

    // Wrap the image in a button so it can be enlarged via mouse or keyboard.
    var zoomBtn = document.createElement("button");
    zoomBtn.type = "button";
    zoomBtn.className = "slide__zoom";
    zoomBtn.setAttribute("aria-label", "Enlarge image: " + slide.title);
    zoomBtn.appendChild(img);
    zoomBtn.addEventListener("click", function () { openLightbox(slide, zoomBtn); });
    frame.appendChild(zoomBtn);

    // Visible alt-text caption beneath the image (figure's own caption).
    // aria-hidden so screen readers don't read it twice (the img alt already conveys it).
    var altCap = document.createElement("figcaption");
    altCap.className = "slide__alt";
    altCap.textContent = slide.alt;
    altCap.setAttribute("aria-hidden", "true");
    frame.appendChild(altCap);

    var caption = document.createElement("div");
    caption.className = "slide__caption";

    var semester = document.createElement("p");
    semester.className = "slide__semester";
    semester.textContent = slide.semester;

    var title = document.createElement("h2");
    title.className = "slide__title";
    title.textContent = slide.title;

    var desc = document.createElement("p");
    desc.className = "slide__desc";
    desc.textContent = slide.description;

    caption.appendChild(semester);
    caption.appendChild(title);
    caption.appendChild(desc);

    section.appendChild(group);
    section.appendChild(frame);
    section.appendChild(caption);
    stage.appendChild(section);

    // Dot
    var dot = document.createElement("button");
    dot.type = "button";
    dot.className = "dots__dot";
    dot.setAttribute("role", "tab");
    dot.setAttribute("aria-label", "Go to slide " + (i + 1) + ": " + slide.title);
    dot.addEventListener("click", function () { go(i); });
    dotsWrap.appendChild(dot);
  });

  var slideEls = Array.prototype.slice.call(stage.querySelectorAll(".slide"));
  var dotEls = Array.prototype.slice.call(dotsWrap.querySelectorAll(".dots__dot"));

  function render() {
    slideEls.forEach(function (el, i) {
      var active = i === current;
      el.classList.toggle("is-active", active);
      el.setAttribute("aria-hidden", active ? "false" : "true");
    });
    dotEls.forEach(function (dot, i) {
      var active = i === current;
      dot.classList.toggle("is-active", active);
      dot.setAttribute("aria-selected", active ? "true" : "false");
    });

    var s = slides[current];
    groupLabel.textContent = s.group;
    counter.textContent = "Slide " + (current + 1) + " of " + slides.length;
    live.textContent = "Slide " + (current + 1) + " of " + slides.length + ": " + s.title + ". " + s.group + ".";

    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === slides.length - 1;
  }

  function go(index) {
    current = Math.max(0, Math.min(slides.length - 1, index));
    render();
  }

  function next() { if (current < slides.length - 1) go(current + 1); }
  function prev() { if (current > 0) go(current - 1); }

  // ---- Events ----
  nextBtn.addEventListener("click", next);
  prevBtn.addEventListener("click", prev);

  document.addEventListener("keydown", function (e) {
    // Don't navigate slides while the enlarged-image view is open.
    if (lightbox && !lightbox.hidden) return;
    if (e.key === "ArrowRight") { next(); }
    else if (e.key === "ArrowLeft") { prev(); }
    else if (e.key === "Home") { go(0); }
    else if (e.key === "End") { go(slides.length - 1); }
  });

  // ---- Lightbox (enlarge image) ----
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightboxImg");
  var lightboxCap = document.getElementById("lightboxCap");
  var lightboxClose = document.getElementById("lightboxClose");
  var lastTrigger = null;

  function openLightbox(slide, trigger) {
    if (!lightbox) return;
    lastTrigger = trigger || null;
    lightboxImg.src = slide.src;
    lightboxImg.alt = slide.alt;
    lightboxCap.textContent = slide.title + " — " + slide.alt;
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    lightboxClose.focus();
  }

  function closeLightbox() {
    if (!lightbox || lightbox.hidden) return;
    lightbox.hidden = true;
    lightboxImg.removeAttribute("src");
    document.body.style.overflow = "";
    if (lastTrigger) { lastTrigger.focus(); lastTrigger = null; }
  }

  if (lightbox) {
    lightboxClose.addEventListener("click", closeLightbox);
    // Click on the dark backdrop (but not the image/caption) closes it.
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeLightbox();
    });
  }

  // Touch swipe
  var touchX = null;
  stage.addEventListener("touchstart", function (e) {
    touchX = e.changedTouches[0].clientX;
  }, { passive: true });
  stage.addEventListener("touchend", function (e) {
    if (touchX === null) return;
    var dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 45) { dx < 0 ? next() : prev(); }
    touchX = null;
  }, { passive: true });

  render();
})();
