import React, { useState, useEffect } from "react";

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countDownDate = new Date(2025, 2, 14).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance < 0) {
        clearInterval(intervalId);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };
    const intervalId = setInterval(updateCountdown, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col space-y-10 items-center justify-center text-white">
      <div>
        <h2 className="text-4xl font-bold">Countdown to Valentine's Day</h2>
      </div>
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max bg-black p-6 rounded-lg">
        <div className="flex flex-row space-x-6 font-rubik">
          <div className="flex flex-col">
            <p className="text-4xl">{timeLeft.days}</p>
            <p>days</p>
          </div>
          <p className="text-4xl">:</p>
          <div className="flex flex-col">
            <p className="text-4xl">{timeLeft.hours}</p>
            <p>hours</p>
          </div>
          <p className="text-4xl">:</p>
          <div className="flex flex-col">
            <p className="text-4xl">{timeLeft.minutes}</p>
            <p>minutes</p>
          </div>
          <p className="text-4xl">:</p>
          <div className="flex flex-col">
            <p className="text-4xl">{timeLeft.seconds}</p>
            <p>seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
