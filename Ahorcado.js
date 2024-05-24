
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

const button = document.getElementById("jugar");
button.addEventListener('Click', iniciar);


console.log(button);

function obtener_random(num_min, num_max){
    const amplitud_valores = num_max - num_min;
    const valor_al_azar = Math.floor(Math.random()*amplitud_valores) + num_min;
    return valor_al_azar;
}

function iniciar(event){
    const valor_mas_bajo = 0
    const cant_palabras = palabras.length;
    const valor_al_azar = obtener_random(0, cant_palabras)
    
    const palabra_de_lista = palabras[valor_al_azar];
    console.log("Hiciste Click");
}