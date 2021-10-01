

const personajes = ['Goku','Vegeta','Trunks'];

// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);

const [ , , p3] = personajes;

console.log(p3)


const retornaArreglo = () => {
    return ['ABC',123];
}

const [letras,numeros] = retornaArreglo();

console.log(letras,numeros);

// Tarea
// 1. El primer valor del arreglo se llamara nombre
// 1. El primer valor del arreglo se llamara setNombre
const State = (valor) => {
    return [ valor, ()=> { console.log('Hola Mundo') } ];
}

const arr = State('Goku');

console.log(arr);

// Resolucion
const [nombre,setNombre] = State('Goku');
console.log(nombre);
setNombre();

