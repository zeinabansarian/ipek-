

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



















var TOC = document.getElementById('toc'),
headings = document.querySelectorAll('.landing h1, .landing h2,.landing h3'),
parentLevel = 1,
cursorNode = TOC;

for (var i = 0, len = headings.length ; i < len ; ++i) {
	var currentHeading = headings[i];
	var newLevel = parseInt(currentHeading.tagName.substr(1,1));
	var diff = newLevel - parentLevel;
	if (diff > 0) {
		var containerLiNode = cursorNode.lastChild;
		var ulNode = document.createElement('UL')
		containerLiNode.appendChild(ulNode);
		cursorNode = ulNode;
		parentLevel = newLevel;		
	}
	if (diff < 0) {
		while (0 !== diff++) {
			cursorNode = cursorNode.parentNode.parentNode;
		}
		parentLevel = newLevel;
	}

	var liNode = document.createElement('LI');
	if (!currentHeading.hasAttribute('id')) {
    currentHeading.id = 'h' + i;
  }
  var link = document.createElement('A');
	link.setAttribute('href', '#' + currentHeading.getAttribute('id'));
	link.appendChild(document.createTextNode(currentHeading.textContent))
	liNode.appendChild(link);
  cursorNode.appendChild(liNode);




 link.addEventListener("click" , function (e) {
  e.preventDefault()
  window.scrollTo({
    top: document.querySelector(e.target.getAttribute("href")).getBoundingClientRect().top + window.pageYOffset-127,
    behavior: 'smooth',
  })  
 })


}









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
  mousewheel: false,
});

let catSlides = document.querySelectorAll(".catSlider .swiper-slide")
for (let i = 0; i < catSlides.length; i++) {
  const element = catSlides[i];
  element.addEventListener("click" , function(params) {
      backgroundSlider.slideTo(i, 1000, true)
      catSlider.slideTo(i, 1000, true)
  })
  
}

let dataMenu= document.querySelectorAll(".dataMenu")
let catid = document.querySelector(".catid").innerHTML
for (let i = 0; i < dataMenu.length; i++) {
    const element = dataMenu[i];
    let dataCat = element.getAttribute("data-cat")
    if (dataCat==catid) {
        backgroundSlider.slideTo(i);
        catSlider.slideTo(i);
        
    }
}




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













let loadMore = document.querySelector('.loadMore');
let currentItems =2;
const elementList = [...document.querySelectorAll('.blogItem')];
if(currentItems<elementList.length){
    loadMore.addEventListener("click" , function(e){
        const elementList = [...document.querySelectorAll('.blogItem')];
        loadMore.classList.add('show-loader');
        // console.log(e.target);
        for (let i = currentItems; i < currentItems+2; i++) {
            setTimeout(() => {
                e.target.classList.remove('show-loader');
                if(elementList[i]){
                    elementList[i].style.display = 'block';
                }
            },0 );
        }
        currentItems+=2;
        if(currentItems>=elementList.length){
            loadMore.classList.add('loaded')
            console.log(loadMore);
        }
    }) 
}
else{
    loadMore.classList.add('loaded')

}









let question = document.querySelectorAll(".question");

question.forEach(question => {
  question.addEventListener("click", event => {
    const active = document.querySelector(".question.active");
    if(active && active !== question ) {
      active.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if(question.classList.contains("active")){
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  })
})