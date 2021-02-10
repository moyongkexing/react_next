import react, { Component } from 'react';
import './App.css';
import SampleData from './fire/SampleData';
import firebase from "firebase";

// Firebaseの設定
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

// Firebaseの初期化
firebase.initializeApp(config);


// Appコンポーネント
class App extends Component {


  render() {
    return (
      <div>
        <h1>Fire</h1>
        <h2>Sample data.</h2>
        <SampleData />
      </div>
    );
  }
}


export default App;
