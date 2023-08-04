console.log("welcome to spotify");
// Initialize the variable
let songIndex = 0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongname = document.getElementById('masterSongname');
let songItems= Array.from (document.getElementsByClassName('songItem'));


let songs = [
    {songName: "music", filepath: " songs/1.mp3",coverpath:"covers/1.jpg"},
    {songName: "Bairiya", filepath: "songs/2.mp3",coverpath:"covers/2.jpg"},
    {songName: "Bairiya", filepath: "songs/3.mp3",coverpath:"covers/3.png"},
    {songName: "Bairiya", filepath: "songs/4.mp3",coverpath:"covers/4.jpg"},
    {songName: "Bairiya", filepath: "songs/5.mp3",coverpath:"covers/5.jpg"},
    {songName: "Bairiya", filepath: "songs/6.mp3",coverpath:"covers/6.jpg"},
    {songName: "Bairiya", filepath: "songs/7.mp3",coverpath:"covers/7.jpg"},
    {songName: "Bairiya", filepath: "songs/8.mp3",coverpath:"covers/8.jpg"},
    {songName: "Bairiya", filepath: "songs/9.mp3",coverpath:"covers/9.jpg"},
    {songName: "Bairiya", filepath: "songs/10.mp3",coverpath:"covers/10.jpg"}, 
] 


songItems.forEach((element,i)=>{
   
    element.getElementsByTagName('img')[0].src = songs[i].coverpath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})

//audioElement.play();



//audioElement.play();

//handle play/pause click for masterplay(at bottom play button)
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('ffa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
// console.log('timeupdate')
//update seeker
progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgressBar.value = progress;


})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})


// play and pause for each song


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element)=>{ 
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}



Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
       
        songIndex= parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = 'songs/${songIndex+1}.mp3';
        masterSongname.innerText = songs[songIndex].songName;
        audioElement.currentTime =0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('ffa-circle-pause');

    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0
    }
    else{
        songIndex+=1;
    }
    audioElement.src = 'songs/${songIndex+1}.mp3';
    masterSongname.innerText = songs[songIndex].songName;
        audioElement.currentTime =0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('ffa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex-=1;
    }
    audioElement.src = 'songs/${songIndex+1}.mp3';
    
    masterSongname.innerText = songs[songIndex].songName;
        audioElement.currentTime =0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('ffa-circle-pause');
})