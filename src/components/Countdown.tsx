// interface CountdownProps {
//   daysLeft: number;
//   hoursLeft: number;
//   minutesLeft: number;
//   secondsLeft: number;
// }

const Countdown = () => {
  // Creating a countdownDate
  const countDownDate = new Date(2025, 2, 14).getTime();

  const now = new Date().getTime();

  const distance = countDownDate - now;

  const daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hoursLeft =
    Math.floor(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 * 24);
  const minutesLeft = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secondsLeft = Math.floor((distance % (1000 * 60)) / 1000);

  return (
    <div>
      <div>
        <h2>Countdown to Valentine's Day</h2>
      </div>
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col">
          <div className="font-rubik text-5xl">
            <p>
              {daysLeft} days, {hoursLeft} hours, {minutesLeft} minutes,{" "}
              {secondsLeft} seconds
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
