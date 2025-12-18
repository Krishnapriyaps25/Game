import { Routes, Route, Link } from "react-router-dom";
import "./App.css"
/* ---------- PAGES ---------- */

function Home() {
  return (
    <div className="card">
      <h2>Eternal Realms</h2>
      <p>Welcome to the Eternal Realms player portal.</p>
    </div>
  );
}

function Register() {
  return (
    <div className="card">
      <h2>Player Registration</h2>

      <form>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Join Eternal Realms</button>
      </form>
    </div>
  );
}

function SubmitScore() {
  return (
    <div className="card">
      <h2>Submit Battle Score</h2>

      <form>
        <input type="text" placeholder="Player Name" />
        <input type="number" placeholder="Score" />
        <button>Submit Score</button>
      </form>
    </div>
  );
}

/* ---------- APP ---------- */

export default function App() {
  return (
    <div>
      <h1>Eternal Realms – Player Portal</h1>

      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/score">Submit Score</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/score" element={<SubmitScore />} />
      </Routes>
    </div>
  );
}
