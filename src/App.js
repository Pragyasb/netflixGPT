import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
import { useState } from 'react';
import Signup from './component/Signup';
import MainLogin from './component/MainLogin';
import SignInContext from './context-api/SignInContext';


function App() {
  const[isSignIn,setIsSignIn] = useState(true)
  return (
    <div className="">
      <SignInContext.Provider value={{isSignIn,setIsSignIn}}>
      <MainLogin />
      </SignInContext.Provider>
    </div>
  );
}

export default App;
