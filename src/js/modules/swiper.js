import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

export const swipers = () => {
  // Первый слайдер на главной
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
  // Слайдер на главной - категории
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
  // Слайдер на главной - новинки
  const swiperInfo = new Swiper('.swiper.info__slider', {
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
      el: '.info__slider-dots',
    },

    navigation: {
      nextEl: '.info__slider-next',
      prevEl: '.info__slider-prev',
    },
  });
  // Библиография - информационные пособия
  const swiperRecommend = new Swiper('.swiper.recommend__slider', {
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
      el: '.recommend__slider-dots',
    },

    navigation: {
      nextEl: '.recommend__slider-next',
      prevEl: '.recommend__slider-prev',
    },
  });
  // Библиография - рекомендательные пособия
  const swiperCategories = new Swiper('.swiper.categories__slider', {
    modules: [Navigation, Pagination],
    loop: true,
    navigation: {
      nextEl: '.categories__slider-next',
      prevEl: '.categories__slider-prev',
    },
    pagination: {
      el: '.categories__slider-dots',
    },
  });
  // Слайдер на главной - партнеры
  const swiperPartners = new Swiper('.swiper.partners__slider', {
    modules: [Navigation, Pagination],
    loop: true,
    spaceBetween: 5,
    breakpoints: {
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
    navigation: {
      nextEl: '.partners__slider-next',
      prevEl: '.partners__slider-prev',
    },
  });
  // Краеведение - виртуальные выставки, проекты
  const swiperExposition = new Swiper('.swiper.exposition__slider', {
    modules: [Navigation, Pagination, Autoplay],
    loop: true,
    autoplay: {
      delay: 3000,
    },
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
  const swiperNews = new Swiper('.swiper.news__slider', {
    modules: [Navigation, Pagination, Autoplay],
    loop: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: '.news__slider-dots',
    },
  });
};
