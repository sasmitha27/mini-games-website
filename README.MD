# 🎮 Full-Stack Mini Games Website

A full-stack **Mini Games Website** built with **React**, **Node.js**, **Express**, and **PostgreSQL**, featuring **5 mini games** with **algorithmic implementations**, **leaderboards**, and **API integration**. This project showcases **data structures, algorithms, database migrations, and RESTful APIs**.

---

## 🏗️ Architecture

Frontend (React) <--> Backend (Node.js + Express) <--> PostgreSQL Database


**Components:**

- **Frontend:** React + Axios + React Router
  - `pages/` – Home, Leaderboard
  - `components/` – Game components (Game1 to Game5)
  - API integration with backend
- **Backend:** Node.js + Express + Sequelize
  - RESTful APIs for scores (`/scores/:game` GET, `/scores` POST)
  - Sequelize models and migrations
  - CORS enabled
- **Database:** PostgreSQL
  - Stores game scores
  - Supports sorting and leaderboard functionality

---

## 🕹️ Games Included

1. **Number Guessing Game** – Binary search algorithm  
2. **Tic Tac Toe** – Minimax algorithm  
3. **Snake Game** – Queue / Linked List  
4. **Minesweeper** – DFS / BFS for mine detection  
5. **Quiz Game** – Randomized question selection and sorting  

> Each game stores scores in the database via API calls.

---

## 🚀 Getting Started

### **Prerequisites**

- Node.js & npm
- PostgreSQL
- Git

---

### **1️⃣ Clone Repository**

```bash
git clone <your-repo-url>
cd mini-games-website
cd backend
npm install

# Configure database in config/config.json
# Example:
# {
#   "development": {
#     "username": "your_postgres_user",
#     "password": null,
#     "database": "mini_games_db",
#     "host": "127.0.0.1",
#     "dialect": "postgres"
#   }
# }

# Create database
createdb mini_games_db

# Run migrations
npx sequelize-cli db:migrate

cd ../frontend
npm install

# In the project root (mini-games-website)
npm install --save-dev concurrently  # if not already installed
npm start

Frontend: http://localhost:3000

Backend: http://localhost:5000