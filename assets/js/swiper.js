var swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  effect: 'coverflow',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
  	delay: 4000,
  },
  coverflowEffect: {
    rotate: 30,
    slideShadows: false,
  },
});
