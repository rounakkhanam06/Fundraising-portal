# FUNDRAISING_PORTAL (Full Stack)

A simple full-stack intern portal built using React and Node.js + Express.  
It allows interns to log in (dummy login), view their referral code, total donations raised, rewards, and leaderboard.

## Features
### Frontend (React + Vite)
- Dummy login page (no real authentication)
- Dashboard showing:
  - Intern name (fetched from backend)
  - Dummy referral code (fetched from backend)
  - Total donations raised (fetched from backend)
  - Rewards & unlockables section (static)
- Leaderboard page 
- Fully responsive design

### Backend (Node.js + Express)
- REST API endpoint `/api/user` returning dummy intern details
- CORS enabled for frontend-backend communication


## Tech Stack
- Frontend: React, React Router, CSS (Vite)
- Backend: Node.js, Express

---

## Project Structure
FUNDRAISING-PORTAL/
│
├── backend/
│ ├── server.js # Express backend
│ ├── package.json
│
├── frontend/
│ ├── src/ # React components
│ ├── package.json


## Getting Started (Local Setup)

### Prerequisites
- Node.js installed (v14+ recommended)
- Git installed

### Clone Repository
```bash
git clone https://github.com/rounakkhanam06/Fundraising-portal.git
cd fundraising-portal

### Backend setup
cd backend
npm install
node server.js
Backend runs at http://localhost:8080

### Frontend Setup
cd ../frontend
npm install
npm run dev

