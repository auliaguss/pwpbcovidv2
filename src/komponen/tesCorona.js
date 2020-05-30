import React from 'react'

import 'styles/tesCorona.css'

import halo from 'aset/img/halodoc.webp'
import alodoc from 'aset/img/alodok.webp'
import prixa from 'aset/img/prixa.png'
import sehatq from 'aset/img/sehatq.webp'

function tes() {
  return (
    <div className="tesCorona">
      <div className="tesOffline">WOIII</div>
      <div className="tesOnline">
        <div className="kotakTes halodoc" style={{ background: '#e0004d' }}>
          <img src={halo} />
          <div>
            Cek resiko terinfeksi corona-mu lewat website HALODOC!
            <a
              target="_blank"
              href="https://www.halodoc.com/tanya-jawab-seputar-virus-corona/"
            >
              DISINI
            </a>
          </div>
        </div>
        <div className="kotakTes alodoc" style={{ background: '#3b72cf' }}>
          <img src={alodoc} />
          <div>
            <a
              target="_blank"
              href="https://www.alodokter.com/coba-cek-risiko-infeksi-virus-corona-atau-covid-19"
            >
              DISINI
            </a>
          </div>
        </div>
        <div className="kotakTes prixa" style={{ background: '#d7f5ff' }}>
          <img src={prixa} />
          <div>
            <a
              target="_blank"
              href="https://covid19.prixa.ai/partner/80b47a20-1353-49e9-af91-a0a5995ca89f/app/52b7d983-3e5d-49cc-9c99-508dc779aad3"
            >
              Prixa
            </a>
          </div>
        </div>
        <div className="kotakTes" style={{ background: '#fff' }}>
          <img src={sehatq} />
          <a
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.she.sehatq&hl=en"
          >
            Sehatq
          </a>
        </div>
      </div>
    </div>
  )
}

export default tes
