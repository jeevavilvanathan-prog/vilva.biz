/* =========================
   LUXURY FADE ANIMATIONS
========================= */
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
    ".hero h1, .hero p, .hero-btn, .page-title, .page-content p"
  );

  elements.forEach((el, index) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(18px)";

    setTimeout(() => {
      el.style.transition = "all 1.2s ease";
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, 120 * index);
  });
});