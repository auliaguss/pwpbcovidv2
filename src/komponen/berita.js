import React from 'react'

import 'styles/berita.css'

function berita(props) {
  return (
    <div className="kotakArt">
      <div className="meta">
        <div
          className="photo"
          style={{ backgroundImage: `url(${props.gambar})` }}
        ></div>
      </div>
      <div className="description">
        <h1>{props.judul}</h1>
        <h2>{props.tgl}</h2>
        <p> {props.desc}.</p>
        <p className="read-more">
          <a href="#">Selengkapnya</a>
        </p>
      </div>
    </div>
  )
}
export default berita
