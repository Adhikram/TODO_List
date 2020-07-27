import {
  GET_ITEMS,
  DELETE_ITEM,
  ADD_ITEM  
} from '../actions/types';
// import { IAction, IItem } from '../../types/interfaces';
import {v1 as uuid} from 'uuid';


const initialState={
  items:[
    {id:uuid(),name:'Milk1'},
    {id:uuid(),name:'Milk2'},
    {id:uuid(),name:'Milk3'},
    {id:uuid(),name:'Milk4'},
    {id:uuid(),name:'Milk5'}
  ]
};

// const initialState = {
//   items: [],
//   loading: false
// };

// interface IState {
//   items: IItem[];
// }

export default function(state=initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state
        // items: action.payload,
        // loading: false
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items]
      };
    default:
      return state;
  }
}
