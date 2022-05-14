import React from "react";

function Contact() {
  return (
    <section class="contact">
      <div class="container">
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
              <form action="https://formspree.io/f/xnqwlaaj" method="POST">
                <label class="input-box">
                  <input type="text" name="name" placeholder="Enter your name"/>
                </label>
                <label class="input-box">
                  <input type="text" name="email" placeholder="Enter your email"/>
                </label>
                <label class="input-box">
                  <input type="text" name="subject" placeholder="Subject"/>
                </label>
                <label class="input-box message-box">
                  <textarea class="form-control" rows="5" name="message" placeholder="Enter your message"></textarea>
                </label>
                <div>
                  <input class="button" type="button" value="Send Now" />
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