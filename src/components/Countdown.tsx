const Countdown = () => {
  const countDownDate = new Date(2025, 2, 14).getTime();

  const now = new Date().getTime();

  const distance = countDownDate - now;

  const daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutesLeft = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secondsLeft = Math.floor((distance % (1000 * 60)) / 1000);

  return (
    <div className="flex flex-col space-y-10 items-center justify-center text-white">
      <div>
        <h2 className="text-4xl font-bold">Countdown to Valentine's Day</h2>
      </div>
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max bg-black p-6 rounded-lg">
        <div className="flex flex-row space-x-6 font-rubik">
          <div className="flex flex-col">
            <p className="text-4xl">{daysLeft}</p>
            <p>days</p>
          </div>
          <p className="text-4xl">:</p>
          <div className="flex flex-col">
            <p className="text-4xl">{hoursLeft}</p>
            <p>hours</p>
          </div>
          <p className="text-4xl">:</p>
          <div className="flex flex-col">
            <p className="text-4xl">{minutesLeft}</p>
            <p>minutes</p>
          </div>
          <p className="text-4xl">:</p>
          <div className="flex flex-col">
            <p className="text-4xl">{secondsLeft}</p>
            <p>seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
