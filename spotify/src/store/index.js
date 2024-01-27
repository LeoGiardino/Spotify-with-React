// src/store/index.js
import { combineReducers, createStore } from 'redux';
import storeReducer from '../reducers';
import likesReducer from '../reducers/likeReducer';

const state = {
  song: [], // Inizializza song come un array vuoto
  likes: []
}

const bigReducer = combineReducers({
  song: storeReducer,
  likes: likesReducer
});

console.log(state);

export const store = createStore(bigReducer, state);

// STO CREANDO LO STATO DENTRO LO STORE
// storeReducer = funziona pura che andrà a modificare lo store
// lo esporto per poterlo usare nell'app tramite il provider
