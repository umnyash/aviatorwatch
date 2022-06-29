'use strict';

const goodSection = document.querySelector('.good');

const slider2 = goodSection.querySelector('.good__slider2-wrapper');

const slider2Copy = slider2.cloneNode(true);
slider2Copy.ariaHidden = 'true';
slider2Copy.classList.add('good__slider2-wrapper--copy');
slider2Copy.classList.add('good__slider2-wrapper--hidden');

goodSection.appendChild(slider2Copy);

let swiper0 = new Swiper(".swiper-0", {
  slidesPerView: 1,
  spaceBetween: 0,
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
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

let swiper1 = new Swiper(".swiper-1", {
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

let swiper2 = new Swiper(".swiper-2", {
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

const goodSectionViewToggler = goodSection.querySelector('.good__elements .good__element--jumper');

goodSectionViewToggler.addEventListener('click', (evt) => {
  evt.preventDefault();
  if (goodSection.classList.contains('good--lessen')) {
    goodSection.classList.remove('good--lessen');
    goodSectionViewToggler.classList.replace('good__element--top', 'good__element--bottom');
  } else {
    goodSection.classList.add('good--lessen');
    goodSectionViewToggler.classList.replace('good__element--bottom', 'good__element--top');
  }
});

window.onload = () => {
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        slider2Copy.classList.add('good__slider2-wrapper--hidden');
      } else if (slider2.getBoundingClientRect().y > 0) {
        slider2Copy.classList.remove('good__slider2-wrapper--hidden');
      }
    })
  }, { threshold: 0.01 });

  observer.observe(slider2);
}
