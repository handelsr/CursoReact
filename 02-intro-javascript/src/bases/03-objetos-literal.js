



const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 3213323,
        lat: 14.1213,
        lng: 34.1933154
    }
};

// console.log( {
//     persona
// });


const persona2 = { ...persona };

persona2.nombre = 'Peter';

console.table(persona);
console.log(persona2);