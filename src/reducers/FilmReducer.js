import { FILM_LIST_FAIL, FILM_LIST_REQUEST, FILM_LIST_SUCCESS } from "../constants/FilmsListConstants";

export const filmListReducer = (state= {data:[]}, action)=>{
    switch(action.type){
       case FILM_LIST_REQUEST:
           return { ...state,loading:true }
       case FILM_LIST_SUCCESS:
           return { ...state,loading:false, data: action.payload }
       case FILM_LIST_FAIL:
           return { loading: false, error: action.payload }
       default: 
           return state;
    }   
   }