import './navbar.css';

export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-item">
          <span className="logo-cell">⦧O'0 mhar tenorio ᝰ.ᐟ</span>
          <span className="mobile-scroll-text">
           {"→))"}
          </span>
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
          <a className="nav-item" href='https://mhar.squarespace.com' target='_blank'>
            about me
          </a>
        </div>
      </nav>

    </>
  )
}