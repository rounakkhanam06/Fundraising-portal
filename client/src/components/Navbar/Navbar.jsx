import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

function Navbar({ isLoggedIn, onLogout }) {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${isLandingPage ? 'navbar-transparent' : 'navbar-colored'}`}>
      <div className="nav-brand">Fund<span>R</span>aising</div>

  
      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

   
      <div className={`nav-links ${menuOpen ? 'show' : ''} ${isLandingPage ? 'transparent-bg' : 'colored-bg'}`}>
        <Link to="/" onClick={handleLinkClick}>Home</Link>
        {isLoggedIn && <Link to="/dashboard" onClick={handleLinkClick}>Dashboard</Link>}
        {isLoggedIn && <Link to="/leaderboard" onClick={handleLinkClick}>Leaderboard</Link>}
        {isLoggedIn ? (
          <button className="log-btn" onClick={() => { onLogout(); handleLinkClick(); }}>Logout</button>
        ) : (
          location.pathname !== '/login' && (
            <Link to="/login" onClick={handleLinkClick} className='log-btn'>Login</Link>
          )
        )}
      </div>
    </nav>
  );
}

export default Navbar;




