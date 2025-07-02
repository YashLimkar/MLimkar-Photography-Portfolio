<script>
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const bg = document.querySelector('.hero-bg');
    if (bg) {
      bg.style.transform = `translateY(${scrollY * 0.2}px) scale(1.05)`;
    }
  });
</script>

