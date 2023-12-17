import React from 'react';
import styles from './About.module.scss';
import picture from '../../utils/images/picture.jpg';
import { FaNode, FaReact, FaShopify } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { IoGameControllerOutline } from "react-icons/io5";
import { GiWeightLiftingUp } from "react-icons/gi";





const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.pictureWrapper}>
        <img className={styles.pictureImage} src={picture} alt="Author" />
      </div>

      <div className={styles.aboutWrapper}>
        <h1 className={styles.aboutHeading}>about me</h1>
        <p className={styles.aboutIntro}>
          Hello everyone! I'm Rafael Gomes, a web developer from Minas Gerais,
          Brazil. I have been developing websites for over 2 years.
        </p>
        <br />
        <p className={styles.aboutIntro}>Apart from coding, some other activities that I love to do:</p>
        <br />
        <div className={styles.aboutActivities}>
          <IoGameControllerOutline />
          <p className={styles.aboutText}>Play Video Games</p>
        </div>
        <div className={styles.aboutActivities}>
          <GiWeightLiftingUp />
          <p className={styles.aboutText}>Practice Sports</p>
        </div>
        <div className={styles.aboutActivities}>
          <FaBookOpenReader />
          <p className={styles.aboutText}>Learn about financial market</p>
        </div>
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