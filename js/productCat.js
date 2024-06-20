
$(document).ready(function(){
    var $moveable = $('.slideContainer');
    var rectPosX = parseInt($('.slideContainer').css('left'), 10);
    $(".productCat").mousemove(function(e){
        $moveable.css({'left': rectPosX-e.pageX/50,'right': rectPosX-e.pageX/50});
    });
  });


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




const backgroundSlider = new Swiper('.backgroundSlider', {
    slidesPerView:1,
    effect: "fade",
    speed:2000,

    fadeEffect: {
      crossFade: false,
    },
  });

const catSlider = new Swiper('.catSlider', {
    slidesPerView:1.9,
    centeredSlides:true,
    // loop:true,
    allowTouchMove: false,

    speed:2000,
    on:{
        transitionStart: function(swiper){
          console.log(this.activeIndex);
          backgroundSlider.slideTo(this.activeIndex, 700, true)
            setTimeout(() => {
                
                let pervSlider = document.querySelector(".catSlider .swiper-slide-prev .titleCat")
                $(pervSlider).on("mouseenter", function() {
                    $(follower).attr("class" , "cursor-follower activePre");
                });
                $(pervSlider).on("mouseleave", function() {
                    $(follower).attr("class" , "cursor-follower");
                });
                let nextSlider = document.querySelector(".catSlider .swiper-slide-next .titleCat")
                
                $(nextSlider).on("mouseenter", function() {
                    $(follower).attr("class" , "cursor-follower activeNext");
                });
                $(nextSlider).on("mouseleave", function() {
                    $(follower).attr("class" , "cursor-follower");
                    // $(follower).removeClass("activeNext");
                });
                let activeSlider = document.querySelector(".catSlider .swiper-slide-active .titleCat")
                $(activeSlider).on("mouseenter", function() {
                    $(follower).attr("class" , "cursor-follower activeActive");
                });
                $(activeSlider).on("mouseleave", function() {
                    $(follower).attr("class" , "cursor-follower");
                });
                
            }, 800);
        },
    },
    mousewheel: {
        invert: false,

      },
  });

let catSlides = document.querySelectorAll(".catSlider .swiper-slide")
for (let i = 0; i < catSlides.length; i++) {
    const element = catSlides[i];
    element.addEventListener("click" , function(params) {
        backgroundSlider.slideTo(i, 1000, true)
        catSlider.slideTo(i, 1000, true)
    })
    
}