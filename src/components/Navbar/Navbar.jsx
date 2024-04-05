import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styles from './Navbar.module.scss';
import logo from '../../utils/images/logo.png';
import { FaBars, FaTimes  } from "react-icons/fa";


const Navbar = () => {
  const [clicked, setCliked] = useState(false);

  const handleClick = () => {
    setCliked(!clicked);
    if (!clicked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };


  return (
    <nav className={styles.navContainer}>
      <Link
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className={styles.logoContainer}
      >
        <img src={logo} alt="logo" className={styles.navLogo}/>
      </Link>
      
      <div>
        <ul className={`${styles.navWrapper} ${clicked ? styles.active : ''}`}>
          <li className={styles.navList}>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={styles.navItem}
            >
              Home
            </Link>
          </li>
          <li className={styles.navList}>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
              className={styles.navItem}
            >
              About
            </Link>
          </li>
          <li className={styles.navList}>
            <Link
              to="experience"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
              className={styles.navItem}
            >
              Experience
            </Link>
          </li>
          <li className={styles.navList}>
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
              className={styles.navItem}
            >
              Portfolio
            </Link>
          </li>
          <li className={styles.navList}>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
              className={styles.navItem}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles.navIcon} onClick={handleClick}>
        <i>{clicked ? <FaTimes /> : <FaBars />}</i>
      </div>
    </nav>
  )
}

export default Navbar