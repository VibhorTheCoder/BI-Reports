import React from 'react';
import styles from './Sidebar.module.css';
import Sticky from 'react-sticky-el';
const Sidebar = () => {

    return (
        <Sticky className={styles.stickyProps}>
                {/* <div className={styles.body}>
                    <div className={styles.menuBG}>
                        <div className={styles.menuImageStyle}>
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


                </div> */}
        </Sticky>
    )

}

export default Sidebar;