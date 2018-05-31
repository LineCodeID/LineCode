var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      loop: true,
      speed: 300,
      spaceBetween: 30,
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 1700,
      }
    });
