window.addEventListener('DOMContentLoaded', (event) => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      const img = card.querySelector('.content img');
      const overlay = card.querySelector('.overlay');
      card.addEventListener('mouseover', () => {
        const imgHeight = img.offsetHeight;
        const overlayHeight = overlay.offsetHeight;
        if (overlayHeight > imgHeight) {
          img.style.height = overlayHeight + 'px';
        }
      });
      card.addEventListener('mouseout', () => {
        img.style.height = 'auto';
      });
    });
  });