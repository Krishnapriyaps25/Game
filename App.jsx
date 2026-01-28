import { useState } from 'react'
import './App.css'

function App() {
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const [playerName, setPlayerName] = useState('');
  const [score, setScore] = useState('');
  const [submittedScore, setSubmittedScore] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setError('Please fill all registration fields');
      return;
    }
    setSubmitted(true);
    setError('');

    // Reset form
    setUsername('');
    setEmail('');
    setPassword('');
  };

  const handleScoreSubmit = (e) => {
    e.preventDefault();
    if (!playerName || !score) {
      alert('Please enter player name and score');
      return;
    }
    setSubmittedScore(true);
    setPlayerName('');
    setScore('');
  };

  return (
    <>
      <h1>Eternal Realms - Player Portal</h1>

      {/* Registration Form */}
      <div className="card">
        <h2>Player Registration</h2>
        {error && <div className="error">{error}</div>}
        {submitted && (
          <div className="success">
            Welcome to Eternal Realms, {username}!
          </div>
        )}

        <form onSubmit={handleRegister}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setSubmitted(false);
              }}
              placeholder="Enter your game username"
            />
          </div>

          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setSubmitted(false);
              }}
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setSubmitted(false);
              }}
              placeholder="Create password"
            />
          </div>

          <button type="submit">Join Eternal Realms</button>
        </form>
      </div>

      <div className="card">
        <h2>Submit Battle Score</h2>
        {submittedScore && (
          <div className="success">
            Score submitted for {playerName}!
          </div>
        )}

        <form onSubmit={handleScoreSubmit}>
          <div>
            <label>Player Name:</label>
            <input
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              placeholder="Your username"
            />
          </div>

          <div>
            <label>Battle Score:</label>
            <input
              type="number"
              value={score}
              onChange={(e) => setScore(e.target.value)}
              placeholder="Enter score"
            />
          </div>

          <button type="submit">Submit Score</button>
        </form>
      </div>

    </>
  )
}

export default App
