import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFrwlx1tQZlR4R7tGELo9g6GAgYOTYHhW5Rw&s"
          alt="Logo"
        />
      </div>

      <nav className="nav-container">
        <ul className="nav-list">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li className="cart">Cart</li>
        </ul>
      </nav>
    </header>
  );
};

const FoodCard = () => {
  return (
    <div className="food-card">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/28/a1dae0db-4894-4121-9e15-954568cf8bdb_71418.jpg"
        alt="Tea Post"
      />

      <div className="food-info">
        <h3>Tea Post</h3>
        <p className="cuisine">Tea, Coffee, Snacks, Gujarati</p>

        <div className="food-meta">
          <span>⭐ 4.5</span>
          <span>⏱ 38 min</span>
        </div>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="rest-container">
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
    </div>
  )
}

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section logo-section">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFrwlx1tQZlR4R7tGELo9g6GAgYOTYHhW5Rw&s"
          alt="Logo"
        />
        <p>Good food, good mood 🍽️</p>
      </div>

      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul className="footer-nav">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Location</h4>
        <p>Anand, Gujarat</p>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default App
