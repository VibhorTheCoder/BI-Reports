import React, { useEffect, useState } from 'react';
import { Line, Bar } from 'react-chartjs-2'
import moment from 'moment'
import styles from './BarGraph.module.css';
import myJSONData from '../../test.json';
import { Component } from "react";
import Chart from "react-google-charts";

class BarGraph extends Component {

    
    

    // myCheck() {
    //     if (mybutton === true) {
    //         return (
    //             <Chart
    //                 width={'1100px'}
    //                 height={'400px'}
    //                 chartType="AreaChart"
    //                 loader={<div>Loading Chart</div>}
    //                 data={[
    //                     ['Year', 'Current Year', 'Previous Year'],
    //                     ['2013', 1000, 400],
    //                     ['2014', 1170, 460],
    //                     ['2015', 660, 1120],
    //                     ['2016', 1030, 540],
    //                 ]}
    //                 options={{
    //                     hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
    //                     vAxis: { minValue: 0 },
    //                     chartArea: { width: '70%', height: '70%' },
    //                 }}
    //                 rootProps={{ 'data-testid': '1' }}
    //             />
    //         )
    //     }

    //     else {
    //         return (
    //             <Chart
    //                 width={'1100px'}
    //                 height={'400px'}
    //                 chartType="AreaChart"
    //                 loader={<div>Loading Chart</div>}
    //                 data={[
    //                     ['Year', 'Current Year', 'Previous Year'],
    //                     ['2013', 1200, 900],
    //                     ['2014', 1370, 260],
    //                     ['2015', 640, 920],
    //                     ['2016', 1930, 740],
    //                 ]}
    //                 options={{
    //                     hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
    //                     vAxis: { minValue: 0 },
    //                     chartArea: { width: '70%', height: '70%' },                      
    //                 }}                    
    //                 rootProps={{ 'data-testid': '1' }}
    //             />
    //         )
    //     }
    // }

    // myGraphOne = (mom) => {    
    //     return (
    //         <Line className={{ backgroundColor: 'red' }}
    //             height={150}
    //             data={{
    //                 labels: mom.map(({ Fiscal_Month }) => Fiscal_Month),
    //                 datasets: [{
    //                     data: mom.map(({ growth }) => growth),
    //                     label: "MOM 2020-21",
    //                     hoverBorderColor: 'rgb(0, 173, 238)',
    //                     fill: false,
    //                     showLine: true,
    //                     backgroundColor: [
    //                         'rgb(0, 173, 238)',
    //                         'rgb(0, 173, 238)',
    //                         'rgb(0, 173, 238)',
    //                         'rgb(0, 173, 238)',
    //                     ],
    //                     borderColor: 'rgb(0, 173, 238)',
    //                     borderCapStyle: 'circle',
    //                     borderDashOffset: 0.8,
    //                     pointBorderColor: 'rgb(0, 173, 238 0.3)',
    //                     pointBackgroundColor: 'rgb(0, 173, 238)',

    //                     pointBorderWidth: 7,
    //                     pointHoverRadius: 9,

    //                     pointHoverBackgroundColor: 'rgb(0, 173, 238)',
    //                     pointHoverBorderColor: 'rgb(0, 173, 238)',
    //                     hoverBackgroundColor: 'rgb(0, 173, 238)',
    //                 }]
    //             }
    //             }
    //             options={{
    //                 responsive: true,
    //                 maintainAspectRatio: true,
    //                 legend: {

    //                 },
    //                 scales: {
    //                     display: false,
    //                     xAxes: [{
    //                         gridLines: {
    //                             drawOnChartArea: false
    //                         },
    //                     }
    //                     ],
    //                     yAxes: [
    //                         {
    //                             gridLines: {
    //                                 drawOnChartArea: false
    //                             },
    //                             position: 'left',
    //                             ticks: {
    //                                 autoSkip: false,
    //                             }
    //                         }
    //                     ]
    //                 }
    //             }
    //             }

    //         />
    //     )       
    // }

    myFunction() {
        return (
            <Chart
                width={'1100px'}
                height={'400px'}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}

                data={[
                    ['Year', 'Current Year', 'Previous Year'],
                    ['Apr', 1000, 400],
                    ['May', 1170, 460],
                    ['June', 660, 1120],
                    ['July', 1030, 540],
                    ['Aug', 930, 240],
                    ['Sept', 1230, 840],
                    ['Oct', , 299],
                    ['Nov', , 352],
                    ['Dec', , 941],
                    ['Jan', , 578],
                    ['Feb', , 193],
                    ['Mar', , 890]
                ]}

                options={

                    {
                        // title: 'Sales Trends Line 2020-21',
                        hAxis: { title: 'Months', titleTextStyle: { color: '#333' }, },
                        vAxis: { title: 'Sales', minValue: 0 ,},
                        // For the legend to fit, we make the chart area smaller
                        chartArea: { width: '70%', height: '70%' },
                        curveType: 'function',

                        series: {
                           0: {color: '#00A6FF', visibleInLegend: false},
                           1: {color: '#FFC82C', visibleInLegend: false}
                        }


                        // lineWidth: 25
                    }}
            />

           
        )
    }





    render() {
        return (
            <div className={styles.bodyStyle}>
                {/* {this.myGraphOne(this.state.mom)} */}
                <text className={styles.textStyle}>Current Year Sales Trend Line</text>
                {this.myFunction()}
            </div>
        )
    }
}

export default BarGraph;