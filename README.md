# Tic Tac Toe ❌⭕
### Two-Player Browser Game built with React + TypeScript

> A clean, interactive Tic Tac Toe game for two players — built with modern React and TypeScript.

---

## 🔍 Project Overview

A classic **Tic Tac Toe** game implemented as a single-page React application. Two players take turns marking squares on a 3×3 grid, and the game automatically detects wins and draws.

Built as a frontend practice project to strengthen skills in React component design, state management, and TypeScript.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | React |
| Language | TypeScript |
| Build Tool | Vite |
| Styling | CSS |
| Linting | ESLint |

---

## ✅ Project Structure

```
├── src/
│   ├── components/     # Game board, cell, and status components
│   ├── App.tsx         # Root component with game logic
│   └── main.tsx        # Entry point
├── public/
├── index.html
└── vite.config.ts
```

---

## 🌀 Features

- **Two-player mode** — Players alternate between ❌ and ⭕ on the same device
- **Win detection** — Automatically detects all winning combinations (rows, columns, diagonals)
- **Draw detection** — Recognizes when the board is full with no winner
- **Game status display** — Shows whose turn it is and announces the result
- **Restart button** — Reset the board and play again instantly

---

## ⚙️ Getting Started

### Prerequisites

- Node.js v18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/YuvalKotlovsky/Tic_Tac_Toe.git
cd Tic_Tac_Toe

# Install dependencies
npm install

# Start development server
npm run dev
```

The game will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

---

## 🎮 How to Play

1. The game starts with Player X's turn
2. Click any empty square to place your mark
3. Players alternate turns automatically
4. The first player to get 3 in a row (horizontally, vertically, or diagonally) wins
5. If all squares are filled with no winner, the game ends in a draw
6. Click **Restart** to play again

---
