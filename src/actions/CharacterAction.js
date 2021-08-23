import Axios from 'axios';
import {CHARACTER_LIST_REQUEST,
    CHARACTER_LIST_SUCCESS, 
    CHARACTER_LIST_FAIL,
    CHARACTER_DETAILS_REQUEST,
    CHARACTER_DETAILS_SUCCESS,
    CHARACTER_DETAILS_FAIL} from '../constants/CharacterListConstants';

export const listCharacters = () => async(dispatch) =>{

    dispatch({type: CHARACTER_LIST_REQUEST });
    try{
        const {data} = await Axios.get(`https://swapi.dev/api/people/`);
        dispatch({ type: CHARACTER_LIST_SUCCESS, payload: data })
        console.log(data);
    }catch(error){
        dispatch({ type: CHARACTER_LIST_FAIL, payload: error.message })
    }
}
export const detailsCharacter = (id) =>async(dispatch)=> {
    dispatch({type: CHARACTER_DETAILS_REQUEST, payload: id});
    try{
        const {data} = await Axios.get(`https://swapi.dev/api/people/${id}`);
        dispatch({type: CHARACTER_DETAILS_SUCCESS, payload:data.films});

    }catch(error){
        dispatch({ type: CHARACTER_DETAILS_FAIL, payload: error.message})
    }

}