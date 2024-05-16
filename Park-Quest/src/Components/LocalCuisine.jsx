import React from 'react';
import cuisineData from '../Data/cuisine.json';
import Header from './Header';
import Footer from './Footer';
import "../assets/css/LocalCuisine.css";

function LocalCuisine({ onNav, theme, toggleTheme }) {
  return (
    <>
      <Header onNav={onNav} theme={theme} toggleTheme={toggleTheme} />
      <div className='localCuisine-panel-container'>
        <h2 className="localCuisine-page-title">Discover Culinary Delights: Local Cuisine Near National Parks</h2>
        <div className="localCuisine-cards-container">
          {cuisineData.map((cuisine) => ( 
            <div key={cuisine.cuisineId} className="localCuisine-card">
              <div className="localCuisine-card-container">
                <img className="localCuisine-card-image" src={cuisine.image} alt={cuisine.name} />
                <div className="localCuisine-card-content">
                  <h3>{cuisine.name}</h3>
                  <p>{cuisine.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LocalCuisine;
