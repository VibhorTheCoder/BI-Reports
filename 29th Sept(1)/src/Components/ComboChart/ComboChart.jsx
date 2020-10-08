import React, { Component } from 'react';
import styles from './ComboChart.module.css'
import Chart from "react-google-charts";

class ComboChart extends Component {

    render() {
        return (
            <div className={styles.bodyStyle}>
                <text className={styles.textStyle}>Sales/GM/GM% of Sales Bar Chart</text>
                <Chart
                    width={'1100px'}
                    height={'400px'}
                    chartType="ComboChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Months', 'Sales', 'Growth Margin', 'Growth Margin Percentage'],
                        ['Apr', 1000, 400, 200.4],
                        ['May', 1170, 460, 90.6],
                        ['June', 660, 1120, 987.9],
                        ['July', 1030, 540, 0.1],
                        ['Aug', 1430, 240, 300],
                        ['Sept', 590, 540, 400],
                    ]}
                    options={{                       
                        vAxis: { title: 'Sales / GM / GM%' },
                        hAxis: { title: 'Months' },
                        seriesType: 'bars',
                        series: {2: { type: 'line' } },
                        chartArea: { width: '70%', height: '70%' },                        
                        curveType: 'function',

                        series: {
                            0: {color: '#00A6FF', visibleInLegend: true},
                            1: {color: '#FFC82C', visibleInLegend: true},
                            2: {color: '#77D353', visibleInLegend: true,  type: 'line' },                            
                         }
                    }}                  
                />

            </div>
        )
    }
}

export default ComboChart;