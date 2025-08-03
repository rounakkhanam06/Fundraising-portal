import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import { checkLoginStatus } from '../../services/authService';

function LandingPage() {
  const navigate = useNavigate();
    const isLoggedIn = checkLoginStatus(); 
  

  const handleClick = () => {
    if (isLoggedIn) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="landing-page">
      <div className="landing-container">
        <div className="overlay">
          <div className="landing-content">
            <h1 className="title">Empower Change. Raise Funds That Matter.</h1>
            <p className="subtitle">
              Join our platform to support meaningful causes. Track your impact and unlock rewards.
            </p>
            <button className="login-btn" onClick={handleClick}>
              Get Started
            </button>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Fundraising Intern Portal. All rights reserved.</p>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#terms">Terms</a>
          <a href="#privacy">Privacy</a>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;

