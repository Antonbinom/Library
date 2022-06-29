import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

export const swipers = () => {
  // Первый слайдер на главной
  const swiperEvents = new Swiper('.swiper.events__slider', {
    modules: [Navigation, Pagination, Autoplay],
    loop: true,
    disableOnInteraction: false,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '.events__slider-dots',
    },

    navigation: {
      nextEl: '.events__slider-next',
      prevEl: '.events__slider-prev',
    },
  });

  // Слайдеры на главной - категории
  const swiperCategories = new Swiper('.swiper.categories__slider', {
    modules: [Navigation, Pagination],
    loop: true,
    pagination: {
      el: '.categories__slider-dots',
    },
    navigation: {
      nextEl: '.categories__slider-next',
      prevEl: '.categories__slider-prev',
    },
  });
  // Слайдер на главной - партнеры
  const swiperBrands = new Swiper('.swiper.brands__slider', {
    modules: [Navigation, Pagination],
    loop: true,
    // spaceBetween: 55,
    breakpoints: {
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
        // spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
      },
    },
    navigation: {
      nextEl: '.brands__slider-next',
      prevEl: '.brands__slider-prev',
    },
  });
  // Краеведение - виртуальные выставки, проекты
  const swiperExposition = new Swiper('.swiper.exposition__slider', {
    modules: [Navigation, Pagination],
    loop: true,
    spaceBetween: 24,
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
    pagination: {
      el: '.exposition__slider-dots',
    },
  });
  // Новости -> новость
  const swiperPost = new Swiper('.swiper.post__slider', {
    modules: [Navigation, Pagination, Autoplay],
    loop: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: '.post__slider-dots',
    },
  });
};
// Слайдер с книгами
const booksSlider = slider => {
  const swiper = new Swiper(`.swiper.${slider}__slider`, {
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
      el: `.${slider}__slider-dots`,
    },

    navigation: {
      nextEl: `.${slider}__slider-next`,
      prevEl: `.${slider}__slider-prev`,
    },
  });
};

// Слайдер с книгами - Главная - новинки
booksSlider('novelty');
// Слайдер с книгами - Библиография - информационные пособия
booksSlider('info');
//  Слайдер с книгами - Библиография - рекомендательные пособия
booksSlider('recommend');
