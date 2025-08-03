
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('API is running');
});


app.get('/api/user', (req, res) => {
  res.json({
    name: 'Disha Singh',
    referralCode: 'dish2025',
    totalDonations: 1250
  });
});


app.get('/api/leaderboard', (req, res) => {
  res.json([
    { name: 'Disha Singh', points: 1250 },
    { name: 'Aditi Sharma', points: 980 },
    { name: 'Rahul Verma', points: 760 },
    {name: 'Jiya Rao', points: 700 },
    {name: 'Satyam Sai', points: 660}
  ]);
});


const PORT = 8080;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));
