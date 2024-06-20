const lenis = new Lenis()


function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
gsap.registerPlugin(ScrollTrigger);



let blogItem = document.querySelectorAll(".blogItem")

blogItem.forEach(element => {
    gsap.to(element,{
        scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'bottom bottom',
        },
        y: 0,
        opacity: 1,
        stagger: 0.5,
        delay: 0,
        duration: 1,

    })
    
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
