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
      `<b>${feature.properties.nama}</b><br>` +
        `Kode RS` +
        `&emsp;&emsp;:&emsp;${feature.properties.kode_rs}<br>` +
        `Tipe` +
        `&emsp;&emsp;&emsp;&emsp;:&emsp;${feature.properties.tipe}<br>` +
        `Wilayah` +
        `&emsp;&emsp;:&emsp;${feature.properties.wilayah}<br>` +
        `Alamat` +
        `&emsp;&emsp;&emsp;:&emsp;${feature.properties.alamat}<br>` +
        `Tempat Tidur` +
        `&emsp;&emsp;:&emsp;${feature.properties.tempat_tidur}<br>` +
        `Telepon` +
        `&emsp;&emsp;&emsp;&emsp;:&emsp;${
          feature.properties.telepon ?? 'Tidak terdaftar'
        }<br>`
    )
  }
}

export const RSRujukan = () => {
  const [dataRSRujukan, setDataRSRujukan] = useState({})
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

  const fetchRSRujukan = () => {
    fetch(baseURL.dev + 'api/rs-rujukan')
      .then((res) => res.json())
      .then((res) => {
        setDataRSRujukan(res)
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchMapIndonesia()
    fetchRSRujukan()
  }, [])

  return (
    <>
      {!loading ? (
        <div className="map-container">
          <Map center={center} zoom={6}>
            <GeoJSON key="indonesia" data={mapIndonesia} />
            <GeoJSON
              key="rs-rujukan"
              data={dataRSRujukan}
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
