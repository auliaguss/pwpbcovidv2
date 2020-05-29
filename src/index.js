import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Nav from './komponen/navbar'
import Login from './komponen/login'
import Loading from './komponen/loading'
import Daftar from './komponen/daftar'
import Berita from './komponen/listBerita'
import DetBerita from './komponen/detailBerita'
const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/daftar" component={Daftar} />
    </div>
  </Router>
)
ReactDOM.render(
    routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
