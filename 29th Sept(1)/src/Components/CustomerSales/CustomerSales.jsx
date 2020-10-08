import React, { useEffect, useState } from 'react';
import styles from './CustomerSales.module.css';
import { Component } from "react";
// import { RadioGroup, Radio } from '@palmerhq/radio-group';
// import '@palmerhq/radio-group/styles.css'; // use the default styles

class BarGraph extends Component {

    

    mainHeader() {
        return (
            <div className={styles.myFirstDiv}>
                <table className={styles.myTableStyle}>
                    <thead className={styles.header}>
                        <th className={styles.tableHeader}>Customers</th>
                        <th className={styles.tableHeader}>Sales CY</th>
                        <th className={styles.tableHeader}>Sales PY</th>
                        <th className={styles.tableHeader}>Growth</th>
                        <th className={styles.tableHeader}>GM CY</th>
                        <th className={styles.tableHeader}>GM PY</th>
                        <th className={styles.tableHeader}>Growth GM</th>
                    </thead>
                </table>
            </div>
        )
    }



    
   
    render() {
        return (
            <div className={styles.bodyStyle}>
           

                {this.mainHeader()}
        
            </div>
        )
    }
}

export default BarGraph;