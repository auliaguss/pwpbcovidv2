import React from 'react';
import Nav from './komponen/navbar'
import Login from './komponen/login'
import Loading from './komponen/loading'
import Daftar from './komponen/daftar'
import Berita from './komponen/listBerita'
import DetBerita from './komponen/detailBerita'
import Statistik from './komponen/dataStat'
import TesCoro from './komponen/tesCorona'
import InputBerita from './komponen/inputBerita'
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Statistik />
      <InputBerita />
      <Berita />
      <TesCoro />
      <DetBerita />
      <Loading />
    </div>
  );
}

export default App;
