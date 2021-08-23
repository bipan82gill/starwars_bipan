import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { detailsCharacter } from '../actions/CharacterAction'; 
import MoviesList from './MoviesList';
import _ from 'lodash';

export default function Character(props) {
    const people = props.match.params.id;
    const dispatch = useDispatch();
    const characterDetails = useSelector(state=> state.characterDetails);
    const {loading, error, data} = characterDetails;

    useEffect(()=>{
            dispatch(detailsCharacter(people))     
    },[people, dispatch]);

    const ShowData = () => {
        if(!_.isEmpty(data)){
            console.log(data);
            const length = data.length;
            console.log(length);
            const films = [];
           for(let i=0; i<length; i++){
            films.push(data[i].title);
           }
           return films.map((f,i)=>(
            <MoviesList key={i} data={f}/>
           ))
           
        }
        if(loading){
            return<p>Loading.....</p>
        }
        if(error){
            return<p>{error}</p>
        }
        return <p>unable to get people</p>
    }
    return (
        <>
        <div>
            {ShowData()}
        </div>
       
        </>
    )
}
