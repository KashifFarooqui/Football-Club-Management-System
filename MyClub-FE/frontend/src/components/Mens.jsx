import React from 'react';
import './mens.css';


const players = {
    coach: [
      {
        name: "Carlo Ancelotti",
        position: "Head Coach",
        nationality: "Italian",
        age:"65 Year Old",
        image: "/images/ancelotti.jpg",
        id:"https://www.instagram.com/mrancelotti/"
      },
      {
        name: "Davide Ancelotti",
        position: "Assistance Coach",
        nationality: "Italian",
        age:"35 Year Old",
        image: "/images/david.jpg",
        id:"https://www.instagram.com/davide.ancelotti/"
      },
      {
        name: "Francesco Mauri",
        position: "Technical Assistance Coach",
        nationality: "Italian",
        age:"35 Year Old",
        image: "/images/mauri.jpg",
        id:"https://www.instagram.com/francescomaurifm/"
      }
    ],
    goalkeepers: [
        {
          name: "Thibaut Courtois",
          position: "Goalkeeper",
          nationality: "Belgian",
          age: "32 Year Old",
          image: "/images/courtois.jpg",
          id: "https://www.instagram.com/thibautcourtois/"
        },
        {
          name: "Andriy Lunin",
          position: "Goalkeeper",
          nationality: "Ukrainian",
          age: "25 Year Old",
          image: "/images/lunin.jpg",
          id: "https://www.instagram.com/lunin_andrey/"
        }
      ],
    forward: [
        {
          name: "#7 Vinicius Junior",
          position: "Forward",
          nationality: "Brazilian",
          age: "24 Year Old",
          image: "/images/vinijr.webp",
          id: "https://www.instagram.com/vinijr/",
          stats: {
            goals: 16,
            assists: 8
          }
        },
        {
          name: "#9 Kylian Mbappé",
          position: "Forward",
          nationality: "French",
          age: "26 Year Old",
          image: "/images/kmbappe.webp",
          id: "https://www.instagram.com/k.mbappe/",
          stats: {
            goals: 28,
            assists: 10
          }
        },
        {
          name: "#11 Rodrygo Goes",
          position: "Forward",
          nationality: "Brazilian",
          age: "23 Year Old",
          image: "/images/rodrygo.webp",
          id: "https://www.instagram.com/rodrygogoes/",
          stats: {
            goals: 12,
            assists: 7
          }
        },
        {
          name: "#16 Endrick de Sousa",
          position: "Forward",
          nationality: "Brazilian",
          age: "18 Year Old",
          image: "/images/endrick.webp",
          id: "https://www.instagram.com/endricki/",
          stats: {
            goals: 5,
            assists: 2
          }
        },
        {
          name: "#21 Brahim Díaz",
          position: "Forward",
          nationality: "Spanish",
          age: "25 Year Old",
          image: "/images/brahim.webp",
          id: "https://www.instagram.com/brahim/",
          stats: {
            goals: 8,
            assists: 5
          }
        }
      ],
    midfielder: [
        {
          name: "#5 Jude Bellingham",
          position: "Midfielder",
          nationality: "English",
          age: "21 Year Old",
          image: "/images/belingam.webp",
          id: "https://www.instagram.com/judebellingham/",
          stats: {
            goals: 14,
            assists: 6
          }
        },
        {
          name: "#6 Eduardo Camavinga",
          position: "Midfielder",
          nationality: "French",
          age: "21 Year Old",
          image: "/images/camavinga.webp",
          id: "https://www.instagram.com/camavinga/",
          stats: {
            goals: 2,
            assists: 4
          }
        },
        {
          name: "#8 Federico Valverde",
          position: "Midfielder",
          nationality: "Uruguayan",
          age: "25 Year Old",
          image: "/images/valverde.webp",
          id: "https://www.instagram.com/fedevalverde/",
          stats: {
            goals: 7,
            assists: 9
          }
        },
        {
          name: "#10 Luka Modric",
          position: "Midfielder",
          nationality: "Croatian",
          age: "38 Year Old",
          image: "/images/modric.webp",
          id: "https://www.instagram.com/lukamodric10/",
          stats: {
            goals: 3,
            assists: 7
          }
        },
        {
          name: "#14 Aurélien Tchouaméni",
          position: "Midfielder",
          nationality: "French",
          age: "24 Year Old",
          image: "/images/tchou.webp",
          id: "https://www.instagram.com/aurelientchm17/",
          stats: {
            goals: 4,
            assists: 3
          }
        },
        {
          name: "#15 Arda Güler",
          position: "Midfielder",
          nationality: "Turkish",
          age: "19 Year Old",
          image: "/images/arda.webp",
          id: "https://www.instagram.com/ardaguler10/",
          stats: {
            goals: 1,
            assists: 1
          }
        },
        {
          name: "#19 Dani Ceballos",
          position: "Midfielder",
          nationality: "Spanish",
          age: "27 Year Old",
          image: "/images/ceballos.webp",
          id: "https://www.instagram.com/danifuli10/",
          stats: {
            goals: 2,
            assists: 5
          }
        }
      ],
    defender: [
        {
          name: "#2 Dani Carvajal",
          position: "Defender",
          nationality: "Spanish",
          age: "32 Year Old",
          image: "/images/carvajal.webp",
          id: "https://www.instagram.com/dcarvajal2/",
          stats: {
            goals: 1,
            assists: 6
          }
        },
        {
          name: "#3 Éder Militão",
          position: "Defender",
          nationality: "Brazilian",
          age: "26 Year Old",
          image: "/images/militao.webp",
          id: "https://www.instagram.com/edermilitao/",
          stats: {
            goals: 3,
            assists: 1
          }
        },
        {
          name: "#4 David Alaba",
          position: "Defender",
          nationality: "Austrian",
          age: "32 Year Old",
          image: "/images/alaba.webp",
          id: "https://www.instagram.com/davidalaba/",
          stats: {
            goals: 2,
            assists: 3
          }
        },
        {
          name: "#17 Lucas Vázquez",
          position: "Defender",
          nationality: "Spanish",
          age: "33 Year Old",
          image: "/images/lucas.webp",
          id: "https://www.instagram.com/lucasvazquez91/",
          stats: {
            goals: 3,
            assists: 5
          }
        },
        {
          name: "#5 Jesús Vallejo",
          position: "Defender",
          nationality: "Spanish",
          age: "27 Year Old",
          image: "/images/vallejo.webp",
          id: "https://www.instagram.com/jesusvallejo/",
          stats: {
            goals: 1,
            assists: 0
          }
        },
        {
          name: "#6 Fran García",
          position: "Defender",
          nationality: "Spanish",
          age: "24 Year Old",
          image: "/images/fran.webp",
          id: "https://www.instagram.com/frangm_35/",
          stats: {
            goals: 2,
            assists: 4
          }
        },
        {
          name: "#22 Antonio Rüdiger",
          position: "Defender",
          nationality: "German",
          age: "31 Year Old",
          image: "/images/rudiger.webp",
          id: "https://www.instagram.com/toniruediger/",
          stats: {
            goals: 2,
            assists: 2
          }
        },
        {
          name: "#23 Ferland Mendy",
          position: "Defender",
          nationality: "French",
          age: "29 Year Old",
          image: "/images/mendy.webp",
          id: "https://www.instagram.com/ferland_mendy/",
          stats: {
            goals: 1,
            assists: 2
          }
        }
      ]
    }

const Mens =()=> 
     {
    return (
        <main>
            <div className="shop-container">
                <h1>Men's Team</h1>
            </div>
            <h1> Coaches</h1>
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

export default Mens;