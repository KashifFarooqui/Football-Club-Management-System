import React, { useState } from "react";
import Ticket from "../Ticket/Ticket";
import './schedule.css';

const matchesData = {
    Jul: [],   
    Oct: [
        {
            homeTeam: 'Real Madrid',
            homeLogo: '/images/RM.png',
            awayTeam: 'Villarreal',
            awayLogo: 'images/villa.png',
            eventDetails: 'Football - First Team - Male',
            competition: 'La Liga',
            matchDay: 'Matchday 7',
            dateTime: 'Sunday, Oct 6, 12:30 AM',
            location: 'Estadio Santiago Bernabéu',
            vipPrice: 'VIP from ₹ 1200',  
            generalPrice: 'Capacity for general public from ₹ 500', 
        },
        {
            homeTeam: 'Real Madrid',
            homeLogo: '/images/RM.png',
            awayTeam: 'Celta de Vigo',
            awayLogo: 'images/celta.png',
            eventDetails: 'Football - First Team - Male',
            competition: 'La Liga',
            matchDay: 'Matchday 10',
            dateTime: 'Sunday, Oct 20, 12:30 AM',
            location: 'Municipal de Balaidos',
            vipPrice: 'VIP from ₹ 1200',
            generalPrice: 'Capacity for general public from ₹ 500', 
        }
    ],
    Nov: [
        {
            homeTeam: 'Real Madrid',
            homeLogo: '/images/RM.png',
            awayTeam: 'Milan',
            awayLogo: 'images/milan.png',
            eventDetails: 'Football - First Team - Male',
            competition: ' UEFA Champions League',
            matchDay: 'Round 4',
            dateTime: 'Wednesday, Nov 6, 1:30 AM',
            location: 'Estadio Santiago Bernabéu',
            vipPrice: 'VIP from ₹ 1200', 
            generalPrice: 'Capacity for general public from ₹ 500',
        },
    ],
    Dec: [
        {
            homeTeam: 'Real Madrid',
            homeLogo: '/images/RM.png',
            awayTeam: 'Real Valladolid',
            awayLogo: 'images/RV.png',
            eventDetails: 'Football - First Team - Male',
            competition: 'La Liga',
            matchDay: 'Matchday 2',
            dateTime: 'Sunday, Dec 25, 5:00 PM',
            location: 'Estadio Santiago Bernabéu',
            vipPrice: 'VIP from ₹ 1200', 
            generalPrice: 'Capacity for general public from ₹ 500', 
        },
        {
            homeTeam: 'Real Madrid',
            homeLogo: '/images/RM.png',
            awayTeam: 'Sevilla',
            awayLogo: 'images/sevilla.png',
            eventDetails: 'Football - First Team - Male',
            competition: 'La Liga',
            matchDay: 'Matchday 3',
            dateTime: 'Saturday, Dec 31, 6:00 PM',
            location: 'Estadio Santiago Bernabéu',
            vipPrice: 'VIP from ₹ 1200', 
            generalPrice: 'Capacity for general public from ₹ 500', 
        }
    ],
    Jan: [
        {
            homeTeam: 'Real Madrid',
            homeLogo: '/images/RM.png',
            awayTeam: 'Alavés',
            awayLogo: 'images/alaves.png',
            eventDetails: 'Football - First Team - Male',
            competition: 'La Liga',
            matchDay: 'Matchday 5',
            dateTime: 'Sunday, Jan 25, 8:00 PM',
            location: 'Estadio Santiago Bernabéu',
            vipPrice: 'VIP from ₹ 1200',
            generalPrice: 'Capacity for general public from ₹ 500', 
        },
        {
            homeTeam: 'Real Madrid',
            homeLogo: '/images/RM.png',
            awayTeam: 'Atlético de Madrid',
            awayLogo: 'images/madrid.png',
            eventDetails: 'Football - First Team - Male',
            competition: 'La Liga',
            matchDay: 'Matchday 5',
            dateTime: 'Monday, Jan 30, 8:00 PM',
            location: 'Estadio Santiago Bernabéu',
            vipPrice: 'VIP from ₹ 1200', 
            generalPrice: 'Capacity for general public from ₹ 500', 
        }
    ]  
};


const Schedule = () => {
    const [selectedMonth, setSelectedMonth] = useState('Oct');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMatch, setSelectedMatch] = useState(null);

    const handleMonthClick = (month) => {
        setSelectedMonth(month);
    };

    const openModal = (match) => {
        setSelectedMatch(match);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedMatch(null);
    };

    const matchesForMonth = matchesData[selectedMonth] || [];

    return (
        <main>
            <div className="shop-container">
                <h1>Upcoming Matches</h1>
            </div>
            <div className="filters">
                {['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month) => (
                    <button
                        key={month}
                        className={`filter-button ${selectedMonth === month ? 'active' : ''}`}
                        onClick={() => handleMonthClick(month)}
                    >
                        {month}
                    </button>
                ))}
            </div>
            {matchesForMonth.length > 0 ? (
                matchesForMonth.map((match, index) => (
                    <div key={index} className="ticket-card">
                        <div className="team-logos">
                            <img src={match.homeLogo} alt={`${match.homeTeam} Logo`} />
                            <div className="team-name">{match.homeTeam}</div>
                            <div className="vs">vs</div>
                            <img src={match.awayLogo} alt={`${match.awayTeam} Logo`} />
                            <div className="team-name">{match.awayTeam}</div>
                        </div>

                        <div className="ticket-details">
                            <div className="event-details">
                                <p>{match.eventDetails}</p>
                                <h2>{match.competition}</h2>
                                <h3>{match.matchDay}</h3>
                            </div>
                            <div className="date-time">
                                <i className="fas fa-calendar-alt"></i>
                                <span>{match.dateTime}</span>
                            </div>
                            <div className="location">
                                <i className="fas fa-map-marker-alt"></i>
                                <span>{match.location}</span>
                            </div>
                            <div className="price">
                                <i className="fas fa-money-bill-wave"></i>
                                <span>{match.vipPrice}</span>
                            </div>
                            <div className="capacity">
                                <i className="fas fa-users"></i>
                                <span>{match.generalPrice}</span>
                            </div>
                        </div>
                        <div className="button-container">
                            <button
                                onClick={() => openModal(match)} 
                                className="buy-tickets-button"
                            >
                                Buy Tickets
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <div className="no-tickets">
                    <h2>No Matches available</h2>
                </div>
            )}
            {isModalOpen && (
                <Ticket matchDetails={selectedMatch} onClose={closeModal} />
            )}
        </main>
    );
};

export default Schedule;
