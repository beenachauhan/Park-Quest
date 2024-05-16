import { useState } from "react";

import "../assets/css/Header.css"
import Mode from "./Mode";
import Skiplink from "./SkipLink";


function CustomHeader({ onNav, theme, toggleTheme }) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <>
     <div className="skipLink">
       <Skiplink onNav={onNav}/>
    </div>

    <header className="header">
      <div className="image-title-container">
        <img src="public/images/logo.jpg"
          onClick={onNav} data-page="TopDeals" href="#TopDeals"
          className="logo"
          alt="logo"
        />
        <h1 className="header-title"> Park-Quest </h1>
      </div>

      <nav className="header-navigation">
      <div className="hamburger-menu">
        <ul className={`${isMenuOpen ? 'header-list' : 'Nav-hidden'}`}>

          <li className="header-item" >
            <a className="header-link" onClick={onNav} data-page="TopDeals" href="#TopDeals">Top Deals</a></li>

          <li className="header-item">
            <a className="header-link" onClick={onNav} data-page="Reviews" href="#Reviews">Reviews</a></li>

          <li className="header-item">
            <a className="header-link" onClick={onNav} data-page="Feedback" href="#Feedback">Feedback</a></li>

            <li className="header-item">
          <a className="header-link" onClick={onNav} data-page="LocalCuisine" href="#LocalCuisine">LocalCuisine</a></li>

          <li className="header-item">
            <Mode className="theme-switcher" theme={theme} toggleTheme={toggleTheme} />
          </li> 

          
          

        </ul>

          <button className="hamburger-button" onClick={toggleMenu} >

            {/* "below CSS adapted from https://css.gg under the MIT License" */}
            <i className="gg-menu"></i>
          </button>
        </div>
      </nav>
      

    </header>
    </>
  );
}

export default CustomHeader;

