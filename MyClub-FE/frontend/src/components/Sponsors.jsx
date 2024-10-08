import React from "react";
import "./sponsor.css";

const Sponsors = () => {
  return (
    <main>
      <div className="shop-container">
        <h1>Sponsors</h1>
        <div className="sponsors-grid">
          <a href="https://www.adidas.co.in/">
            <div className="sponsor-card">
                <img src="/images/adidas.jpg" alt="Adidas" />
                <h2>Adidas</h2>
                <p>Official kit supplier of Real Madrid. Adidas provides all home, away, and training kits for the club.</p>
            </div>
          </a>
          <a href="https://www.emirates.com/">
            <div className="sponsor-card">
                <img src="/images/emirates.jpg" alt="Fly Emirates" />
                <h2>Fly Emirates</h2>
                <p>The official shirt sponsor of Real Madrid, promoting its global airline network on the players' jerseys.</p>
            </div>
         </a>
         <a href="https://www.nivea.in/">
            <div className="sponsor-card">
                <img src="/images/nivia.jpg" alt="Nivea" />
                <h2>Nivea Men</h2>
                <p>Nivea Men is a proud skincare partner of Real Madrid, focusing on grooming and skincare products for athletes.</p>
            </div>
         </a>
         <a href="https://www.audi.com/">
          <div className="sponsor-card">
            <img src="/images/audi.jpg" alt="Audi" />
            <h2>Audi</h2>
            <p>Audi provides the official car of Real Madrid, offering players and staff premium vehicles.</p>
          </div>
         </a>
        </div>
      </div>
    </main>
  );
};

export default Sponsors;
