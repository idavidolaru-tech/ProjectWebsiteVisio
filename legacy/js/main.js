/* VISIO 2026 — small progressive-enhancement scripts */
(function () {
  "use strict";

  // Sticky header shadow on scroll
  var header = document.querySelector(".site-header");
  var onScroll = function () {
    if (window.scrollY > 8) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile nav toggle
  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".nav-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // close after clicking a link
    nav.querySelectorAll(".nav-links a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Scroll reveal
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var items = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if (reduce || !("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
    items.forEach(function (el) { io.observe(el); });
  }

  // Speaker cards: click / keyboard to expand bio + little pop
  var speakers = Array.prototype.slice.call(document.querySelectorAll(".speaker"));
  var toggleSpeaker = function (card) {
    var open = card.classList.toggle("expanded");
    card.setAttribute("aria-expanded", open ? "true" : "false");
    if (!reduce) {
      card.classList.remove("pop");
      // force reflow so the animation can replay
      void card.offsetWidth;
      card.classList.add("pop");
    }
  };
  speakers.forEach(function (card) {
    // Only cards that actually have a bio are expandable (skip "to be announced" teasers)
    if (!card.querySelector(".speaker-bio")) return;
    card.addEventListener("click", function () { toggleSpeaker(card); });
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
        e.preventDefault();
        toggleSpeaker(card);
      }
    });
    card.addEventListener("animationend", function () { card.classList.remove("pop"); });
  });

  // Current year in footer
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
