import React, { useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import Login from './Components/Login/Login';
import HomePage from './Components/HomePage/HomePage';
import MainHeader from './Components/MainHeader/MainHeader';

function App() {

  let[isLoggedIn, setIsLoggedIn]= useState(false);  
  
  useEffect(()=>{
    let isLoggedInValue = localStorage.getItem('isLoggedIn'); 
      if(isLoggedInValue==='1'){
        setIsLoggedIn(true);
      }
  }, [])
  

  const loginHandler= () =>{
    localStorage.setItem('isLoggedIn', '1' );
    setIsLoggedIn(true);
    };

  const logoutHandler= ()  =>{
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (<>
      <MainHeader  clickLogout={logoutHandler}/>
        <main>
          {!isLoggedIn && <Login clickLogin={loginHandler}/>}
          {isLoggedIn && <HomePage clickLogout={logoutHandler} />}
        </main>
    </>
  );
  
}

export default App;
