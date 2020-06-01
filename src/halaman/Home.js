import React, { useState, useEffect } from 'react'

import Nav from 'komponen/navbar'
import BeritaItem from 'komponen/berita'
import TesCoro from 'komponen/tesCorona'
import Loading from 'komponen/loading'

import { baseURL } from '../constants'

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
      <TesCoro />
    </div>
  )
}

export default Home
