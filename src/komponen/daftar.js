import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import 'styles/sign.css'
import wave from 'aset/img/wavee.png'
import dokter from 'aset/img/dokter.png'
import avatar from 'aset/img/avatar.png'

function daftar() {
  return (
    <div>
      <img className="wave" src={wave} />
      <div className="container">
        <div className="img">
          <img src={dokter} />
        </div>
        <div className="login-content">
          <form action="">
            <img src={avatar} />
            <h2 className="title">Daftar</h2>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                <input type="text" className="input" placeholder="Username" />
              </div>
            </div>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-email"></i>
              </div>
              <div className="div">
                <input type="text" className="input" placeholder="Email" />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div className="div">
                <input type="password" className="input" placeholder="Sandi" />
              </div>
            </div>
            <a>
              <Link to="/daftar">Sudah Punya Akun?</Link>
            </a>
            <input type="submit" className="btn" value="Login" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default daftar