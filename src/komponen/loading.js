import React from 'react';
import './styles/loading.css';
import load from './img/corona.png'
function loading(){
    return(  
        <div className="loading">
            <span className="loader"><img src={load}/></span>
            <br/>Tunggu Sebentar....
        </div>
    )
}

export default loading;