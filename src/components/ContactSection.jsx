import './ContactSection.css'

function ContactSection() {
  return (
    <section id="contacto" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contacto</h2>
        <div className="contact-content">
          <div className="contact-image-container">
            <img src="/iara.png" alt="Iara Genco" className="contact-image" />
          </div>
          <div className="contact-info">
            <h1 className="contact-name">Iara Genco</h1>
            <p className="contact-role">BackEnd Developer</p>
            <div className="contact-social">
              <a href="https://github.com/yarisuli" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                <img src="/github.png" alt="GitHub" className="contact-social-image" />
              </a>
              <img src="/whatsapp.png" alt="WhatsApp" className="contact-social-image" />
              <a href="https://www.linkedin.com/in/iara-genco/" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                <img src="/linkedin.png" alt="LinkedIn" className="contact-social-image" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

