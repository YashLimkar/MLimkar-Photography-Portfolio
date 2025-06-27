// Create lightbox elements
const images = document.querySelectorAll('.grid-item');


images.forEach(img => {
  img.addEventListener('click', () => {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.position = 'fixed';
    lightbox.style.top = '0';
    lightbox.style.left = '0';
    lightbox.style.width = '100%';
    lightbox.style.height = '100%';
    lightbox.style.background = 'rgba(0,0,0,0.9)';
    lightbox.style.display = 'flex';
    lightbox.style.justifyContent = 'center';
    lightbox.style.alignItems = 'center';
    lightbox.style.cursor = 'zoom-out';
    lightbox.style.zIndex = '1000';


    const imgClone = document.createElement('img');
    imgClone.src = img.src;
    imgClone.alt = img.alt;
    imgClone.style.maxHeight = '90%';
    imgClone.style.maxWidth = '90%';
    imgClone.style.borderRadius = '10px';
    imgClone.style.boxShadow = '0 0 20px rgba(255,255,255,0.2)';
    lightbox.appendChild(imgClone);


    document.body.appendChild(lightbox);


    lightbox.addEventListener('click', () => {
      lightbox.remove();
    });
  });
});