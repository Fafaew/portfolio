import React from 'react';
import styles from './About.module.scss';
import picture from '../../utils/images/picture.jpg';
import { FaNode, FaReact, FaShopify } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";

const About = () => {
  const workYears = new Date().getFullYear() - 2020

  return (
    <div className={styles.aboutContainer} id="about">
      <div className={styles.pictureWrapper}>
        <img className={styles.pictureImage} src={picture} alt="Author" />
      </div>

      <div className={styles.aboutWrapper}>
        <div className={styles.aboutIntro}>
          <h2 className={styles.aboutSubtitle}>About </h2>
          <p>
            Hello everyone, I'm Rafael Gomes, a passionate frontend developer, based in Minas Gerais, Brazil.
          </p>
          <p>
            With over {workYears} years of hands-on experience, i've worked in multinational companies and e-commerce platforms, acquiring precious insights, best practices and trends.
          </p>
          <p>
            With modern and captivating websites, my goal is work in innovative projects to deliver immersive user experiences.
          </p>
          <p>
            Let's collaborate and transform your digital presence into a captivating journey!
          </p>
        </div>
        <div className={styles.aboutIntro}>
          <h2 className={styles.aboutSubtitle}>Hobbies </h2>
          <p>Apart from coding, some other activities that I love to do:</p>
          <div className={styles.aboutActivities}>
            <img width="26" height="26" src="https://img.icons8.com/color/48/controller.png" alt="controller"/>
            <p className={styles.aboutText}>Play Video Games</p>
          </div>
          <div className={styles.aboutActivities}>
          <img width="26" height="26" src="https://img.icons8.com/color/48/deadlift-skin-type-4.png" alt="deadlift-skin-type-4"/>
            <p className={styles.aboutText}>Workout</p>
          </div>
          <div className={styles.aboutActivities}>
            <img width="26" height="26" src="https://img.icons8.com/color/48/combo-chart--v1.png" alt="combo-chart--v1"/>
            <p className={styles.aboutText}>Learn about financial market</p>
          </div>
          <div className={styles.aboutActivities}>
            <img width="26" height="26" src="https://img.icons8.com/color/48/tableware.png" alt="tableware"/>
            <p className={styles.aboutText}>Try new foods</p>
          </div>
        </div>
        <div className={styles.aboutIntro}>
          <h2 className={styles.aboutSubtitle}>Skills </h2>
          <p>Technologies that I use:</p>
          <div className={styles.aboutIconsWrapper}>
            <FaNode className={`${styles.aboutIcons} ${styles.nodeIcon}`} />
            <RiJavascriptFill className={`${styles.aboutIcons} ${styles.jsIcon}`} />
            <FaReact className={`${styles.aboutIcons} ${styles.reactIcon}`} />
            <FaShopify className={`${styles.aboutIcons} ${styles.shopifyIcon}`} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default About