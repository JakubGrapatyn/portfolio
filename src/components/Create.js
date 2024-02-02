import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Create =() => {

const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_b63n3vj', 'template_cf30jbx', form.current, 'fO1TdZh3GZk6h815H')
    .then((result) => {
        console.log(result.text);
        console.log("wiadomość wysłano")
    }, (error) => {
        console.log(error.text);
    });
};
    return(
        <div className='create'>
        <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input  type="submit" value="Wyślij" />
      </form>
      </div>
    )
};

export default Create;

