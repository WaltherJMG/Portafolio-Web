import React, { useRef, useState } from 'react';
import './Contacto.css';
import Enviar from '../../assets/send-plane-fill.svg';
import emailjs from '@emailjs/browser';

const Contacto = () => {
  const form = useRef(null);
  const [btnText, setBtnText] = useState('Enviar mensaje');
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setBtnText('Enviando...');
    setStatus({ type: 'loading', message: 'Enviando tu mensaje...' });

    const serviceID = 'service_vlbj08j';
    const templateID = 'template_y3bkntx';
    const publicKey = 'IG18hXLWL830J79eH';

    try {
      await emailjs.sendForm(serviceID, templateID, form.current, publicKey || undefined);
      setStatus({ type: 'success', message: 'Mensaje enviado. Te respondere pronto.' });
      form.current.reset();
    } catch {
      setStatus({ type: 'error', message: 'No se pudo enviar. Tambien puedes contactarme por LinkedIn.' });
    } finally {
      setBtnText('Enviar mensaje');
    }
  };

  return (
    <section id="contacto">
      <div className="contact-contain">
        <span className="section-kicker">Conversemos</span>
        <h1><span>Mi</span> contacto</h1>
        <p className="section-intro">Si tienes una oportunidad, practica profesional o proyecto web, enviame un mensaje.</p>
        <div className="form-animation">
          <form ref={form} onSubmit={handleSubmit}>
            <div className="form-contain">
              <div className="form-names">
                <label>
                  Nombre
                  <input type="text" placeholder="Tu nombre" name="name" required />
                </label>
                <label>
                  Asunto
                  <input type="text" placeholder="Motivo del mensaje" name="title" required />
                </label>
              </div>
              <div className="form-email">
                <label>
                  Correo electronico
                  <input type="email" placeholder="tu@email.com" name="email" required />
                </label>
              </div>
              <div className="form-message">
                <label>
                  Mensaje
                  <textarea name="message" rows={8} placeholder="Cuentame sobre el proyecto o la oportunidad" required></textarea>
                </label>
              </div>
            </div>
            <button id="button" className="btn" type="submit" disabled={status.type === 'loading'}>
              <img src={Enviar} alt="" />
              {btnText}
            </button>
            {status.message && <p className={`form-status ${status.type}`}>{status.message}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
