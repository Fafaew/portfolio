import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Link } from 'react-scroll';
import styles from './Header.module.scss';
import { TypeAnimation } from 'react-type-animation';


const Header = () => {
  const [init, setInit] = useState(false);
  const [clicked, setCliked] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, [init]);

  const particlesLoaded = (container) => {
    return;
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#00",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  const handleLinkClick = () => {
    if (clicked) {
      setCliked(false);
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <>
      <Particles
        id={styles.tsparticles}
        particlesLoaded={particlesLoaded}
        options={options}
      />
      <div className={styles.headerWraper} id="home">
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
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
            className={styles.contactButton}
            onClick={handleLinkClick}
          >
            Contact me
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header