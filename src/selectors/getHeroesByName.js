import { heroes } from "../data/heroes"

export const getHeroesByName = ( heroName = '' ) => {

    if( heroName === '' ) return [];
    
    heroName = heroName.toLocaleLowerCase();
    return heroes.filter( hero => hero.superhero.toLocaleLowerCase().includes( heroName ))

}