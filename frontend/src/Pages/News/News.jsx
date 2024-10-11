import React from 'react';
import './news.css';

const News = () => {
  return (
    <main>
      <div className="shop-container">
            <h1>News</h1>
      </div>
    
    <div>
      {/* Headings */}
      <h1 className="ne-h1">
        Real Madrid continue preparations for Valladolid clash
      </h1>
      <h2 className="ne-h2">
        Ancelotti’s men are in action at the Santiago Bernabéu on matchday two of LaLiga (Sunday, 5 pm CEST).
      </h2>

      {/* Image */}
      <img className="ne-img" src="/images/ne-play.webp" alt="Real Madrid Players" />

      {/* Paragraphs */}
      <p className="ne-p">
        The Whites trained at Real Madrid City and continued with their preparations for the game against Valladolid on matchday two of LaLiga, which will be played at the Santiago Bernabéu (Sunday, 5 pm CEST).
      </p>
      <br />
      <p className="ne-p">
        After the session, the players started the session in the gymnasium. They then carried out a series of fitness drills on the pitch at Real Madrid City, followed by a tactical section. The session ended with a series of games on small pitches. Vallejo worked out inside the facilities and Alaba and Camavinga continued with their recovery programmes.
      </p>

      {/* Image Carousel/Wrapper */}
      <div className="con">
        <div className="wrapper">
          <img className="wrapImage" src="/images/1.jfif" alt="img1" />
          <img className="wrapImage" src="/images/2.jfif" alt="img2" />
          <img className="wrapImage" src="/images/3.jfif" alt="img3" />
          <img className="wrapImage" src="/images/4.jfif" alt="img4" />
          <img className="wrapImage" src="/images/5.jfif" alt="img5" />
          <img className="wrapImage" src="/images/6.jfif" alt="img6" />
        </div>
      </div>
    </div>
    </main>
  );
};

export default News;
