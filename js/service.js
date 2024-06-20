

let leftItems = document.querySelectorAll(".leftItems ul li button");
leftItems[0].classList.add("activeBtn")
for (let i = 0; i < leftItems.length; i++) {
    const element = leftItems[i];
    element.addEventListener("click", function(params) {
        $(".leftItems ul li button").removeClass("activeBtn")
        element.classList.add("activeBtn");
        verticalSlider.slideTo(i, 1000, true)
    })
    
}

const verticalSlider = new Swiper(".verticalSlider", {
    // Optional parameters
    direction: "vertical",
    speed:1000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },
    on:{
      slideChange: function(){
        $(".leftItems ul li button").removeClass("activeBtn")
        leftItems[verticalSlider.activeIndex].classList.add("activeBtn")
      },
    },
  });


  const lenis = new Lenis()


function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
gsap.registerPlugin(ScrollTrigger);


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


document.querySelectorAll('.toggle-button').forEach(btn => {
  btn.addEventListener('click', e => {
    e.target.parentElement.classList.toggle('share__wrapper--active');
    e.target.classList.toggle('toggle-button--active');
  });
});


let url = location.href;
var path = window.location.pathname;
var page = path.split("/").pop();
let instagram=document.querySelector("#instagram");
instagram.setAttribute("href" , `https://instagram.com/${url}`)
let telegram=document.querySelector("#telegram");
telegram.setAttribute("href" , `https://t.me/share/url?url=${url}&text=${page}`)
let whatsapp=document.querySelector("#whatsapp");
whatsapp.setAttribute("href" , `https://web.whatsapp.com/send?text=${url}`)

