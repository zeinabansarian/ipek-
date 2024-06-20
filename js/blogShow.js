const swiper = new Swiper('.relatedBlog', {
    speed: 400,
    spaceBetween: 13,
    slidesPerView : 4,
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
const relatedProducts = new Swiper('.relatedProducts', {
    speed: 400,
    spaceBetween: 13,
    slidesPerView : 4,
    scrollbar: {
      el: '.swiper-scrollbar-relatedProducts',
    },
  });

  const shareBtn = document.querySelector('.shareBtn');
const title = window.document.title;



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

