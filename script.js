let currentIndex = 0;

function moveCarousel(direction) {
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;

  items[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + direction + totalItems) % totalItems;
  items[currentIndex].classList.add('active');

  const carousel = document.querySelector('.carousel');
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function playVideo() {
  window.open("https://www.instagram.com/p/DCgLjRaoLaV/", "_blank");
}

AOS.init({
  duration: 1200,
  easing: 'ease-in-out',
  once: true
});