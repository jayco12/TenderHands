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
      <button className="hero-button">Get in Touch</button>
    </div>
  </section>
);
