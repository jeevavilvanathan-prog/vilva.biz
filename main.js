/* =========================
   VILVA – BRAND STANDARD ANIMATIONS
========================= */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- HEADER (logo + nav) ---------- */
  const headerItems = document.querySelectorAll(
    ".logo img, nav a"
  );

  headerItems.forEach((el, index) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(-10px)";
    el.style.transition = "all 0.8s ease";

    setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 100 * index);
  });

  /* ---------- HERO (home page only) ---------- */
  const heroItems = document.querySelectorAll(
    ".hero h1, .hero p, .hero-btn"
  );

  heroItems.forEach((el, index) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 1.2s ease";

    setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 400 + (140 * index));
  });

  /* ---------- INNER PAGES (about, contact, craftsmanship) ---------- */
  const pageItems = document.querySelectorAll(
    ".page-title, .page-content p"
  );

  pageItems.forEach((el, index) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(16px)";
    el.style.transition = "all 1s ease";

    setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 300 + (120 * index));
  });

});