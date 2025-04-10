let roja = document.querySelector(".roja");
let amarilla = document.querySelector(".amarilla");
let verde = document.querySelector(".verde");
let roja_2 = document.querySelector(".roja_2");
let amarilla_2 = document.querySelector(".amarilla_2");
let verde_2 = document.querySelector(".verde_2"); 
let recorrido= 1;
let cont= 1;
let intervalo;
let intervalo_2;

//CAMBIO MANUAL
function cambiar(){
  clearInterval(intervalo);
  clearInterval(intervalo_2);
  if(recorrido === 1){
    //SEMAFORO 1
      setTimeout(function(){
      document.getElementById("roja").style.backgroundColor = "rgb(255, 0, 0)";
      document.getElementById("roja").style.boxShadow = "0 0 60px 10px rgb(255,0,0)";
      document.getElementById("roja").style.borderRight = "4px solid rgb(134, 0, 0, 0.315)";
      document.getElementById("amarilla").style.backgroundColor = "rgba(77, 80, 9, 0.945)";
      document.getElementById("amarilla").style.boxShadow = "0 0 60px 10px rgb(11,12,14)";
      document.getElementById("amarilla").style.borderRight = "4px solid rgb(90, 89, 89)";
      document.getElementById("verde").style.backgroundColor = "rgba(39, 131, 0, 0.336)";
      document.getElementById("verde").style.boxShadow = "0 0 60px 10px rgb(11,12,14)";
      document.getElementById("verde").style.borderRight = "4px solid rgb(95,94,94)";
      },1000);
         setTimeout(function() {
         document.getElementById("roja").style.backgroundColor = "rgba(175, 3, 3, 0.315)";
         document.getElementById("roja").style.boxShadow = "0 0 60px 10px rgb(11,12,14)";
         document.getElementById("roja").style.borderRight = "4px solid rgb(95,94,94)";
         document.getElementById("amarilla").style.backgroundColor = "rgb(255, 240, 24)";
         document.getElementById("amarilla").style.boxShadow = "0 0 60px 10px rgb(255,240, 24)";
         document.getElementById("amarilla").style.borderRight = "4px solid rgba(143, 148, 0, 0.356)";
         document.getElementById("verde").style.backgroundColor = "rgba(39, 131, 0, 0.336)";
         document.getElementById("verde").style.boxShadow = "0 0 60px 10px rgb(11,12,14)";
         document.getElementById("verde").style.borderRight = "4px solid rgb(95,94,94)";
         }, 3100);
             setTimeout(function() {
             document.getElementById("roja").style.backgroundColor = "rgba(175, 3, 3, 0.315)";
             document.getElementById("roja").style.boxShadow = "0 0 60px 10px rgb(11,12,14)";
             document.getElementById("roja").style.borderRight = "4px solid rgb(95,94,94)";
             document.getElementById("amarilla").style.backgroundColor = "rgba(77, 80, 9, 0.945)";
             document.getElementById("amarilla").style.boxShadow = "0 0 60px 10px rgb(11,12,14)";
             document.getElementById("amarilla").style.borderRight = "4px solid rgb(90, 89, 89)";
             document.getElementById("verde").style.backgroundColor = "rgb(77, 255, 0)";
             document.getElementById("verde").style.boxShadow = "0 0 60px 10px rgb(77,255, 0)";
             document.getElementById("verde").style.borderRight = "4px solid rgba(39, 131, 0, 0.336)";
             }, 3800);
    //SEMAFORO 2
    setTimeout(function() {
      document.getElementById("roja_2").style.backgroundColor = "rgba(175, 3, 3, 0.315)";
      document.getElementById("roja_2").style.boxShadow = "0 0 60px 10px rgb(11,12,14)";
      document.getElementById("roja_2").style.borderRight = "4px solid rgb(95,94,94)";
      document.getElementById("amarilla_2").style.backgroundColor = "rgba(77, 80, 9, 0.945)";
      document.getElementById("amarilla_2").style.boxShadow = "0 0 60px 10px rgb(11,12,14)";
      document.getElementById("amarilla_2").style.borderRight = "4px solid rgb(90, 89, 89)";
      document.getElementById("verde_2").style.backgroundColor = "rgb(77, 255, 0)";
      document.getElementById("verde_2").style.boxShadow = "0 0 60px 10px rgb(77,255, 0)";
      document.getElementById("verde_2").style.borderRight = "4px solid rgba(39, 131, 0, 0.336)";
      }, 1000);
         setTimeout(function() {
         document.getElementById("roja_2").style.backgroundColor = "rgba(175, 3, 3, 0.315)";
         document.getElementById("roja_2").style.boxShadow = "0 0 60px 10px rgb(11,12,14)";
         document.getElementById("roja_2").style.borderRight = "4px solid rgb(95,94,94)";
         document.getElementById("amarilla_2").style.backgroundColor = "rgb(255, 240, 24)";
         document.getElementById("amarilla_2").style.boxShadow = "0 0 60px 10px rgb(255,240, 24)";
         document.getElementById("amarilla_2").style.borderRight = "4px solid rgba(143, 148, 0, 0.356)";
         document.getElementById("verde_2").style.backgroundColor = "rgba(39, 131, 0, 0.336)";
         document.getElementById("verde_2").style.boxShadow = "0 0 60px 10px rgb(11,12,14)";
         document.getElementById("verde_2").style.borderRight = "4px solid rgb(95,94,94)";
         }, 3100);
             setTimeout(function() {
             document.getElementById("roja_2").style.backgroundColor = "rgb(255, 0, 0)";
             document.getElementById("roja_2").style.boxShadow = "0 0 60px 10px rgb(255,0,0)";
             document.getElementById("roja_2").style.borderRight = "4px solid rgb(134, 0, 0, 0.315)";
             document.getElementById("amarilla_2").style.backgroundColor = "rgba(77, 80, 9, 0.945)";
             document.getElementById("amarilla_2").style.boxShadow = "0 0 60px 10px rgb(11,12,14)";
             document.getElementById("amarilla_2").style.borderRight = "4px solid rgb(90, 89, 89)";
             document.getElementById("verde_2").style.backgroundColor = "rgba(39, 131, 0, 0.336)";
             document.getElementById("verde_2").style.boxShadow = "0 0 60px 10px rgb(11,12,14)";
             document.getElementById("verde_2").style.borderRight = "4px solid rgb(95,94,94)";
             }, 3800);
    recorrido= 2;
    }else{
    //SEMAFORO 1
        setTimeout(function(){
        document.getElementById("roja").style.backgroundColor = "rgba(175, 3, 3, 0.315)";
        document.getElementById("roja").style.boxShadow = "0 0 60px 10px rgb(11,12,14)";
        document.getElementById("roja").style.borderRight = "4px solid rgb(95,94,94)";
        document.getElementById("amarilla").style.backgroundColor = "rgba(77, 80, 9, 0.945)";
        document.getElementById("amarilla").style.boxShadow = "0 0 60px 10px rgb(11,12,14)";
        document.getElementById("amarilla").style.borderRight = "4px solid rgb(90, 89, 89)";
        document.getElementById("verde").style.backgroundColor = "rgb(77, 255, 0)";
        document.getElementById("verde").style.boxShadow = "0 0 60px 10px rgb(77,255, 0)";
        document.getElementById("verde").style.borderRight = "4px solid rgba(39, 131, 0, 0.336)";
        },1000);
            setTimeout(function() {
            document.getElementById("roja").style.backgroundColor = "rgba(175, 3, 3, 0.315)";
            document.getElementById("roja").style.boxShadow = "0 0 60px 10px rgb(11,12,14)";
            document.getElementById("roja").style.borderRight = "4px solid rgb(95,94,94)";
            document.getElementById("amarilla").style.backgroundColor = "rgb(255, 240, 24)";
            document.getElementById("amarilla").style.boxShadow = "0 0 60px 10px rgb(255,240, 24)";
            document.getElementById("amarilla").style.borderRight = "4px solid rgba(143, 148, 0, 0.356)";
            document.getElementById("verde").style.backgroundColor = "rgba(39, 131, 0, 0.336)";
            document.getElementById("verde").style.boxShadow = "0 0 60px 10px rgb(11,12,14)";
            document.getElementById("verde").style.borderRight = "4px solid rgb(95,94,94)";
            }, 3100);
               setTimeout(function() {
               document.getElementById("roja").style.backgroundColor = "rgb(255, 0, 0)";
               document.getElementById("roja").style.boxShadow = "0 0 60px 10px rgb(255,0,0)";
               document.getElementById("roja").style.borderRight = "4px solid rgb(134, 0, 0, 0.315)";
               document.getElementById("amarilla").style.backgroundColor = "rgba(77, 80, 9, 0.945)";
               document.getElementById("amarilla").style.boxShadow = "0 0 60px 10px rgb(11,12,14)";
               document.getElementById("amarilla").style.borderRight = "4px solid rgb(90, 89, 89)";
               document.getElementById("verde").style.backgroundColor = "rgba(39, 131, 0, 0.336)";
               document.getElementById("verde").style.boxShadow = "0 0 60px 10px rgb(11,12,14)";
               document.getElementById("verde").style.borderRight = "4px solid rgb(95,94,94)";
               }, 3800);
    //SEMAFORO 2
        setTimeout(function() {
        document.getElementById("roja_2").style.backgroundColor = "rgb(255, 0, 0)";
        document.getElementById("roja_2").style.boxShadow = "0 0 60px 10px rgb(255,0,0)";
        document.getElementById("roja_2").style.borderRight = "4px solid rgb(134, 0, 0, 0.315)";
        document.getElementById("amarilla_2").style.backgroundColor = "rgba(77, 80, 9, 0.945)";
        document.getElementById("amarilla_2").style.boxShadow = "0 0 60px 10px rgb(11,12,14)";
        document.getElementById("amarilla_2").style.borderRight = "4px solid rgb(90, 89, 89)";
        document.getElementById("verde_2").style.backgroundColor = "rgba(39, 131, 0, 0.336)";
        document.getElementById("verde_2").style.boxShadow = "0 0 60px 10px rgb(11,12,14)";
        document.getElementById("verde_2").style.borderRight = "4px solid rgb(95,94,94)";
        }, 1000);
            setTimeout(function() {
            document.getElementById("roja_2").style.backgroundColor = "rgba(175, 3, 3, 0.315)";
            document.getElementById("roja_2").style.boxShadow = "0 0 60px 10px rgb(11,12,14)";
            document.getElementById("roja_2").style.borderRight = "4px solid rgb(95,94,94)";
            document.getElementById("amarilla_2").style.backgroundColor = "rgb(255, 240, 24)";
            document.getElementById("amarilla_2").style.boxShadow = "0 0 60px 10px rgb(255,240, 24)";
            document.getElementById("amarilla_2").style.borderRight = "4px solid rgba(143, 148, 0, 0.356)";
            document.getElementById("verde_2").style.backgroundColor = "rgba(39, 131, 0, 0.336)";
            document.getElementById("verde_2").style.boxShadow = "0 0 60px 10px rgb(11,12,14)";
            document.getElementById("verde_2").style.borderRight = "4px solid rgb(95,94,94)";
            }, 3100);
                  setTimeout(function() {
                  document.getElementById("roja_2").style.backgroundColor = "rgba(175, 3, 3, 0.315)";
                  document.getElementById("roja_2").style.boxShadow = "0 0 60px 10px rgb(11,12,14)";
                  document.getElementById("roja_2").style.borderRight = "4px solid rgb(95,94,94)";
                  document.getElementById("amarilla_2").style.backgroundColor = "rgba(77, 80, 9, 0.945)";
                  document.getElementById("amarilla_2").style.boxShadow = "0 0 60px 10px rgb(11,12,14)";
                  document.getElementById("amarilla_2").style.borderRight = "4px solid rgb(90, 89, 89)";
                  document.getElementById("verde_2").style.backgroundColor = "rgb(77, 255, 0)";
                  document.getElementById("verde_2").style.boxShadow = "0 0 60px 10px rgb(77,255, 0)";
                  document.getElementById("verde_2").style.borderRight = "4px solid rgba(39, 131, 0, 0.336)";
                  }, 3800);
    recorrido= 1;
  }
}

