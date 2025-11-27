import './SkillsSection.css'

function SkillsSection() {
  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">Mis habilidades</h2>
        <div className="skills-grid">
          <div className="skill-item">
            <h3 className="skill-item-title">FrontEnd</h3>
            <div className="skill-card">
              <img src="/frontend.png" alt="FrontEnd" className="skill-image" />
            </div>
          </div>
          <div className="skill-item">
            <h3 className="skill-item-title">BackEnd</h3>
            <div className="skill-card">
              <img src="/backend.png" alt="BackEnd" className="skill-image" />
            </div>
          </div>
          <div className="skill-item">
            <h3 className="skill-item-title">Tools & Web</h3>
            <div className="skill-card">
              <img src="/tools.png" alt="Tools & Web" className="skill-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection

