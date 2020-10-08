import React from 'react';
import styles from './Footer.module.css';
import { NativeSelect, FormControl } from '@material-ui/core';

const Footer = () => {

    return (
        <div>
            <div className={styles.mainDiv}>

                <div className={styles.calImageStyle}>
                    <div className={styles.myDiv3Style}>
                        <div className={styles.myDiv2Style}>
                            <img className={styles.filterImage} src={require('../../icons/calendar.svg')} />
                            <text className={styles.myTextStyle}>YEAR</text>
                        </div>

                        <div className={styles.myDiv2Style}>
                            <FormControl className={styles.margin}>
                                <text className={styles.myTextStyle}>Filter1</text>
                                <NativeSelect
                                    className={styles.myForm}>
                                    <option value="ALL" className={styles.myTextStyle}>Dropdown</option>
                                </NativeSelect>
                            </FormControl>

                            <FormControl className={styles.margin}>
                                <text className={styles.myTextStyle}>Filter2</text>
                                <NativeSelect
                                    className={styles.myForm}>
                                    <option value="ALL" className={styles.myTextStyle}>Dropdown</option>
                                </NativeSelect>
                            </FormControl>

                            <FormControl className={styles.margin}>
                                <text className={styles.myTextStyle}>Filter3</text>
                                <NativeSelect
                                    className={styles.myForm}>
                                    <option value="ALL" className={styles.myTextStyle}>Dropdown</option>
                                </NativeSelect>
                            </FormControl>
                        </div>
                    </div>

                    <div className={styles.myDiv3Style}>
                        <div className={styles.myDiv2Style}>
                            <img className={styles.filterImage} src={require('../../icons/filter.svg')} />
                            <text className={styles.myTextStyle}>FILTER</text>
                        </div>
                    </div>


                    <div className={styles.myDiv3Style}>
                        <div className={styles.myDiv2Style}>
                            <img className={styles.filterImage} src={require('../../icons/briefcase.svg')} />
                            <text className={styles.myTextStyle}>BUSINESS UNIT</text>
                        </div>

                        <div className={styles.myDiv2Style}>
                            <FormControl className={styles.margin}>
                                <text className={styles.myTextStyle}>Filter1</text>
                                <NativeSelect
                                    className={styles.myForm}>
                                    <option value="ALL" className={styles.myTextStyle}>Dropdown</option>
                                </NativeSelect>
                            </FormControl>

                            <FormControl className={styles.margin}>
                                <text className={styles.myTextStyle}>Filter2</text>
                                <NativeSelect
                                    className={styles.myForm}>
                                    <option value="ALL" className={styles.myTextStyle}>Dropdown</option>
                                </NativeSelect>
                            </FormControl>

                            <FormControl className={styles.margin}>
                                <text className={styles.myTextStyle}>Filter3</text>
                                <NativeSelect
                                    className={styles.myForm}>
                                    <option value="ALL" className={styles.myTextStyle}>Dropdown</option>
                                </NativeSelect>
                            </FormControl>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )

}

export default Footer;