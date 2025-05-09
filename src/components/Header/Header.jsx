import React, { useState } from 'react';
import styles from '../Header/header.module.css';
import logo from '../../assets/nav/logo.png';
import menuTwo from '../../assets/nav/menu-two.svg'
import MobileNav from './MobileNav';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (

        <div className={`styles.parentHeader ${menuOpen ? styles.moveDown : styles.moveUp}`}>
            <header className={styles.header}>
                <div className={styles.nav}>
                    <div className={styles.imageDive}>
                        <a href="/"><img src={logo} alt="Logo" width="154px" /></a>
                    </div>

                    {/* Hamburger Icon */}
                    <div className={styles.hamburger} onClick={toggleMenu}>
                        <img src={menuTwo} alt="" />
                    </div>

                    {/* Nav Items */}
                    <div className={`${styles.navItems} ${menuOpen ? styles.showMenu : ''}`}>
                        <span><a href="/" className="text-decoration-none text-white">Home</a></span>
                        <span><a href="/pricing" className="text-decoration-none text-white">Pricing</a></span>
                        <span><a href="/school-revs" className="text-decoration-none text-white">SchoolRevs</a></span>
                    </div>

                    <div className={styles.divButton}>
                        <button className="btn text-white mx-3">School login</button>
                        <button className={styles.btnCustom}>School Sign up</button>
                    </div>
                </div>
            </header>
            <MobileNav menuOpen={menuOpen} />
        </div>

    );
};

export default Header;



