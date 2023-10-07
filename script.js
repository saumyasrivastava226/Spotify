console.log("Welcome to My Application");

//Initialize the variables
let songIndex=0;
let audioElement= new Audio("songs/1.mp3")
let masterPlay= document.getElementById("masterPlay");
let myProgressBar= document.getElementById("myProgressBar");
let gif=document.getElementById("gif");
let songItems=Array.from(document.getElementsByClassName("songItem"));
let masterSongName = document.getElementById('masterSongName');
console.log(songItems);
let songs=[
    {
        songName:"Let me love you",
        filePath:"songs/1.mp3",
        coverPath:"covers/1.jpg",
    },
    {
        songName:"Cielo-Huma-Huma",
        filePath:"songs/2.mp3",
        coverPath:"covers/2.jpg",
    },
    {
        songName:"Different Heaven & EHIDE",
        filePath:"songs/3.mp3",
        coverPath:"covers/3.jpg",
    },
    {
        songName:"Salam-e-ishq",
        filePath:"songs/4.mp3",
        coverPath:"covers/4.jpg",
    }
]

songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})

//Handle play/pause events for song
masterPlay.addEventListener('click',()=>{
     if(audioElement.paused||audioElement.currentTime<=0)
     {
         audioElement.play();
         masterPlay.classList.remove('fa-play-circle');
         masterPlay.classList.add('fa-pause-circle');
         gif.style.opacity = 1;
     }
     else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
     }
})

//listen to events 
audioElement.addEventListener('timeupdate',()=>{
      
      //Update seekbar
      progress=parseInt((audioElement.currentTime/audioElement.duration) *100)
      myProgressBar.value=progress;

})  

myProgressBar.addEventListener('change',()=>{
     audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays = () => {
    const songItemPlayElements = document.getElementsByClassName('songItemPlay');
    const songItemPlayArray = [...songItemPlayElements];
    
    songItemPlayArray.forEach((element) => {
      element.classList.add("fa-play-circle");
      element.classList.remove("fa-pause-circle");
    });
  }
  

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    console.log("Hiii!");
    element.addEventListener("click", (e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
         e.target.classList.remove("fa-play-circle");
         e.target.classList.add("fa-pause-circle");
         audioElement.src=`songs/${songIndex+1}.mp3`;
         audioElement.currentTime=0;
         audioElement.play();
         masterPlay.classList.add("fa-pause-circle");
         masterPlay.classList.remove("fa-play-circle");

    });
});
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=3){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})