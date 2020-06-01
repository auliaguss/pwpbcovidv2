import React, { useState, useEffect } from 'react'

import { baseURL } from '../constants'

import Loading from 'komponen/loading'
import { Link } from 'react-router-dom'

export const Headline = () => {
  const [beritaTerbaru, setBeritaTerbaru] = useState({})
  const [loading, setLoading] = useState(true)

  const fetchBeritaTerbaru = () => {
    fetch(baseURL.dev + 'api/post/terbaru')
      .then((res) => res.json())
      .then((res) => {
        res.image = res.image.replace('0\\', '0/')
        res.image = res.image.replace('\\', '/')
        setBeritaTerbaru(res)
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchBeritaTerbaru()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      {!loading ? (
        <div
          className="headline"
          style={{
            backgroundImage:
              'url(' + baseURL.dev + 'storage/' + beritaTerbaru.image + ')',
          }}
        >
          <div className="isi">
            {beritaTerbaru.title}
            <br />

            <button type="button">
              <Link to={'/berita/' + beritaTerbaru.slug}>Selengkapnya</Link>
            </button>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  )
}
