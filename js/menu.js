
const interleaveOffset = 0.75;

const menuSswiper = new Swiper(".overMenuSlider", {
  loop: false,
  autoplay:false,
  speed: 1000,
  // grabCursor: true,
  watchSlidesProgress: true,
  // mousewheelControl: true,
  // mousewheel: true,



  on: {
    progress: function() {
      let swiper = this;

      for (let i = 0; i < swiper.slides.length; i++) {
        let slideProgress = swiper.slides[i].progress;
        let innerOffset = swiper.width * interleaveOffset;
        let innerTranslate = slideProgress * innerOffset;

        TweenMax.set(swiper.slides[i].querySelector(".slide-inner"), {
          x: innerTranslate,
        });
      }
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
        swiper.slides[i].querySelector(".slide-inner").style.transition =
          speed + "ms";
      }
    }
  }
});



let overMenu = document.querySelector(".overMenu")

let leftMenu = document.querySelector(".leftMenu ul")
leftMenu.addEventListener("mouseenter" , function (params) {
    overMenu.classList.add("overMenuActive")
})
leftMenu.addEventListener("mouseleave" , function (params) {
    overMenu.classList.remove("overMenuActive")
})

let leftMenuList = document.querySelectorAll(".leftMenu ul>li")
for (let i = 0; i < leftMenuList.length; i++) {
    const element = leftMenuList[i];
    element.addEventListener("mouseenter",function(params) {
        
        menuSswiper.slideTo(i, 700, true)
    })
    
}


let barIcon = document.querySelector(".barIcon")
let midLine = document.querySelector(".midLine")
let menuContainer = document.querySelector(".menuContainer")
let menuFlag=false;
barIcon.addEventListener("click",function(params) {
    if (!menuFlag) {
        
        menuContainer.classList.add("activeMenuContainer")
        menuFlag=!menuFlag;
        gsap.to(" ul li a",{
            y: 0,
            stagger: 0.2,
            delay:1,
            duration: 1.2,
    
        })
        midLine.classList.add("sctivemidLine")
    }
    else{
        menuFlag=!menuFlag
        gsap.to(".rightMenu ul li a",{
            y: "-10vh",

            stagger: 0.2,
            delay:0,
            duration: 1.2,
    
        })
        gsap.to(".leftMenu ul li a",{
            y: "-20vh",

            stagger: 0.2,
            delay:0,
            duration: 1.2,
    
        })
        
        setTimeout(() => {
            menuContainer.classList.add("activeMenuContainerTop")
            
        }, 1400);
        setTimeout(() => {
            menuContainer.classList.remove("activeMenuContainer")
            menuContainer.classList.remove("activeMenuContainerTop")
            midLine.classList.remove("sctivemidLine")

            gsap.to(".rightMenu ul li a",{
                y: "10vh",
    
                delay:0,
                duration: 0,
        
            })
            gsap.to(".leftMenu ul li a",{
                y: "20vh",
    
                delay:0,
                duration: 0,
        
            })
            
        }, 2200);
    }
})


const categoriesWrapper = document.querySelector('.rightMenu')

categoriesWrapper.addEventListener('mousemove', e => {
    gsap.to('.images img', {
        // move images to mouse position
        x: e.x, 
        y: e.y, 
        // transform origin of images to center
        xPercent: -450, 
        yPercent: -50,
        // stagger subsequent images by 50ms
        stagger: .05
    })
})

gsap.utils.toArray('.rightMenu li')
.forEach(category => {
    let {label} = category.dataset
    
    category.addEventListener('mouseenter', () => {
      $(".rightMenu li").addClass("blurLi");
      $(category).removeClass("blurLi")

        gsap.to(`img[data-image=${label}]`, {opacity: 1, scale: 1})
        gsap.set(`img[data-image=${label}]`, {zIndex:6})
        gsap.set(`li[data-label=${label}]`, {zIndex: 20})
    })
    
    category.addEventListener('mouseleave', () => {
      $(".rightMenu li").removeClass("blurLi");
        gsap.to(`img[data-image=${label}]`, {opacity: 0, zIndex: -1, scale: .80})
        gsap.set(`li[data-label=${label}]`, {zIndex: 0})
    })
})
let whiteLogo = "/images/logo-white.png"
let blackLogo = "/images/logo-black.png"
let headerFlag=true;
let logoImg=document.querySelector(".logo img")
let menu2Icon = document.querySelector(".menu2 .barIcon button")
if (menu2Icon) {
  menu2Icon.addEventListener("click" , function(params) {
    if (headerFlag) {
      
      menu2Icon.classList.add("activeMenu2");
      logoImg.setAttribute("src" , whiteLogo)
      headerFlag=!headerFlag;
    }else{

      menu2Icon.classList.remove("activeMenu2");
      logoImg.setAttribute("src" , blackLogo)
      headerFlag=!headerFlag;
    }
  })
}
