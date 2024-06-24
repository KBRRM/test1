import React from 'react';
//import './HomePage.css';


const HomePage = () => {
  return (
    <div className="app">
    <header className="header">
      <img src="https://i.ibb.co/mNrxpQ0/POD-logo.jpg" alt="Logo" className="logo" />
      <div className="wallet-info">
        <marquee className="marquee">
          POD new whatsapp हेल्पलाइन नंबर - 9646584884
        </marquee>
        <div className="wallet-balance">
          <p>Ranjana(150811)</p>
          <p className="balance-amount">0.00</p>
          <p>Wallet Balance</p>
        </div>
      </div>
    </header>
    <main className="main-content">
      <div className="vip-gali">
        <p className="vip-gali-title">VIP GALI</p>
        <p className="vip-gali-number">81</p>
        <p className="vip-gali-time">10:30 PM</p>
      </div>
      <div className="today-result">
        <h2>Today Result</h2>
        <div className="results">
          <div className="result-item">
            <p className="result-name">GALI</p>
            <p className="result-number">03</p>
            <p className="result-time">11:10 PM</p>
          </div>
          <div className="result-item">
            <p className="result-name">FARIDABAD</p>
            <p className="result-number">84</p>
            <p className="result-time">06:20 PM</p>
          </div>
          <div className="result-item">
            <p className="result-name">GAZIABAAD</p>
            <p className="result-number">00</p>
            <p className="result-time">08:20 PM</p>
          </div>
        </div>
      </div>
      <button className="result-history-btn">RESULT HISTORY</button>
      <div className="notice">
        <p>(NOTICE)</p>
        <p>कृपया Add Money करने के बाद 5 से 10 मिनट का इंतजार करें | तब तक कोई और कॉल और मैसेज ना करें |</p>
      </div>
    </main>
    <footer className="footer">
      <nav className="nav">
        <button className="nav-item">HOME</button>
        <button className="nav-item">PLAY GAME</button>
        <button className="nav-item">WALLET</button>
        <button className="nav-item">MORE</button>
      </nav>
    </footer>
  </div>
  );
};

export default HomePage;
