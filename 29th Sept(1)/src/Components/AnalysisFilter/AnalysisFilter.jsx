import React, { Component } from 'react'
import styles from './AnalysisFilter.module.css'

class AnalysisFilter extends Component {


    render() {
        return (
            <div className={styles.calImageStyle}>



                <div className={styles.myDiv3Style}>

                    {/* <img className={styles.myImageStyle} src={require('../../icons/reset.png')} /> */}

                    <div className={styles.textStyleDiv}>
                        <text className={styles.myTextStyle}>CORPORATE</text>
                    </div>

                    <div className={styles.textStyleDiv}>
                        <text className={styles.myTextStyle}>IMS</text>
                    </div>

                    <div className={styles.textStyleDiv}>
                        <text className={styles.myTextStyle}>SHARED</text>
                    </div>

                    <div className={styles.textStyleDiv}>
                        <text className={styles.myTextStyle}>TDE</text>
                    </div>

                    <div className={styles.textStyleDiv}>
                        <text className={styles.myTextStyle}>ES</text>
                    </div>

                    <div className={styles.textStyleDiv}>
                        <text className={styles.myTextStyle}>INS SHARED</text>
                    </div>

                    <div className={styles.textStyleDiv}>
                        <text className={styles.myTextStyle}>WORKSPACE</text>
                    </div>


                </div>
            </div>
        )
    }
}

export default AnalysisFilter;