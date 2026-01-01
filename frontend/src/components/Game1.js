import { useState } from "react";
import { postScore } from "../api";

export default function Game1() {
  const [number] = useState(Math.floor(Math.random() * 100)); // fixed unused variable warning
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState("");

  const handleGuess = async () => {
    setAttempts(attempts + 1);
    const g = parseInt(guess);
    if (g === number) {
      setMessage(`Correct! Attempts: ${attempts + 1}`);
      try {
        await postScore({ username: "Player1", game: "Game1", score: 100 - attempts });
      } catch (err) {
        console.error("API Error:", err);
      }
    } else if (g < number) setMessage("Too low!");
    else setMessage("Too high!");
  };

  return (
    <div>
      <h2>Number Guessing Game</h2>
      <input value={guess} onChange={(e) => setGuess(e.target.value)} />
      <button onClick={handleGuess}>Guess</button>
      <p>{message}</p>
    </div>
  );
}
