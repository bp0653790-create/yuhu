const form = document.querySelector('#rsvp-form');
const toast = document.querySelector('.toast');
const galleryImages = document.querySelectorAll('.gallery-card img');
const lightbox = document.querySelector('#gallery-lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const lightboxCaption = document.querySelector('.lightbox-caption');
const lightboxClose = document.querySelector('.lightbox-close');
const musicToggle = document.querySelector('#music-toggle');
const backgroundMusic = document.querySelector('#background-music');

function openLightbox(image) {
  lightboxImg.src = image.src;
  lightboxImg.alt = image.alt;
  lightboxCaption.textContent = image.dataset.caption || image.alt;
  lightbox.classList.add('active');
}

function closeLightbox() {
  lightbox.classList.remove('active');
  lightboxImg.src = '';
}

galleryImages.forEach(image => {
  image.addEventListener('click', () => openLightbox(image));
});

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', event => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

musicToggle.addEventListener('click', () => {
  if (backgroundMusic.paused) {
    backgroundMusic.play().catch(() => {
      alert('Klik tombol musik lagi jika pemutaran otomatis tidak berjalan.');
    });
    musicToggle.textContent = 'Jeda Musik';
  } else {
    backgroundMusic.pause();
    musicToggle.textContent = 'Putar Musik';
  }
});

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.querySelector('#name').value.trim();
  const guests = document.querySelector('#guests').value.trim();
  const message = document.querySelector('#message').value.trim();

  if (!name) {
    alert('Silakan tuliskan nama kamu terlebih dahulu.');
    return;
  }

  toast.textContent = `Terima kasih, ${name}! Konfirmasi hadirmu sudah tercatat.`;
  toast.style.display = 'block';

  setTimeout(() => {
    toast.style.display = 'none';
  }, 3700);

  form.reset();
});
