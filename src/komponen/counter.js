import React, { useState, useEffect } from 'react'

import { baseURL } from '../constants'

import 'styles/tesCorona.css'

import Loading from 'komponen/loading'

export const Counter = () => {
  const [counterDunia, setCounterDunia] = useState({})
  const [counterIndonesia, setCounterIndonesia] = useState({})
  const [loading, setLoading] = useState(true)

  const fetchCounterDunia = () => {
    fetch('https://covid19.mathdro.id/api')
      .then((res) => res.json())
      .then((res) => {
        setCounterDunia(res)
      })
  }

  const fetchCounterIndonesia = () => {
    fetch('https://covid19.mathdro.id/api/countries/ID')
      .then((res) => res.json())
      .then((res) => {
        setCounterIndonesia(res)
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchCounterDunia()
    fetchCounterIndonesia()
  }, [])

  return (
    <div>
      {!loading &&
      counterDunia.confirmed.value &&
      counterIndonesia.confirmed.value ? (
        <div className="counter">
          <div className="counterItem" style={{ background: '#21bf73' }}>
            <h3>Terkonfirmasi</h3>
            <div className="counterItemData">
              <div>
                <h4>Indonesia</h4>
                <h4>Dunia</h4>
              </div>
              <div>
                <h4>{counterIndonesia.confirmed.value}</h4>
                <h4>{counterDunia.confirmed.value}</h4>
              </div>
            </div>
          </div>
          <div className="counterItem" style={{ background: '#4acfff' }}>
            <h3>Sembuh</h3>
            <div className="counterItemData">
              <div>
                <h4>Indonesia</h4>
                <h4>Dunia</h4>
              </div>
              <div>
                <h4>{counterIndonesia.recovered.value}</h4>
                <h4>{counterDunia.recovered.value}</h4>
              </div>
            </div>
          </div>
          <div className="counterItem" style={{ background: '#ff3366' }}>
            <h3>Meninggal</h3>
            <div className="counterItemData">
              <div>
                <h4>Indonesia</h4>
                <h4>Dunia</h4>
              </div>
              <div>
                <h4>{counterIndonesia.deaths.value}</h4>
                <h4>{counterDunia.deaths.value}</h4>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  )
}
