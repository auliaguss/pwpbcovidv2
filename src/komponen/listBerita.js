import React from 'react';
import Berita from './berita';
import './styles/berita.css'
import dokter from './img/dokter.png'
function daftar(){
    return (
        <div className="kumpulanArtikel">
            <Berita gambar={dokter} tgl="12 Mei, 2020" judul="Ayam Goreng enak" desc="Lorem ipsum apahayooo"/>
        </div>
    )
}

export default daftar;