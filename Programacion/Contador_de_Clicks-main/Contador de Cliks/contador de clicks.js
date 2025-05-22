const texto= document.getElementById("texto");
var audio= document.getElementById("audio");
const video= document.getElementById("screamer");

num= 0;
parseInt(texto);

function contador(){
    if(audio.paused){
        audio.play();
    } else{
        audio.currentTime= 0;
    }
    if(texto.innerHTML == 15){
        video.style.display= "show";
        video.play();
        setTimeout(function(){
            video.pause();
            video.currentTime= 0;
        }, 5000);
        texto.innerHTML= "¡Felicidades! Has llegado a 15 clicks.";
        return;
    }
    num+=1;
    texto.innerHTML= num;
}
