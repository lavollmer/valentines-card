interface Props {
  firstName: string;
  message: string;
  fromName: string;
}

const Vintage: React.FC<Props> = ({ firstName, message, fromName }) => {
  return (
    <div className="flex flex-col w-auto h-auto bg-timberwolf p-20">
      <div>
        <h1>Happy Valentine's Day {firstName}!</h1>
      </div>
      <div>
        <h1>{message}</h1>
      </div>
      <div>
        <h1>From {fromName}</h1>
      </div>
    </div>
  );
};

export default Vintage;
