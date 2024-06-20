let videoCtrl = document.querySelector('video')
let playBtn = document.querySelector('.playbtn')
console.log(playBtn);
function playPause() {
        console.log("pause");
        videoCtrl.play();
        playBtn.classList.remove('pause')
        playBtn.classList.add('play');
}

videoCtrl.addEventListener("click" , ()=>{
    videoCtrl.pause()
    playBtn.classList.remove('play')
    playBtn.classList.add('pause');
});
playBtn.addEventListener("click" , playPause)