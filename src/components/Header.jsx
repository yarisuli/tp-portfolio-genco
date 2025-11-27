import './Header.css'

function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'auto', block: 'start' })
    }
  }

  return (
    <header className="header">
      <nav className="header-nav">
        <button className="nav-button" onClick={() => scrollToSection('acerca-de-mi')}>Acerca de mi</button>
        <button className="nav-button" onClick={() => scrollToSection('habilidades')}>Habilidades</button>
        <button className="nav-button" onClick={() => scrollToSection('proyectos')}>Proyectos</button>
        <button className="nav-button" onClick={() => scrollToSection('hoja-de-vida')}>Hoja de vida</button>
        <button className="nav-button contact-button" onClick={() => scrollToSection('contacto')}>Contacto</button>
      </nav>
    </header>
  )
}

export default Header

