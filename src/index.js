import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorker from 'serviceWorker'

import 'styles/index.css'

import Home from 'halaman/Home'
import Statistik from 'halaman/Statistik'

import Berita from 'halaman/Berita'
import { SatuBerita } from './halaman/SatuBerita'

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/statistik" component={Statistik} />
      <Route exact path="/berita" component={Berita} />
      <Route path="/berita/:slug" component={SatuBerita} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

serviceWorker.register()
