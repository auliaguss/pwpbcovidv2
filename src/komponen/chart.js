import React, {Component} from 'react';
import {Line, Pie} from 'react-chartjs-2';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      dataKasus:props.dataKasus,
      dataPasien:props.dataPasien
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    location:'City'
  }

  render(){
    return (
      <div className="chart">
        <Line
          data={this.state.dataKasus}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Kasus Positif Corona'+this.props.location,
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />

        <Pie
          data={this.state.dataPasien}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Detail Kasus'+this.props.location,
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
      </div>
    )
  }
}

export default Chart;
