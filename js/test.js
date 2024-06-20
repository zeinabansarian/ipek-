
const interleaveOffset = 0.75;



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
        gsap.to(`img[data-image=${label}]`, {opacity: 1, scale: 1})
        gsap.set(`img[data-image=${label}]`, {zIndex: 1})
        gsap.set(`.rightMenu li[data-label=${label}]`, {zIndex: 2})
    })
    
    category.addEventListener('mouseleave', () => {
        gsap.to(`img[data-image=${label}]`, {opacity: 0, zIndex: -1, scale: .80})
        gsap.set(`.rightMenu li[data-label=${label}]`, {zIndex: 0})
    })
})