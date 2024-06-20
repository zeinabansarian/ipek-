

// const slider = document.getElementById("js-cta-slider");

// const interleaveOffset = 0.75;
let body = document.querySelector("body");
body.style.position="fixed";
const swiperHome = new Swiper(".homeSlider", {
  loop: false,
  direction: "vertical",
  autoplay: false,
  speed: 1000,
  grabCursor: false,
  watchSlidesProgress: true,
  mousewheelControl: true,
  mousewheel: true,
  navigation: {
    nextEl: ".nextMainBtn",
  },
  on: {
    progress: function () {
      let swiperHome = this;

      for (let i = 0; i < swiperHome.slides.length; i++) {
        let slideProgress = swiperHome.slides[i].progress;
        let innerOffset = swiperHome.height * interleaveOffset;
        let innerTranslate = slideProgress * innerOffset;

        //TweenMax.set(swiperHome.slides[i], {
        //skewY: `${innerTranslate*0.025}deg`,
        //});
        TweenMax.set(swiperHome.slides[i].querySelector(".slide-inner"), {
          y: innerTranslate,
        });
      }
    },
    touchStart: function () {
      let swiperHome = this;
      for (let i = 0; i < swiperHome.slides.length; i++) {
        swiperHome.slides[i].style.transition = "";
      }
    },
    setTransition: function (speed) {
      let swiperHome = this;
      for (let i = 0; i < swiperHome.slides.length; i++) {
        swiperHome.slides[i].style.transition = speed + "ms";
        swiperHome.slides[i].querySelector(".slide-inner").style.transition =
          speed + "ms";
      }
    },
    slideChange: function () {
      setTimeout(function () {
        swiperHome.params.touchReleaseOnEdges = false;
        swiperHome.params.mousewheel.releaseOnEdges = false;
      });
    },
    reachEnd: function () {
      setTimeout(function () {
          swiperHome.params.touchReleaseOnEdges = true;
          swiperHome.params.mousewheel.releaseOnEdges = true;
          body.style.position="relative"
        console.log("end"); 
          
      }, 500);
    },
    reachBeginning: function () {
      console.log("begin");
      body.style.position="fixed"
      setTimeout(function () {
        swiperHome.params.touchReleaseOnEdges = true;
        swiperHome.params.mousewheel.releaseOnEdges = true;
      }, 500);
    },
  },
});

const serviceSlider = new Swiper(".serviceSlider", {
  pagination: {
    el: ".swiper-pagination-service",
    clickable: true,
  },
  loop: false,
  speed: 1000,
  navigation: {
    nextEl: ".nextBtn",
    prevEl: ".prevBtn",
  },
});

let items = document.querySelectorAll(".hoverItem");

items.forEach((element) => {
  element.addEventListener("mouseenter", function (params) {
    $(this).parent().parent().find("img").addClass("hoverImg");
  });

  element.addEventListener("mouseleave", function (params) {
    $(this).parent().parent().find("img").removeClass("hoverImg");
  });
});

const innerSlider = new Swiper(".innerSlider", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  allowTouchMove: false,
  speed: 1000,
  navigation: {
    nextEl: ".nexBtn",
    prevEl: ".preBtn",
  },
});
const brandTop = new Swiper(".brandTop", {
  // loop: true,
  // effect: "fade",
  // fade: { crossFade: true },
  allowTouchMove: true,
  speed: 1000,
  slidesPerView: 4,
  spaceBetween: 114,
  centeredSlides: true,
  parallax : true,
});
const brandBtm = new Swiper(".brandBtm", {
  // loop: true,
  // effect: "fade",
  spaceBetween: -114,
  // fade: { crossFade: true },
  allowTouchMove: true,
  speed: 1000,
  slidesPerView: 1,
  centeredSlides: true,
  parallax : true,
});


brandBtm.controller.control = brandTop;
brandTop.controller.control = brandBtm;



$('.scroll-down').click(function() {
  $('html, body').animate({
    scrollTop: document.querySelector(".section2").offsetTop
  }, 1000);
});

$('.scroll-down2').click(function() {
  $('html, body').animate({
    scrollTop: document.querySelector(".section6").offsetTop
  }, 1000);
});



// console.log(document.querySelector(".section2").offsetTop);


// const lenis = new Lenis()


// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)
// gsap.registerPlugin(ScrollTrigger);


follower = $(".cursor-follower");

var posX = 0,
  posY = 0;

var mouseX = 0,
  mouseY = 0;

TweenMax.to({}, 0.016, {
repeat: -1,
onRepeat: function() {
  posX += (mouseX - posX) / 9;
  posY += (mouseY - posY) / 9;
  
  TweenMax.set(follower, {
      css: {    
      left: posX - 12,
      top: posY - 12
      }
  });
  

}
});

$(document).on("mousemove", function(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
});


let catSlides = document.querySelectorAll(".brandTop .swiper-slide")
for (let i = 0; i < catSlides.length; i++) {
    const element = catSlides[i];
    element.addEventListener("click" , function(params) {
      brandBtm.slideTo(i, 1000, true)
      brandTop.slideTo(i, 1000, true)
    })
    
}


let title4 = document.querySelectorAll(".slider4 .title4");

title4.forEach((element) => {
  element.addEventListener("mouseenter", function (params) {
    $(this).parent().find(".swiper-slide-active img").addClass("hoverImg");
  });

  element.addEventListener("mouseleave", function (params) {
    $(this).parent().find(".swiper-slide-active img").removeClass("hoverImg");
  });
});