import React,{  useEffect } from 'react';
import { listCharacters } from './actions/CharacterAction'; 
import {useSelector, useDispatch,} from 'react-redux';
import _ from  'lodash';
import {Link} from 'react-router-dom';


function CharacterList() {
const dispatch = useDispatch();
const characterList = useSelector(state => state.characterList);
const {loading, error, data } = characterList;



useEffect(()=>{
  dispatch(listCharacters());

},[dispatch])

const ShowData =()=>{
  if(!_.isEmpty(data)){
    return data.map((el,i) =>{
      return <div  key={el.id}>
        <Link to={`/people/${i+1}`}><p>{el.name}</p></Link>
        
      </div>
    })
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
    <div className="App">
     {ShowData()}
     
    </div>
  );
}

export default CharacterList;