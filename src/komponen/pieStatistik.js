import React, { useState, useEffect } from 'react'
import { Pie } from 'react-chartjs-2'

import { baseURL } from '../constants'

import Loading from 'komponen/loading'

export const PieStatistik = () => {
  const [dataSet, setDataSet] = useState({})
  const [loading, setLoading] = useState(true)

  const setDataSetFromApi = (data) => {
    const dataSetFromApi = {
      labels: ['Meninggal', 'ODP', 'PDP', 'Dirawat', 'Sembuh'],
      datasets: [
        {
          label: 'Population',
          data: [
            data.Jumlah_Pasien_Meninggal,
            data.ODP,
            data.PDP,
            data.Jumlah_pasien_dalam_perawatan,
            data.Jumlah_Pasien_Sembuh,
          ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            '#4acfff',
          ],
        },
      ],
    }
    setDataSet(dataSetFromApi)
  }

  const fetchStatistik = () => {
    fetch(baseURL.prod + 'api/statistik?hariIni=true')
      .then((res) => res.json())
      .then((res) => {
        if (res.features.length === 2) {
          setDataSetFromApi(res.features[1].attributes)
        } else {
          setDataSetFromApi(res.features[0].attributes)
        }
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchStatistik()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      {!loading && dataSet ? (
        <div className="pie-container">
          <Pie
            data={dataSet}
            options={{
              title: {
                display: true,
                text: 'Statistik Hari Ini',
                fontSize: 25,
              },
              legend: {
                display: true,
                position: 'bottom',
              },
            }}
          />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  )
}
