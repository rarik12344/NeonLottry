'use client';

import { useEffect, useState } from 'react';

export function CountdownTimer({ endTime }: { endTime: number }) {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const updateTimer = () => {
      const now = Math.floor(Date.now() / 1000);
      const diff = endTime - now;

      if (diff <= 0) {
        setTimeLeft('00:00:00');
        return;
      }

      const hours = Math.floor(diff / 3600);
      const minutes = Math.floor((diff % 3600) / 60);
      const seconds = diff % 60;

      setTimeLeft(
        `${hours.toString().padStart(2, '0')}:${minutes
          .toString()
          .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
      );
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [endTime]);

  return (
    <div className="text-center mb-6">
      <div className="text-2xl font-mono mb-2 text-purple-400">
        {timeLeft}
      </div>
      <p className="text-sm text-gray-400">Next draw in</p>
    </div>
  );
}
