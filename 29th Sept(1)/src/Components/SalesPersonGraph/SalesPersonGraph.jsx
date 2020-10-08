import React, { Component } from 'react';
import styles from './SalesPersonGraph.module.css'
import { HorizontalBar } from 'react-chartjs-2';

class SalesPersonGraph extends Component {

   
    SalesPersonSalesMethod() {

        // return data.map((sp)=>{
        //     const{SalesPerson, SalesCY, SalesPY, Growth} = sp

        //     return(
        //         <div>

        //         </div>
        //     )
        // })

        return (
            <HorizontalBar
                className={styles.myBar}
                height={800}
                width={300}
                data={{
                    
                    datasets: [{
                        
                        label: "CY Sales",
                        hoverBorderColor: '#00A6FF',
                        fill: false,
                        showLine: true,
                        backgroundColor: '#00A6FF',
                        borderColor: '#00A6FF',                        
                        borderDashOffset: 0.8,
                        pointBorderColor: '#00A6FF',
                        pointBackgroundColor: '#00A6FF',
                        pointBorderWidth: 7,
                        pointHoverRadius: 9,
                        pointHoverBackgroundColor: '#00A6FF',
                        pointHoverBorderColor: '#00A6FF',
                        hoverBackgroundColor: '#00A6FF',
                            
                    }]
                }}
                options={{
                    responsive: true,
                    maintainAspectRatio: true,
                    legend: {

                    },
                    scales: {
                        display: false,
                        xAxes: [{
                            gridLines: {
                                drawOnChartArea: false
                            },
                        }
                        ],
                        yAxes: [
                            {
                                gridLines: {
                                    drawOnChartArea: false
                                },
                                position: 'left',
                                ticks: {
                                    autoSkip: false,
                                }
                            }
                        ]
                    }
                }
                }
            />
        )

    }

   

    render() {
        return (
            <div className={styles.myBar}>
                <text className={styles.textStyle}>Salesperson wise Sales</text>
                {this.SalesPersonSalesMethod()}

            </div>
        )
    }
}

export default SalesPersonGraph;