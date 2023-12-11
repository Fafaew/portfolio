import React from 'react';
import styles from './Header.module.scss';
import { TypeAnimation } from 'react-type-animation';


const Header = () => {
  return (
    <div className={styles.headerWraper}>
      <TypeAnimation
      sequence={[
        'Node',
        1000,
        'JavaScript',
        1000,
        'React',
        1000,
        'Shopify',
        1000
      ]}
      className={styles.typingWrapper}
      wrapper="span"
      speed={30}
      repeat={Infinity}
    />
    <div className={styles.contactWrapper}>
      <a href="/" className={styles.contactButton}>
        Contact me
      </a>
    </div>
    </div>
  )
}

export default Header