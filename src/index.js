import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorker from 'serviceWorker'

import 'styles/index.css'

import Home from 'halaman/Home'
import Statistik from 'halaman/Statistik'

import Login from 'komponen/login'
import Daftar from 'komponen/daftar'
import Berita from 'halaman/Berita'

// import Nav from './komponen/navbar'
// import Loading from './komponen/loading'
// import Berita from './komponen/listBerita'
// import DetBerita from './komponen/detailBerita'

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/statistik" component={Statistik} />
      <Route path="/berita" component={Berita} />
      <Route path="/login" component={Login} />
      <Route path="/daftar" component={Daftar} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
