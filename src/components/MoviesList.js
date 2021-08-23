import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listFilms } from '../actions/FilmAction';
import _ from 'lodash';
export default function MoviesList(props) {
    // const filmId = props.match.params.id
    const dispatch = useDispatch();
    const filmList = useSelector(state => state.filmList);
    const { loading, error, data} = filmList;
    
    const characterDetails = useSelector(state=> state.characterDetails);
    const {data:characterData} = characterDetails;
    
    // const filmData = JSON.parse(characterData);
    // console.log(filmData);
    // const filmsUrl=[];
    // const length= characterData.length;
    // for(let i=0; i<length; i++){
    //     filmsUrl.push(filmData[i])
    // }
    // console.log(filmsUrl);

    
    useEffect(()=>{
        dispatch(listFilms());
    },[dispatch])

    const ShowData =()=>{
        if(!_.isEmpty(data)){
            return <p>{data}</p>;
        }
        if(loading){
          return <p>Loading....</p>
        }
        if(error){
          return <p>{error}</p>
        }
        return <p>Unable to get data</p>
      }


    return (
        <div>
            {ShowData()}
            
        </div>
    )
}
