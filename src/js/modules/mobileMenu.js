export const mobileMenu = () => {
  const btnMenu = document.querySelector('.header-menu__btn');
  const btnSearch = document.querySelector('.header-search__btn');
  const mobileMenu = document.querySelector('.mobile__menu');
  const mobileSearch = document.querySelector('.mobile__search');
  const mobileMenuItems = document.querySelectorAll('.mobile__sublist, .mobile__list-btn img');

  const openMobileSubitem = e => {
    e.preventDefault();
    const mobileItem = e.target.closest('.mobile__list-item');
    const listBtn = mobileItem.querySelector('.mobile__list-btn');
    const sublist = mobileItem.querySelector('.mobile__sublist');
    const arrowBtn = listBtn.querySelector('img');

    arrowBtn.classList.toggle('active');
    sublist.classList.toggle('active');
  };
  const closeMobileSubitem = () => {
    mobileMenuItems.forEach(item => {
      item.classList.remove('active');
    });
  };
  document.addEventListener('click', e => {
    if (e.target === btnMenu) {
      mobileSearch.classList.remove('active');
      mobileMenu.classList.toggle('active');
      closeMobileSubitem();
    } else if (e.target === btnSearch) {
      mobileMenu.classList.remove('active');
      mobileSearch.classList.toggle('active');
    } else if (e.target.closest('.mobile__list-btn')) openMobileSubitem(e);
  });
};
