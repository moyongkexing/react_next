import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBzVyx_37_1xJj1UCiQH4xMOZGEYdPFzhM",
  authDomain: "sue-react.firebaseapp.com",
  databaseURL: "https://sue-react-default-rtdb.firebaseio.com",
  projectId: "sue-react",
  storageBucket: "sue-react.appspot.com",
  messagingSenderId: "240951514920",
  appId: "1:240951514920:web:5ec1312a42bb4a76c3a21d",
  measurementId: "G-33XWHTJXSL"
};

var fireapp;
try {
  firebase.initializeApp(config);
} catch (error) {
  console.log(error.message);
}
export default fireapp;

const initial = {
}

function fireReducer(state = initial, action) {
  switch (action.type) {
    case 'TRANSACTION':
      return state;
    default:
      return state;
  }
}

export function initStore(state = initial) {
  return createStore(fireReducer, state, applyMiddleware(thunkMiddleware));
}


