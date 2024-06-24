import React from 'react';
//import './App.css';

const Playgame = () => {
  const games = [
    { name: 'POD STAR', time: '06:30 AM - 01:30 PM' },
    { name: 'VIP DELHI', time: '06:30 AM - 02:30 PM' },
    { name: 'SHRI GANESH', time: '06:30 AM - 04:00 PM' },
    { name: 'TAJ', time: '06:30 AM - 02:30 PM' },
    { name: 'FARIDABAD', time: '06:30 AM - 05:50 PM' },
    { name: 'GAZIABAAD', time: '06:30 AM - 08:20 PM' },
    { name: 'VIP GALI', time: '06:30 AM - 10:15 PM' },
  ];

  return (
    <div className="app">
      <header className="header">
        <img src="https://i.ibb.co/mNrxpQ0/POD-logo.jpg" alt="Logo" className="logo" />
        <button className="my-playgame-btn">MY PLAYGAME</button>
      </header>
      <main className="main-content">
        <h1>All Game</h1>
        <div className="game-list">
          {games.map((game, index) => (
            <div key={index} className="game-item">
              <div className="game-details">
                <span className="game-name">{game.name}</span>
                <span className="game-time">
                  <i className="icon-clock"></i> {game.time}
                </span>
              </div>
              <button className="timeout-btn">TIMEOUT</button>
            </div>
          ))}
        </div>
      </main>
      <footer className="footer">
        <nav className="nav">
          <a href="#home" className="nav-item">HOME</a>
          <a href="#playgame" className="nav-item">PLAY GAME</a>
          <a href="#wallet" className="nav-item">WALLET</a>
          <a href="#more" className="nav-item">MORE</a>
        </nav>
      </footer>
    </div>
  );
};

export default Playgame;
