// const saludar = function (nombre){
//     return `Hola, ${nombre}`;
// }

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola, Mundo`;

// console.log( saludar('Goku') );

console.log(saludar2('Vegueta'))
console.log(saludar3('Goku'))
console.log(saludar4())


const getUser = () => ({
        uid: 'ABC123',
        username: 'El_Papi1502'
})


const user = getUser();
console.log(user);

// Tarea
// 1. Transforme en una funcion de Flecha
// 2. Tiene que retornar un objeto implicito
// 3. Pruebas

// function getUsuarioActivo(nombre){
//     return {
//         uid: 'ABC567',
//         username: nombre
//     }
// };

// const usuarioActivo = getUsuarioActivo('Handel');
// console.log(usuarioActivo);

// Resuelto

const getUsuarioActivo = (nombre) => ({
        uid: 'ABC567',
        username: nombre
    });

const usuarioActivo = getUsuarioActivo('Handel');
console.log(usuarioActivo);