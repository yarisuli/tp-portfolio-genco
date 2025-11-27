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
          <img src="/github.png" alt="GitHub" className="hero-image" />
          <img src="/whatsapp.png" alt="WhatsApp" className="hero-image" />
          <img src="/linkedin.png" alt="LinkedIn" className="hero-image" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection

