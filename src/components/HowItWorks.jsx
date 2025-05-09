import React from 'react';
import styles from "./howitworks.module.css"
import walletImage from "../assets/wallet-check.png";
import moneyImage from "../assets/money-send.png";
import clockImage from "../assets/clock.png";
import dataImage from "../assets/data-2.png";
import diagramImage from "../assets/diagram.png";
import bubbleImage from "../assets/bubble.png";

const HowItWorks = () => {
    return (
        <div className="py-5 px-3 container">
            {/* Heading Section */}
            <div className={`text-start mb-5 ${styles.heads}`}>
                <div className={styles.firstText}>
                    <span className="text-warning small fw-semibold mb-3">How it Works</span>
                </div>
                <h2 className="fw-bold" >Your path to smooth <br /> payment solution</h2>
            </div>

            {/* Grid Wrapper */}
            <div className="col-sm-12">
                <div className="row g-5 mx-0">
                    {/* Card 1 */}
                    <div className="col-lg-4 col-md-6">
                        <div className={styles.card}>
                            <div className="border rounded-5 shadow-sm h-100 p-4">
                                <div className="fs-3 mb-3"><img src={walletImage} alt="" /></div>
                                <h5 className="fw-semibold">Smart Payment Processing</h5>
                                <p className="text-muted">
                                    As payments are made, our platform instantly tracks, reconciles, and categorizes them. Automatic payment categorisation splits transactions into designated accounts
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="col-lg-4 col-md-6">
                        <div className="border rounded-5 shadow-sm h-100 p-4">
                            <div className="fs-3 mb-3"><img src={moneyImage} alt="" /></div>
                            <h5 className="fw-semibold">Seamless Integration</h5>
                            <p className="text-muted">
                                Connect your school's financial system to our platform with minimal setup. Our user-friendly interface ensures a smooth transition from traditional methods
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-lg-4 col-md-6">
                        <div className="border rounded-5 shadow-sm h-100 p-4">
                            <div className="fs-3 mb-3"><img src={clockImage} alt="" /></div>
                            <h5 className="fw-semibold">Real-time tracking</h5>
                            <p className="text-muted">
                                Our real-time payment tracking system provides you with instant visibility into your school’s transactions, ensuring you're always in the loop and immediate access to payment status.
                            </p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="col-lg-4 col-md-6">
                        <div className="border rounded-5 shadow-sm h-100 p-4">
                            <div className="fs-3 mb-3"><img src={dataImage} alt="" /></div>
                            <h5 className="fw-semibold">Multi–Channel Access</h5>
                            <p className="text-muted">
                                Parents can choose from a variety of secure payment methods, while schools benefit from real-time tracking and comprehensive invoicing tools.This approach helps everyone stays informed.
                            </p>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="col-lg-4 col-md-6">
                        <div className="border rounded-5 shadow-sm h-100 p-4">
                            <div className="fs-3 mb-3"><img src={diagramImage} alt="" /></div>
                            <h5 className="fw-semibold">Dynamic Reporting & Reminders</h5>
                            <p className="text-muted">
                                With a smart financial dashboard, school administrators receive up-to-date reports and automated balance reminders. This proactive approach minimizes late payments
                            </p>
                        </div>
                    </div>

                    {/* Card 6 */}
                    <div className="col-lg-4 col-md-6">
                        <div className="border rounded-5 shadow-sm h-100 p-4">
                            <div className="fs-3 mb-3"><img src={bubbleImage} alt="" /></div>
                            <h5 className="fw-semibold">Reconciliation for accuracy</h5>
                            <p className="text-muted">
                                Our Automated Reconciliation solution is designed to streamline your financial processes, ensuring that your records are always aligned and accurate, while saving you time and reducing the risk of human error.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
