import React from 'react'

import Nav from 'komponen/navbar'
import Loading from 'komponen/loading'
import Berita from 'komponen/listBerita'
import DetBerita from 'komponen/detailBerita'
import TesCoro from 'komponen/tesCorona'
import Counter from 'komponen/counter'
import Headline from 'komponen/headline'

import 'styles/App.css'

const Home = () => {
  return (
    <div className="App">
      <section>
      <Nav />
      </section>
      <Headline />
      <Counter />
      <DetBerita />
      <section className="iframe-container">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/nJH4okpyr3k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </section>
      <TesCoro />
    </div>
  )
}

export default Home
