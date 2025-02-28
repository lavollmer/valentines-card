import "../index.css";

const Footer = () => {
  return (
    <div className="flex flex-col md:space-x-4 text-center md:text-left md:flex-row justify-center md:justify-evenly bg-black pt-20 pb-20 font-rubik">
      <div className="flex flex-row justify-center md:flex-col md:m-6">
        <h1 className="text-white text-4xl">HeartPost</h1>
      </div>
      <div className="flex flex-col space-y-6 text-sm">
        <div>
          <h1 className="font-bold text-white">Product</h1>
        </div>
        <div className="flex flex-col left-0 space-y-2 text-white">
          <p>Overview</p>
          <p>Pricing</p>
        </div>
      </div>
      <div className="flex flex-col space-y-6 text-sm">
        <div>
          <h1 className="font-bold text-white">Company</h1>
        </div>
        <div className="flex flex-col left-0 space-y-2 text-white">
          <p>About</p>
          <p>Team</p>
          <p>Blog</p>
        </div>
      </div>
      <div className="flex flex-col space-y-6 text-sm">
        <div>
          <h1 className="font-bold text-white">Connect</h1>
        </div>
        <div className="flex flex-col left-0 space-y-2 text-white">
          <p>Contact</p>
          <p>Newsletter</p>
          <p>LinkedIn</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
