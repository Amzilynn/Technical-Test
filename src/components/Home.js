import React from "react";
import Logo from "../Assets/Logo.png";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-text-section">
        <p className="primary-text">Chili's Tunisie</p>
        <h1 className="primary-heading">Découvrez les meilleures recettes syriennes</h1>
        <button className="secondary-button">Voir notre menu</button>
      </div>
      <div className="red-circle"></div> 
      <div className="home-banner-container">
        <div className="background-circles">
          <div className="background-circle circle1"></div>
          <div className="background-circle circle2"></div>
        </div>
      </div>
      <div className="logo-container">
        <img src={Logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Home;
