import React from 'react';
// import { Routes, Route, Form } from 'react-router-dom';
import Styles from './style.module.css';
import { useNavigate } from 'react-router-dom';
// import Blog from "./pages/blog";
export default function Login(){
  const navigate = useNavigate()

  return(
    
    <div className={Styles.wrapper}>
      <div className={Styles.container}>
        <h1 className={Styles.title}>Welcome!</h1>

        <form action="" className={Styles.form}>
          <div className={Styles.inputgp}>
            <label >Username</label>
            <input type="text" name="" id="username" />
          </div>
          <div className={Styles.inputgp}>
            <label>Password</label>
            <input type="password" name="" id="password" />
          </div>
          {/* <button className={Styles.btn} onChange={() => navigate('/<Blog />')}>LogIn</button> */}
        </form>
      </div>
     
    </div>
  )
}



