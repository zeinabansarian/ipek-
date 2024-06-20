


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



  


            // let clr = document.querySelectorAll(".clr")
            // let leftLoad = document.querySelectorAll(".leftLoad")
            // clr.forEach(element => {
            //   gsap.set(element.querySelector('.leftLoad') , {

            //     opacity:0,
            //     x:"-10%"
            //   })
            //   gsap.to(element.querySelector(".leftLoad") , {
            //     opacity : 1,
            //     x:0,
            //     duration: 1,
            //     scrollTrigger: {
            //       trigger:element,
            //       containerAnimation:scrollTween,
            //       start: "top -20%",
            //       end:"top 10%",
            //     },

            //   })


            // });
            // clr.forEach(element => {
            //   gsap.set(element.querySelector('.secLoad') , {

            //     opacity:0,
            //     x:"-10%"
            //   })
            //   gsap.to(element.querySelector(".secLoad") , {
            //     opacity : 1,
            //     x:0,
            //     duration: 1,
            //     scrollTrigger: {
            //       trigger:element,
            //       containerAnimation:scrollTween,
            //       start: "top -20%",
            //       end:"top 10%",
            //     },

            //   })


            // });














            //   const sections = gsap.utils.toArray(".leftLoad img");
            //   sections.forEach(element => {
            //     gsap.to(".headerContainer" , {

            //       scrollTrigger: {
            //         trigger:element,
            //         containerAnimation:scrollTween,
            //          start: "right 10%",
            //         end:"right 60%",
            //         toggleClass: { targets: ".headerContainer" , className: "activeHeaderColor" },

            // },

            //     })

            //   });













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

            gsap.to(".section1 h1", {
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
            gsap.to(".section1 h2", {
                scrollTrigger: {
                    trigger: ".section1",
                    scrub: 1,
                    start: 'right right',
                    end: '-=5000',
                    containerAnimation: scrollTween,
                },
                x: "-20vw",
                duration: 3,
                ease: "none",
            });

            const para = new SplitType(' p', { types: 'lines' });

            gsap.to('.section1 .line', {
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


 gsap.from('.playbtn', {
    scrollTrigger: {
        trigger: ".section4",
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
  
  