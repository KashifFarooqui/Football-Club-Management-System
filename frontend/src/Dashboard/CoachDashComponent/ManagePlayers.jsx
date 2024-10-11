import React, { useState } from "react";
import "./manageplayers.css"; // Import the CSS for styling

const ManagePlayers = () => {
  // Updated player data with stats as strings
  const [players, setPlayers] = useState([
    // Goalkeepers
    {
      id: 1,
      name: "Thibaut Courtois",
      position: "Goalkeeper",
      age: "32 Year Old",
      status: "Active",
      stats: "Goals: 0, Assists: 0",
      health: 80, // Added health
    },
    {
      id: 2,
      name: "Andriy Lunin",
      position: "Goalkeeper",
      age: "25 Year Old",
      status: "Injured",
      stats: "Goals: 0, Assists: 0",
      health: 50, // Added health
    },
    // Forwards
    {
      id: 3,
      name: "#7 Vinicius Junior",
      position: "Forward",
      age: "24 Year Old",
      status: "Active",
      stats: "Goals: 16, Assists: 8",
      health: 85, // Added health
    },
    {
      id: 4,
      name: "#9 Kylian Mbappé",
      position: "Forward",
      age: "26 Year Old",
      status: "Active",
      stats: "Goals: 28, Assists: 10",
      health: 75, // Added health
    },
    {
      id: 5,
      name: "#11 Rodrygo Goes",
      position: "Forward",
      age: "23 Year Old",
      status: "Active",
      stats: "Goals: 12, Assists: 7",
      health: 78, // Added health
    },
    {
      id: 6,
      name: "#16 Endrick de Sousa",
      position: "Forward",
      age: "18 Year Old",
      status: "Active",
      stats: "Goals: 5, Assists: 2",
      health: 82, // Added health
    },
    {
      id: 7,
      name: "#21 Brahim Díaz",
      position: "Forward",
      age: "25 Year Old",
      status: "Active",
      stats: "Goals: 8, Assists: 5",
      health: 90, // Added health
    },
    // Midfielders
    {
      id: 8,
      name: "#5 Jude Bellingham",
      position: "Midfielder",
      age: "21 Year Old",
      status: "Active",
      stats: "Goals: 14, Assists: 6",
      health: 77, // Added health
    },
    {
      id: 9,
      name: "#6 Eduardo Camavinga",
      position: "Midfielder",
      age: "21 Year Old",
      status: "Injured",
      stats: "Goals: 2, Assists: 4",
      health: 40, // Added health
    },
    {
      id: 10,
      name: "#8 Federico Valverde",
      position: "Midfielder",
      age: "25 Year Old",
      status: "Active",
      stats: "Goals: 7, Assists: 9",
      health: 85, // Added health
    },
    {
      id: 11,
      name: "#10 Luka Modric",
      position: "Midfielder",
      age: "38 Year Old",
      status: "Active",
      stats: "Goals: 3, Assists: 7",
      health: 70, // Added health
    },
    {
      id: 12,
      name: "#14 Aurélien Tchouaméni",
      position: "Midfielder",
      age: "24 Year Old",
      status: "onLeave",
      stats: "Goals: 4, Assists: 3",
      health: 50, // Added health
    },
    {
      id: 13,
      name: "#15 Arda Güler",
      position: "Midfielder",
      age: "19 Year Old",
      status: "Active",
      stats: "Goals: 1, Assists: 1",
      health: 87, // Added health
    },
    {
      id: 14,
      name: "#19 Dani Ceballos",
      position: "Midfielder",
      age: "27 Year Old",
      status: "Active",
      stats: "Goals: 2, Assists: 5",
      health: 88, // Added health
    },
    // Defenders
    {
      id: 15,
      name: "#2 Dani Carvajal",
      position: "Defender",
      age: "32 Year Old",
      status: "Active",
      stats: "Goals: 1, Assists: 6",
      health: 60, // Added health
    },
    {
      id: 16,
      name: "#3 Éder Militão",
      position: "Defender",
      age: "26 Year Old",
      status: "On Leave",
      stats: "Goals: 3, Assists: 1",
      health: 65, // Added health
    },
    {
      id: 17,
      name: "#4 David Alaba",
      position: "Defender",
      age: "32 Year Old",
      status: "Active",
      stats: "Goals: 2, Assists: 3",
      health: 90, // Added health
    },
    {
      id: 18,
      name: "#17 Lucas Vázquez",
      position: "Defender",
      age: "33 Year Old",
      status: "Active",
      stats: "Goals: 3, Assists: 5",
      health: 75, // Added health
    },
    {
      id: 19,
      name: "#5 Jesús Vallejo",
      position: "Defender",
      age: "27 Year Old",
      status: "Active",
      stats: "Goals: 1, Assists: 0",
      health: 82, // Added health
    },
    {
      id: 20,
      name: "#6 Fran García",
      position: "Defender",
      age: "24 Year Old",
      status: "Active",
      stats: "Goals: 2, Assists: 4",
      health: 78, // Added health
    },
    {
      id: 21,
      name: "#22 Antonio Rüdiger",
      position: "Defender",
      age: "31 Year Old",
      status: "Active",
      stats: "Goals: 2, Assists: 2",
      health: 83, // Added health
    },
  ]);
  
  // Function to generate a random health value between 0 and 100
  const generateRandomHealth = () => {
    return Math.floor(Math.random() * 101); // Returns a number between 0 and 100
  };

  // Function to determine the color based on health value
  const getHealthColor = (health) => {
    if (health <= 30) {
      return "#FF0000"; // Red (Low health)
    } else if (health <= 50) {
      return "#FF7F00"; // Orange (Low-Medium health)
    } else if (health <= 70) {
      return "#FFFF00"; // Yellow (Medium health)
    } else if (health <= 85) {
      return "#80FF00"; // Light Green (Medium-High health)
    } else {
      return "#00FF00"; // Green (High health)
    }
  };
  

  return (
    <div className="table-container">
      <h1>Manage Players</h1>
      <table className="scrollable-table">
        <thead className="table-body">
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Age</th>
            <th>Status</th>
            <th>Stats</th>
            <th>Health</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {players.map((player) => {
            const health = player.health; // Use health from player object
            const healthColor = getHealthColor(health); // Get health color based on health
            return (
              <tr key={player.id}>
                <td>{player.name}</td>
                <td>{player.position}</td>
                <td>{player.age}</td>
                <td>{player.status}</td>
                <td>{player.stats}</td>
                <td>
                  {/* Health Bar with value from player object */}
                  <div className="health-bar-container">
                    <div
                      className="health-bar"
                      style={{
                        width: `${health}%`,
                        backgroundColor: healthColor,
                      }}
                    >
                      {health}%
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
  
};

export default ManagePlayers;