//TIMER
function automatico(){
  function cambiarSemaforo() {
    clearInterval(intervalo);
    //SEMAFORO 1
    setTimeout(function() {
        document.getElementById("roja").style.backgroundColor = "rgb(255, 0, 0)";
        document.getElementById("roja").style.boxShadow = "0 0 60px 10px rgb(255,0,0)";
        document.getElementById("roja").style.borderRight = "4px solid rgb(134, 0, 0, 0.315)";
        document.getElementById("amarilla").style.backgroundColor = "rgba(77, 80, 9, 0.945)";
        document.getElementById("amarilla").style.boxShadow = "0 0 60px 10px rgb(11,12,14)";
        document.getElementById("amarilla").style.borderRight = "4px solid rgb(90, 89, 89)";
        document.getElementById("verde").style.backgroundColor = "rgba(39, 131, 0, 0.336)";
        document.getElementById("verde").style.boxShadow = "0 0 60px 10px rgb(11,12,14)";
        document.getElementById("verde").style.borderRight = "4px solid rgb(95,94,94)";
       }, 0);
            setTimeout(function() {
            document.getElementById("roja").style.backgroundColor = "rgba(175, 3, 3, 0.315)";
            document.getElementById("roja").style.boxShadow = "0 0 60px 10px rgb(11,12,14)";
            document.getElementById("roja").style.borderRight = "4px solid rgb(95,94,94)";
            document.getElementById("amarilla").style.backgroundColor = "rgb(255, 240, 24)";
            document.getElementById("amarilla").style.boxShadow = "0 0 60px 10px rgb(255,240, 24)";
            document.getElementById("amarilla").style.borderRight = "4px solid rgba(143, 148, 0, 0.356)";
            document.getElementById("verde").style.backgroundColor = "rgba(39, 131, 0, 0.336)";
            document.getElementById("verde").style.boxShadow = "0 0 60px 10px rgb(11,12,14)";
            document.getElementById("verde").style.borderRight = "4px solid rgb(95,94,94)";
            }, 3000);
                  setTimeout(function() {
                  document.getElementById("roja").style.backgroundColor = "rgba(175, 3, 3, 0.315)";
                  document.getElementById("roja").style.boxShadow = "0 0 60px 10px rgb(11,12,14)";
                  document.getElementById("roja").style.borderRight = "4px solid rgb(95,94,94)";
                  document.getElementById("amarilla").style.backgroundColor = "rgba(77, 80, 9, 0.945)";
                  document.getElementById("amarilla").style.boxShadow = "0 0 60px 10px rgb(11,12,14)";
                  document.getElementById("amarilla").style.borderRight = "4px solid rgb(90, 89, 89)";
                  document.getElementById("verde").style.backgroundColor = "rgb(77, 255, 0)";
                  document.getElementById("verde").style.boxShadow = "0 0 60px 10px rgb(77,255, 0)";
                  document.getElementById("verde").style.borderRight = "4px solid rgba(39, 131, 0, 0.336)";
                  }, 3750);
                         setTimeout(function() {
                         document.getElementById("roja").style.backgroundColor = "rgba(175, 3, 3, 0.315)";
                         document.getElementById("roja").style.boxShadow = "0 0 60px 10px rgb(11,12,14)";
                         document.getElementById("roja").style.borderRight = "4px solid rgb(95,94,94)";
                         document.getElementById("amarilla").style.backgroundColor = "rgb(255, 240, 24)";
                         document.getElementById("amarilla").style.boxShadow = "0 0 60px 10px rgb(255,240, 24)";
                         document.getElementById("amarilla").style.borderRight = "4px solid rgba(143, 148, 0, 0.356)";
                         document.getElementById("verde").style.backgroundColor = "rgba(39, 131, 0, 0.336)";
                         document.getElementById("verde").style.boxShadow = "0 0 60px 10px rgb(11,12,14)";
                         document.getElementById("verde").style.borderRight = "4px solid rgb(95,94,94)";
                         }, 6500);
  
    //SEMAFORO 2
    setTimeout(function() {
        document.getElementById("roja_2").style.backgroundColor = "rgba(175, 3, 3, 0.315)";
        document.getElementById("roja_2").style.boxShadow = "0 0 60px 10px rgb(11,12,14)";
        document.getElementById("roja_2").style.borderRight = "4px solid rgb(95,94,94)";
        document.getElementById("amarilla_2").style.backgroundColor = "rgba(77, 80, 9, 0.945)";
        document.getElementById("amarilla_2").style.boxShadow = "0 0 60px 10px rgb(11,12,14)";
        document.getElementById("amarilla_2").style.borderRight = "4px solid rgb(90, 89, 89)";
        document.getElementById("verde_2").style.backgroundColor = "rgb(77, 255, 0)";
        document.getElementById("verde_2").style.boxShadow = "0 0 60px 10px rgb(77,255, 0)";
        document.getElementById("verde_2").style.borderRight = "4px solid rgba(39, 131, 0, 0.336)";
        }, 0);
            setTimeout(function() {
            document.getElementById("roja_2").style.backgroundColor = "rgba(175, 3, 3, 0.315)";
            document.getElementById("roja_2").style.boxShadow = "0 0 60px 10px rgb(11,12,14)";
            document.getElementById("roja_2").style.borderRight = "4px solid rgb(95,94,94)";
            document.getElementById("amarilla_2").style.backgroundColor = "rgb(255, 240, 24)";
            document.getElementById("amarilla_2").style.boxShadow = "0 0 60px 10px rgb(255,240, 24)";
            document.getElementById("amarilla_2").style.borderRight = "4px solid rgba(143, 148, 0, 0.356)";
            document.getElementById("verde_2").style.backgroundColor = "rgba(39, 131, 0, 0.336)";
            document.getElementById("verde_2").style.boxShadow = "0 0 60px 10px rgb(11,12,14)";
            document.getElementById("verde_2").style.borderRight = "4px solid rgb(95,94,94)";
            }, 3000);
                   setTimeout(function() {
                   document.getElementById("roja_2").style.backgroundColor = "rgb(255, 0, 0)";
                   document.getElementById("roja_2").style.boxShadow = "0 0 60px 10px rgb(255,0,0)";
                   document.getElementById("roja_2").style.borderRight = "4px solid rgb(134, 0, 0, 0.315)";
                   document.getElementById("amarilla_2").style.backgroundColor = "rgba(77, 80, 9, 0.945)";
                   document.getElementById("amarilla_2").style.boxShadow = "0 0 60px 10px rgb(11,12,14)";
                   document.getElementById("amarilla_2").style.borderRight = "4px solid rgb(90, 89, 89)";
                   document.getElementById("verde_2").style.backgroundColor = "rgba(39, 131, 0, 0.336)";
                   document.getElementById("verde_2").style.boxShadow = "0 0 60px 10px rgb(11,12,14)";
                   document.getElementById("verde_2").style.borderRight = "4px solid rgb(95,94,94)";
                   }, 3750);
                          setTimeout(function() {
                          document.getElementById("roja_2").style.backgroundColor = "rgba(175, 3, 3, 0.315)";
                          document.getElementById("roja_2").style.boxShadow = "0 0 60px 10px rgb(11,12,14)";
                          document.getElementById("roja_2").style.borderRight = "4px solid rgb(95,94,94)";
                          document.getElementById("amarilla_2").style.backgroundColor = "rgb(255, 240, 24)";
                          document.getElementById("amarilla_2").style.boxShadow = "0 0 60px 10px rgb(255,240, 24)";
                          document.getElementById("amarilla_2").style.borderRight = "4px solid rgba(143, 148, 0, 0.356)";
                          document.getElementById("verde_2").style.backgroundColor = "rgba(39, 131, 0, 0.336)";
                          document.getElementById("verde_2").style.boxShadow = "0 0 60px 10px rgb(11,12,14)";
                          document.getElementById("verde_2").style.borderRight = "4px solid rgb(95,94,94)";
                          }, 6500);
  }
  cambiarSemaforo();
  intervalo_2 = setInterval(cambiarSemaforo, 7500);
}

