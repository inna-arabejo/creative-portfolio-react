import React, { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

export const Contact = () => {
  const initialValues = {from_name:"", from_email:"", subject:"", message:""}
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  }

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    emailjs.sendForm('service_v8bo3k6', 'template_r58y7ci', form.current, 'A2TEQQhb2W5mICczP')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
    e.target.reset()
  };

  useEffect(() => {
    console.log(formErrors)
    if(Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors])
  const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.from_name) {
      errors.from_name = "A name is required.";
    }
    if (!values.from_email) {
      errors.from_email = "An email is required.";
    } else if (!regex.test(values.from_email)) {
      errors.from_email = "This is not a valid email format."
    }
    if (!values.subject) {
      errors.subject = "A subject is required.";
    }
    if (!values.message) {
      errors.message = "A message is required.";
    }
    return errors;
  }

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
                  <input type="text" name="from_name" className='form-control' placeholder="Enter your name" value={formValues.from_name} onChange={handleChange}/>
                  <p className='form-errors'>
                    { formErrors.from_name }
                  </p>
                </label>
                <label class="input-box">
                  <input type="email" name="from_email" className='form-control' placeholder="Enter your email" value={formValues.from_email} onChange={handleChange}/>
                </label>
                <p className='form-errors'>
                  { formErrors.from_email }
                </p>
                <label class="input-box">
                  <input type="text" name="subject" className='form-control' placeholder="Subject" value={formValues.subject} onChange={handleChange}/>
                </label>
                <p className='form-errors'>
                  { formErrors.subject }
                </p>
                <label class="input-box message-box">
                  <textarea class="form-control" rows="5" name="message" className='form-control' placeholder="Enter your message" value={formValues.message} onChange={handleChange}></textarea>
                </label>
                <p className='form-errors'>
                  { formErrors.message }
                </p>
                <div>
                  <input class="button" type="submit" className='btn btn-info' value="Send Now" />
                </div>
              </form>
                {Object.keys(formErrors).length === 0 && isSubmit ? (
                <div className='ui message success'>Message Sent Successfully</div>) 
                : (
                <pre>{JSON.stringify(undefined, 2)}</pre>
                )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;