import React from 'react';
import './styles/sign.css';
import wave from './img/wavee.png'
import dokter from './img/dokter.png'
import avatar from './img/avatar.png'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
function login(){
    return(
        <div>
	<img className="wave" src={wave}/>
	<div className="container">
		<div className="img">
			<img src={dokter}/>
		</div>
		<div className="login-content">
			<form action="">
                <img src={avatar}/>
				<h2 className="title">Masuk</h2>
           		<div className="input-div one">
           		   <div className="i">
           		   		<i className="fas fa-user"></i>
           		   </div>
           		   <div className="div">
           		   		<input type="text" className="input" placeholder="Username"/>
           		   </div>
           		</div>
           		<div className="input-div pass">
           		   <div className="i"> 
           		    	<i className="fas fa-lock"></i>
           		   </div>
           		   <div className="div">
           		    	<input type="password" className="input" placeholder="Sandi"/>
            	   </div>
            	</div>
            	<a href="#"><Link to="/daftar">Belum Punya Akun?</Link></a>
            	<input type="submit" className="btn" value="Login"/>
            </form>
        </div>
    </div>
        </div>
    )
}

export default login;