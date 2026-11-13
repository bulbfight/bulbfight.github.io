// BULBFIGHT – Menü, Kopfzeile und Bildansicht. Keine Cookies, kein Tracking, keine externen Anfragen.
(function () {
  var top = document.getElementById("top");
  function onScroll() { top.classList.toggle("solid", window.scrollY > 40); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var btn = document.querySelector(".menu-btn");
  var nav = document.getElementById("spielnav");
  btn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    if (open) top.classList.add("solid");
  });
  nav.addEventListener("click", function (e) {
    if (e.target.closest("a")) { nav.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); }
  });

  // Bildansicht
  var box = document.getElementById("lightbox");
  if (!box || typeof box.showModal !== "function") return;
  var img = document.getElementById("lightbox-img");
  var cap = document.getElementById("lightbox-cap");
  var items = Array.prototype.slice.call(document.querySelectorAll("#galerie button"));
  var cur = 0;

  function show(i) {
    cur = (i + items.length) % items.length;
    var thumb = items[cur].querySelector("img");
    img.src = items[cur].getAttribute("data-full");
    img.alt = thumb.alt;
    cap.textContent = thumb.alt;
  }
  items.forEach(function (b, i) {
    b.addEventListener("click", function () { show(i); box.showModal(); });
  });
  box.querySelector("[data-close]").addEventListener("click", function () { box.close(); });
  box.querySelector(".prev").addEventListener("click", function () { show(cur - 1); });
  box.querySelector(".next").addEventListener("click", function () { show(cur + 1); });
  box.addEventListener("click", function (e) { if (e.target === box) box.close(); });
  box.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") show(cur - 1);
    if (e.key === "ArrowRight") show(cur + 1);
  });
  box.addEventListener("close", function () { items[cur].focus(); });
})();
