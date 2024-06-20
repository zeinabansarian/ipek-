
const swiper = new Swiper('.projectListSlider', {
    spaceBetween:15,
    loop: false,
    slidesPerView : "auto",
    // mousewheel:true,
  freeMode:true,
  mousewheelControl: true,
  speed:700,

  mousewheel: {
    enabled: true,

    sensitivity: 4,
  },
  navigation: {
    nextEl: '.nextBtn',
    prevEl: '.prevBtn',
  },

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
