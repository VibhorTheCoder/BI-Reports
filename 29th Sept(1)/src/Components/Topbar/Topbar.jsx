import React from 'react';
import styles from './Topbar.module.css';
import Sticky from 'react-sticky-el';
import { useHistory } from "react-router-dom";

const Topbar = () => {

    const history = useHistory();
    const goTrend = () => history.push('');
    const goAnalysis = () => history.push('analysis');

    return (
        <Sticky className={styles.stickyProps}>
            <div className={styles.bodyPart}>

                <div className={styles.bodyTwo}>
                    <div className={styles.menuBG}>
                        <div className={styles.logoContainer}>
                            <img className={styles.logo} src={require('../../icons/menu.svg')} />
                        </div>

                        <div className={styles.sideTextDiv}>
                            <text className={styles.sideText}>Dashboard</text>
                        </div>

                        <div className={styles.sideTextDiv}>
                            <text className={styles.sideText}>Sales</text>
                        </div>

                        <div className={styles.sideTextDiv}>
                            <text className={styles.sideText}>Account Payables</text>
                        </div>

                        <div className={styles.sideTextDiv}>
                            <text className={styles.sideText}>Account Receivables</text>
                        </div>

                        <div className={styles.sideTextDiv}>
                            <text className={styles.sideText}>Finance</text>
                        </div>

                        <div className={styles.sideTextDiv}>
                            <text className={styles.sideText}>Inventory</text>
                        </div>

                        <div className={styles.sideTextDiv}>
                            <text className={styles.sideText}>Production</text>
                        </div>
                    </div>
                </div>


                <div className={styles.topbarStyle}>
                    <div className={styles.textStyleDiv} onClick={goTrend}>
                        <text className={styles.textStyle}>Trends</text>
                    </div>

                    <div className={styles.textStyleDiv} onClick={goAnalysis}>
                        <text className={styles.textStyle}>Analysis</text>
                    </div>

                    <div className={styles.textStyleDiv}>
                        <text className={styles.textStyle}>Transactions</text>
                    </div>

                    <div className={styles.textStyleDiv}>
                        <text className={styles.textStyle}>Sales Orders</text>
                    </div>

                    <div className={styles.textStyleDiv}>
                        <text className={styles.textStyle}>Sales Targets</text>
                    </div>

                    <div >
                        <img className={styles.myImage} src={require('../../icons/filter.svg')} />
                    </div>
                </div>




            </div>

        </Sticky>


    )

}

export default Topbar;