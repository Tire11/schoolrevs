import React from 'react'
import styles from '../Header/mobilenav.module.css';


const MobileNav = ({ menuOpen }) => {
    return (
        <div className={`${styles.parentMobileNav} ${menuOpen ? styles.sliderDown : styles.sliderUp}`}>
            <div className={styles.mobileHeader}>
                <div>
                    <p><a href="/" className="text-decoration-none text-black">Home</a></p>
                    <p><a href="/pricing" className="text-decoration-none text-black">Pricing</a></p>
                    <p><a href="/school-revs" className="text-decoration-none text-black">SchoolRevs</a></p>
                </div>

                <div className={styles.divButton}>
                    <button className={styles.buttonOne}>Get Schoolteller Free</button>
                    <button className={styles.buttonTwo}>School Sign up</button>
                </div>
            </div>
        </div>
    );
};

export default MobileNav
