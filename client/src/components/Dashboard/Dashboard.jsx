import { useEffect, useState } from 'react';
import './Dashboard.css';

function Dashboard() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8080/api/user') 
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!userData) return <p>Failed to load user data.</p>;

  return (
    <div className="dashboard-container">
      <h1>Welcome, {userData.name}</h1>

      <div className="info-cards">
        <div className="info-card">
          <h2>Referral Code</h2>
          <p>{userData.referralCode}</p>
        </div>
        <div className="info-card">
          <h2>Total Donations Raised</h2>
          <p>${userData.totalDonations}</p>
        </div>
      </div>

      <div className="rewards-section">
        <h2>Rewards & Unlockables</h2>
        <ul>
          <li>🏆 Badge: Fundraiser Novice</li>
          <li>🎁 Unlock: Early Access to New Features</li>
          <li>🎉 Reward: Special Thank You Email</li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;


