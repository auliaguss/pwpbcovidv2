import React, { Component } from 'react';
import Chart from './chart';
import './styles/chart.css'

class App extends Component {
  constructor(){
    super();
    this.state = {
      dataKasus:{}
    }
  }

  componentWillMount(){
    this.getdataKasus();
  }

  getdataKasus(){
    // Ajax calls here
    this.setState({
      dataKasus:{
        labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni'],
        datasets:[
          {
            label:'Pasien Positif',
            data:[
              0,
              200,
              800,
              6000,
              10000,
              9000
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              '#ff6242',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      },
      dataPasien:{
        labels: ['Meninggal', 'ODP', 'PDP', 'Dirawat', 'Sembuh'],
        datasets:[
          {
            label:'Population',
            data:[
              1230,
              2000,
              3000,
              2647,
              4232
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              '#4acfff'
            ]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className="charts">
        <Chart
            dataKasus={this.state.dataKasus}
            dataPasien={this.state.dataPasien}
            location="Massachusetts"
            legendPosition="bottom"/>
      </div>
    );
  }
}

export default App;
