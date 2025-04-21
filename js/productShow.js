


$(".containerHorizontal").imagesLoaded({

}, function () {
    $(document).ready(function () {
        setTimeout(() => {

            gsap.registerPlugin(ScrollTrigger);
            const pageContainer = document.querySelector('.containerHorizontal');
            /* SMOOTH SCROLL */
            const scroller = new LocomotiveScroll({
                el: pageContainer,
                smooth: true
            });
            scroller.on('scroll', ScrollTrigger.update);
            ScrollTrigger.scrollerProxy(pageContainer, {
                scrollTop(value) {
                    return arguments.length ? scroller.scrollTo(value, 0, 0) : scroller.scroll.instance.scroll.y;
                },
                getBoundingClientRect() {
                    return {
                        left: 0,
                        top: 0,
                        width: window.innerWidth,
                        height: window.innerHeight
                    };
                },
                pinType: pageContainer.style.transform ? 'transform' : 'fixed'
            });
            ////////////////////////////////////
            ////////////////////////////////////
            window.addEventListener('load', function () {
                ScrollTrigger.addEventListener('refresh', () => scroller.update()); //locomotive-scroll
                ScrollTrigger.refresh();
                ScrollTrigger.update();
            });
            document.addEventListener('load', function () {
                ScrollTrigger.addEventListener('refresh', () => scroller.update()); //locomotive-scroll
                ScrollTrigger.refresh();
                ScrollTrigger.update();
            });
            addEventListener('resize', () => {
                ScrollTrigger.addEventListener('refresh', () => scroller.update()); //locomotive-scroll
                ScrollTrigger.refresh();
            });
            let pinBoxes = document.querySelectorAll('.Pin-Wrapp > *');
            let pinWrap = document.querySelector('.Pin-Wrapp');
            let pinWrapWidth = pinWrap.offsetWidth;
            let horizontalScrollLength = pinWrapWidth - window.innerWidth;
            console.log("horizontalScrollLength", horizontalScrollLength);
            scrollTween = gsap.to('.Pin-Wrapp', {
                scrollTrigger: {
                    scroller: pageContainer, //locomotive-scroll
                    scrub: true,
                    trigger: '#PinSection',
                    pin: true,
                    start: 'top top',
                    end: pinWrapWidth
                },
                x: horizontalScrollLength,
                ease: 'none'
            });
            ScrollTrigger.addEventListener('refresh', () => scroller.update()); //locomotive-scroll
            ScrollTrigger.refresh();









setTimeout(() => {
    let colors = document.querySelectorAll(".colors span");
    colors.forEach(element => {
        let dataColor=element.getAttribute("data-color")
        console.log("data" ,dataColor);
        switch (dataColor) {
            case "سیاه":
                element.style.background="black"
                break;
                case "سفید(رنگ)":
                    element.style.background="white"
                break;
            case "قرمز":
                element.style.background="red"
                break;
            case "ابی":
                element.style.background="blue"
                break;
            case "صورتی":
                element.style.background="pink"
                break;
            case "زرد":
                element.style.background="yellow"
                break;
            case "نارنجی":
                element.style.background="#ff6000"
                break;
            case "سبز":
                element.style.background="green"
                break;
            case "بنفش":
                element.style.background="purple"
                break;
            case "زرشکی":
                element.style.background="#770000"
                break;
            case "سرمه ای":
                element.style.background="#020057"
                break;
            case "قهوه ای(رنگ)":
                element.style.background="#6b3823"
                break;
            case "نقره":
                element.style.background="silver"
                break;
            case "طلایی":
                element.style.background="#d7b500"
                break;
            case "خاکستری(گروه رنگی)":
                element.style.background="#575757"
                break;
        
            default:
                console.log("def");
                break;
        }
    });
    
}, 1000);







            const swiper = new Swiper('.gallerySlider', {
                allowTouchMove: false,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                  },
            });
            const descriptionSlider = new Swiper('.descriptionSlider', {
                allowTouchMove: false,
                // Optional parameters
                direction: 'vertical',


                pagination: {
                    el: '.fragm',
                    type: 'fraction',
                    // formatFractionCurrent: function (number) {
                    //     return '0' + number;
                    // }
                },
                // Navigation arrows
                navigation: {
                    nextEl: '.nextBtn',
                    prevEl: '.prevBtn',
                },

            });

            swiper.controller.control = descriptionSlider;
            descriptionSlider.controller.control = swiper;




            gsap.to(".vertImgs", {
                scrollTrigger: {
                    trigger: ".section6",
                    scrub: 1,
                    start: 'left -50%',
                    end: 'left 100%',
                    containerAnimation: scrollTween,
                },
                y: "-80%",
                duration: 2,
                ease: "none",
            });
            gsap.to(".roundTxt", {
                scrollTrigger: {
                    trigger: ".roundTxt",
                    scrub: 1,
                    start: 'left -50%',
                    end: '-=5000',
                    containerAnimation: scrollTween,
                },
                rotation: 360,
                duration: 3,
                ease: "none",
            });

            gsap.to(".section2 h1", {
                scrollTrigger: {
                    trigger: ".section1",
                    scrub: 1,
                    start: 'right right',
                    end: '-=5000',
                    containerAnimation: scrollTween,
                },
                x: "20vw",
                duration: 3,
                ease: "none",
            });

            const para = new SplitType(' p', { types: 'lines' });

            gsap.to('.section2 .line', {
                y: 0,
                opacity: 1,
                stagger: 0.1,
                delay: 0,
                duration: 1,
            });

            let splPara = document.querySelectorAll(".splPara p ")
            splPara.forEach(element => {
                gsap.to(element.querySelectorAll(".line"), {
                    scrollTrigger: {
                        trigger: element.parentElement,
                        start: 'left left',
                        end: 'left -40%',
                        containerAnimation: scrollTween,
                    },
                    y: 0,
                    opacity: 1,
                    stagger: 0.1,
                    delay: 0,
                    duration: 1,



                })
            });
            let midPara = document.querySelectorAll(".midSection p ")
            midPara.forEach(element => {
                gsap.to(element.querySelectorAll(".line"), {
                    scrollTrigger: {
                        trigger: element.parentElement,
                        start: 'right 20%',
                        end: 'left left',
                        containerAnimation: scrollTween,
                    },
                    y: 0,
                    opacity: 1,
                    stagger: 0.1,
                    delay: 0,
                    duration: 1,



                })
            });


            gsap.from('.playbtn', {
                scrollTrigger: {
                    trigger: ".section7",
                    start: 'left -20%',
                    end: 'right -20%',
                    containerAnimation: scrollTween,
                    scrub: 2,
                },
                y: 40,
                opacity: 0,
                stagger: 0.1,
                delay: 0,
                duration: 1.5,

            });

            
         
            let body = document.querySelector("body");
            let flag = true;
            let orderBtn = document.querySelectorAll(".orderBtn")
            let closeBtn=document.querySelectorAll(".close");

            orderBtn.forEach(element => {
                element.addEventListener("click", function (params) {
                    // let modalForm=element.parentElement.querySelector(".modal");
                    // var top = $(modalForm).offset().top - parseFloat($(modalForm).css('margin-top').replace(/auto/, 0));
                    // scroller.on("scroll",(e)=>{
                    // var x = 0 - e.scroll.x;
                    // var y =  e.scroll.y;
                    // whether that's below the form
                    
                    // if (flag) {
                    //     setTimeout(() => {
                            
                    //         flag=!flag;
                    //     }, 100);
                    //     scroller.stop()
                    // }
                   
                    // })
                })
            });
            // closeBtn.forEach(element => {
            //     element.addEventListener("click" ,  function (params) {
            //         if (!flag) {
            //             setTimeout(() => {
                            
            //                 scroller.start();
            //                 // // scroller.init();    
            //                 // scroller.update();
            //                 // scroller.continue();
            //             }, 100);
            //             setTimeout(() => {
                            
            //                 flag=!flag;
            //             }, 300);
            //         }
            //     })
            // });
            setTimeout(() => {

                let questions = document.querySelectorAll(".orderForm [data-bc-schema-main-container] [data-bc-question]")
                console.log("questions", questions);
                questions.forEach(element => {
                    let title = element.querySelector("[data-bc-schema-main-container] [data-bc-question-title]").innerHTML
                    console.log(title);
                    let qInput = element.querySelector("input")
                    let qTxtArea = element.querySelector("_textarea");
                    if (qInput) {

                        qInput.setAttribute("placeholder", title);
                    }
                    else if (qTxtArea) {

                        qTxtArea.setAttribute("placeholder", title);
                    }
                });
            }, 2000);

            
        }, 500);
    })
}
)

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
  
  