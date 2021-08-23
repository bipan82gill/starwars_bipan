import Axios from "axios";
import { FILM_LIST_FAIL, 
    FILM_LIST_REQUEST, 
    FILM_LIST_SUCCESS } from "../constants/FilmsListConstants";

export const listFilms = () => async(dispatch) =>{

    dispatch({type: FILM_LIST_REQUEST});
    try{
        const {data} = await Axios.get(`https://swapi.dev/api/films/1`);
        dispatch({ type: FILM_LIST_SUCCESS, payload: data.title })
        
    }catch(error){
        dispatch({ type: FILM_LIST_FAIL, payload: error.message })
    }
}