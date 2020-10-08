import React, { Component } from 'react';
import styles from './KPI.module.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const percentage = 66;
const percentage2 = 100;
const percentage3 = 27;

class KPI extends Component {
   

   


    SalesKPI() {
        return (
            <div >
                <text className={styles.myFontStyle}>Sales:</text>

                <div>
                    <text className={styles.myFontStyle}>CY:</text>
                   
                </div>

                {/* <div>
                        <text className={styles.myFontStyle}>PY:</text>
                        <text className={styles.myFontStyle}>{SalesPY}</text>
                    </div>

                    <div>
                        <text className={styles.myFontStyle}>MTD CY:</text>
                        <text className={styles.myFontStyle}>{SalesMTDCY}</text>
                    </div>

                    <div>
                        <text className={styles.myFontStyle}>MTD PY:</text>
                        <text className={styles.myFontStyle}>{SalesMTDPY}</text>
                    </div> */}
            </div>
        )
        // })
    }

   

    render() {
        return (
            <div className={styles.bodyStyle}>
                {/* {this.SalesKPI(this.state.kpi)} */}


                <div className={styles.myDivStyle}>
                    <text className={styles.myFontStyle}>Sales</text>

                    <div className={styles.rowStyle}>
                        <div className={styles.columnStyle}>
                            <div className={styles.columnStyleTwo}>
                                <text className={styles.alignLeft}>Current Year</text>
                                <text className={styles.alignLeftBold}>₹62,000</text>
                            </div>

                            <div className={styles.columnStyleTwo}>
                                <text className={styles.alignLeft}>Previous Year</text>
                                <text className={styles.alignLeftBold}>₹32,000</text>
                            </div>
                        </div>


                        <div className={styles.circleStyle}>
                            <CircularProgressbar value={percentage} text={`${percentage}%`}
                                styles={{
                                    root: {},
                                    path: {
                                        stroke: `rgb(119,211,83, ${percentage / 100})`,
                                        strokeLinecap: 'round',
                                    },
                                    trail: {
                                        stroke: '#EEF0F8',
                                        strokeLinecap: 'butt',
                                    },
                                    text: {
                                        fill: '#000000',
                                        fontSize: '24px',
                                    }
                                }} />
                        </div>
                    </div>

                    <div className={styles.rowStyleTwo}>
                        <div className={styles.columnStyle}>
                            <text className={styles.alignLeft}>Current Month MTD</text>
                            <text className={styles.alignLeftBold}>₹82,000</text>
                        </div>

                        <div className={styles.columnStyle}>
                            <text className={styles.alignLeft}>Previous Month MTD</text>
                            <text className={styles.alignLeftBold}>₹32,000</text>
                        </div>
                    </div>
                </div>







                <div className={styles.myDivStyle}>
                    <text className={styles.myFontStyle}>Gross Margin</text>

                    <div className={styles.rowStyle}>
                        <div className={styles.columnStyle}>
                            <div className={styles.columnStyleTwo}>
                                <text className={styles.alignLeft}>Current Year</text>
                                <text className={styles.alignLeftBold}>₹62,000</text>
                            </div>

                            <div className={styles.columnStyleTwo}>
                                <text className={styles.alignLeft}>Previous Year</text>
                                <text className={styles.alignLeftBold}>₹32,000</text>
                            </div>
                        </div>


                        <div className={styles.circleStyle}>
                            <CircularProgressbar value={100} text={`-${33}%`}
                                styles={{
                                    root: {},
                                    path: {
                                        stroke: `rgba(249,95,98, ${percentage / 100})`,
                                        strokeLinecap: 'round',
                                    },
                                    trail: {
                                        stroke: '#EEF0F8',
                                        strokeLinecap: 'butt',
                                    },
                                    text: {
                                        fill: '#000000',
                                        fontSize: '24px',
                                    }
                                }} />
                        </div>
                    </div>

                    <div className={styles.rowStyleTwo}>
                        <div className={styles.columnStyle}>
                            <text className={styles.alignLeft}>Current Month MTD</text>
                            <text className={styles.alignLeftBold}>₹82,000</text>
                        </div>

                        <div className={styles.columnStyle}>
                            <text className={styles.alignLeft}>Previous Month MTD</text>
                            <text className={styles.alignLeftBold}>₹32,000</text>
                        </div>
                    </div>
                </div>





                <div className={styles.myDivStyle}>
                    <text className={styles.myFontStyle}>PBT</text>

                    <div className={styles.rowStyle}>
                        <div className={styles.columnStyle}>
                            <div className={styles.columnStyleTwo}>
                                <text className={styles.alignLeft}>Current Year</text>
                                <text className={styles.alignLeftBold}>₹62,000</text>
                            </div>

                            <div className={styles.columnStyleTwo}>
                                <text className={styles.alignLeft}>Previous Year</text>
                                <text className={styles.alignLeftBold}>₹32,000</text>
                            </div>
                        </div>


                        <div className={styles.circleStyle}>
                            <CircularProgressbar value={percentage3} text={`${percentage3}%`}
                                styles={{
                                    root: {},
                                    path: {
                                        stroke: `rgba(255,200,44, ${percentage / 100})`,
                                        strokeLinecap: 'round',
                                    },
                                    trail: {
                                        stroke: '#EEF0F8',
                                        strokeLinecap: 'butt',
                                    },
                                    text: {
                                        fill: '#000000',
                                        fontSize: '24px',
                                    }
                                }} />
                        </div>
                    </div>

                    <div className={styles.rowStyleTwo}>
                        <div className={styles.columnStyle}>
                            <text className={styles.alignLeft}>Current Month MTD</text>
                            <text className={styles.alignLeftBold}>₹82,000</text>
                        </div>

                        <div className={styles.columnStyle}>
                            <text className={styles.alignLeft}>Previous Month MTD</text>
                            <text className={styles.alignLeftBold}>₹32,000</text>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default KPI;