
import { createStore, compose, applyMiddleware, combineReducers,} from 'redux';
import thunk from 'redux-thunk';

import { characterDetailsReducer, characterListReducer } from './reducers/CharacterReducer';
import { filmListReducer } from './reducers/FilmReducer';
const initialState = {}
const reducer = combineReducers({
    characterList: characterListReducer,
    characterDetails: characterDetailsReducer,
    filmList:filmListReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk)));

export default store;