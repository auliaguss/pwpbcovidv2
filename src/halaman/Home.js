import React, { useState, useEffect } from 'react'

import 'styles/headline.css'

import Nav from 'komponen/navbar'

import { Headline } from 'komponen/headline'
import { Counter } from 'komponen/counter'
import TesCoro from 'komponen/tesCorona'

const Home = () => {
  return (
    <div className="App">
      <Nav />
      <br />
      <br />
      <Headline />

      <br />
      <Counter />

      <br />
      <TesCoro />
      <br />
      <br />
      <br />
    </div>
  )
}

export default Home
