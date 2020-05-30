import React from 'react'

import Nav from 'komponen/navbar'
import Loading from 'komponen/loading'
import Berita from 'komponen/listBerita'
import DetBerita from 'komponen/detailBerita'
import TesCoro from 'komponen/tesCorona'

import 'styles/App.css'

const Home = () => {
  return (
    <div className="App">
      <Nav />
      <Berita />
      <TesCoro />
    </div>
  )
}

export default Home
