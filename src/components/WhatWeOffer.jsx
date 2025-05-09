import React from 'react';
import dashboardImage from '../assets/dashboard.png';
import dashboardMini from '../assets/Dashboard-mini.png';


import styles from "./whatweoffer.module.css"
const WhatWeOffer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.changeCon} >
                <div className=" py-5 text-center px-3">
                    <span className={styles.firstText} >What We Offer</span>
                    <h2 className="fw-bold fs-2 mb-3">
                        Simplify the process of collecting <br /> and tracking payments
                    </h2>
                    <p className="text-muted mx-auto mb-4" style={{ maxWidth: '600px' }}>
                        With our intuitive platform, payments are instantly reconciled, giving you a
                        clear overview of your school’s financial health
                    </p>
                    <div className="d-flex justify-content-center mb-4 border-primary">
                        <div className={styles.dashboardImg}>
                            <img
                                src={dashboardImage}
                                alt="Dashboard preview"
                                className={`rounded shadow ${styles.firstImg}`}
                                width="100%"
                            />

                            <img
                                src={dashboardMini}
                                alt="Dashboard preview"
                                className={`rounded shadow ${styles.secondImg}`}
                                width="100%"
                            />
                        </div>
                    </div>
                    {/* Progress Dots */}
                    <div className="d-flex justify-content-center gap-2">
                        <div
                            className="rounded-pill bg-warning"
                            style={{ width: '40px', height: '4px' }}
                        ></div>
                        <div
                            className="rounded-pill bg-secondary bg-opacity-25"
                            style={{ width: '40px', height: '4px' }}
                        ></div>
                        <div
                            className="rounded-pill bg-secondary bg-opacity-25"
                            style={{ width: '40px', height: '4px' }}
                        ></div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default WhatWeOffer;
