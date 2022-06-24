'use strict';

let swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const fadeTextButtons = document.querySelectorAll('.fade-text__button');

for (let button of fadeTextButtons) {
  button.addEventListener('click', () => {
    if (button.parentNode.classList.contains('fade-text--lessen')) {
      button.parentNode.classList.remove('fade-text--lessen');
      button.textContent = 'Less';
      button.classList.add('fade-text__button--less');
    } else {
      button.parentNode.classList.add('fade-text--lessen');
      button.textContent = 'More';
      button.classList.remove('fade-text__button--less');
    }
  });
}