function stop(){
  clearInterval(intervalo_2);
  //SEMAFORO 1
  document.getElementById("roja").style.backgroundColor = "rgba(175, 3, 3, 0.315)";
  document.getElementById("roja").style.boxShadow = "0 0 60px 10px rgb(11,12,14)";
  document.getElementById("roja").style.borderRight = "4px solid rgb(95,94,94)";
  document.getElementById("verde").style.backgroundColor = "rgba(39, 131, 0, 0.336)";
  document.getElementById("verde").style.boxShadow = "0 0 60px 10px rgb(11,12,14)";
  document.getElementById("verde").style.borderRight = "4px solid rgb(95,94,94)";
  //SEMAFORO 2
  document.getElementById("roja_2").style.backgroundColor = "rgba(175, 3, 3, 0.315)";
  document.getElementById("roja_2").style.boxShadow = "0 0 60px 10px rgb(11,12,14)";
  document.getElementById("roja_2").style.borderRight = "4px solid rgb(95,94,94)";
  document.getElementById("verde_2").style.backgroundColor = "rgba(39, 131, 0, 0.336)";
  document.getElementById("verde_2").style.boxShadow = "0 0 60px 10px rgb(11,12,14)";
  document.getElementById("verde_2").style.borderRight = "4px solid rgb(95,94,94)";
  
  intervalo = setInterval(function(){
    if(cont === 1){
        document.getElementById("amarilla").style.backgroundColor = "rgba(77, 80, 9, 0.945)";
        document.getElementById("amarilla").style.boxShadow = "0 0 60px 10px rgb(11,12,14)";
        document.getElementById("amarilla").style.borderRight = "4px solid rgb(90, 89, 89)";
        document.getElementById("amarilla_2").style.backgroundColor = "rgba(77, 80, 9, 0.945)";
        document.getElementById("amarilla_2").style.boxShadow = "0 0 60px 10px rgb(11,12,14)";
        document.getElementById("amarilla_2").style.borderRight = "4px solid rgb(90, 89, 89)";
        cont= 2;
          } else{
             document.getElementById("amarilla").style.backgroundColor = "rgb(255, 240, 24)";
             document.getElementById("amarilla").style.boxShadow = "0 0 60px 10px rgb(255,240, 24)";
             document.getElementById("amarilla").style.borderRight = "4px solid rgba(143, 148, 0, 0.356)";
             document.getElementById("amarilla_2").style.backgroundColor = "rgb(255, 240, 24)";
             document.getElementById("amarilla_2").style.boxShadow = "0 0 60px 10px rgb(255,240, 24)";
             document.getElementById("amarilla_2").style.borderRight = "4px solid rgba(143, 148, 0, 0.356)";
             cont= 1;
          }
  },400);
}

