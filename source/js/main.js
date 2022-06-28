'use strict';

let swiper = new Swiper(".swiper-1", {
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

var swiper2 = new Swiper(".swiper-2", {
  slidesPerView: 1,
  spaceBetween: 0,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    420: {
      slidesPerView: 2,
    },
    630: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    920: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
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

const goodSection = document.querySelector('.good');
const goodSectionViewToggler = goodSection.querySelector('.good__elements .good__element--jumper');

goodSectionViewToggler.addEventListener('click', (evt) => {
  evt.preventDefault();
  if (goodSection.classList.contains('good--lessen')) {
    goodSection.classList.remove('good--lessen');
    goodSectionViewToggler.classList.remove('good__element--top');
    goodSectionViewToggler.classList.add('good__element--bottom');
  } else {
    goodSection.classList.add('good--lessen');
    goodSectionViewToggler.classList.add('good__element--top');
    goodSectionViewToggler.classList.remove('good__element--bottom');
  }
});
