import React, { useState } from 'react';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const VerticalBarChart = (props) => {
   const { xAxis, yAxis, colors, backgroundBarColors } = props || {};

   const [state, setState] = useState({
      options: {
         chart: {
            id: 'basic-bar',
            toolbar: {
               show: false,
            },
         },
         colors: colors,
         xaxis: {
            categories: xAxis,
            labels: {
               style: {
                  colors: '#454459',
               },
            },
            axisBorder: {
               show: false,
            },
            crosshairs: {
               show: false,
            },
            axisTicks: {
               show: false,
            },
         },
         dataLabels: {
            enabled: false,
         },
         grid: {
            show: false,
         },
         legend: {
            show: false,
         },
         plotOptions: {
            bar: {
               horizontal: false,
               borderRadius: 5,
               columnWidth: '40%',
               colors: {
                  backgroundBarColors: backgroundBarColors
                     ? backgroundBarColors
                     : ['#FFFFFF'],
                  backgroundBarOpacity: 0.2,
                  backgroundBarRadius: 5,
               },
            },
         },
      },

      series: yAxis,
   });

   return (
      <div className='bar-chart'>
         <div className='row'>
            <div className='mixed-chart'>
               <Chart
                  options={state.options}
                  series={state.series}
                  type='bar'
                  width='100%'
               />
            </div>
         </div>
      </div>
   );
};

export default VerticalBarChart;
