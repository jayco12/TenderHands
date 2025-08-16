const Contact = () => (
  <section className="contact" id="contact">
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>Have questions or need assistance? Reach out to us today.</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message" rows="4"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  </section>
);
