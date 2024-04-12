import React from "react";
import styles from './Portfolio.module.scss'
import crypto from "../../utils/images/portfolioImages/crypto.jpg";
import ecommerce from "../../utils/images/portfolioImages/ecommerce.jpg";
import thermometer from "../../utils/images/portfolioImages/thermometer.jpg";
import dashboard from "../../utils/images/portfolioImages/dashboard.jpg";

const Portfolio = () => {
  return (
    <div className={styles.portfolioContainer} id="portfolio">
      <h2 className={styles.portfolioSubtitle}>Portfolio</h2>
      <div className={styles.portfolioWrapper}>
        
        <div className={styles.portfolioItem}>
          <div className={styles.portfolioBox}>
            <img src={dashboard} alt="dashboard portfolio" className={styles.portfolioImage} />
          </div>
          <h3 className={styles.portfolioLegend}>Dashboard</h3>
          <p>
            A admnistrative panel with metrics and indicators that
            will help the achievement of organizational goals
          </p>
          <div className={styles.portfolioCode}>
            <a href="https://github.com/Fafaew/react-dashboard"
              rel="noreferrer"
              target="_blank"
            >
              <img width="48" height="48" src="https://img.icons8.com/color/48/github-2.png" alt="github-2" />
              <p>Github</p>
            </a>
            <a href="https://github.com/Fafaew/react-dashboard"
              rel="noreferrer"
              target="_blank"
            >
              <img width="48" height="48" src="https://img.icons8.com/color/48/under-computer.png" alt="under-computer"/>
              <p>Live Demo</p>
            </a>
          </div>
        </div>

        <div className={styles.portfolioItem}>
          <div className={styles.portfolioBox}>
            <img src={ecommerce} alt="dashboard portfolio" className={styles.portfolioImage} />
          </div>
          <h3 className={styles.portfolioLegend}>E-commerce</h3>
          <p>
            A Website site to buy and sell of products and services all over the world
          </p>
          <div className={styles.portfolioCode}>
            <a href="https://github.com/Fafaew/react-ecommerce"
              rel="noreferrer"
              target="_blank"
            >
              <img width="48" height="48" src="https://img.icons8.com/color/48/github-2.png" alt="github-2" />
              <p>Github</p>
            </a>
            <a href="https://reactecommerceapp.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              <img width="48" height="48" src="https://img.icons8.com/color/48/under-computer.png" alt="under-computer"/>
              <p>Live Demo</p>
            </a>
          </div>
        </div>

        <div className={styles.portfolioItem}>
          <div className={styles.portfolioBox}>
            <img src={crypto} alt="dashboard portfolio" className={styles.portfolioImage} />
          </div>
          <h3 className={styles.portfolioLegend}>Crypto Tracker</h3>
          <p>
            Manage your investments with this tracker for over 1000 cryptocurrencies. Developed using CoinGecko API
          </p>
          <div className={styles.portfolioCode}>
            <a href="https://github.com/Fafaew/react-cryptocurrency-tracker"
              rel="noreferrer"
              target="_blank"
            >
              <img width="48" height="48" src="https://img.icons8.com/color/48/github-2.png" alt="github-2" />
              <p>Github</p>
            </a>
            <a href="https://cryptocurr-react.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              <img width="48" height="48" src="https://img.icons8.com/color/48/under-computer.png" alt="under-computer"/>
              <p>Live Demo</p>
            </a>
          </div>
        </div>

        <div className={styles.portfolioItem}>
          <div className={styles.portfolioBox}>
            <img src={thermometer} alt="dashboard portfolio" className={styles.portfolioImage} />
          </div>
          <h3 className={styles.portfolioLegend}>Weather Location</h3>
          <p>
              Find the local weather forecast now for over 3.5 million
              locations across the globe with OpenWeather API
          </p>
          <div className={styles.portfolioCode}>
            <a href="https://github.com/Fafaew/weather-location"
              rel="noreferrer"
              target="_blank"
            >
              <img width="48" height="48" src="https://img.icons8.com/color/48/github-2.png" alt="github-2" />
              <p>Github</p>
            </a>
            <a href="https://fafaew.github.io/weather-location/"
              rel="noreferrer"
              target="_blank"
            >
              <img width="48" height="48" src="https://img.icons8.com/color/48/under-computer.png" alt="under-computer"/>
              <p>Live Demo</p>
            </a>
          </div>
        </div>

        

      </div>
    </div>
  );
};

export default Portfolio;
