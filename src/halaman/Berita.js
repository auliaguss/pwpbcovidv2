import React, { useState, useEffect } from 'react'

import 'styles/pagination.css'

import Nav from 'komponen/navbar'
import BeritaItem from 'komponen/berita'
import Loading from 'komponen/loading'
import { baseURL } from '../constants'
import { Pagination } from '../komponen/pagination'

function Berita() {
  const [listBerita, setListBerita] = useState([])
  const [loading, setLoading] = useState(true)
  const [pages, setPages] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  const fetchSemuaBerita = () => {
    fetch(baseURL.prod + 'api/posts?paginate=true&page=' + currentPage)
      .then((res) => res.json())
      .then((res) => {
        setListBerita(res)
        setLoading(false)
        let pageArray = Array.from({ length: res.last_page }, (v, k) => k + 1)
        setPages(pageArray)
      })
  }

  useEffect(() => {
    fetchSemuaBerita()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage])

  const activeHandler = (clickedActive) => {
    setCurrentPage(parseInt(clickedActive))
  }

  return (
    <div className="halaman-statistik">
      <Nav />
      <br />
      <br />
      {!loading && listBerita.data.length > 0 ? (
        listBerita.data.map((data) => {
          if (data.image) {
            data.image = data.image.replace('0\\', '0/')
            data.image = data.image.replace('\\', '/')
            data.image = 'url(' + baseURL.prod + 'storage/' + data.image + ')'
            // ? Hapus jika server local, karena server heroku tidak support image upload
            data.image = ''
          } else {
            data.image = ''
          }
          return (
            <BeritaItem
              key={data.id}
              gambar={data.image}
              tgl={new Date(data.created_at).toString()}
              judul={data.title}
              desc={data.excerpt}
              slug={data.slug}
            />
          )
        })
      ) : (
        <Loading />
      )}

      <Pagination
        active={currentPage}
        size={pages.length}
        step={2}
        onClickHandler={activeHandler}
      />
      <br />
      <br />
      <br />
    </div>
  )
}

export default Berita
