interface CountdownProps {
    hours: number;
    minutes: number;
    seconds:number
    days: number;
}

const Countdown: React.FC<CountdownProps> = ({hours, minutes, seconds, days}) => {
    var CountDownDate = new Date("Feb 14, 2025 00:00:00").getTime();

    var x = setInterval(function(){
        var now = new Date().getTime()

        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 * 24));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    })

    if (distance < 0) {
        clearInterval(x);
        return "over"
    }
  return (
    <div>
      <div>
        <h2>Countdown to Valentine's Day</h2>
      </div>
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col">
          <div className="font-rubik text-5xl">
            {days}
            <p>days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
