import "../App.css";
import "../index.css";
import Footer from "./Footer";
import BackgroundCard from "../assets/backgroundCard.jpg";
import BoxText from "./BoxText";
import ButtonVal from "./ButtonVal";
import Navigation from "./Navigation";
import Countdown from "./Countdown";
import Customer from "./Customer";

const LandingPage = () => {

  return (
    <div className="bg-gradient-to-r from-red-300 to-pink-600">
      <Navigation />
      <header className="my-24">
        <div
          className="w-full bg-center bg-cover"
          style={{ backgroundImage: `url(${BackgroundCard})` }}
        >
          <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 py-12">
            <div className="text-center">
              <div className="container px-4 mx-auto">
                <div className="max-w-4xl text-center justify-center">
                  <h1 className="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100">
                    Send a Personalized Valentine's Day Card They'll Never
                    Forget
                  </h1>
                  <p className="max-w-3xl mx-auto mb-10 text-lg text-gray-100">
                    Send a digital card that speaks from the heart
                  </p>
                  <div className="flex justify-center">
                    <ButtonVal buttonTitle="Create Your Card" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="flex flex-col items-center justify-center">
        <Countdown />
      </div>
      <div className="flex flex-col items-center justify-center p-10">
        <h1 className="text-2xl text-white font-bold p-8">
          Why Choose Our Valentine's Digital Cards?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <BoxText
              Title="Personalized Designs"
              Description="Choose from a wide range of stunning, customizable templates."
            />
          </div>
          <div>
            <BoxText
              Title="Instant Delivery"
              Description="No waiting for shipping – send your love in seconds!"
            />
          </div>
          <div>
            <BoxText
              Title="Eco-Friendly & Convenient"
              Description="No paper, no waste – just heartfelt messages, instantly delivered."
            />
          </div>
        </div>
        <div>
          <Customer />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
