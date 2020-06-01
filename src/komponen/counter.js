import React from 'react'
import 'styles/tesCorona.css'

function counter(){
    return(
        <div className="counter">
            <div className="counterItem" style={{background: "#21bf73"}}>
                <h3>Terkonfirmasi</h3>
                <div className="counterItemData">
                    <div>
                        <h4>Indonesia</h4>
                        <h4>Dunia</h4>
                    </div>
                    <div>
                        <h4>20023</h4>
                        <h4>1320000</h4>
                    </div>
                </div>
            </div>
            <div className="counterItem" style={{background: "#4acfff"}}>
                <h3>Sembuh</h3>
                <div className="counterItemData">
                    <div>
                        <h4>Indonesia</h4>
                        <h4>Dunia</h4>
                    </div>
                    <div>
                        <h4>20023</h4>
                        <h4>1320000</h4>
                    </div>
                </div>
            </div>
            <div className="counterItem" style={{background: "#ff3366"}}>
                <h3>Meninggal</h3>
                <div className="counterItemData">
                    <div>
                        <h4>Indonesia</h4>
                        <h4>Dunia</h4>
                    </div>
                    <div>
                        <h4>20023</h4>
                        <h4>1320000</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default counter;