import React from 'react';
//import './Wallet.css';


const Wallet = () => {
  return (
    <div className="wallet-container">
      <header className="header">
        <div className="logo">
          <img src="https://i.ibb.co/mNrxpQ0/POD-logo.jpg" alt="POD Logo" className="logo-img" />
          <p className="logo-text">Play Online Desawer</p>
        </div>
      </header>
      <div className="wallet-content">
        
        <div className="help-line">
          POD new whatsapp हेल्पलाइन नंबर - 9
        </div>
        <div className="wallet-info">
          <div className="user-info">Ranjana(150811)</div>
          <div className="balance">0.00</div>
          <div className="wallet-balance">Wallet Balance</div>
        </div>
        <div className="buttons">
          <button className="add-money">+ADDMONEY</button>
          <button className="withdraw">-WITHDRAW</button>
        </div>
        <div className="statement">Statement</div>
      </div>
      <footer className="footer">
        <nav className="nav">
          <button className="nav-button">HOME</button>
          <button className="nav-button">PLAY GAME</button>
          <button className="nav-button">WALLET</button>
          <button className="nav-button">MENU</button>
        </nav>
      </footer>
    </div>
  );
};

export default Wallet;
