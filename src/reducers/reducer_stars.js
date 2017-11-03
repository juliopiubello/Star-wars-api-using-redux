import {DADO_STAR} from '../actions/index';

console.log(DADO_STAR);

export default function(state = [], action){
  console.log('Action received', action);
  switch (action.type) {
    case DADO_STAR:
      return [action.payload.data, ...state]; 
    }
  return state;
}
