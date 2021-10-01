// Destructuracion
// Asignacion desestructurante
const persona = {
    nombre:'Tony',
    edad:45,
    clave:'Ironman',
    rango: 'Soldado'
};

// const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const Context = ({ clave, nombre, edad, rango = 'capitan'}) => {
    // const { nombre, edad, clave } = usuario;

    // console.log( nombre, edad, rango );
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.5845,
            lng: -12.5757
        }
    }
}

const { nombreClave, anios, latlng:{ lat, lng } } = Context( persona );

console.log(nombreClave, anios, lat, lng );