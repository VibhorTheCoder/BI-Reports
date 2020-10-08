import React, { Component } from 'react';
import styles from './Analysis.module.css'
import { Header, Footer, Sidebar, Topbar, CustomerData, AnalysisFilter, SalespersonData, ProductData } from '../../Components';



class Analysis extends Component {

    render() {
        return (
            <div className={styles.myBody}>
                <Header />
                <AnalysisFilter />
                <Topbar />

                <CustomerData />
                <SalespersonData />
                <ProductData />




            </div>
        )
    }
}

export default Analysis