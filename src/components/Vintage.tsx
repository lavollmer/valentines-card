import Envelope from "./Envelope";

interface Props {
  firstName: string;
  message: string;
  fromName: string;
}

const Vintage: React.FC<Props> = ({ firstName, message, fromName }) => {
  return (
    <div className="bg-mauvePink">
      <Envelope />
      <h1>Happy Valentine's Day {firstName}!</h1>
      <h1>{message}</h1>
      <h1>From {fromName}</h1>
    </div>
  );
};

export default Vintage;
