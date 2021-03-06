import React from "react";
import styles from "../styles/Navbar.module.scss"
import {useState} from "react";
import {FaBars, FaTimes} from "react-icons/fa";


export const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false)
    return(
        <nav className={styles.nav}>
             <div className={styles.logoContainer}>
                <span className={styles.logo}>Food</span>
            </div>

            <div className={styles.mobileBars} onClick={()=>setNavOpen(true)}>
                <FaBars/>
            </div>

            <ul className={`${navOpen ? styles.menuMobileActive : undefined} ${styles.menu}`}>
                <li className={styles.mobileFaTimes} onClick={()=> setNavOpen(false)}>
                    <FaTimes/>
                </li>
                <li>Home</li>
                <li>Our Menu</li>
                <li>Reservation</li>
                <li>News</li>
                <li>More</li>
            </ul>
        </nav>
    
    )
}

