import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

export const swipers = () => {
  const optionsEvents = {
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
  };
  const optionsBrands = {
    modules: [Navigation, Pagination],
    loop: true,
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
  };
  const optionsCategories = {
    modules: [Navigation, Pagination],
    loop: true,
    pagination: {
      el: '.categories__slider-dots',
    },
    navigation: {
      nextEl: '.categories__slider-next',
      prevEl: '.categories__slider-prev',
    },
  };
  const optionsExposition = {
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
  };
  const optionsPost = {
    modules: [Navigation, Pagination, Autoplay],
    loop: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: '.post__slider-dots',
    },
  };

  const swiperInit = (slider, options) => {
    const swiper = new Swiper(`.swiper.${slider}__slider`, options);
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

  // Первый слайдер на главной
  swiperInit('events', optionsEvents);
  // Слайдеры на главной - категории
  swiperInit('brands', optionsBrands);
  // Слайдер на главной - партнеры
  swiperInit('categories', optionsCategories);
  // Краеведение - виртуальные выставки, проекты
  swiperInit('exposition', optionsExposition);
  // Новости -> новость
  swiperInit('post', optionsPost);

  // Слайдер с книгами - Главная - новинки
  booksSlider('novelty');
  // Слайдер с книгами - Библиография - информационные пособия
  booksSlider('info');
  //  Слайдер с книгами - Библиография - рекомендательные пособия
  booksSlider('recommend');
};
