import { mobileMenu } from './modules/mobileMenu.js';
import { swipers } from './modules/swiper.js';
import { maps } from './modules/maps.js';

mobileMenu();
swipers();
if (document.querySelector('.map')) maps();
