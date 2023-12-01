import React from 'react';
import styles from './Navbar.module.scss';
import logo from '../../utils/imagens/logo.png'

const Navbar = () => {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="logo" className={styles.navLogo}/>
      </div>

      <div className={styles.navLinks}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>Home</li>
          <li className={styles.navItem}>Portfolio</li>
          <li className={styles.navItem}>Experience</li>
          <li className={styles.navItem}>About</li>
          <li className={styles.navItem}>Contact</li>
      </ul>
      </div>
    </nav>
  )
}

export default Navbar