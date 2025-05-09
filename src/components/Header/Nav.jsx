import React, { useState } from 'react'
import styles from "../Header/nav.module.css"
import logo from "../../assets/nav.png"
import menuOne from '../../assets/nav/menu-one.svg'
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
                        <img src={menuOne} alt="" />
                    </div>

                    {/* Nav Items */}
                    <div className={`${styles.navItems} ${menuOpen ? styles.showMenu : ''}`}>
                        <span><a href="/" className="text-decoration-none text-black">Home</a></span>
                        <span><a href="/pricing" className="text-decoration-none text-black">Pricing</a></span>
                        <span><a href="/school-revs" className="text-decoration-none text-black">SchoolRevs</a></span>
                    </div>

                    <div className={styles.divButton}>
                        <button className={`btn mx-3 ${styles.btnCustomOne}`}>School login</button>
                        <button className={styles.btnCustom}>School Sign up</button>
                    </div>
                </div>
            </header>
            <MobileNav menuOpen={menuOpen} />
        </div>
    )
}

export default Header



