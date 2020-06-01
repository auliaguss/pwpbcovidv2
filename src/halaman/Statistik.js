import React, { useState, useEffect } from 'react'

import 'styles/leaflet.css'

import Nav from 'komponen/navbar'
import { KasusPerProvinsi } from '../komponen/kasusPerProvinsi'
import { RSRujukan } from '../komponen/rsRujukan'
import { KecamatanRawan } from '../komponen/kecamatanRawan'
import { PieStatistik } from '../komponen/pieStatistik'

const Statistik = () => {
  return (
    <div className="halaman-statistik">
      <Nav />
      <PieStatistik />
      <br />
      <br />
      <br />

      <KasusPerProvinsi />

      <br />
      <br />
      <br />

      <RSRujukan />

      <br />
      <br />
      <br />

      <KecamatanRawan />

      <br />
      <br />
      <br />
    </div>
  )
}

export default Statistik
