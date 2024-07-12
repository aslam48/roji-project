import React, { useState, useEffect } from 'react';

const FlipClock: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZone: 'Africa/Lagos'
      };
      const timeString = new Intl.DateTimeFormat('en-US', options).format(date);
      setTime(timeString);
    };

    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flip-clock">
      {time.split(':').map((part, index) => (
        <div key={index} className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="flip-card-number">{part}</div>
            </div>
            <div className="flip-card-back">
              <div className="flip-card-number">{part}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlipClock;
