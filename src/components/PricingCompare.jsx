import React from 'react';
import styles from "./pricecompare.module.css"

const features = [
    { name: 'Admin Portal', lite: true, pro: true },
    { name: 'Staff Portal', lite: false, pro: true },
    { name: 'Parent Portal', lite: true, pro: true },
    { name: 'Student Portal', lite: false, pro: true },
    { name: 'Payment Log', lite: true, pro: true },
    { name: 'Student Wallet Account', lite: true, pro: true },
    { name: 'Student Account Settlement', lite: true, pro: true },
    { name: 'Bank Settlements', lite: true, pro: true },
    { name: 'Send Reminder', lite: false, pro: true },
    { name: 'Defaulter’s List', lite: true, pro: true },
    { name: 'Rebate and Scholarship', lite: false, pro: true },
    { name: 'Staff Payroll', lite: false, pro: true },
    { name: 'Allowance Account', lite: false, pro: true },
    { name: 'Aging Analysis', lite: false, pro: true },
    { name: 'Shop and Inventory', lite: false, pro: true },
    { name: 'Invoice and Receipts', lite: true, pro: true },
    { name: 'Generate Balance Report', lite: false, pro: true },
    { name: 'Wallet Withdrawal', lite: false, pro: true },
];

const PricingComparison = () => {

    return (
        <div className="container py-5">
            <div className="table-responsive">
                <div>
                    <table className="table text-center align-middle">
                        <thead>
                            <tr>
                                <th className={styles.tableHead} style={{ width: '40%' }}></th>
                                <th style={{ width: '30%' }}>
                                    <div className={styles.schoolLite}>
                                        <span className={styles.textAlign}>Schoolteller Lite</span>
                                        <span className={styles.free}>Free</span>
                                        <p className={`${styles.freeSpan} ${styles.freeOnly}`}>Free</p>
                                    </div>
                                    <button className={`w-100 ${styles.buttonStylingOne}`}>Get Schoolteller Free</button>
                                </th>
                                <th style={{ width: '30%' }}>
                                    <div className={styles.schoolLite}>
                                        <span className={styles.textAlign}>Schoolteller Pro</span>
                                        <span className={styles.freeOkay}>₦2,500 <small>/term</small></span>
                                        <p className={styles.freeSpan}>Per Term</p>
                                    </div>
                                    <button className={`w-100 ${styles.buttonStylingTwo}`}>Get Started</button>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {features.map((feature, index) => (
                                <tr key={index}>
                                    <td className="text-start py-3">{feature.name}</td>
                                    <td className={styles.checkStyle}>{
                                        feature.lite ? <i class="fa-solid fa-check" style={{ color: "#000000" }}></i> :
                                            <i class="fa-solid fa-minus" style={{ color: "#000000" }}></i>
                                    }</td>
                                    <td className={styles.iconCell}>{
                                        feature.pro ? <i class="fa-solid fa-check" style={{ color: "#000000" }}></i> :
                                            <i class="fa-solid fa-dash" style={{ color: "#000000" }}></i>
                                    }</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PricingComparison;



