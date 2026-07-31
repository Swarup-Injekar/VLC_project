// query select
const media=document.querySelector("#media");
const fileInput = document.querySelector(".fileInput")
const videoRun = document.querySelector(".videoRun")
const speedUp=document.querySelector("#speedUp");
const speedDown=document.querySelector("#speedDown");
const volumeUp=document.querySelector("#volumeUp");
const volumeDown=document.querySelector("#volumeDown");
const playback =document.querySelector(".playback");
const speed =document.querySelector(".speed")
const Audio =document.querySelector(".Audio")
const volume =document.querySelector(".volume")
const showSpeed = document.querySelector(".showspeed")
const showAudio = document.querySelector(".showaudio")
const play = document.querySelector("#Play")
const pause = document.querySelector("#Pause")
// const stop = document.querySelector(".")
const mute = document.querySelector("#Mute")
const fullScreen = document.querySelector("#Expand")
const rangebar = document.querySelector("#rangebar");
media.addEventListener("click", function fn(){
fileInput.click();
})
let video;
// fileInput.addEventListener("change", function fn(obj){
//   if(video){
//     video.remove();
// }

//     const videoElement = obj.target.files[0];
//     const link = URL.createObjectURL(videoElement);
//  video = document.createElement("video");
// video.src= link;

// video.classList.add("videoRun");
// videoRun.appendChild(video);
// video.play()

// video.addEventListener("loadedmetadata",function (){
//   rangebar.max = video.duration;
//   console.log(video.duration);
// })

// })


fileInput.addEventListener("change", function fn(obj){

    if(video){
        video.remove();
    }

    const videoElement = obj.target.files[0];
    const link = URL.createObjectURL(videoElement);

    video = document.createElement("video");

    video.src = link;
    video.classList.add("videoRun");

    videoRun.appendChild(video);

    video.addEventListener("loadedmetadata", function(){

        rangebar.max = video.duration;
        console.log("Duration:", video.duration);

    });


    video.addEventListener("timeupdate", function(){

        rangebar.value = video.currentTime;

    });


    video.play();

});




























speedUp.addEventListener("mouseenter", function fn(){
speedUp.style.backgroundColor = "lightgray"
})
speedUp.addEventListener("click", function fn(){
  // speedUp.style.backgroundColor ="gray";
 if(video && video.playbackRate <3){
  video.playbackRate += 0.5;
  console.log("Speed Up :", video.playbackRate);
  showSpeed.textContent = "Speed :" + video.playbackRate + "X";
 
showSpeed.style.display = "block"}
  setTimeout(function fn(){
    showSpeed.style.display = "none"
  },2000);
console.log(video.playbackRate);
//  console.log("button clicked");
//   console.log(video)
})
speedUp.addEventListener("mouseleave", function(){
    speedUp.style.backgroundColor = "";
});
speedDown.addEventListener("mouseenter", function fn(){
speedDown.style.backgroundColor = "lightgray"
})
speedDown.addEventListener("click", function fn(){
  // speedUp.style.backgroundColor ="gray";
 if(video && video.playbackRate >0.5){
  video.playbackRate -= 0.5;
  showSpeed.textContent = "Speed :" + video.playbackRate + "X";
  showSpeed.style.display ="Block";
  setTimeout(function fn(){
    showSpeed.style.display = "none"
  },2000);
 }
console.log(video.playbackRate)
})

speedDown.addEventListener("mouseleave", function(){
    speedDown.style.backgroundColor = "";
});

volumeUp.addEventListener("click", function fn(){
  if(video.volume<1){
  video.volume +=0.1;
  }
//  showAudio.textContent = "Audio:" + video.volume ;
//   showAudio.style.display ="Block";
//   setTimeout(function fn(){
//     showAudio.style.display = "none"
//   },2000);




})


volumeUp.addEventListener("mouseenter", function fn(){
  volumeUp.style.backgroundColor ="lightgray"

})

volumeUp.addEventListener("mouseleave", function fn(){
 volumeUp.style.backgroundColor ="";
})

volumeDown.addEventListener("click", function fn(){
  
  if(video.volume>0){
  video.volume -=0.1;}
  console.log("volume Down :", video.volume);

//  showAudio.textContent = "Audio:" + video.volume ;
//   showAudio.style.display ="Block";
//   setTimeout(function fn(){
//     showAudio.style.display = "none"
//   },2000);


})


volumeDown.addEventListener("mouseenter", function fn(){
  
volumeDown.style.backgroundColor ="lightgray";

})
volumeDown.addEventListener("mouseleave", function fn(){
volumeDown.style.backgroundColor =""
})

// video.addEventListener("loadedmetadata",function (){
//   rangebar.max = video.duration;
//   console.log(video.duration);
// // })

// video.addEventListener("timeupdate",function(){
//   rangebar.value =video.currentTime;
// })
// rangebar.addEventListener("input",function (){
//   video.currentTime = rangebar.value;
// })










playback.addEventListener("mouseenter", function fn(){
  speed.style.display = "block"
})


playback.addEventListener("mouseleave", function fn(){
  speed.style.display = "none"
})

Audio.addEventListener("mouseenter",function fn(){
  volume.style.display = "block"
})

Audio.addEventListener("mouseleave",function fn(){
  volume.style.display = "none"
})

play.addEventListener("click", function fn(){
 
   video.play();
})

pause.addEventListener("click", function fn(){
  video.pause();
})
mute.addEventListener("click", function fn(){
  // if(video.muted){
  // video.muted = false}
  // else{
  //   video.muted =true
  // }
  if(video.muted ===false){
  video.muted = true;}
  else{
    video.muted =false
  }
})
fullScreen.addEventListener("click", function fn(){
  
  video.requestFullscreen();
console.log(video);

})

