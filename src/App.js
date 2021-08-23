import React from 'react';
import {Switch, Route,NavLink, Redirect} from 'react-router-dom';
import CharacterList from './CharacterList';
import './App.css';
import Character from './components/Character';

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to={"/people/test"}>Search</NavLink>
      </nav>
    <Switch>
    <Route path={"/people/:id"} exact component={Character}/>
      <Route path={"/"} exact component={CharacterList}/>
      <Route path={"/films/:id"} component ={Character}/>
      <Redirect to={"/"}/>
    </Switch>
    </div>
  );
}

export default App;
