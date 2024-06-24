import React from 'react';
//import './styles.css'; // Make sure to import the CSS file

const AddCash = () => {
  return (
  
        <div className="container">
            <div className="header">
                <button className="back-button">You</button>
                <h1>ADD CASH</h1>
            </div>
            <div className="balance">
                <div className="total">
                    <span>TOTAL</span>
                    <span className="amount">₹345</span>
                </div>
                <div className="cash">
                    <span>CASH</span>
                    <span className="amount">₹300</span>
                </div>
                <div className="bonus">
                    <span>BONUS</span>
                    <span className="amount">₹45</span>
                    <span className="info">i</span>
                </div>
            </div>
            <div className="payment-options">
                <h2>Select payment amount</h2>
                <div className="options">
                    <button className="option">₹300<br /><span>Bonus 15%</span></button>
                    <button className="option selected">₹300<br /><span>Bonus 15%</span></button>
                    <button className="option">₹500<br /><span>Bonus 20%</span></button>
                    <button className="option">₹1000<br /><span>Bonus 20%</span></button>
                    <button className="option">₹3000<br /><span>Bonus 25%</span></button>
                    <button className="option">₹5000<br /><span>Bonus 30%</span></button>
                    <button className="option">₹10000<br /><span>Bonus 30%</span></button>
                    <button className="option">₹20000<br /><span>Bonus 30%</span></button>
                </div>
            </div>
            <div className="payment-method">
                <h2>Select payment method</h2>
                <div className="methods">
                    <button className="method">UPI-A<br /><span>100-20000</span></button>
                    <button className="method">UPI-S<br /><span>Rs 300-50000</span></button>
                    <button className="method">UPI-P<br /><span>Extra +5%</span></button>
                    <button className="method">UPI-T<br /><span>Rs 300-50000</span></button>
                    <button className="method">UPI-G<br /><span>Rs 100-20000</span></button>
                    <button className="method">Official Chips Seller<br /><span>Extra +5%</span></button>
                </div>
            </div>
            <button className="add-cash-button">Add Cash ₹300</button>
        </div>
    
  );

}

export default AddCash;
