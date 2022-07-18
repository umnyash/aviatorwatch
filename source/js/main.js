'use strict';

const SLIDER_2_COPY_ANIMATION_DURATION = 400;

const FADE_TEXTS_MAX_HEIGHTS = {
  '0': 131,
  '667': 133,
  '1024': 184,
  '2560': 350,
  '5120': 650,
};

const goodSection = document.querySelector('.good');

const slider2Copy = goodSection.querySelector('.good__slider2-wrapper').cloneNode(true);
slider2Copy.ariaHidden = 'true';
slider2Copy.classList.add('good__slider2-wrapper--copy');
slider2Copy.style.visibility = 'hidden';

const slider2Toggler = goodSection.querySelector('.good__elements .good__element--jumper');

const slider2TogglerCopy = slider2Toggler.cloneNode(true);
slider2TogglerCopy.classList.add('good__element--jumper-copy');
slider2TogglerCopy.style.visibility = 'hidden';

goodSection.appendChild(slider2TogglerCopy);

const slider2CopyToggleButtons = goodSection.querySelectorAll('.good__element--jumper');

const hideSlider2Copy = () => {
  slider2Copy.style.opacity = 0;

  setTimeout(() => {
    slider2Copy.style.visibility = 'hidden';
  }, SLIDER_2_COPY_ANIMATION_DURATION);
};

const toggleSlider2Copy = () => {
  if (slider2Copy.style.visibility === 'hidden') {
    slider2Copy.style.visibility = 'visible';
    slider2Copy.style.opacity = 1;
  } else {
    hideSlider2Copy();
  }
};

slider2CopyToggleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    toggleSlider2Copy();
  });
});

const slider2CopyCloseButton = document.createElement('a');
slider2CopyCloseButton.className = 'good__slider2-close';
slider2Copy.appendChild(slider2CopyCloseButton);

slider2CopyCloseButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  toggleSlider2Copy();
});

goodSection.appendChild(slider2Copy);

let swiper0 = new Swiper(".swiper-0", {
  slidesPerView: 1,
  spaceBetween: 0,
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  speed: 400,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-0 .swiper-button-next",
    prevEl: ".swiper-0 .swiper-button-prev",
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
    nextEl: ".swiper-1 .swiper-button-next",
    prevEl: ".swiper-1 .swiper-button-prev",
  },
});

let swiper2 = new Swiper(".good__slider2-wrapper:not(.good__slider2-wrapper--copy) .swiper-2", {
  slidesPerView: 'auto',
  spaceBetween: 20,
  freeMode: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".good__slider2-wrapper:not(.good__slider2-wrapper--copy) .swiper-button-next",
    prevEl: ".good__slider2-wrapper:not(.good__slider2-wrapper--copy) .swiper-button-prev",
  },
  breakpoints: {
    667: {
      loop: false,
    },
    1024: {
      spaceBetween: 14.22,
    },
    1440: {
      spaceBetween: 20,
    },
    2560: {
      spaceBetween: 35.56,
    },
    5120: {
      spaceBetween: 71.07,
    },
  },
});

let swiper2Copy = new Swiper(".good__slider2-wrapper--copy .swiper-2", {
  slidesPerView: 'auto',
  spaceBetween: 20,
  freeMode: true,
  loop: true,
  slidesOffsetBefore: 40,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".good__slider2-wrapper--copy .swiper-button-next",
    prevEl: ".good__slider2-wrapper--copy .swiper-button-prev",
  },
  breakpoints: {
    667: {
      slidesOffsetBefore: 0,
      loop: false,
    },
    1024: {
      spaceBetween: 14.22,
    },
    1440: {
      spaceBetween: 20,
    },
    2560: {
      spaceBetween: 35.56,
    },
    5120: {
      spaceBetween: 71.07,
    },
  },
});

const fadeTextsWrappers = document.querySelectorAll('.fade-text');
let fadeTextsMaxHeight;

for (let viewport in FADE_TEXTS_MAX_HEIGHTS) {
  if (window.innerWidth >= viewport) {
    fadeTextsMaxHeight = FADE_TEXTS_MAX_HEIGHTS[viewport];
  }
}

fadeTextsWrappers.forEach((fadeTextWrapper) => {
  if (fadeTextWrapper.querySelector('.fade-text__inner').offsetHeight > fadeTextsMaxHeight) {
    fadeTextWrapper.classList.add('fade-text--lessen');

    const button = fadeTextWrapper.querySelector('.fade-text__button');

    button.style.display = 'inline-block';

    button.addEventListener('click', () => {
      if (fadeTextWrapper.classList.contains('fade-text--lessen')) {
        fadeTextWrapper.classList.remove('fade-text--lessen');
        button.textContent = 'Less';
        button.classList.add('fade-text__button--less');
      } else {
        fadeTextWrapper.classList.add('fade-text--lessen');
        button.textContent = 'More';
        button.classList.remove('fade-text__button--less');
      }
    });
  };
});

window.onload = () => {
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        slider2TogglerCopy.style.opacity = 0;
        slider2Copy.style.bottom = '0px';

        setTimeout(() => {
          if (slider2Toggler.getBoundingClientRect().y < 0) {
            slider2TogglerCopy.style.visibility = 'hidden';
          }
        }, SLIDER_2_COPY_ANIMATION_DURATION);
      } else if (slider2Toggler.getBoundingClientRect().y > 0) {
        slider2TogglerCopy.style.visibility = 'visible';
        slider2TogglerCopy.style.opacity = 1;
        slider2Copy.style.bottom = slider2TogglerCopy.offsetHeight + 'px';
      }
    })
  }, { threshold: 0.01 });

  observer.observe(slider2Toggler);
}

const videosWrappers = document.querySelectorAll('.videos__wrapper');

for (let video of videosWrappers) {
  video.querySelector('.videos__play-button').addEventListener('click', (evt) => {
    video.querySelector('.videos__poster-wrapper').remove();
  });
}
