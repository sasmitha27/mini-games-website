import { useState, useEffect } from "react";
import { postScore } from "../api";
import "/Users/sasmitha27/Desktop/mini-games-website/frontend/src/App.css";

export default function Game1() {
  const [target, setTarget] = useState(0);
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState("SYSTEM READY: ENTER SEED NUMBER");
  const [isWon, setIsWon] = useState(false);

  // Initialize game logic
  const startNewGame = () => {
    setTarget(Math.floor(Math.random() * 100) + 1);
    setGuess("");
    setAttempts(0);
    setMessage("RANGE: 1 - 100. BEGIN SCAN...");
    setIsWon(false);
  };

  useEffect(() => {
    startNewGame();
  }, []);

  const handleGuess = async (e) => {
    if (e) e.preventDefault();
    if (isWon) return;

    const g = parseInt(guess);
    if (isNaN(g)) {
      setMessage("ERROR: INVALID INPUT");
      return;
    }

    const nextAttempts = attempts + 1;
    setAttempts(nextAttempts);

    if (g === target) {
      setMessage(`ACCESS GRANTED. ATTEMPTS: ${nextAttempts}`);
      setIsWon(true);
      try {
        await postScore({ username: "Player1", game: "Game1", score: Math.max(0, 100 - nextAttempts) });
      } catch (err) {
        console.error("Transmission failed:", err);
      }
    } else {
      setMessage(g < target ? "ANALYSIS: TOO LOW" : "ANALYSIS: TOO HIGH");
      setGuess("");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* Main Game Container */}
        <div style={containerStyle}>
          <h2 style={headerStyle}>NUMBER_CRACKER_v1.0</h2>
          
          <div style={displayBoxStyle}>
            <p style={messageStyle}>{message}</p>
          </div>

          <form onSubmit={handleGuess} style={{ width: "100%" }}>
            <input
              autoFocus
              type="number"
              value={guess}
              disabled={isWon}
              onChange={(e) => setGuess(e.target.value)}
              placeholder="00"
              style={inputStyle}
            />
            
            {!isWon ? (
              <button type="submit" style={btnStyle}>
                SUBMIT GUESS
              </button>
            ) : (
              <button type="button" onClick={startNewGame} style={resetBtnStyle}>
                REBOOT SYSTEM
              </button>
            )}
          </form>

          <div style={footerStyle}>
            <span>ATTEMPTS: {attempts}</span>
            <span style={{ color: isWon ? "#4af626" : "#61dafb" }}>
              STATUS: {isWon ? "ONLINE" : "SEARCHING"}
            </span>
          </div>
        </div>
      </header>
    </div>
  );
}

// --- Dynamic Styles ---

const containerStyle = {
  background: "#1c1f24",
  padding: "40px",
  borderRadius: "10px",
  border: "2px solid #61dafb",
  boxShadow: "0 0 20px rgba(97, 218, 251, 0.2)",
  width: "320px",
  textAlign: "center"
};

const headerStyle = {
  fontSize: "1.2rem",
  letterSpacing: "2px",
  margin: "0 0 20px 0",
  color: "#61dafb"
};

const displayBoxStyle = {
  background: "#000",
  padding: "15px",
  borderRadius: "5px",
  marginBottom: "20px",
  borderLeft: "4px solid #61dafb",
  minHeight: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const messageStyle = {
  margin: 0,
  fontSize: "0.9rem",
  fontFamily: "'Courier New', monospace",
  color: "#61dafb"
};

const inputStyle = {
  width: "80%",
  padding: "15px",
  fontSize: "2rem",
  textAlign: "center",
  background: "transparent",
  border: "none",
  borderBottom: "2px solid #61dafb",
  color: "white",
  marginBottom: "25px",
  outline: "none"
};

const btnStyle = {
  width: "100%",
  padding: "12px",
  background: "#61dafb",
  border: "none",
  borderRadius: "4px",
  fontWeight: "bold",
  cursor: "pointer",
  color: "#282c34"
};

const resetBtnStyle = {
  ...btnStyle,
  background: "#4af626",
  color: "#000"
};

const footerStyle = {
  marginTop: "20px",
  display: "flex",
  justifyContent: "space-between",
  fontSize: "0.7rem",
  fontFamily: "monospace",
  opacity: 0.8
};