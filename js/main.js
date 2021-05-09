$(function () {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  $('.menu_btn_bars').click( () => {
    $('.menu_btn_bars').hide();
    $('.menu_btn_bars').css('transform', 'rotate(180deg)');
    $('.menu_btn_close').show();
    $('.menu_ul').css('transform', 'translateY(0%)');
    $('body').css('overflow', 'hidden');
  });
  $('.menu_btn_close').click( () => {
    $('.menu_btn_close').hide();
    $('.menu_btn_bars').show();
    $('.menu_ul').css('transform', 'translateY(-113%)');
    $('body').css('overflow', 'auto');
  });

  $(window).scroll(function() {
    let offset = $(window).scrollTop();
    $('.menu').toggleClass('setdown', offset > 0);
  });

  $('.formClose').click(() => {
    $('.formWrapper').hide();
    $('body').css('overflow', 'auto');
  })

  $('.formrun, .formrunadaptive').click(() =>{
    $('.formWrapper').css('display', 'flex');
    $('body').css('overflow', 'hidden');
  })

  $('.formrunadaptive-btn').click(() => {
    $('.menu_btn_close').hide();
    $('.menu_btn_bars').show();
    $('.menu_ul').css('transform', 'translateY(-113%)');
    $('body').css('overflow', 'auto');
  })

  let otzivImg = document.querySelectorAll('.withImg .reviewImg');
  let otzivImgBlock = document.querySelectorAll('.withImg');
  let closeotzivImg = $('.closeReviewImg');

  for (let i = 0; i < otzivImg.length; i++) {
    otzivImg[i].addEventListener('click', function(){
      otzivImgBlock[i].classList.add('active');
    })
    closeotzivImg[i].addEventListener('click', function(){
      otzivImgBlock[i].classList.remove('active');
    })
  }

  let link = $('.formrun-btn, .formrunadaptive-btn');
  link.on('click', function (e) {
    e.preventDefault();
    let selector = $(this).addClass('active').attr('href');
    let target = $(selector);
    $('html, body').animate({ scrollTop: target.offset().top - 120 }, 1000);

  })
  
  var swiper = new Swiper(".mainSwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30
      },
      991: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 30
      }
    }
  });
  var swiperVertical = new Swiper(".swiperVertical", {
    slidesPerView: 4,
    spaceBetween: 6,
    slidesPerGroup: 1,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    loop: true,
    navigation: {
      nextEl: ".numberself-next",
      prevEl: ".numberself-prev",
    },
    breakpoints: {
      0: {
        direction: "horizontal",
        slidesPerView: 3,
      },
      640: {
        slidesPerView: 4,
      },
      1200: {
        direction: "vertical",
      }
    }
  });
  var numberselfSwiper = new Swiper(".numberselfSwiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiperVertical,
    },
  }); 
  var clubgallery1 = new Swiper(".clubgallery1", {
    loop: true,
    navigation: {
      nextEl: ".clubgallery1next",
      prevEl: ".clubgallery1prev",
    },
  }); 
  var clubgallery2 = new Swiper(".clubgallery2", {
    loop: true,
    navigation: {
      nextEl: ".clubgallery2next",
      prevEl: ".clubgallery2prev",
    },
  }); 
  var clubgallery3 = new Swiper(".clubgallery3", {
    loop: true,
    navigation: {
      nextEl: ".clubgallery3next",
      prevEl: ".clubgallery3prev",
    },
  }); 
  var clubgallery4 = new Swiper(".clubgallery4", {
    loop: true,
    navigation: {
      nextEl: ".clubgallery4next",
      prevEl: ".clubgallery4prev",
    },
  }); 
  var clubgallery5 = new Swiper(".clubgallery5", {
    loop: true,
    navigation: {
      nextEl: ".clubgallery5next",
      prevEl: ".clubgallery5prev",
    },
  }); 
  var clubgallery6 = new Swiper(".clubgallery6", {
    loop: true,
    navigation: {
      nextEl: ".clubgallery6next",
      prevEl: ".clubgallery6prev",
    },
  }); 
  var clubgallery7 = new Swiper(".clubgallery7", {
    loop: true,
    navigation: {
      nextEl: ".clubgallery7next",
      prevEl: ".clubgallery7prev",
    },
  }); 
  var clubgallery8 = new Swiper(".clubgallery8", {
    loop: true,
    navigation: {
      nextEl: ".clubgallery8next",
      prevEl: ".clubgallery8prev",
    },
  }); 
  var bayanaul = new Swiper(".bayanaul", {
    loop: true,
    navigation: {
      nextEl: ".bayanaulnext",
      prevEl: ".bayanaulprev",
    },
  }); 

})