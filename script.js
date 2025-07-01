// 1. Scroll-to-top on reload (optional but feels premium)
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// 2. Scroll-triggered fade-ins
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

// 3. Scroll-based frame toggle for machine section using multiple <img> tags
const machineSection = document.getElementById("machine-scroll");
const frames = document.querySelectorAll(".rotate-frame");

window.addEventListener("scroll", () => {
  const sectionTop = machineSection.offsetTop;
  const sectionHeight = machineSection.offsetHeight;
  const scrollY = window.scrollY;

  if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
    const relativeY = scrollY - sectionTop;
    const frameIndex = Math.floor((relativeY / sectionHeight) * frames.length);

    frames.forEach((img, index) => {
      img.style.display = index === frameIndex ? "block" : "none";
    });
  }
});
