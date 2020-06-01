import React, { useState, useEffect } from 'react'

import Nav from 'komponen/navbar'
import BeritaItem from 'komponen/berita'
import TesCoro from 'komponen/tesCorona'
import Loading from 'komponen/loading'
import Counter from 'komponen/counter'
import Headline from 'komponen/headline'

import { baseURL } from '../constants'
import DetailBerita from '../komponen/detailBerita'

const Home = () => {
  const [beritaTerbaru, setBeritaTerbaru] = useState({})
  const [loading, setLoading] = useState(true)

  const fetchBeritaTerbaru = () => {
    fetch(baseURL.dev + 'api/post/terbaru')
      .then((res) => res.json())
      .then((res) => {
        setBeritaTerbaru(res)
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchBeritaTerbaru()
  }, [])

  return (
    <div className="App">
      <section>
        <Nav />
        {!loading ? (
          <BeritaItem
            gambar={baseURL.dev + 'storage/' + beritaTerbaru.image}
            tgl={new Date(beritaTerbaru.created_at).toString()}
            judul={beritaTerbaru.title}
            desc={beritaTerbaru.excerpt}
          />
        ) : (
          <Loading />
        )}
      </section>
      <Headline />
      <Counter />
      <DetailBerita />
      <section className="iframe-container">
        <iframe
          title="Test"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/nJH4okpyr3k"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </section>
      <TesCoro />
    </div>
  )
}

export default Home
