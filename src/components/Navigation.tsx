import HeartPost from "../assets/heartpostlogo.png";

const Navigation = () => {
  return (
    <div className="flex flex-row justify-between items-center p-4">
      <div>
        <img src={HeartPost} alt="heartpost logo" className="h-20 w-20" />
      </div>
      <div>
        <div>
          <nav>
            <ul className="flex flex-row space-x-4">
              <li>
                <a href="/" className="text-white font-rubik">
                  Home
                </a>
              </li>
              <li>
                <a href="/create" className="text-white font-rubik">
                  Create
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
