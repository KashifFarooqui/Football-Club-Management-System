import React from "react";
import './interview.css';

const interviews = [
    {
        id: 1,
        title: "Interview with Kylian Mbappe",
        description: "A deep dive into the life and career of one of football's brightest stars.",
        videoUrl: "https://www.youtube.com/watch?v=85bCBvz4pyk&pp=ygUka3lsbGlhbiBtYmFwcGUgaW50ZXJ2aWV3IHJlYWwgbWFkcmlk",
        thumbnail: "/images/interview1.webp",
    },
    {
        id: 2,
        title: "Karim Benzema's Journey",
        description: "Karim shares his experiences and challenges throughout his career.",
        videoUrl: "https://www.youtube.com/watch?v=m1_qMh8NplM&pp=ygUXa2FyaW0gYmVuemVtYSBpbnRlcnZpZXc%3D",
        thumbnail: "/images/interview2.webp",
    },
    {
        id: 3,
        title: "Luka Modric: Masterclass",
        description: "An exclusive interview discussing Luka's football philosophy.",
        videoUrl: "https://www.youtube.com/watch?v=xwR1OeCgYvs&pp=ygUWbHVjYSBtb2RyaWNoIGludGVydmlldw%3D%3D",
        thumbnail: "/images/interview3.webp", 
    },
    {
        id: 4,
        title: "Vinicius Jr: The Future of Football",
        description: "Vinicius discusses his journey and aspirations in football.",
        videoUrl: "https://www.youtube.com/watch?v=nmEVinTdfVM&pp=ygUhdmluaWNpdXMganIgaW50ZXJ2aWV3IHJlYWwgbWFkcmlk",
        thumbnail: "/images/interview4.webp",
    }
];

const Interview = () => {
    return (
        <main>
            <div className="shop-container">
                <h1>Interviews</h1>
            </div>
    
            <div className="interview-container">
                <div className="interview-list">
                    {interviews.map(interview => (
                        <div key={interview.id} className="interview-card">
                            <h2>{interview.title}</h2>
                            <div className="thumbnail-container">
                                <a href={interview.videoUrl} target="_blank" rel="noopener noreferrer">
                                    <img 
                                        src={interview.thumbnail} 
                                        alt={interview.title} 
                                        className="interview-thumbnail" 
                                    />
                                </a>
                            </div>
                           
                            <p>{interview.description}</p>
                            <a href={interview.videoUrl} target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Interview;
