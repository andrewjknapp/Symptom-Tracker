import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

const state = {
    labels: ['Monday', 'Tuesday', 'Wednesday',
             'Thursday', 'Friday'],
    datasets: [
      {
        label: 'Cough',
        fill: false,
        lineTension: 0.5,
        backgroundColor: '#3FE744',
        borderColor: '#3FE744',
        borderWidth: 3,
        pointHoverRadius: 6,
        data: [3, 8, 5, 9, 2]
      },
      {
        label: 'Fever',
        fill: false,
        lineTension: 0.5,
        backgroundColor: '#3F7CE7',
        borderColor: '#3F7CE7',
        borderWidth: 3,
        pointHoverRadius: 6,
        data: [5, 7, 6, 4, 3]
      },
      {
        label: 'Stomachache',
        fill: false,
        lineTension: 0.5,
        backgroundColor: '#E3290C',
        borderColor: '#E3290C',
        borderWidth: 3,
        pointHoverRadius: 6,
        data: [4, 1, 3, 5, 3]
      }
    ]
  }

  class Chart extends Component {
    render() {
      return (
        <div>
          <Line
            data={state}
            options={{
              title:{
                display:true,
                text:'Symptom Severity',
                fontSize:20
              },
              legend:{
                display:true,
                position:'right'
              }
            }}
          />
        </div>
      );
    }
  }

  export default Chart