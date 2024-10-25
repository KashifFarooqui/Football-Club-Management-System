import './salary.css';

const Salary = () => {
  const players = [
    { id: 1, name: "Thibaut Courtois", salary: "€1,250,000" },
    { id: 2, name: "Andriy Lunin", salary: "€300,000" },
    { id: 3, name: "Vinicius Junior", salary: "€916,667" },
    { id: 4, name: "Kylian Mbappé", salary: "€6,000,000" }, 
    { id: 5, name: "Rodrygo Goes", salary: "€500,000" },
    { id: 6, name: "Endrick de Sousa", salary: "€300,000" },
    { id: 7, name: "Brahim Díaz", salary: "€200,000" },
    { id: 8, name: "Jude Bellingham", salary: "€1,100,000" },
    { id: 9, name: "Eduardo Camavinga", salary: "€400,000" },
    { id: 10, name: "Federico Valverde", salary: "€600,000" },
    { id: 11, name: "Luka Modric", salary: "€1,400,000" },
    { id: 12, name: "Aurélien Tchouaméni", salary: "€550,000" },
    { id: 13, name: "Arda Güler", salary: "€300,000" },
    { id: 14, name: "Dani Ceballos", salary: "€400,000" },
    { id: 15, name: "Dani Carvajal", salary: "€700,000" },
    { id: 16, name: "Éder Militão", salary: "€600,000" },
    { id: 17, name: "David Alaba", salary: "€1,000,000" },
    { id: 18, name: "Lucas Vázquez", salary: "€400,000" },
    { id: 19, name: "Jesús Vallejo", salary: "€200,000" },
    { id: 20, name: "Fran García", salary: "€200,000" },
    { id: 21, name: "Antonio Rüdiger", salary: "€950,000" }
  ];

  return (
    <div className="salary-container">
      <h1>Player Salaries</h1>
      <table className="salary-table">
        <thead>
          <tr>
            <th>Player</th>
            <th>Salary (Per Month)</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.id}>
              <td>{player.name}</td>
              <td>{player.salary}</td>
              <td className="salary-status">Paid</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Salary;
