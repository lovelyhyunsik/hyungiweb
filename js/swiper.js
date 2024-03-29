$(function () {
  var swiper1 = new Swiper(".visualSwiper", {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    }
  });

  var swiper2 = new Swiper(".scrollSwiper", {
    slidesPerView: 3,
    spaceBetween: 16,
    freeMode: true,
    scrollbar: {
      el: ".swiper-scrollbar"
    },
  });

  var brandSwiperTitles = [
    'CHATELAINE',
    'OLIVIA HASSLER',
    'CROCODILE LADIES',
    'THE GRACE',
    'CASTELBAJAC'
  ]

  var swiper3 = new Swiper(".brandSwiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: '.brand_slide_gnb ul',
      clickable: true,
      renderBullet: function (index, className) {
          return `<li class="${className}"><button>${brandSwiperTitles[index]}</button></li>`;
      },
    }
  });

  

  var swiper4 = new Swiper(".brandSecondSwiper", {
      slidesPerView: 1,
      /* spaceBetween: 16, */
      loop:true,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction"
        /* clickable: true, */
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
  });

  var swiper5 = new Swiper(".scrollSwiper2", {
    slidesPerView: 4,
    spaceBetween: 16,
    freeMode: true,
    scrollbar: {
      el: ".swiper-scrollbar"
    },
  });

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 8,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper7 = new Swiper(".mySwiper2", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
  });
})






