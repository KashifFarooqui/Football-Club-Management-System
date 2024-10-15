import React, { useState } from "react";
import { Checkoutbutton } from "../../Checkout/CheckoutButton.jsx";
import './ticket.css'; 

const Ticket = ({ matchDetails, onClose }) => {
  const [ticketCount, setTicketCount] = useState(1);
  const [ticketType, setTicketType] = useState('regular');


  
  const parsePrice = (priceString) => {
    return parseFloat(priceString.replace(/[^\d.-]/g, '')); 
  };
    

  const calculateTotal = () => {
    const price = ticketType === 'vip' 
      ? parsePrice(matchDetails.vipPrice) 
      : parsePrice(matchDetails.generalPrice);
    return price * ticketCount; 
  };
  const ticketTotal = calculateTotal().toFixed(2)

  const handleConfirm = () => {
    alert(`Tickets confirmed!\nDetails:\n- Type: ${ticketType}\n- Quantity: ${ticketCount}\n- Match: ${matchDetails.homeTeam} vs ${matchDetails.awayTeam}\n- Total: ${calculateTotal().toFixed(2)}`);
    // const currentUrl = window.location.href;
    // console.log(currentUrl); 

  };

  if (!matchDetails) return null;

  return (
    <div className="modal-overlay">
      <div className="ticket-form">
        <h2>Ticket Details</h2>
        <div className="team-logos">
          <img src={matchDetails.homeLogo} alt={`${matchDetails.homeTeam} Logo`} className="team-logo" />
          <span className="team-name">{matchDetails.homeTeam}</span>
          <span> vs </span>
          <img src={matchDetails.awayLogo} alt={`${matchDetails.awayTeam} Logo`} className="team-logo" />
          <span className="team-name">{matchDetails.awayTeam}</span>
        </div>

        <p><strong>Date & Time:</strong> {matchDetails.dateTime}</p>
        <p><strong>Location:</strong> {matchDetails.location}</p>
        <p><strong>VIP Price:</strong> €{parsePrice(matchDetails.vipPrice).toFixed(2)}</p>
        <p><strong>Regular Price:</strong> €{parsePrice(matchDetails.generalPrice).toFixed(2)}</p>

        <div className="form-group">
          <label htmlFor="ticketCount">Number of Tickets:</label>
          <input
            type="number"
            id="ticketCount"
            value={ticketCount}
            onChange={(e) => setTicketCount(Math.min(e.target.value, 10))} 
            min="1"
            max="10" 
          />
        </div>

        <div className="form-group">
          <label>Ticket Type:</label>
          <label>
            <input
              type="checkbox"
              value="vip"
              checked={ticketType === 'vip'}
              onChange={(e) => setTicketType(e.target.value)}
            />
            VIP
          </label>
          <label>
            <input
              type="checkbox"
              value="regular"
              checked={ticketType === 'regular'}
              onChange={(e) => setTicketType(e.target.value)}
            />
            Regular
          </label>
        </div>


        <div className="total-price">
          <strong>Total: </strong>€{ticketTotal} 
        </div>

        <div className="form-actions">
        <Checkoutbutton  totalAmount={ticketTotal}/>
        {/* <button className="Confirm" onClick={handleConfirm}>Confirm</button> */}
          <button className="Confirm" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
