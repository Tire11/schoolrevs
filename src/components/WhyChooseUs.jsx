import React, { useState } from 'react';
// import dropdownImage from '../assets/payment-dropdown.png';
import styles from "./whychooseus.module.css"

const WhyChooseUs = () => {
    const [activeFeature, setActiveFeature] = useState(0);


    const [images, setImages] = useState([
        "dhfvsbnjskm", "bhnjmk,l", "cfcvgbhjnk"
    ])

    const features = [
        {
            title: 'Invoicing & Multi-Channel Payment Access',
            description:
                'Parents can make payments with multiple options while schools have unlimited access to the best invoicing tools',
        },
        {
            title: 'Personalised Payment Deadlines & Balance Reminders',
            description: 'Tailor payment schedules to suit your school’s needs. Stay ahead of due dates with automated reminders.',
        },
        {
            title: 'Easy Financial Reports for Schools',
            description: '',
        },
    ];

    return (
        <div className="container py-5">
            <div className={styles.firstText}>
                <span className="text-warning small fw-semibold mb-3">Why Choose Schoolteller.ng?</span>
            </div>

            <h2 className="fw-bold fs-2 mb-5">
                <span className={styles.heading}>All-in-one solution for <br /> managing school payments</span>
            </h2>

            <div className="col-sm-12">
                <div className="row">
                    <div className="col-md-6">
                        <div className={styles.leftWing}>
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className={`border-start ps-3 mb-4 ${index === activeFeature ? `border-3 border-primary` : 'border-2 border-light'
                                        }`}
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => setActiveFeature(index)}
                                >
                                    <h5
                                        className={`mb-1 ${index === activeFeature ? 'fw-bold text-dark' : 'text-muted'
                                            }`}
                                    >
                                        {feature.title}
                                    </h5>
                                    {index === activeFeature && (
                                        <p className="text-muted small">{feature.description}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className={styles.firstRightWing}>
                            <div
                                className={`bg-light shadow-sm ${styles.secondRightwing}`}
                                style={{
                                    height: '450px',
                                    backgroundColor: '#FAFAFA',
                                    boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.03)',
                                }}
                            >
                                <div className={styles.rightWing}>
                                    <h6 className='pb-4'>Pay</h6>

                                    <select
                                        className="form-select"
                                        style={{
                                            border: '1px solid #7F56D9',
                                            color: '#333',
                                            borderRadius: '8px',
                                        }}
                                    >
                                        <option>Payment Options</option>
                                        <option>USSD</option>
                                        <option>Debit Cards</option>
                                        <option>Payment Pins</option>
                                        <option>Bank Transfers</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;

