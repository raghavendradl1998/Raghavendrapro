
import './contact.css';
import React, { useRef } from 'react';
import {AiOutlineMail} from 'react-icons/ai';
import{FaFacebookMessenger} from 'react-icons/fa';
import{BsWhatsapp} from 'react-icons/bs';

import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9g359ed', 'template_fyynund', form.current, 'zdbYGXLhtS0xcIwra')
      
  e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact_options">
          <article className='contact__option'>

            <AiOutlineMail  className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>raghavendradl1998@gmail.com</h5>
            <a href="mailto:raghavendradl1998@gmail.com">Send a message</a>
            
          </article>



          <article className='contact__option'>

            <FaFacebookMessenger   className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>message </h5>
            <a href="#">Send a message</a>
            
          </article>



          <article className='contact__option'>

            <BsWhatsapp   className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>8050362712</h5>
            <a href="https://api.whatsapp.com/send?phone+=8050362712">Send a message</a>
            
          </article>
        </div>
      {/* END OF THE FORM */}
        <form ref={form} onSubmit = {sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your message' required/>
          <button type="submit" className='btn btn-primary'>Send Message</button>

        </form>
      </div>




    </section>
  )
}

export default Contact