function apagar(){
    clearInterval(intervalo);
    clearInterval(intervalo_2);
    document.getElementById("roja").style.backgroundColor = "rgba(175, 3, 3, 0.315)";
    document.getElementById("amarilla").style.backgroundColor = "rgba(77, 80, 9, 0.945)";
    document.getElementById("verde").style.backgroundColor = "rgba(39, 131, 0, 0.336)";
    document.getElementById("roja_2").style.backgroundColor = "rgba(175, 3, 3, 0.315)";
    document.getElementById("amarilla_2").style.backgroundColor = "rgba(77, 80, 9, 0.945)";
    document.getElementById("verde_2").style.backgroundColor = "rgba(39, 131, 0, 0.336)";
    document.getElementById("roja").style.boxShadow = "0 0 60px 10px rgb(11,12,14)";
    document.getElementById("amarilla").style.boxShadow = "0 0 60px 10px rgb(11,12,14)";
    document.getElementById("verde").style.boxShadow = "0 0 60px 10px rgb(11,12,14)";
    document.getElementById("roja_2").style.boxShadow = "0 0 60px 10px rgb(11,12,14)";
    document.getElementById("amarilla_2").style.boxShadow = "0 0 60px 10px rgb(11,12,14)";
    document.getElementById("verde_2").style.boxShadow = "0 0 60px 10px rgb(11,12,14)";
    document.getElementById("amarilla").style.borderRight = "4px solid rgb(95,94,94)";
    document.getElementById("amarilla_2").style.borderRight = "4px solid rgb(95,94,94)";
    document.getElementById("roja").style.borderRight = "4px solid rgb(95,94,94)";
    document.getElementById("roja_2").style.borderRight = "4px solid rgb(95,94,94)";
    document.getElementById("verde").style.borderRight = "4px solid rgb(95,94,94)";
    document.getElementById("verde_2").style.borderRight = "4px solid rgb(95,94,94)";
}