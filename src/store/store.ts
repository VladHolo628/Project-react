import { createStore } from 'redux';
import data from './data';



const initialState = {
    movies: data,
    moviesPerPage: 10,
    currentPage: 1
}

const moviesReducer = (state = initialState, action:{type:string; payload?:{}}) => {
    // const newState = {...state}
    switch(action.type){
        case 'setMoviesList':
            return {
                ...state,
                movies: action.payload
            }
            break
        case "incrementPage":
            return {
                ...state,
                currentPage:state.currentPage + 1
            }
            break
            case "decrementPage":
                return {
                    ...state,
                    currentPage:state.currentPage - 1
                }
                break
            default: return state
        
    }
}
 const store = createStore(moviesReducer);
 export default store