import React, { useState, useEffect } from 'react'
import { Map, Marker, Popup, TileLayer, GeoJSON } from 'react-leaflet'

import { baseURL } from '../constants'

import Loading from 'komponen/loading'

const containerStyle = {
  width: '80%',
  height: '800px',
}

const center = {
  lat: 0.7893,
  lng: 113.9213,
}

const onEachFeature = (feature, layer) => {
  if (feature.properties) {
    layer.bindPopup(
      `<b>${feature.properties.Provinsi}</b><br>` +
        `Positif&emsp;&emsp;&emsp;:&emsp;${feature.properties.Kasus_Posi}<br>` +
        `Sembuh&emsp;&emsp;:&emsp;${feature.properties.Kasus_Semb}<br>` +
        `Meninggal&emsp;:&emsp;${feature.properties.Kasus_Meni}`
    )
  }
}

export const KasusPerProvinsi = () => {
  const [dataKasusProvinsi, setDataKasusProvinsi] = useState({})
  const [mapIndonesia, setMapIndonesia] = useState({})
  const [loading, setLoading] = useState(true)

  const fetchMapIndonesia = () => {
    fetch(
      'https://cdn.rawgit.com/johan/world.geo.json/34c96bba/countries/IDN.geo.json'
    )
      .then((res) => res.json())
      .then((res) => {
        setMapIndonesia(res)
      })
  }

  const fetchSemuaBerita = () => {
    fetch(baseURL.dev + 'api/kasus-per-provinsi')
      .then((res) => res.json())
      .then((res) => {
        setDataKasusProvinsi(res)
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchMapIndonesia()
    fetchSemuaBerita()
  }, [])

  return (
    <>
      {!loading ? (
        <div className="map-container">
          <Map center={center} zoom={6}>
            <GeoJSON key="indonesia" data={mapIndonesia} />
            <GeoJSON
              key="kasus-per-provinsi"
              data={dataKasusProvinsi}
              onEachFeature={onEachFeature}
            />
            <TileLayer
              attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
              // "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </Map>
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}
