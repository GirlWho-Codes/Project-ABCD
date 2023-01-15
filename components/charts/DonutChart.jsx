import React, { useState } from 'react';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const DonutChart = ({ labels, results, colors, totalLabel }) => {
   const [state, setState] = useState({
      options: {
         chart: {
            type: 'donut',
         },
         colors: colors,
         plotOptions: {
            pie: {
               donut: {
                  labels: {
                     show: true,
                     value: {
                        show: true,
                        fontSize: '2.2rem',
                        fontWeight: 600,
                     },
                     total: {
                        show: true,
                        showAlways: true,
                        label: `${totalLabel}`,
                        fontSize: '1.11rem',
                        fontWeight: 500,
                     },
                  },
               },
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
         labels: labels,

         responsive: [
            {
               breakpoint: 1279,
               options: {
                  plotOptions: {
                     pie: {
                        donut: {
                           labels: {
                              show: true,
                              value: {
                                 show: true,
                                 fontSize: '1.5rem',
                                 fontWeight: 600,
                              },
                              total: {
                                 show: true,
                                 showAlways: true,
                                 label: `${totalLabel}`,
                                 fontSize: '0.875rem',
                                 fontWeight: 500,
                              },
                           },
                        },
                     },
                  },
               },
            },
         ],
      },

      series: results,
   });

   const sum = results.reduce((accumulator, value) => {
      return accumulator + value;
   }, 0);

   return (
      <div className='donut-chart'>
         <div className='row'>
            <div className='w-52 xl:w-full mx-auto center py-7 xl:py-12 text-black-60'>
               <Chart
                  options={state.options}
                  series={state.series}
                  type='donut'
                  width='100%'
               />
            </div>
         </div>

         <div className='col-start space-y-4'>
            {labels.map((labels, idx) => {
               return (
                  <div key={idx} className='between w-full text-black-80'>
                     <div className={`center space-x-2`}>
                        <div
                           className={`w-3 h-3 rounded-full`}
                           style={{ background: `${colors[idx]}` }}
                        />
                        <div>{labels}</div>
                     </div>

                     <div>
                        {results[idx]}({Math.round((results[idx] / sum) * 100)}
                        %)
                     </div>
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default DonutChart;
