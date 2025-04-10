let valorDisplay= "";
let result= "";
let deshacer="";
let incluye= false;

function sumarDisplay(value){
        valorDisplay+=value;
        document.getElementById("display").value= valorDisplay;
}

function parentesis(value){
        incluye= valorDisplay.includes('(');
        if (incluye===true){
                valorDisplay+=')';
                document.getElementById("display").value= valorDisplay;
        } else{
                valorDisplay+=value;
                document.getElementById("display").value= valorDisplay;
        }
}
function limpiarDisplay(){
        valorDisplay="";
        document.getElementById("display").value= "";
}

function del(){
        valorDisplay= valorDisplay.slice(0, valorDisplay.length - 1);
        document.getElementById("display").value= valorDisplay;
}

function mostrar_result(){
        valorDisplay= eval(valorDisplay).toString();
        result= valorDisplay
        document.getElementById("display").value= valorDisplay;
}

function ans(){
        document.getElementById("display").value= result;
        valorDisplay= result;
}
