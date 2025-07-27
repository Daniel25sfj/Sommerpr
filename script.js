
const track = document.querySelector('.carousel-track');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
let index = 0;

nextButton.addEventListener('click', () => {
  index = (index + 1) % 8;
  track.style.transform = `translateX(-${index * 230}px)`;
});

prevButton.addEventListener('click', () => {
  index = (index - 1 + 8) % 8;
  track.style.transform = `translateX(-${index * 230}px)`;
});


const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalCaption = document.getElementById('modal-caption');
const closeBtn = document.querySelector('.modal-close');

document.querySelectorAll('.gallery-item img').forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = img.src;
    modalCaption.innerText = img.alt;
  });
});

closeBtn.onclick = () => {
  modal.style.display = 'none';
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
