import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import Game1 from "./components/Game1";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/leaderboard">Leaderboard</Link> | <Link to="/game1">Game1</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/game1" element={<Game1 />} />
      </Routes>
    </Router>
  );
}

export default App;
