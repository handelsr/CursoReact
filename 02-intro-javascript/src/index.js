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

const retornaPersona = ({ nombre, edad, rango = 'capitan'}) => {
    // const { nombre, edad, clave } = usuario;

    console.log( nombre, edad, rango );
}

retornaPersona(persona);