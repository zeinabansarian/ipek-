// Params
let mainSliderSelector = '.main-slider',
    navSliderSelector = '.nav-slider',
    interleaveOffset = 0.5;

// Main Slider
let mainSliderOptions = {
      loop: true,
      speed:500,
      autoplay:{
        delay:300000
      },
      loopAdditionalSlides: 10,
      grabCursor: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: '.boxnav__item--next',
        prevEl: '.boxnav__item--prev',
      },
      on: {
        init: function(){
          this.autoplay.stop();
        },
        imagesReady: function(){
          this.el.classList.remove('loading');
          this.autoplay.start();
        },
        slideChangeTransitionEnd: function(){
          let swiper = this,
              captions = swiper.el.querySelectorAll('.content');
          // for (let i = 0; i < captions.length; ++i) {
          //   captions[i].classList.remove('show');
          // }
          // swiper.slides[swiper.activeIndex].querySelector('.content').classList.add('show');
        },
        progress: function(){
          let swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            let slideProgress = swiper.slides[i].progress,
                innerOffset = swiper.width * interleaveOffset,
                innerTranslate = slideProgress * innerOffset;
            swiper.slides[i].querySelector(".slide-bgimg").style.transform =
              "translate3d(" + innerTranslate + "px, 0, 0)";
          }
             // TweenMax.to(swiper.slides[swiper.activeIndex].querySelector('.slide-bgimg'), 1.2, {
             //        ease: Expo.easeInOut,
             //        startAt: {x:'100%', scale: 1.1},
             //        x: '0%',
             //        scale: 1.1,
             //        onStart: () => {
             //            swiper.slides[swiper.activeIndex].querySelector('.slide-bgimg').style.transformOrigin = '100% 50%';
             //            swiper.slides.querySelector('.slide-bgimg').style.opacity = 1;
             //        },
             //        onComplete: () => {
             //            swiper.slides.style.zIndex = 999;
             //            swiper.slides.style.opacity = 1;
             //            resolve();
             //        }
             //    });
        },
        touchStart: function() {
          let swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = "";
          }
        },
        setTransition: function(speed) {
          let swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = speed + "ms";
            swiper.slides[i].querySelector(".slide-bgimg").style.transition =
              speed + "ms";
          }
        },
        slideChangeTransitionEnd: function() {
          let swiper = this;
           TweenMax.to(swiper.slides[swiper.activeIndex].querySelector('.content'), 1.2, {
                    ease: Expo.easeInOut,
                    startAt: {x:'10%', scale: 1},
                    // x: '0%',
                    scale: 1,
                    opacity:1,
                    onStart: () => {
                        swiper.slides[swiper.activeIndex].querySelector('.content').style.transformOrigin = '100% 0%';
                        swiper.slides[swiper.activeIndex].querySelector('.content').style.opacity = 1;
                    },
                    onComplete: () => {
                    }
                });
              for (let i = 0; i < swiper.slides.length; i++) {
                if(i !== swiper.activeIndex){
                  swiper.slides[i].querySelector('.content').style.opacity = 0;
                }
              }
        }
      }
    };
let mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);