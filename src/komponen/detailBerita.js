import React from 'react';
import './styles/berita.css' 
function berita(props){
        return (
        <div className="detailArt">
        <div className="date"><span className="day">28</span><span className="month">Apr</span></div>
            <div className="detailTeks">
              <h1 className="judul">{props.judul}Judul</h1>
              <img src="https://asset.kompas.com/crops/Qv_pGem9E1uy2VwajMdpZ3xDilk=/85x0:949x576/750x500/data/photo/2020/04/22/5e9fe7657465a.jpg"/>
              <p> {props.desc}Ini deskripsiiiiiiiiiii</p>
            </div>
        </div>
        )
}
export default berita;