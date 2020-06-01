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
      `<b>${feature.properties.kecamatan}, ${feature.properties.kabupaten}, ${feature.properties.provinsi}</b><br>` +
        `Kategori&emsp;:&emsp;${feature.properties.kategori}`
    )
  }
}

export const KecamatanRawan = () => {
  const [dataKecamatanRawan, setDataKecamatanRawan] = useState({})
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

  const fetchKecamatanRawan = () => {
    fetch(baseURL.dev + 'api/kecamatan-rawan')
      .then((res) => res.json())
      .then((res) => {
        setDataKecamatanRawan(res)
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchMapIndonesia()
    fetchKecamatanRawan()
  }, [])

  return (
    <>
      {!loading ? (
        <div className="map-container">
          <Map center={center} zoom={6}>
            <GeoJSON key="indonesia" data={mapIndonesia} />
            <GeoJSON
              key="rs-rujukan"
              data={dataKecamatanRawan}
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
