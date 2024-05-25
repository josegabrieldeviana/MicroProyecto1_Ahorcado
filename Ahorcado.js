//Creación de la constante palabras que va a ser una lista de palabras para adivinar
const palabras = [
    "hipopótamo",
    "paralelepípedo",
    "onomatopeya",
    "sesquipedal",
    "esternocleidomastoideo",
    "electroencefalografista",
    "quiropráctico",
    "desoxirribonucleico",
    "anticonstitucionalmente",
    "ultramicroscópicamente"
];
//se definió el boton jugar con el id que se le dio anteriormente al mismo
//Luego se utilizó el método addEventListener que va a permitir que el navegador considere
//la interacción click en el botón y se inicie el juego
const button = id("jugar");
button.addEventListener('Click', iniciar);

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
    button.disabled = true;
    
    const mostrador = id ("palabra_a_adivinar");
    mostrador.innerHTML = ''

    const valor_mas_bajo = 0;
    const cant_palabras = palabras.length;
    const valor_al_azar = obtener_random(0, cant_palabras);
    
    const palabra_de_lista = palabras[valor_al_azar];
    const cant_rayitas = palabra_de_lista.length;
    
    for (let i = 0; i < cant_rayitas; i ++ ){
        const span = document.createElement("span");
        mostrador.appendChild (span);

    }
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