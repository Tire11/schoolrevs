import React from 'react';
import checkIcon from '../assets/Vector (1).png';
import starIcon from '../assets/Vector (2).png';
import styles from './PricingOptions.module.css';

const Pricing = () => {
    return (
        <div className="container">
            <div className="col-sm-12 py-5">
                <div className="row">
                    {/* Schoolteller Lite */}
                    <div className="col-md-6 mb-5">
                        <div className={`border ${styles.cardStyle}`}>
                            <div>
                                <h6 className="fw-bold">Schoolteller Lite</h6>
                                <p className="text-muted small">
                                    Uncover insights fast in video calls, support tickets, docs, and more.
                                </p>
                                <h2 className="fw-bold">Free</h2>
                                <button className={`w-100 ${styles.buttonStyleLite}`}>Get Schoolteller Free</button>
                            </div>

                            <ul className={`list-unstyled ${styles.listStyle}`}>
                                <li><strong><img src={starIcon} alt="star" className={styles.iconStyle2} /> Features</strong></li>
                                <li className={styles.listItemStyle}><img src={checkIcon} className={styles.iconStyle} alt="check" />
                                    <span>Admin Portal</span>
                                </li>
                                <li className={styles.listItemStyle}><img src={checkIcon} className={styles.iconStyle} alt="check" /> <span>Parent Portal</span></li>
                                <li className={styles.listItemStyle}><img src={checkIcon} className={styles.iconStyle} alt="check" /> <span>Payment Log</span></li>
                                <li className={styles.listItemStyle}><img src={checkIcon} className={styles.iconStyle} alt="check" /> <span>Student Wallet Account</span></li>
                                <li className={styles.listItemStyle}><img src={checkIcon} className={styles.iconStyle} alt="check" /> <span>Student Account Statement</span></li>
                                <li className={styles.listItemStyle}><img src={checkIcon} className={styles.iconStyle} alt="check" /> <span>Bank Settlements</span></li>
                                <li className={styles.listItemStyle}><img src={checkIcon} className={styles.iconStyle} alt="check" /> <span>Defaulter’s List</span></li>
                                <li className={styles.listItemStyle}><img src={checkIcon} className={styles.iconStyle} alt="check" /> <span>Invoice and Receipts</span></li>
                            </ul>
                        </div>
                    </div>

                    {/* Schoolteller Pro  */}
                    <div className="col-md-6 mb-5">
                        <div className={styles.cardStyle2}>
                            <div>
                                <h6 className="fw-bold">Schoolteller Pro</h6>
                                <p className="text-muted small">
                                    Uncover insights fast in video calls, support tickets, docs, and more.
                                </p>
                                <h2 className="fw-bold">₦2,500/term</h2>
                                <button className={`w-100 ${styles.buttonStylePro}`}>Get Started</button>
                            </div>

                            <ul className={`list-unstyled mt-auto ${styles.listStyle}`}>
                                <li><strong><img src={starIcon} alt="star" className={styles.iconStyle2} /> Everything in Schoolteller Lite plus:</strong></li>
                                <li className={`${styles.listItemStyle}`}><img src={checkIcon} className={styles.iconStyle} alt="check" /> Staff Portal</li>
                                <li className={`${styles.listItemStyle}`}><img src={checkIcon} className={styles.iconStyle} alt="check" /> Student Portal</li>
                                <li className={`${styles.listItemStyle}`}><img src={checkIcon} className={styles.iconStyle} alt="check" /> Send Reminder</li>
                                <li className={`${styles.listItemStyle}`}><img src={checkIcon} className={styles.iconStyle} alt="check" /> Rebate and Scholarship</li>
                                <li className={`${styles.listItemStyle}`}><img src={checkIcon} className={styles.iconStyle} alt="check" /> Staff Payroll</li>
                                <li className={`${styles.listItemStyle}`}><img src={checkIcon} className={styles.iconStyle} alt="check" /> Aging Analysis</li>
                                <li className={`${styles.listItemStyle}`}><img src={checkIcon} className={styles.iconStyle} alt="check" /> Shop and Inventory</li>
                                <li className={`${styles.listItemStyle}`}><img src={checkIcon} className={styles.iconStyle} alt="check" /> Generate Balance Report</li>
                                <li className={`${styles.listItemStyle}`}><img src={checkIcon} className={styles.iconStyle} alt="check" /> Wallet Withdrawal</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;