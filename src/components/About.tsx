import HeartsPhoto from "../assets/hearts.jpg";
import Hearts from "../assets/hearts2.jpg";

const About = () => {
  return (
    <div className="flex flex-col font-rubik z-10">
      <div className="flex flex-col md:flex-row justify-center text-center md:pt-20 pt-10">
        <h1 className="flex flex-row justify-center text-white font-bold text-center text-2xl md:text-3xl">
          About HeartPost
        </h1>
      </div>
      <div className="block md:hidden flex flex-row justify-center p-4">
        <img src={Hearts} alt="Hearts Photo" />
      </div>
      <div className="flex flex-row grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col space-y-4 p-10 md:p-20">
          <div className="flex flex-col text-left space-y-4">
            <h2 className="font-bold text-white text-2xl">
              A Unique, Heartfelt Way to Show Love
            </h2>
            <p className="text-md text-left text-very-dark-grayish-blue font-light">
              Looking for the perfect way to show your love this Valentine's
              Day? Our digital card service offers a unique, heartfelt solution
              to express your feelings with ease. Whether you're near or far,
              our customizable Valentine's Day cards allow you to send a
              personal, meaningful message in just a few clicks.
            </p>
          </div>
          <div className="flex flex-col text-left space-y-4 pt-10">
            <h2 className="font-bold text-white text-2xl">
              Personalized Options for Everyone
            </h2>
            <p className="text-md text-left text-very-dark-grayish-blue font-light">
              With a wide selection of beautiful designs and the ability to add
              your own text, photos, and special touches, our digital cards are
              perfect for lovers, friends, and family. Convenient, eco-friendly,
              and instantly shareable, it's the modern way to celebrate love and
              make this Valentine's Day unforgettable!
            </p>
          </div>
        </div>
        <div className="hidden md:block flex flex-row justify-center p-20">
        <img src={HeartsPhoto} alt="Hearts Photo" className="rounded-lg"/>
        </div>
      </div>
    </div>
  );
};

export default About;
