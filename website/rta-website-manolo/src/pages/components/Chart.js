import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

function Chart(props) {

    const [state, setState] = useState({
        series: [{
          data: [575, 430, 365, 250],
        }],
        options: {
          chart: {
            type: 'bar',
            height: 350
          },
          plotOptions: {
            bar: {
              borderRadius: 4,
              horizontal: true,
            }
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: ['CATEGORY 1', 'CATEGORY 2', 'CATEGORY 3', 'CATEGORY 4'],
            labels: {
              style: {
                colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560'],
              },
            },
          },
          colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560'],
        },
      });
      


    return (
        <div style={{backgroundColor:"white", borderRadius:20}}>
            <div id="chart">
                <ReactApexChart 
                options={state.options} 
                series={state.series} 
                type="area" 
                height={340}
                width={870} />
            </div>
            
        </div>
    );
}

export default Chart;