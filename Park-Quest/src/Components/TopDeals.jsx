import React, { useRef, useState } from 'react';
import "../assets/css/TopDeals.css"
import dealsData from "../Data/deals.json";
import Footer from "./Footer";
import Header from "./Header";
import Modal from "./Modal";

function TopDeals({ onNav, theme, toggleTheme, handlePayment, amount }) {

    const list = dealsData.map((tour) => {
        return (
            <li className="list" key={tour.dealsId}>
                <div className="card">
                    <h2 className="card-name">{tour.spot}</h2>
                    <img className="card-image" src={tour.img} alt={tour.alt} />
                   <span className="description">{tour.description}</span>
                   <span className="spanOfTime">Span Of Time : {tour.spanOfTime}</span>
                    <div className="card-button"> 
                        <Modal handlePayment={handlePayment}/>
                    </div>
                    
                </div>
            </li>
        );
    });

    return (
        <>
             <Header onNav={onNav} theme={theme} toggleTheme={toggleTheme}/>

             <div className="packages">
                <div className='heading-area'>
                <h2 className="page-title">Top-Deals</h2>
                <div className='amount'>
                    <span>Amount due: </span>
                    <span>{amount}</span>
                </div>
               
                </div>
                <ul className="package-list">
                    {list}
                </ul>
            </div>
            
            <Footer />
        </>
       
    );

}

export default TopDeals;