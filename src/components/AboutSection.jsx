import './AboutSection.css'

function AboutSection() {
  return (
    <section id="acerca-de-mi" className="about-section">
      <div className="about-container">
        <h2 className="about-title">Acerca de mi</h2>
        <div className="about-content">
          <div className="about-list">
            <h3 className="about-subtitle">
              <span className="typing-text">Hola Mundo!</span>
            </h3>
            <ul className="about-items">
              <li>Programo desde que tengo 7 años</li>
              <li>Busco aprender nuevas tecnologias</li>
              <li>Apasionada por el descubrimiento</li>
              <li>Velo por la estructuración y optimización</li>
              <li>Aprendí a ser disciplinada a través<br />de la música</li>
            </ul>
          </div>
          <div className="about-image-container">
            <img src="/bateria.png" alt="Batería" className="about-image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

