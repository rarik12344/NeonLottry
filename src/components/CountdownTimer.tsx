'use client';

import { useEffect, useState } from 'react';

export function CountdownTimer({ endTime }: { endTime: number }) {
  const [timeLeft, setTimeLeft] = useState({
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    const updateTimer = () => {
      const now = Math.floor(Date.now() / 1000);
      const diff = endTime - now;

      if (diff <= 0) {
        setTimeLeft({ hours: '00', minutes: '00', seconds: '00' });
        return;
      }

      const hours = Math.floor(diff / 3600);
      const minutes = Math.floor((diff % 3600) / 60);
      const seconds = diff % 60;

      setTimeLeft({
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0')
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [endTime]);

  return (
    <div className="text-center">
      <div className="text-2xl font-mono mb-2">
        <span className="text-blue-400">{timeLeft.hours}</span>:
        <span className="text-purple-400">{timeLeft.minutes}</span>:
        <span className="text-pink-400">{timeLeft.seconds}</span>
      </div>
      <p className="text-sm text-gray-400">Until next draw</p>
    </div>
  );
}
