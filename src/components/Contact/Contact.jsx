import { React, useState } from 'react';
import styles from './Contact.module.scss';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const [name, setName] = useState('');;
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('');

  function sendEmail(e) {
    e.preventDefault();
    if(name === '' || email === '' || message === '') {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send('service_jcixtyi', 'template_cyl5wzt', templateParams, 'xPKefn8RamD01SomW')
    .then((res) => {
      console.log('Email enviado', res.status, res.text)
      setName('');
      setEmail('');
      setMessage('');
    }, (err) => {
      console.log("erro", err)
    })
  }

  return (
    <div className={styles.contactContainer} id="contact">
      <h2 class={styles.contactSubtitle}>Contact </h2>

      <form className={styles.form} onSubmit={sendEmail}>
        <input 
          className={styles.input}
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        
        <input 
          className={styles.input}
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea 
          className={`${styles.textarea} ${styles.input}`}
          placeholder="Message..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <input className={styles.button} type="submit" value="Enviar" />
      </form>

      <div className={styles.socialBox}>
        <h2 class={styles.contactSubtitle}>Social Links </h2>
        < div className={styles.socialWrapper}>
          <div className={styles.socialItem}>
            <a className={styles.socialLink} href="https://twitter.com/fafaelgomes" target="_blank" rel="noreferrer">
            <img width="48" height="48" src="https://img.icons8.com/ios-filled/48/twitterx--v2.png" alt="twitterx--v2"/>
            <p> Twitter</p>
            </a>
          </div>
          <div className={styles.socialItem}>
            <a className={styles.socialLink} href="https://www.linkedin.com/in/rafael-gomes-tregelas/" target="_blank" rel="noreferrer">
            <img width="48" height="48" src="https://img.icons8.com/color/48/linkedin-2--v1.png" alt="linkedin-2--v1"/>
                        <p>Linkedin</p>
            </a>
          </div>
          <div className={styles.socialItem}>
            <a className={styles.socialLink} href="https://github.com/Fafaew" target="_blank" rel="noreferrer">
            <img width="48" height="48" src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/48/external-github-a-web-based-hosting-service-for-version-control-logo-bold-tal-revivo.png" alt="external-github-a-web-based-hosting-service-for-version-control-logo-bold-tal-revivo"/>
            <p>Github</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact 