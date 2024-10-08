import React from "react";
import "./women.css"

const players = {
    coach: [
      {
        name: "Alberto Toril",
        position: "Head Coach",
        nationality: "Spanish",
        age: "51 Years Old",
        image: "/images/toril.jpg",
        id: "https://www.instagram.com/albertotoril/?locale=en_gb"
      }
    ],
    goalkeepers: [
      {
        name: "#1 Misa Rodríguez",
        position: "Goalkeeper",
        nationality: "Spanish",
        age: "25 Years Old",
        image: "/images/misa.webp",
        id: "https://www.instagram.com/albertotoril/?locale=en_gb",
        stats: {
          goals: 0,
          assists: 0
        }
      },
      {
        name: "#13 Mylène Chavas",
        position: "Goalkeeper",
        nationality: "French",
        age: "26 Years Old",
        image: "/images/noimage.jpg",
        id: "https://www.instagram.com/mylene.chavas/",
        stats: {
          goals: 0,
          assists: 0
        }
      }
    ],
    defender: [
      {
        name: "#14 María Méndez",
        position: "Defender",
        nationality: "Spanish",
        age: "23 Years Old",
        image: "/images/maria.webp",
        id: "https://www.instagram.com/merymf4/",
        stats: {
          goals: 1,
          assists: 0
        }
      },
      {
        name: "#15 Sheila García",
        position: "Defender",
        nationality: "Spanish",
        age: "27 Years Old",
        image: "/images/noimage.jpg",
        id: "https://www.instagram.com/shei_garciag10/",
        stats: {
          goals: 0,
          assists: 0
        }
      },
      {
        name: "#23 Maëlle Lakrar",
        position: "Defender",
        nationality: "French",
        age: "24 Years Old",
        image: "/images/noimage.jpg",
        id: "https://www.instagram.com/maelle_lakrar/",
        stats: {
          goals: 0,
          assists: 0
        }
      },
      {
        name: "#2 Oihane Zurbano",
        position: "Defender",
        nationality: "Spanish",
        age: "24 Years Old",
        image: "/images/noimage.jpg",
        id: "https://www.instagram.com/marisabel_rguez/",
        stats: {
          goals: 0,
          assists: 0
        }
      },
      {
        name: "#7 Olga García",
        position: "Defender",
        nationality: "Spanish",
        age: "24 Years Old",
        image: "/images/noimage.jpg",
        id: "https://www.instagram.com/olgacarmona7/",
        stats: {
          goals: 1,
          assists: 0
        }
      },
      {
        name: "#4 Rocío Gálvez Luna",
        position: "Defender",
        nationality: "Spanish",
        age: "27 Years Old",
        image: "/images/noimage.jpg", 
        id: "https://www.instagram.com/rociogalvez5/",
        stats: {
          goals: 0,
          assists: 0
        }
      },
      {
        name: "#5 Antonia Silva",
        position: "Defender",
        nationality: "Brazilian",
        age: "30 Years Old",
        image: "/images/antonia.webp",
        id: "https://www.instagram.com/antoniasilva_03",
        stats: {
          goals: 0,
          assists: 0
        }
      }
    ],
    midfielder: [
      {
        name: "#21 Ingrid Angeldahl",
        position: "Midfielder",
        nationality: "Swedish",
        age: "27 Years Old",
        image: "/images/ingrid.webp",
        id: "https://www.instagram.com/filippaangeldahl/",
        stats: {
          goals: 0,
          assists: 0
        }
      },
      {
        name: "#24 Melanie Leupolz",
        position: "Midfielder",
        nationality: "German",
        age: "30 Years Old",
        image: "/images/melanie.webp",
        id: "https://www.instagram.com/melanie_leupolz/",
        stats: {
          goals: 0,
          assists: 0
        }
      },
      {
        name: "#3 Teresa Dueñas",
        position: "Midfielder",
        nationality: "Spanish",
        age: "24 Years Old",
        image: "/images/noimage.jpg", 
        id: "https://www.instagram.com/teresabelleira/",
        stats: {
          goals: 0,
          assists: 0
        }
      },
      {
        name: "#6 Sandie Toletti",
        position: "Midfielder",
        nationality: "French",
        age: "29 Years Old",
        image: "/images/sandie.webp",
        id: "https://www.instagram.com/sandietoletti/",
        stats: {
          goals: 1,
          assists: 0
        }
      },
      {
        name: "#8 Maite Areta",
        position: "Midfielder",
        nationality: "Spanish",
        age: "26 Years Old",
        image: "/images/noimage.jpg", 
        id: "https://www.instagram.com/maitetxuu_10/",
        stats: {
          goals: 0,
          assists: 0
        }
      },
      {
        name: "#10 Caroline Weir",
        position: "Midfielder",
        nationality: "Scottish",
        age: "29 Years Old",
        image: "/images/noimage.jpg",
        id: "https://www.instagram.com/carolineweir95/",
        stats: {
          goals: 2,
          assists: 0
        }
      }
    ],
    forward: [
      {
        name: "#18 Linda Alegría",
        position: "Forward",
        nationality: "Colombian",
        age: "19 Years Old",
        image: "/images/linda.webp",
        id: "https://www.instagram.com/linda__caicedo11/?hl=en",
        stats: {
          goals: 1,
          assists: 0
        }
      },
      {
        name: "#19 Eva Navarro",
        position: "Forward",
        nationality: "Spanish",
        age: "23 Years Old",
        image: "/images/eva.webp",
        id: "https://www.instagram.com/evanavarro12/",
        stats: {
          goals: 0,
          assists: 0
        }
      },
      {
        name: "#11 Alba Redondo",
        position: "Forward",
        nationality: "Spanish",
        age: "28 Years Old",
        image: "/images/noimage.jpg", 
        id: "https://www.instagram.com/albiferrer/",
        stats: {
          goals: 0,
          assists: 0
        }
      },
      {
        name: "#16 Caroline Møller",
        position: "Forward",
        nationality: "Danish",
        age: "26 Years Old",
        image: "/images/noimage.jpg", 
        id: "https://www.instagram.com/carolinemoller_/",
        stats: {
          goals: 2,
          assists: 0
        }
      },
      {
        name: "#17 Carla Camacho",
        position: "Forward",
        nationality: "Spanish",
        age: "19 Years Old",
        image: "/images/noimage.jpg", 
        id: "https://www.instagram.com/carlacamacho._/",
        stats: {
          goals: 0,
          assists: 0
        }
      },
      {
        name: "#20 Naomie Feller",
        position: "Forward",
        nationality: "French",
        age: "22 Years Old",
        image: "/images/noimage.jpg", 
        id: "https://www.instagram.com/naomiefeller20/",
        stats: {
          goals: 0,
          assists: 0
        }
      },
      {
        name: "#9 Signe Bruun",
        position: "Forward",
        nationality: "Danish",
        age: "26 Years Old",
        image: "/images/noimage.jpg",
        id: "https://www.instagram.com/signebruun20/",
        stats: {
          goals: 2,
          assists: 0
        }
      },
      {
        name: "#22 Athenea Beivide",
        position: "Forward",
        nationality: "Spanish",
        age: "23 Years Old",
        image: "/images/noimage.jpg",
        id: "https://www.instagram.com/atheeneeaa_10/",
        stats: {
          goals: 1,
          assists: 0
        }
      }
    ]
  };
  

const Women =()=> 
     {
    return (
        <main>
            <div className="shop-container">
                <h1>Women's Team</h1>
            </div>
            <h1> Coaches</h1>
            <hr />
            <div className='card-container'>
                {players.coach.map((coach, index) => (
            <div key={index} className="player-card">
              < a href={coach.id} target="_blank" rel="noopener noreferrer">
                <img className="image" src={coach.image} alt={coach.name} />
              </a> 
                <h3>{coach.name}</h3>
                <p>{coach.age}</p>
                <p>{coach.position}</p>
                <p>{coach.nationality}</p>
            </div>
            ))} 
            </div>
            {/*Goalkeeper*/}
            <h1>Goalkeepers</h1>
            <hr />
            <div className="card-container">
                {players.goalkeepers.map((player, index) => (
                <div key={index} className="player-card">
                    <a href={player.id} target="_blank" rel="noopener noreferrer">
                      <img className="image" src={player.image} alt={player.name} />
                    </a>
                    <h3>{player.name}</h3>
                    <p>{player.age}</p>
                    <p>{player.position}</p>
                    <p>{player.nationality}</p>
                </div> 
            ))}
            </div>

            {/*Forward*/} 
            <h1>Forward</h1>
            <hr />
            <div className="card-container">
              {players.forward.map((player, index) => (
                  <div className="player-card">
                    <a href={player.id} target="_blank" rel="noopener noreferrer">
                      <img className="image" src={player.image} alt={player.name} />
                    </a>
                    <h3>{player.name}</h3>
                    <p>{player.age}</p>
                    <p>{player.position}</p>
                    <p>{player.nationality}</p>
                    <p1>Goals:{player.stats.goals} Assists:{player.stats.assists}</p1>
                  </div>
              ))}
            </div>
          
            {/*MidFielder*/}
            <h1>Mid-Fielder</h1>
            
            <hr />
            <div className="card-container">
                {players.midfielder.map((player, index) => (
                <div key={index} className="player-card">
                   <a href={player.id} target="_blank" rel="noopener noreferrer">
                    <img className="image" src={player.image} alt={player.name} />
                   </a>
                    <h3>{player.name}</h3>
                    <p>{player.age}</p>
                    <p>{player.position}</p>
                    <p>{player.nationality}</p>
                    <p1>Goals:{player.stats.goals} Assists:{player.stats.assists}</p1>
                </div>
            ))}
            </div>

             {/*Defender*/}
             <h1>Defender</h1>
            
              <hr />
              <div className="card-container">
                {players.defender.map((player, index) => (
                <div key={index} className="player-card">
                   <a href={player.id} target="_blank" rel="noopener noreferrer">
                    <img className="image" src={player.image} alt={player.name} />
                   </a>
                    <h3>{player.name}</h3>
                    <p>{player.age}</p>
                    <p>{player.position}</p>
                    <p>{player.nationality}</p> 
                    <p1>Goals:{player.stats.goals} Assists:{player.stats.assists}</p1>
                </div>
              ))}
              </div>
        </main>
    );
};

export default Women;