import './navbar.css';

export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-item logo-cell">
          {/* <img src="your-icon.png" alt="icon" className="nav-icon" /> */}
          <span>⦧O'0 MHAR TENORIO ᝰ.ᐟ</span>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">experience</li>
          <li className="nav-item">tech</li>
          <li className="nav-item">art &amp; design</li>
          <li className="nav-item">about me</li>
        </ul>
      </nav>
      {/* <div>→ → →</div> */}
    </>
  )
}