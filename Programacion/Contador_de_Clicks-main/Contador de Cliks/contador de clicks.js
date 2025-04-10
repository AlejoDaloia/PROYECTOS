const texto= document.getElementById("texto");
var audio= document.getElementById("audio");

num= 0;
parseInt(texto);

function contador(){
    if(audio.paused){
        audio.play();
    } else{
        audio.currentTime= 0;
    }
    num+=1;
    texto.innerHTML= num;
}
