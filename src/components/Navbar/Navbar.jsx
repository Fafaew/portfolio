import React, { useState } from 'react';
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
      <a href="/" className={styles.logoContainer}>
        <img src={logo} alt="logo" className={styles.navLogo}/>
      </a>
      
      <div>
        <ul className={`${styles.navWrapper} ${clicked ? styles.active : ''}`}>
          <li className={styles.navList}><a className={styles.navItem} href="/">Home</a></li>
          <li className={styles.navList}><a className={styles.navItem} href="/">About</a></li>
          <li className={styles.navList}><a className={styles.navItem} href="/">Experience</a></li>
          <li className={styles.navList}><a className={styles.navItem} href="/">Portfolio</a></li>
          <li className={styles.navList}><a className={styles.navItem} href="/">Contact</a></li>
        </ul>
      </div>

      <div className={styles.navIcon} onClick={handleClick}>
        <i>{clicked ? <FaTimes /> : <FaBars />}</i>
      </div>
    </nav>
  )
}

export default Navbar