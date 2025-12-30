/* =========================
   VILVA – BRAND STANDARD JS
========================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =================================================
     MOBILE MENU TOGGLE (FIXED)
  ================================================= */
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector(".nav-mobile");

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", () => {
      mobileNav.classList.toggle("active");
    });
  }

  /* =================================================
     HEADER ANIMATION (LOGO + NAV)
  ================================================= */
  const headerItems = document.querySelectorAll(
    ".logo img, .nav-desktop a"
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

  /* =================================================
     HERO ANIMATION (HOME PAGE)
  ================================================= */
  const heroItems = document.querySelectorAll(
    ".hero-center-content h1, .hero-center-content p, .hero-btn"
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

  /* =================================================
     INNER PAGE ANIMATION
  ================================================= */
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