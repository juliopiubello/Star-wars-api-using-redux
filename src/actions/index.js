import axios from 'axios';

const ROOT_URL = "https://swapi.co/api/people/?search="

export const DADO_STAR = 'DADO_STAR'

export function coisaEscolhida(coisa){
    console.log(coisa);
    const url = `${ROOT_URL}${coisa}`;
    const request = axios.get(url);
    
    console.log(request);
    return {
        type: DADO_STAR,
        payload: request
    };
}

