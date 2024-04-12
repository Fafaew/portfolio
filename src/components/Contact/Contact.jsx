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
    <div className={styles.container} id="contact">
      <h1 className="title">Contato</h1>

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

    </div>
  );
}

export default Contact 