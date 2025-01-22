interface Props {
  firstName: string;
  message: string;
}

const Vintage: React.FC<Props> = ({ firstName, message }) => {
  return (
    <div className="bg-parchment">
      <h1>Happy Valentine's Day {firstName}!</h1>
      <h1>{message}</h1>
    </div>
  );
};

export default Vintage;
