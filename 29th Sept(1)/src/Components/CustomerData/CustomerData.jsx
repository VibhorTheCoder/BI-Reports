import React, { Component } from 'react'
import styles from './CustomerData.module.css'

class CustomerData extends Component {


    render() {
        return (
            <div className={styles.myBodyStyle}>

                <text className={styles.myHeader}>Customer Data</text>

                <div className={styles.topbarStyle}>
                    <div className={styles.textStyleDiv}>
                        <text className={styles.textStyle}>58417</text>
                        <text className={styles.textStyleTwo}>Total Customers</text>
                    </div>

                    <div className={styles.textStyleDivTest}>
                        <text className={styles.textStyle}>12559</text>
                        <text className={styles.textStyleTwo}>Active Customers</text>
                    </div>

                    <div className={styles.textStyleDiv}>
                        <text className={styles.textStyle}>45858</text>
                        <text className={styles.textStyleTwo}>Inactive Customers</text>
                    </div>

                    <div className={styles.textStyleDiv}>
                        <text className={styles.textStyle}>2677</text>
                        <text className={styles.textStyleTwo}>New Customers</text>
                    </div>

                </div>


                <div className={styles.myDivision}>

                    <div className={styles.centerItems}>
                        <div className={styles.mySecondBody}>
                            <text className={styles.myFontStyle}>Mr. Ashok Nair</text>
                            <div className={styles.container}>
                                <div className={styles.html}>90%</div>
                            </div>
                        </div>

                        <div className={styles.mySecondBody}>
                            <text className={styles.myFontStyle}>Himanshu Saxena</text>
                            <div className={styles.container}>
                                <div className={styles.html}>90%</div>
                            </div>
                        </div>


                        <div className={styles.mySecondBody}>
                            <text className={styles.myFontStyle}>J. RAMESH</text>
                            <div className={styles.container}>
                                <div className={styles.yellow}>30%</div>
                            </div>
                        </div>


                        <div className={styles.mySecondBody}>
                            <text className={styles.myFontStyle}>HIREN SHAH</text>
                            <div className={styles.container}>
                                <div className={styles.orange}>20%</div>
                            </div>
                        </div>


                        <div className={styles.mySecondBody}>
                            <text className={styles.myFontStyle}>NEWS EXPRESS</text>
                            <div className={styles.container}>
                                <div className={styles.green}>50%</div>
                            </div>
                        </div>


                        <div className={styles.mySecondBody}>
                            <text className={styles.myFontStyle}>Vijaykumar R</text>
                            <div className={styles.container}>
                                <div className={styles.html}>90%</div>
                            </div>
                        </div>


                        <div className={styles.mySecondBody}>
                            <text className={styles.myFontStyle}>PURNIMA SINGH</text>
                            <div className={styles.container}>
                                <div className={styles.yellow}>30%</div>
                            </div>
                        </div>


                        <div className={styles.mySecondBody}>
                            <text className={styles.myFontStyle}>MANOJ JAIN</text>
                            <div className={styles.container}>
                                <div className={styles.orange}>20%</div>
                            </div>
                        </div>


                        <div className={styles.mySecondBody}>
                            <text className={styles.myFontStyle}>UDAI PAWAR</text>
                            <div className={styles.container}>
                                <div className={styles.green}>50%</div>
                            </div>
                        </div>




                        <div className={styles.mySecondBody}>
                            <text className={styles.myFontStyle}>KIRTI TYRES</text>
                            <div className={styles.container}>
                                <div className={styles.html}>90%</div>
                            </div>
                        </div>


                        <div className={styles.mySecondBody}>
                            <text className={styles.myFontStyle}>SYNDICATE BANK</text>
                            <div className={styles.container}>
                                <div className={styles.yellow}>30%</div>
                            </div>
                        </div>


                        <div className={styles.mySecondBody}>
                            <text className={styles.myFontStyle}>CHHAVI KHARBANDA</text>
                            <div className={styles.container}>
                                <div className={styles.orange}>20%</div>
                            </div>
                        </div>


                        <div className={styles.mySecondBody}>
                            <text className={styles.myFontStyle}>SACHIN GUPTA</text>
                            <div className={styles.container}>
                                <div className={styles.green}>50%</div>
                            </div>
                        </div>

                    </div>


                    <div className={styles.mySecondDiv2}>
                        <div className={styles.mytextStyleDiv2}>
                            <text className={styles.mytextStyle}>Revenue</text>
                        </div>

                        <div className={styles.mytextStyleDiv2}>
                            <text className={styles.mytextStyle}>Gross Margin</text>
                        </div>
                    </div>



                </div>
            </div>
        )
    }
}
export default CustomerData;