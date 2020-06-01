import React from 'react'

import 'styles/tesCorona.css'

import halo from 'aset/img/halodoc.webp'
import alodoc from 'aset/img/alodok.webp'
import prixa from 'aset/img/prixa.png'
import sehatq from 'aset/img/sehatq.webp'
import rs from 'aset/img/hospital.svg'

function tes() {
  return (
    <div className="tesCorona">
      <div className="tesOffline">
        <img src={rs}/>
        <div>
        Unduh Daftar 132 RS Rujukan Corona
        <a href="https://covid19.kemkes.go.id/download/132_RS_Rujukan_PIE_Edit_Final_SK_MK_2.pdf">DISINI</a>
        </div>
      </div>
      <div className="tesOnline">
        <div className="kotakTes" style={{ background: '#e0004d' }}>
          <img src={halo} />
          <div>
          Web Chat  
            <a
              target="_blank"
              href="https://www.halodoc.com/tanya-jawab-seputar-virus-corona/"
            >
              Halodoc 
            </a>
          </div>
        </div>
        <div className="kotakTes" style={{ background: '#3b72cf' }}>
          <img src={alodoc} />
          <div>
            Web Chat
            <a
              target="_blank"
              href="https://www.alodokter.com/coba-cek-risiko-infeksi-virus-corona-atau-covid-19"
            >
            Alodok
            </a>
          </div>
        </div>
        <div className="kotakTes" style={{ background: '#d7f5ff', color: "#4acfff" }}>
          <img src={prixa} />
          <div>
            Tes Online
            <a
              target="_blank"
              href="https://covid19.prixa.ai/partner/80b47a20-1353-49e9-af91-a0a5995ca89f/app/52b7d983-3e5d-49cc-9c99-508dc779aad3"
            >
              Prixa
            </a>
          </div>
        </div>
        <div className="kotakTes" style={{ background: '#fff', color: "#4acfff"}}>
          <img src={sehatq} />
          <div>
          Konsultasi Melalui Aplikasi
          <a
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.she.sehatq&hl=en"
          >
            Sehatq
          </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default tes
