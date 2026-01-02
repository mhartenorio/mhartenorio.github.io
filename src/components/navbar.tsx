import './navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-item logo-cell">
        <span>⦧O'0 mhar tenorio ᝰ.ᐟ</span>
      </div>
      <div className="nav-menu">
        <a className="nav-item" href='https://www.linkedin.com/in/mhartenorio/' target='_blank'>
          resume
        </a>
        <a className="nav-item" href='https://github.com/mhartenorio' target='_blank'>
          tech projects
        </a>
        <a className="nav-item" href='https://mhar.squarespace.com' target='_blank'>
          art &amp; design
        </a>
      </div>
    </nav>
  )
}