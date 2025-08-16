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
              <p>Professional, compassionate support when you need it most.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);