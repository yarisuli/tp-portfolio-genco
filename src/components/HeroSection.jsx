import './HeroSection.css'

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Iara Genco</h1>
          <p className="hero-subtitle">BackEnd Developer<span className="cursor-blink">_</span></p>
        </div>
        <div className="hero-images">
          <a href="https://github.com/yarisuli" target="_blank" rel="noopener noreferrer" className="hero-image-link">
            <img src="/github.png" alt="GitHub" className="hero-image" />
          </a>
          <img src="/whatsapp.png" alt="WhatsApp" className="hero-image" />
          <a href="https://www.linkedin.com/in/iara-genco/" target="_blank" rel="noopener noreferrer" className="hero-image-link">
            <img src="/linkedin.png" alt="LinkedIn" className="hero-image" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

