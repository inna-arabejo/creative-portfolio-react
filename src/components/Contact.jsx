import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v8bo3k6', 'template_r58y7ci', form.current, 'A2TEQQhb2W5mICczP')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
    e.target.reset()
  };

  return (
    <section class="contact">
      <div class="container">
        <h1>Contact</h1>
          <div class="content">
            <div class="left-side">
              <div class="address details">
                <i class="fas fa-map-marker-alt"></i>
                <div class="topic">Address</div>
                <div class="text-one">Dallas, TX</div>
                <div class="text-two">United States</div>
              </div>
              <div class="phone details">
                <i class="fas fa-phone-alt"></i>
                <div class="topic">Phone</div>
                <div class="text-one">(214-682-3521)</div>
              </div>
              <div class="email details">
                <i class="fas fa-envelope"></i>
                <div class="topic">Email</div>
                <div class="text-one">inna.arabejo@gmail.com</div>
              </div>
            </div>
            <div class="right-side">
              <div class="topic-text">Let's Connect!</div>
              <p>If you have any questions or would like to reach out, please feel free to send me a message.</p>
              <form ref={form} onSubmit={sendEmail}>
                <label class="input-box">
                  <input type="text" name="from_name" className='form-control' placeholder="Enter your name"/>
                </label>
                <label class="input-box">
                  <input type="email" name="from_email" className='form-control' placeholder="Enter your email"/>
                </label>
                <label class="input-box">
                  <input type="text" name="subject" className='form-control' placeholder="Subject"/>
                </label>
                <label class="input-box message-box">
                  <textarea class="form-control" rows="5" name="message" className='form-control' placeholder="Enter your message"></textarea>
                </label>
                <div>
                  <input class="button" type="submit" className='btn btn-info' value="Send Now" />
                </div>
                <div id="status" role="alert">
                </div>
              </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;