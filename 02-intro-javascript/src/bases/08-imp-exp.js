// import { heroes } from './data/heroes';
import heroes, { owners } from "../data/heroes";

// console.log(heroes);
console.log(owners);

export const getHeroeById = (id) =>  heroes.find( heroe => heroe.id === id );

console.log(getHeroeById(2));

export const getHeroeByOwner = ( owner ) =>  heroes.filter( ( heroe ) => heroe.owner === owner );

console.log( getHeroeByOwner('Marvel') );