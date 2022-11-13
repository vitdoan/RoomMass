import React from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();
  };
  return (
    <section id="contact">
      <h2 id="contact_title">Contact Us</h2>

      <div className="container contact__container">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" />
          <button type="submit" className="btn ct_us">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
