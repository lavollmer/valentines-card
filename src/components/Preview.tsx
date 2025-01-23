import YouAreLoved from "./YouAreLoved";
import Vintage from "./Vintage";
import ValentinesCard from "./ValentinesCard";
import { useLocation } from "react-router-dom";

interface Props {
  firstName: string;
  message: string;
  fromName: string;
}

const Preview: React.FC<Props> = () => {
  const location = useLocation();
  const { firstName, message, fromName } = location.state as Props;

  return (
    <div className="bg-mauvePink h-screen flex justify-center items-center">
      <div className="flex flex-col items-center justify-center h-full">
        <YouAreLoved
          firstName={firstName}
          message={message}
          fromName={fromName}
        />
        <Vintage firstName={firstName} message={message} fromName={fromName} />
        <ValentinesCard
          firstName={firstName}
          message={message}
          fromName={fromName}
        />
      </div>
    </div>
  );
};

export default Preview;
