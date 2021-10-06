import { getHeroeById } from './bases/08-imp-exp'

// const promesa = new Promise(( resolve, reject ) => {
//     setTimeout(() => {
//         const heroe = getHeroeById(2);
//         resolve( heroe );
//     }, 2000);
// });

// promesa.then(( heroe ) => {
//     console.log( heroe );
// }).catch(err => console.warn( err ))

const getHeroeByIdAscync = (id) => {
    return new Promise(( resolve, reject ) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);

            if( heroe )
                resolve( heroe );
            else
                reject( 'No se pudo encontrar el héroe' );
        }, 2000);
    });
}

getHeroeByIdAscync(3)
    .then( console.log )
    .catch( console.warn );