import React from 'react'

import Nav from 'komponen/navbar'
import BeritaItem from 'komponen/listBerita'

function Berita() {
  return (
    <div className="halaman-statistik">
      <Nav />
      {[...Array(5)].map((data) => (
        <BeritaItem />
      ))}
    </div>
  )
}

export default Berita
