var mole = document.querySelector(".mole");
var count = document.querySelector(".score");
var counter = 0;
var timer = 1500;
var intervalTime = setInterval(randomMoleLocation,timer);
var btnPlay = document.querySelector("button");
var popup = document.querySelector(".pop-up");
var blurry = document.querySelector(".blur");
mole.addEventListener('click',function(){
    punchMusic();
    scoreMusic(); 
    randomMoleLocation(); 
}); 
btnPlay.addEventListener('click', function(){
    popup.style.display = 'none';
    blurry.style.filter = 'none';
    randomMoleLocation();
     backgroundMusic();
});
function changeIntervalSpeed(speed){ 
    clearInterval(intervalTime);
    timer = speed;
    intervalTime = setInterval(randomMoleLocation,timer); 
}
function randomMoleLocation(){
        mole.style.gridColumnStart = Math.floor(Math.random() * 5);
        mole.style.gridRowStart = Math.floor(Math.random() * 5);
        console.log(timer);
}

function scoreMusic(){
    count.innerHTML = ++counter;
    console.log(counter);
    if(counter === 5){
        let audioPlay = new Audio('./asset/audio-soundeffect/level-up.mp3');
        audioPlay.volume = 1;
        audioPlay.play();
        changeIntervalSpeed(900);

    }
    if(counter === 15){
        changeIntervalSpeed(300);
        let audioPlay = new Audio('./asset/audio-soundeffect/level-up.mp3');
        audioPlay.volume = 1;
        audioPlay.play();
    }
}
function punchMusic(){
   let audio = new Audio('./asset/audio-soundeffect/punch.mp3');
    audio.volume = 1;
    audio.play();
}
function backgroundMusic(){
    let audio = new Audio('./asset/audio-soundeffect/background-music.wav');
    audio.loop = true;
    audio.play();
}
