// src/store/index.js
import { createStore } from 'redux';
import storeReducer from '../reducers';

const initialState = {
  currentSong: null,  // o inizializza con {} a seconda delle tue esigenze
};

export const store = createStore(storeReducer, initialState);
