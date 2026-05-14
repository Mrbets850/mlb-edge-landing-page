// MLB Edge — minimal vanilla JS. No deps, no tracking, GitHub Pages friendly.
(function () {
  "use strict";

  // Footer year
  var yr = document.getElementById("yr");
  if (yr) yr.textContent = String(new Date().getFullYear());

  // Screens tab switcher
  var tabs = document.querySelectorAll(".screens__tabs .tab");
  var screens = document.querySelectorAll(".screens .screen");

  function activate(name) {
    tabs.forEach(function (t) {
      var on = t.getAttribute("data-tab") === name;
      t.classList.toggle("is-active", on);
      t.setAttribute("aria-selected", on ? "true" : "false");
    });
    screens.forEach(function (s) {
      var on = s.getAttribute("data-screen") === name;
      s.classList.toggle("is-active", on);
      if (on) s.removeAttribute("hidden");
      else s.setAttribute("hidden", "");
    });
  }

  tabs.forEach(function (t) {
    t.addEventListener("click", function () {
      activate(t.getAttribute("data-tab"));
    });
    t.addEventListener("keydown", function (e) {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      e.preventDefault();
      var list = Array.prototype.slice.call(tabs);
      var i = list.indexOf(t);
      var next = e.key === "ArrowRight" ? (i + 1) % list.length : (i - 1 + list.length) % list.length;
      list[next].focus();
      activate(list[next].getAttribute("data-tab"));
    });
  });
})();
