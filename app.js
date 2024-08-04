let numeroSecreto = 0;
let intentos = 0;


function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   
   
    if(numeroDeUsuario == numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos == 1 ? 'vez' : 'veces')}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //Usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento ('p', 'El numero secreto es menor');
        } else{
            asignarTextoElemento ('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja()
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto () {
    return Math.floor(Math.random()*10+1);
}

function condicionesIniciales() {
asignarTextoElemento ('h1', 'Juego del número secreto!');
asignarTextoElemento ('p', 'Inidica un número del 1 al 10');
numeroSecreto = generarNumeroSecreto ();
intentos = 1; 
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indica mensaje de intervalo de numeros
    //genera un numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilita el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();

