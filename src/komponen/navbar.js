import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import 'styles/navbar.css'

function navbar() {
  return (
    <nav className="stroke">
      <input type="checkbox" id="check" />
      <label for="check" className="checkbtn">
        <i class="fas fa-bars">Touch Me</i>
      </label>
      <label className="logo">CodingNepal</label>
      <ul>
        <li>
          <a href="#">
            <Link to="/">Home</Link>
          </a>
        </li>
        <li>
          <Link to="/berita">Berita</Link>
        </li>
        <li>
          <Link to="/statistik">Statistik</Link>
        </li>
        <li>
          <a href="#">
            <Link to="/login">Login</Link>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default navbar
