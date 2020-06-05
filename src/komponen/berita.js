import React from 'react'

import 'styles/berita.css'
import { Link } from 'react-router-dom'

function berita(props) {
  return (
    <div className="kotakArt">
      <div className="meta">
        <div className="photo" style={{ backgroundImage: props.gambar }}></div>
      </div>
      <div className="description">
        <h1>{props.judul}</h1>
        <h2>{props.tgl}</h2>
        <p> {props.desc}.</p>
        <p className="read-more">
          <a href="#">
            <Link to={'/berita/' + props.slug}>Selengkapnya</Link>
          </a>
        </p>
      </div>
    </div>
  )
}
export default berita
