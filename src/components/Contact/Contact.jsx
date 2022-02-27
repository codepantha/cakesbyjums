import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <div className="form_container">
        <h4 className="form_heading">Quote / Contact</h4>
        <form className="contact_form" method="post" action="https://formspree.io/f/xyyowrdb">
          <div className="group">
            <label className="label" for="request">Request</label>
            <select className="field" name="request">
              <option value="Quote request / prices">
                Quote request / prices
              </option>
              <option value="Questions about products and services">
                Questions about products and services
              </option>
              <option value="Other">
                Other
              </option>
            </select>
          </div>

          <div className="group">
            <label className="label" for="details">Details</label>
            <textarea className="field" name='message' required></textarea>
          </div>

          <div className="group">
            <label className="label" for="email">Email</label>
            <input className="field" type="email" required name="email" placeholder="jane@doe.com" />
          </div>

          <button type="submit" className="contact_us">Send</button>
        </form>
      </div>
      
    </section>
  )
}

export default Contact