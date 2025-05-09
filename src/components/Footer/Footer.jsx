import React from 'react'
import schooltellerLogo from '../../assets/image 2.png'
import twitter from '../../assets/Frame.png'
import linkedIn from '../../assets/bxl-linkedin.svg.png'
import facebook from '../../assets/bxl-facebook.svg.png'
import instagram from '../../assets/Frame (1).png'
import sideLogo from '../../assets/group7.png'
import styles from "./footer.module.css"

const Footer = () => {

    return (
        <>
            <div className={`d-flex flex-column flex-md-row justify-content-between align-items-center ${styles.cardGreat}`}>
                <div className={`mb-4 mb-md-0 ${styles.elipseBackImage}`}>
                    <h2>Effortless Payment Collection & Reconciliation</h2>
                    <p>Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
                    <div className={styles.button}>
                        <button>Get Started</button>
                    </div>
                </div>

                {/* Icon Part */}
                <div className='d-flex flex-column align-items-end'>
                    <img src={sideLogo} alt="Icons" className={styles.sideLogo} />
                </div>
            </div>

            {/* Footer Section */}
            <footer className="container py-5">
                <div className={styles.align}>
                    <div className="col-sm-12">
                        <div className="row g-5 mx-0">
                            {/* Logo and Tagline */}
                            <div className={`col-md-3 mb-4 ${styles.littleLogo}`}>
                                <img src={schooltellerLogo} className="img-fluid" alt="" />
                                <p className="mt-2 text-muted small">School financial <br /> management made easy</p>
                            </div>

                            {/* Quick Links */}
                            <div className={`col-md-3 mb-4 ${styles.quickLinks}`}>
                                <h6 className="fw-bold">Quick Links</h6>
                                <ul className="list-unstyled text-muted small">
                                    <li><a className='text-decoration-none text-muted' href="/">Home</a></li>
                                    <li><a className='text-decoration-none text-muted' href="/pricing">Pricing</a></li>
                                    <li><a className='text-decoration-none text-muted' href="/school-revs">SchoolRevs</a></li>
                                </ul>
                            </div>

                            {/* Contact */}
                            <div className={`col-md-3 mb-4 ${styles.contact}`}>
                                <h6 className="fw-bold">Contact</h6>
                                <p className="text-muted small mb-1">support@schoolteller.ng</p>
                                <p className="text-muted small">12, Ajisafe Street, Ikeja GRA, <br /> Ikeja, Lagos, Nigeria</p>
                            </div>

                            {/* Phone Numbers */}
                            <div className={`col-md-3 mb-4 text-r ${styles.phone}`}>
                                <h6 className="fw-bold">Phone</h6>
                                <ul className="list-unstyled text-muted small">
                                    <li>+234-012914298</li>
                                    <li>+234-705-394-4592</li>
                                    <li>+234-705-394-4594</li>
                                    <li>+1-888-705-0968</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="d-flex justify-content-between pt-3 mt-4 flex-wrap mx-4 flex-sm-row flex-column-reverse mb-3">
                    <small className="text-muted">Copyright © 2025 Revocube. All Rights Reserved</small>
                    <div className={`d-flex gap-3 fs-3 mb-3`}>
                        <img src={twitter} className="img-fluid" alt="" style={{ height: "20px", paddingTop: "5px" }} />
                        <img src={linkedIn} className="img-fluid" alt="" />
                        <img src={facebook} className="img-fluid" alt="" />
                        <img src={instagram} className="img-fluid" alt="" />
                    </div>
                </div>
            </footer >
        </>
    );
};

export default Footer

