import React from 'react';
import styles from './Experience.module.scss'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
  return (
    <div className={styles.experienceContainer} id="experience">
      <h2 class={styles.experienceSubtitle}>Experience </h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan 2020 - Nov 2020"
          iconStyle={{ background: '#4EB2C7', color: '#fff' }}
          contentStyle={{ background: '#4EB2C7', color: '#000' }}
        >
          <h3 className="vertical-timeline-element-title">Freelancer Software Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Minas Gerais, BR</h4>
          <ul className={styles.experienceActivities}>
            <li>Landing Pages;</li>
            <li>Web applications for small business</li>
          </ul>
          <p className={styles.experienceTechnologies}>
            Technologies: Node, JavaScript, Bootstrap, CSS;
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Nov 2020 - Feb 2021"
          iconStyle={{ background: '#80E4F9', color: '#fff' }}
          contentStyle={{ background: '#80E4F9', color: '#000' }}
        >
          <h3 className="vertical-timeline-element-title">Software Developer Intern - Teknisa</h3>
          <h4 className="vertical-timeline-element-subtitle">Minas Gerais, BR</h4>
          <ul className={styles.experienceActivities}>
            <li>Web and mobile applications for the food sector;</li>
            <li>Code refactor</li>
            <li>Routines in Backend and SQL Database</li>
          </ul>
          <p className={styles.experienceTechnologies}>
            Technologies: PHP, JavaScript, Vue.Js;
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Feb 2021 - May 2022"
          iconStyle={{ background: '#4EB2C7', color: '#fff' }}
          contentStyle={{ background: '#4EB2C7', color: '#000' }}
        >
          <h3 className="vertical-timeline-element-title">Software Developer - Ci&T</h3>
          <h4 className="vertical-timeline-element-subtitle">Sao Paulo - BR</h4>
          <ul className={styles.experienceActivities}>
            <li>Web applications for global educational companies;</li>
            <li>Focus on deliveries using agile methodologies</li>
          </ul>
          <p className={styles.experienceTechnologies}>
            Technologies: PHP, Drupal, JavaScript, Sass;
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2022 - Present"
          iconStyle={{ background: '#80E4F9', color: '#fff' }}
          contentStyle={{ background: '#80E4F9', color: '#000' }}
        >
          <h3 className="vertical-timeline-element-title">Software Developer - Grupo Soma</h3>
          <h4 className="vertical-timeline-element-subtitle">Rio de Janeiro, BR</h4>
          <ul className={styles.experienceActivities}>
            <li>Web applications for the fashion sector;</li>
            <li>Development and maintenance of international e-commerces;</li>
            <li>Routines in Backend</li>
            <li>Focus on deliveries using agile methodologies;</li>
          </ul>
          <p className={styles.experienceTechnologies}>
            Technologies: Node, JavaScript, React, Shopify, Sass, Tailwind;
          </p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}

export default Experience