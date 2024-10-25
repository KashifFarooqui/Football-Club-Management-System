import './traning.css';

const Training = () => {
  const trainingPlans = [
    { id: 1, activity: "Strength Training", description: "Focus on upper and lower body strength.", duration: "1 hour", focus: "Strength" },
    { id: 2, activity: "Endurance Running", description: "Long-distance running to improve stamina.", duration: "1.5 hours", focus: "Endurance" },
    { id: 3, activity: "Agility Drills", description: "Quick movement and footwork exercises.", duration: "45 minutes", focus: "Agility" },
    { id: 4, activity: "Tactical Training", description: "Team play strategies and formations.", duration: "2 hours", focus: "Tactics" },
    { id: 5, activity: "Recovery Session", description: "Low-intensity exercises for recovery.", duration: "30 minutes", focus: "Recovery" }
  ];

  return (
    <div className="trainingplan-container">
      <h1>Training Plans</h1>
      <table className="trainingplan-table">
        <thead>
          <tr>
            <th>Activity</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Focus</th>
          </tr>
        </thead>
        <tbody>
          {trainingPlans.map((plan) => (
            <tr key={plan.id}>
              <td>{plan.activity}</td>
              <td>{plan.description}</td>
              <td>{plan.duration}</td>
              <td>{plan.focus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Training;
