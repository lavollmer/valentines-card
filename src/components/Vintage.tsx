interface Props {
  firstName: string;
  message: string;
  fromName: string;
}

const Vintage: React.FC<Props> = ({ firstName, message, fromName }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-10 bg-timberwolf font-rubik rounded-lg">
      <div className="font-bold">
        <h1>Happy Valentine's Day {firstName}!</h1>
      </div>
      <div>
        <h1>{message}</h1>
      </div>
      <div className="font-bold">
        <h1>From {fromName}</h1>
      </div>
    </div>
  );
};

export default Vintage;
