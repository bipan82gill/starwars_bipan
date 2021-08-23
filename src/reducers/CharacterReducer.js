import { 
    CHARACTER_DETAILS_FAIL,
    CHARACTER_DETAILS_REQUEST,
    CHARACTER_DETAILS_SUCCESS,
    CHARACTER_LIST_FAIL, 
    CHARACTER_LIST_REQUEST, 
    CHARACTER_LIST_SUCCESS } from "../constants/CharacterListConstants"

export const characterListReducer = (state= {data:[]}, action)=>{
 switch(action.type){
    case CHARACTER_LIST_REQUEST:
        return { ...state,loading:true }
    case CHARACTER_LIST_SUCCESS:
        return { ...state,loading:false, data: action.payload.results }
    case CHARACTER_LIST_FAIL:
        return { loading: false, error: action.payload }
    default: 
        return state;
 }   
}
 export const characterDetailsReducer = (state = {data:{}}, action)=>{
     switch(action.type){
         case CHARACTER_DETAILS_REQUEST:
             return {...state, loading:true}
        case CHARACTER_DETAILS_SUCCESS:
            return { ...state, loading: false, data: action.payload}
        case CHARACTER_DETAILS_FAIL:
            return {loading:false, error: action.payload}
        default:
            return state;
     }
 } 