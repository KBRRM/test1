import React from 'react';
//import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-app">
      <header className="profile-header">
        <img src="https://i.ibb.co/mNrxpQ0/POD-logo.jpg" alt="Logo" className="profile-logo" />
        <div className="wallet-info">
          <marquee className="marquee">
            POD new whatsapp हेल्पलाइन नंबर - 9646584884
          </marquee>
          <div className="wallet-balance">
            <p>Your Profile</p>
          </div>
        </div>
      </header>
      <main className="profile-main-content">
        <div className="profile-info">
          <img src="https://i.ibb.co/4ZzMsmT/ranjana.jpg" alt="Profile" className="profile-pic" />
          <h2>Ranjana Jha</h2>
        </div>
        <div className="profile-details">
          <div className="detail-item">
            <i className="icon-user"></i>
            <p className="detail-title">Username</p>
            <p className="detail-content">8178522034</p>
          </div>
          <div className="detail-item">
            <i className="icon-name"></i>
            <p className="detail-title">Full Name</p>
            <p className="detail-content">Ranjana Jha</p>
          </div>
          <div className="detail-item">
            <i className="icon-phone"></i>
            <p className="detail-title">Mobile No.</p>
            <p className="detail-content">8178522034</p>
          </div>
          <div className="detail-item">
            <i className="icon-city"></i>
            <p className="detail-title">City</p>
            <p className="detail-content"></p>
          </div>
        </div>
        <button className="edit-profile-btn">EDIT PROFILE</button>
      </main>
      <footer className="profile-footer">
        <nav className="profile-nav">
          <button className="nav-item">HOME</button>
          <button className="nav-item">PLAY GAME</button>
          <button className="nav-item">WALLET</button>
          <button className="nav-item">MORE</button>
        </nav>
      </footer>
    </div>
  );
};

export default Profile;
