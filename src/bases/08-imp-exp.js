//import { heroes } from './data/heroes';
//import { heroes } from './data/heroes'
//import heroes, { owners } from '../data/heroes';

import heroes from '../data/heroes';

//console.log(owners);

/*
const getHeroeById = (id) => {
  return heroes.find( ( heroe ) => {
    if (heroe.id === id) {
      return true;
    } else {
      return false;
    }
  });
}
*/

// function find
export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );

//console.log('getHeroeById ', getHeroeById(2) );

// function filter
export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );

//console.log('getHeroesByOwner ', getHeroesByOwner('DC') );