import React, { useState, useEffect } from 'react'

import 'styles/leaflet.css'

import Nav from 'komponen/navbar'
import { KasusPerProvinsi } from '../komponen/kasusPerProvinsi'
import { RSRujukan } from '../komponen/rsRujukan'
import { KecamatanRawan } from '../komponen/kecamatanRawan'
import { PieStatistik } from '../komponen/pieStatistik'
import { ClickToShow } from '../komponen/clickToShow'

const Statistik = () => {
  return (
    <div className="halaman-statistik">
      <Nav />

      <br />
      <br />
      <center>
        <ClickToShow title="Statistik Covid Hari Ini">
          <PieStatistik />
        </ClickToShow>
        <br/>

        <ClickToShow title="Data Kasus Corona Per-Provinsi">
          <KasusPerProvinsi />
        </ClickToShow>
        <br/>

        <ClickToShow title="Data RS Rujukan Di Jawa Barat">
          <RSRujukan />
        </ClickToShow>
        <br/>

        <ClickToShow title="Data Kecamatan Rawan">
          <KecamatanRawan />
        </ClickToShow>
        <br/>

      </center>
    </div>
  )
}

export default Statistik
