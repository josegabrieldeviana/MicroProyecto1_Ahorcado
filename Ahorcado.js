//Se creó la variable gloal palabra de la lista para poder utilizarla también al momento de 
//interactuar con los botones de las letras
let palabra_de_lista;
let cant_errores = 0;
let cant_aciertos = 0;




//Creación de la constante palabras que va a ser una lista de palabras para adivinar
const palabras = [
    'hipopótamo',
    'paralelepipedo',
    'onomatopeya',
    'sesquipedal',
    'esternocleidomastoideo',
    'electroencefalografista',
    'quiropractico',
    'desoxirribonucleico',
    'anticonstitucionalmente',
    'ultramicroscopicamente'
];
//Se definió el boton jugar con el id que se le dio anteriormente al mismo
//Luego se utilizó el método addEventListener que va a permitir que el navegador considere
//la interacción click en el botón y se inicie el juego
const button = id('jugar');
button.addEventListener('click', iniciar);

console.log(button);    


//Luego se va a crear la función que va a permitir que efectivamente nos de alguna palabra de la lista
// y que no sea solo un índice para empezar a jugar.
//seguido a esto un for loop que va a recorrer cada letra en cada posición de la palabra para poder obtener
//las rayas
//la variable mostrador va a permitir visualizar la palabra
//la variable span va a permitir crear un span cuando se recorra cada letra de la palabra en el for
//y se agrega el span al mostrador
//Para evitar que se sumen todas las rayas de las letras se reemplaza con un espacio en blanco cada vez que
//se cierre la etiqueta del html para jugar se reemplace por el espacio en blanco
//también se va a desabilitar el boton que inicia el juego para que no se puede reiniciar el juego a mitad
//de partida.
function iniciar(event){
    console.log('hiciste click');
    button.disabled = true;
    cant_errores = 0;
    cant_aciertos = 0;
    const mostrador =  id("palabra_a_adivinar");
    mostrador.innerHTML = ''

    const valor_mas_bajo = 0;
    const cant_palabras = palabras.length;
    const valor_al_azar = obtener_random(0, cant_palabras);
    
    palabra_de_lista = palabras[valor_al_azar];
    console.log(palabra_de_lista);
    const cant_rayitas = palabra_de_lista.length;
    
    for (let i = 0; i < cant_rayitas; i ++ ){
        const span = document.createElement("span");
        mostrador.appendChild (span);

    }

}

//Constante que va a permitir devolver todos las letras de los botones
//Se crea un for loop para que recorra desde la primera letra (indice 0) hasta el valor menor
//que las letras totales de uno en uno
//una vez los recorra y se quede con uno que reconozca que al hacer click va llamar a la función
//click de letras 
const button_letras = document.querySelectorAll("#letras button");
for (let i = 0; i<button_letras.length; i ++){
    button_letras[i].addEventListener('click', click_letras);
}

//se creo la función para poder clickear las letras
//el event.target va a dar específicamente la letra clickeada
// y se desabilitará la misma
//pasar todas las palabras de la lista a que sean minúsculas al igual que las letras
//el for va a permitir recorrrer letra por letra de la palabra y el if
// va a ir comparando la letra clickeada con cualquiera de las letras de la palabra gracias al for
function click_letras(event){
    const spans = document.querySelectorAll('#palabra_a_adivinar span');
    const button = event.target;
    button.disabled = true;
    const letra = button.innerHTML.toLowerCase();
    const palabra = palabra_de_lista.toLowerCase();
    
    let acerto = false;
    for(let i = 0; i<palabra.length; i++){
        if(letra == palabra[i]){
            spans[i].innerHTML = letra;
            cant_aciertos++;

            acerto = true;
        }
    }
    if( acerto == false){
            cant_errores++;
            const source = `img/ahorcado${cant_errores}.png`
            const imagen = id('imagen');
            imagen.src = source;
    }

    console.log("la letra " + letra + " en la palabra " + palabra + " existe?? " + acerto);
}






//Esta función va a arrojar un número random que va a simbolizar el índice de cada palabra de la lista
//para ello va a variar entre el número minímo de indice que va a ser 0 y el máximo
//no se va a considerar los decimales.
function obtener_random(num_min, num_max){
    const amplitud_valores = num_max - num_min;
    const valor_al_azar = Math.floor(Math.random()*amplitud_valores);
    return valor_al_azar;
}

// esta función permite que los caracteres a los que se le dieron un id puedan ser llamados por el mismo.
// y luego se va a devolver a la variable donde se llamó ese id
function id(str){
    return document.getElementById(str);
}