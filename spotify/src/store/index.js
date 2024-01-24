// src/store/index.js
import { createStore } from 'redux';
import storeReducer from '../reducers';

const initialState = [





  
];

console.log(initialState);

// STO CREANDO LO STATO DENTRO LO STORE
// storeReducer = funziona pura che andrà a modificare lo store
// lo esporto per poterlo usare nell'app tramite il provider
export const store = createStore(storeReducer, initialState);
