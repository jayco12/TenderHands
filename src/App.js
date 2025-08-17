import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';

const servicesData = [
  { 
    title: 'Personal Care Assistance', 
    description: "Providing help with daily activities such as bathing, dressing, grooming, and mobility to ensure comfort and independence.", 
    img: 'https://images.pexels.com/photos/7551674/pexels-photo-7551674.jpeg' 
  },
  { 
    title: 'Companionship', 
    description: "Offering social interaction, emotional support, and engaging activities to reduce loneliness and promote well-being.", 
    img: 'https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg' 
  },
  { 
    title: 'Medication Reminders',
    description: "Helping clients take medications on time and correctly, ensuring adherence to prescribed schedules and maintaining health.", 
    img: 'https://images.pexels.com/photos/7551652/pexels-photo-7551652.jpeg' 
  },
  { 
    title: 'Child Care',
    description: "Providing safe, nurturing, and educational care for children, supporting both learning and emotional growth.", 
    img: 'https://images.pexels.com/photos/4934138/pexels-photo-4934138.jpeg' 
  },
  { 
    title: 'Elderly Care', 
    description: "Delivering compassionate care tailored to the needs of seniors, including health monitoring, assistance, and companionship.", 
    img: 'https://images.pexels.com/photos/19882274/pexels-photo-19882274.jpeg' 
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="nav-logo">Tender Hands LLC</h1>
        <ul className={`nav-links ${isOpen ? 'nav-active' : ''}`}>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <div className={`line ${isOpen ? 'rotate1' : ''}`}></div>
          <div className={`line ${isOpen ? 'fade' : ''}`}></div>
          <div className={`line ${isOpen ? 'rotate2' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
};


const Hero = ({ data }) => (
  <section className="hero">
    <video autoPlay muted loop className="hero-video">
      <source src={data.video} type="video/mp4" />
    </video>
    <div className="hero-overlay">
      <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="hero-title">
        {data.title}
      </motion.h1>
      <p className="hero-subtitle">{data.subtitle}</p>
<button
  className="hero-button"
  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
>
  Get in Touch
</button>    </div>
  </section>
);

const Services = ({ services }) => (
  <section className="services" id="services">
    <div className="services-container">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, i) => (
          <div key={i} className="service-card">
            <img src={service.img} alt={service.title} className="service-img" />
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);


const About = () => (
  <section className="about" id="about">
    <div className="about-container">
      <img src="https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg" alt="Caregiver" className="about-img" />
      <div className="about-text">
             <h2>About Us</h2>
        <p>At Tender Hands LLC, we are dedicated to providing high-quality, compassionate care to individuals and families. Our mission is to make sure every client feels supported, respected, and cared for like family.</p>
        <p>With experienced caregivers and a heart for service, we aim to enrich lives and provide peace of mind.</p>
        <p>We also offer educational resources, wellness tips, and personalized care plans for every client.</p>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="testimonials" id="testimonials">
    <div className="testimonials-container">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-cards">
        <div className="testimonial-card">
          <p>“Tender Hands LLC provided amazing care for my mother. We couldn’t be happier!”</p>
          <span>- Sarah W.</span>
        </div>
        <div className="testimonial-card">
          <p>“The caregivers are compassionate, professional, and truly caring.”</p>
          <span>- James T.</span>
        </div>
      </div>
    </div>
  </section>
);

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
      <div className="contact-info">
        <h3>Our Address</h3>
        <p>8303 Richard Court.</p>
        <p>Brandywine, Maryland, 20613</p>
        <p>Email: bukeety26@yahoo.com</p>
        <p>Phone: (301) 792-5070</p>
      </div>
    </div>
  </section>
);



const Footer = () => (
  <footer className="footer">
    <p>&copy; {new Date().getFullYear()} Tender Hands LLC. All rights reserved.</p>
  </footer>
);

export default function App() {
  const heroData = {
    title: 'Tender Hands LLC',
    subtitle: 'Compassionate care tailored to your family’s needs.',
    video: 'https://videos.pexels.com/video-files/7522220/7522220-uhd_2560_1440_25fps.mp4',
  };

  return (
    <div>
      <Navbar />
      <Hero data={heroData} />
      <Services services={servicesData} />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
