import React , {useState, useEffect}from 'react';
import styles from './Header.module.css';

const Header = () => {
    
        return (

            <div className={styles.body}>
                <img className={styles.home} src={require('../../icons/home.svg')} />
               
                <text className={styles.headerText}>Sales Module</text>
                <div>
                    <img className={styles.logo} src={require('../../icons/logo.png')} />
                </div>
            </div>


        )

    }

export default Header;