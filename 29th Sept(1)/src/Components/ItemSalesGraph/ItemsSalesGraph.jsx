import React, { Component } from 'react';
import styles from './ItemsSalesGraph.module.css'
import { HorizontalBar } from 'react-chartjs-2';

class ItemSalesGraph extends Component {

    

    ItemSalesGraphMethod() {
        return (
            <HorizontalBar
                className={styles.myBar}
                height={85}
                width={250}
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
                                drawOnChartArea: false,                               
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
                 <text className={styles.textStyle}>Item wise Sales</text>
                {this.ItemSalesGraphMethod()}
            </div>
        )
    }
}

export default ItemSalesGraph;