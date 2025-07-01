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

// Simulated scroll-based machine frame change
const machineFrame = document.getElementById("machine-frame");

const machineFrames = [
  "https://images.unsplash.com/photo-1544197150-b99a580bb7a8",
  "https://images.unsplash.com/photo-1581090700227-89e0ebc86ba5",
  "https://images.unsplash.com/photo-1581092127564-4fe6a5d4b387",
  "https://images.unsplash.com/photo-1602602228314-3b6ae1dbad84",
  "https://images.unsplash.com/photo-1581093588401-c44b998a3da4"
];

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const section = document.getElementById("machine-scroll");
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;

  if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
    const relativeY = scrollY - sectionTop;
    const index = Math.floor((relativeY / sectionHeight) * machineFrames.length);
    machineFrame.src = machineFrames[Math.min(index, machineFrames.length - 1)];
  }
});
