import React, { useEffect} from 'react';
import './App.css';
import HomeScreen from './Components/HomeScreen';
import {auth} from "./firebase"
import { onAuthStateChanged } from '@firebase/auth';
import Home from './Components/Home';
import { useDispatch, useSelector } from 'react-redux';
import { logout,login, selectUser } from './features/userSlice';


function App() {


  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
       if (user) {
        dispatch(login({
          uid: user.uid,
          name: user.displayName,
          email:user.email,
          photo:user.photoURL
        }))
      } else {
        dispatch(logout())
      }})
  },[user])

  return (
      <div>
        {
          user ? 
          <Home /> : <HomeScreen  />
        }
      </div>

  );
}

export default App;

