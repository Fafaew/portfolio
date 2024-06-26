import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import styles from './Navbar.module.scss';
import logo from '../../utils/images/logo.png';
import { FaBars, FaTimes  } from "react-icons/fa";


const Navbar = () => {
  const [clicked, setCliked] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isVisible = prevScrollPos >= currentScrollPos;
      setPrevScrollPos(currentScrollPos);
      document.getElementById('navbar').style.top = isVisible ? '0' : '-100px';
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const handleClick = () => {
    setCliked(!clicked);
    if (!clicked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const handleLinkClick = () => {
    if (clicked) {
      setCliked(false);
      document.body.style.overflow = 'auto';
    }
  };


  return (
    <nav id="navbar" className={styles.navContainer}>
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
              onClick={handleLinkClick}
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
              onClick={handleLinkClick}
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
              onClick={handleLinkClick}
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
              onClick={handleLinkClick}
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
              onClick={handleLinkClick}
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