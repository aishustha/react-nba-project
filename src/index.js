import React from 'react';
import ReactDOM from 'react-dom'; 
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { firebase, firebaseDB } from './firebase';

const App = (props) => {
    return (
      <BrowserRouter>
        <Routes {...props}/> 
      </BrowserRouter>
    )
}

//passing user to all routes
//returning user
//user not logged in return null
firebase.auth().onAuthStateChanged((user) => {
    ReactDOM.render( 
      <App user={user}/>,
    document.getElementById('root')
  );
})


 
