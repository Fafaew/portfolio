import React from 'react';
import styles from './About.module.scss';
import picture from '../../utils/images/picture.jpg';
import { FaNode, FaReact, FaShopify } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";



const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.pictureWrapper}>
        <img className={styles.pictureImage} src={picture} alt="Author" />
      </div>

      <div className={styles.aboutWrapper}>
        <h1 className={styles.aboutHeading}>about me</h1>
        <p>
          Hello everyone! I'm Rafael Gomes, a web developer from Minas Gerais,
          Brazil. I have been developing websites for over 2 years.
        </p>
        <p>Apart from coding, some other activities that I love to do:</p>
        <div className={styles.aboutMarker}></div>
        <p className={styles.aboutText}>Play Video Games</p>
        <div className={styles.aboutMarker}></div>
        <p className={styles.aboutText}>Practice Sports</p>
        <div className={styles.aboutMarker}></div>
        <p className={styles.aboutText}>Learn about financial market</p>
        <br />
        <p>Technologies that I use:</p>
        <div className="aboutIcons">
          <FaNode className="icon" />
          <RiJavascriptFill className="icon" />
          <FaReact className="icon" />
          <FaShopify className="icon" />
        </div>
      </div>

    </div>
  )
}

export default About