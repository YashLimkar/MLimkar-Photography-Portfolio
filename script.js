// Scroll to top on reload (optional)
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// Add fade-in effect for hero-text if needed
window.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero-text");
  hero.style.opacity = 0;
  hero.style.transition = "opacity 1.5s ease";

  setTimeout(() => {
    hero.style.opacity = 1;
  }, 300);
});
