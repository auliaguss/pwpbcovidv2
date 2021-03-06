import React, { useState, useEffect } from 'react'
import renderHTML from 'react-render-html'

import { baseURL } from '../constants'

import 'styles/satuBerita.css'
import 'styles/headline.css'
import 'styles/materialize.min.css'

import Nav from 'komponen/navbar'

import Loading from 'komponen/loading'

export const SatuBerita = ({ match: { params } }) => {
  const [berita, setBerita] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchSemuaBerita = () => {
    fetch(baseURL.prod + 'api/post/' + params.slug)
      .then((res) => res.json())
      .then((res) => {
        if (res[0].image) {
          res[0].image = res[0].image.replace('0\\', '0/')
          res[0].image = res[0].image.replace('\\', '/')
          res[0].image = 'url(' + baseURL.prod + 'storage/' + res[0].image + ')'
          // ? Hapus jika server local, karena server heroku tidak support image upload
          res[0].image = ''
        } else {
          res[0].image = ''
        }
        setBerita(res[0])
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchSemuaBerita()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="halaman-statistik">
      <Nav />

      <br />
      <br />

      {!loading ? (
        <div className="berita-wrapper">
          <div
            className="headline"
            style={{
              backgroundImage: berita.image,
            }}
          >
            <div className="isi">
              {berita.title}
              <br />
            </div>
            <div style={{ padding: '2em' }}>
              <h3 style={{ color: 'black' }}>{berita.excerpt}</h3>
              <p style={{ color: '#4acfff' }}>
                {new Date(berita.created_at).toString()}
              </p>
            </div>
          </div>

          <div
            className="berita-body use-materialize"
            style={{
              backgroundColor: 'white',
              textAlign: 'justify',
              padding: '4em 5em',
            }}
          >
            {renderHTML(berita.body)}
          </div>
        </div>
      ) : (
        <Loading />
      )}

      <br />
      <br />
      <br />
    </div>
  )
}
