import React from "react";
import "/Users/sasmitha27/Desktop/mini-games-website/frontend/src/App.css";

export default function Home() {
  // Mock data for game cards - you can add more games here
  const games = [
    {
      id: "game1",
      title: "Number Cracker",
      description: "Guess the hidden code between 1-100.",
      icon: "🎯",
      path: "/game1", // Assuming your routing path
      color: "#61dafb"
    },
    {
      id: "game2",
      title: "Coming Soon",
      description: "More arcade challenges are on the way!",
      icon: "🕹️",
      path: "#",
      color: "#4af626"
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        {/* Hero Section */}
        <div style={heroStyle}>
          <h1 style={titleStyle}>ARCADE<span style={{ color: "#61dafb" }}>OS</span></h1>
          <p style={subtitleStyle}>Select a terminal to begin your session</p>
        </div>

        {/* Game Selection Grid */}
        <div style={gridStyle}>
          {games.map((game) => (
            <div key={game.id} style={cardStyle} className="game-card-hover">
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>{game.icon}</div>
              <h3 style={{ margin: "10px 0", color: game.color }}>{game.title}</h3>
              <p style={descriptionStyle}>{game.description}</p>
              
              <a href={game.path} style={{ ...playBtnStyle, backgroundColor: game.color }}>
                PLAY NOW
              </a>
            </div>
          ))}
        </div>

        {/* Footer Stats */}
        <div style={homeFooterStyle}>
          <span>SYSTEM STATUS: <span style={{ color: "#4af626" }}>ONLINE</span></span>
          <span>SERVERS: US-EAST-1</span>
        </div>
      </header>
    </div>
  );
}

// --- Styles ---

const heroStyle = {
  marginBottom: "50px",
  textAlign: "center",
};

const titleStyle = {
  fontSize: "4rem",
  margin: 0,
  letterSpacing: "8px",
  fontWeight: "900",
  textShadow: "0 0 15px rgba(97, 218, 251, 0.5)",
};

const subtitleStyle = {
  fontSize: "1.1rem",
  opacity: 0.6,
  letterSpacing: "2px",
  textTransform: "uppercase",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "25px",
  width: "90%",
  maxWidth: "1000px",
  padding: "20px",
};

const cardStyle = {
  background: "#1c1f24",
  border: "1px solid #3d444d",
  borderRadius: "15px",
  padding: "30px",
  transition: "all 0.3s ease",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
};

const descriptionStyle = {
  fontSize: "0.9rem",
  color: "#abb2bf",
  lineHeight: "1.5",
  marginBottom: "20px",
  height: "40px",
};

const playBtnStyle = {
  textDecoration: "none",
  color: "#000",
  fontWeight: "bold",
  padding: "10px 25px",
  borderRadius: "5px",
  fontSize: "0.9rem",
  transition: "transform 0.2s ease",
};

const homeFooterStyle = {
  marginTop: "60px",
  fontSize: "0.8rem",
  fontFamily: "monospace",
  display: "flex",
  gap: "30px",
  opacity: 0.5,
};