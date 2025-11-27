import './Header.css'

function Header() {
  return (
    <header className="header">
      <nav className="header-nav">
        <button className="nav-button">Acerca de mi</button>
        <button className="nav-button">Habilidades</button>
        <button className="nav-button">Proyectos</button>
        <button className="nav-button">Hoja de vida</button>
        <button className="nav-button contact-button">Contacto</button>
      </nav>
    </header>
  )
}

export default Header

