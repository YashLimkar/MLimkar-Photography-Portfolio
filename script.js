// script.js

// 1. Scroll-to-top on reload (optional but feels premium)
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// 2. Scroll-triggered fade-ins (if you want section reveals later)
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});

// 3. (Optional) Sticky header or mobile logo swap later

