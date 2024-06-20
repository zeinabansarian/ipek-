const lenis = new Lenis()


function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
gsap.registerPlugin(ScrollTrigger);


const swiper = new Swiper('.certificateSlider', {
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 103,
  speed: 1000,
});


gsap.registerPlugin(ScrollTrigger)

let downText = document.querySelectorAll('.downText')



downText.forEach(element => {
  const tl = gsap.timeline().
    fromTo(element, { y: 0 }, { y: "8vh" })

  ScrollTrigger.create({
    trigger: element,
    animation: tl,
    //   pin: true,
    start: 'top top',
    end: 'top -50%',
    scrub: 1,

  })

});
let upText = document.querySelectorAll('.upText')



upText.forEach(element => {
  const tl = gsap.timeline().
    fromTo(element, { y: 0 }, { y: "-15vh" })

  ScrollTrigger.create({
    trigger: element,
    animation: tl,
    start: 'top 90%',
    end: 'top -25%',
    scrub: 1,
    //   markers:true
  })

});





let videoCtrl = document.querySelectorAll('video')
let playBtn = document.querySelectorAll('.playbtn')

videoCtrl.forEach(element => {

  element.addEventListener("click", () => {
    element.pause()
    let thisPlaybtn = element.parentElement.querySelector(".playbtn")
    thisPlaybtn.classList.remove('play')
    thisPlaybtn.classList.add('pause');
  });
});

playBtn.forEach(element => {

  element.addEventListener("click", function (params) {
    let thisVideo = element.parentElement.querySelector("video")
    thisVideo.play();
    element.classList.remove('pause')
    element.classList.add('play');
  })
});


const brandTop = new Swiper(".brandTop", {
  allowTouchMove: true,
  speed: 2000,
  slidesPerView: 5,
  spaceBetween: 114,
  centeredSlides: true,
  parallax: true,
});
const brandBtm = new Swiper(".brandBtm", {
  allowTouchMove: true,
  speed: 2000,
  slidesPerView: 1,
  centeredSlides: true,
  parallax: true,
});


brandBtm.controller.control = brandTop;
brandTop.controller.control = brandBtm;



let item = document.querySelectorAll(".hoverPlay")


item.forEach(element => {
  let spana = element.querySelectorAll(".svgSpan")
  let thisAudio= element.querySelector("audio")
  // var newaudio = new Audio(thisAudio.getAttribute("src"));
  gsap.defaults({stagger:0.05,duration:0.35,ease:'power3.easeOut',yoyo:true,repeat: -1 , delay: 0})
  const tl=gsap.timeline({paused:true})
  .to(spana,{scaleY: 0.3},0)
  element.addEventListener("mouseenter", function () {
    // thisAudio.muted=true;
    thisAudio.play();
    tl.play();
  })
  element.addEventListener("mouseleave", function () {
    thisAudio.pause();
    tl.pause()
    thisAudio.currentTime=0;
  })
});
                      

let catSlides = document.querySelectorAll(".brandTop .swiper-slide")
for (let i = 0; i < catSlides.length; i++) {
    const element = catSlides[i];
    element.addEventListener("click" , function(params) {
      brandBtm.slideTo(i, 1000, true)
      brandTop.slideTo(i, 1000, true)
    })
    
}

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
