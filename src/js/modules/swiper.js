import Swiper, { Navigation, Pagination } from 'swiper';

export const swipers = () => {
  const swiperEvents = new Swiper('.swiper.events__slider', {
    modules: [Navigation, Pagination],
    loop: true,
    pagination: {
      el: '.events__slider-dots',
    },

    navigation: {
      nextEl: '.events__slider-next',
      prevEl: '.events__slider-prev',
    },
  });

  const swiperNovelty = new Swiper('.swiper.novelty__slider', {
    modules: [Navigation, Pagination],
    loop: true,
    spaceBetween: 23,
    breakpoints: {
      360: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 4,
      },
      991: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 0,
      },
      1460: {
        slidesPerView: 7,
      },
    },
    pagination: {
      el: '.novelty__slider-dots',
    },

    navigation: {
      nextEl: '.novelty__slider-next',
      prevEl: '.novelty__slider-prev',
    },
  });

  swiperEvents();
  swiperNovelty();
};
