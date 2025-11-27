import { useState } from 'react'
import './ProjectsSection.css'

function ProjectsSection() {
  const [openDropdown, setOpenDropdown] = useState(null)

  const toggleDropdown = (project) => {
    setOpenDropdown(openDropdown === project ? null : project)
  }

  return (
    <section id="proyectos" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Proyectos destacados</h2>
        <div className="projects-content">
          <div className="projects-list">
            <div className="project-item">
              <button 
                className={`project-title ${openDropdown && openDropdown !== 'style-finder' ? 'project-title-inactive' : ''}`}
                onClick={() => toggleDropdown('style-finder')}
              >
                Style Finder
              </button>
              {openDropdown === 'style-finder' && (
                <div className="project-dropdown">
                  <p className="project-role">
                    <span className="project-role-label">Mi rol en el proyecto:</span>
                    <span className="project-role-value"> Back-end</span>
                  </p>
                  <ul className="project-tasks">
                    <li>Almacenamiento de datos con microsoft Access</li>
                    <li>Diseño de flujo de datos</li>
                  </ul>
                </div>
              )}
            </div>
            <div className="project-divider"></div>
            <div className="project-item">
              <button 
                className={`project-title ${openDropdown && openDropdown !== 'malar' ? 'project-title-inactive' : ''}`}
                onClick={() => toggleDropdown('malar')}
              >
                Malar.IA
              </button>
              {openDropdown === 'malar' && (
                <div className="project-dropdown">
                  <p className="project-role">
                    <span className="project-role-label">Mi rol en el proyecto:</span>
                    <span className="project-role-value"> Back-end</span>
                  </p>
                  <ul className="project-tasks">
                    <li>Infraestructura de datos</li>
                    <li>Almacenamiento en servidores</li>
                    <li>Diseño de API</li>
                  </ul>
                </div>
              )}
            </div>
            <div className="project-divider"></div>
            <div className="project-item">
              <button 
                className={`project-title ${openDropdown && openDropdown !== 'dihycare' ? 'project-title-inactive' : ''}`}
                onClick={() => toggleDropdown('dihycare')}
              >
                DiHy Care
              </button>
              {openDropdown === 'dihycare' && (
                <div className="project-dropdown">
                  <p className="project-role">
                    <span className="project-role-label">Mi rol en el proyecto:</span>
                    <span className="project-role-value"> Back-end</span>
                  </p>
                  <ul className="project-tasks">
                    <li>Infraestructura de datos</li>
                    <li>Almacenamiento en servidores</li>
                    <li>Diseño de API</li>
                    <li>Conexion con API´s externas</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          {openDropdown === 'style-finder' && (
            <div className="project-detail">
              <h3 className="project-detail-title">Style Finder</h3>
              <div className="project-detail-line"></div>
              <p className="project-detail-description">
                Asistente de moda virtual que facilita el vestirse en el dia a dia, asociando colores segun el circulo cromatico y el clima actual
              </p>
              <div className="project-detail-image-container">
                <img src="/style.png" alt="Style Finder" className="project-detail-image" />
              </div>
            </div>
          )}
          {openDropdown === 'malar' && (
            <div className="project-detail">
              <h3 className="project-detail-title">Malar.IA</h3>
              <div className="project-detail-line"></div>
              <p className="project-detail-description">
                Aplicacion destinada a los medicos de frontera para la rapida deteccion de cuadros de malaria por una foto de globulos rojos
              </p>
              <div className="project-detail-image-container">
                <img src="/sangre.png" alt="Malar.IA" className="project-detail-image" />
              </div>
            </div>
          )}
          {openDropdown === 'dihycare' && (
            <div className="project-detail">
              <h3 className="project-detail-title">DiHy Care</h3>
              <div className="project-detail-line"></div>
              <p className="project-detail-description">
                Facilita el registro personal de datos diarios para las personas con diabetes e hipertension.
              </p>
              <div className="project-detail-image-container">
                <img src="/dihy.png" alt="DiHy Care" className="project-detail-image" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection

