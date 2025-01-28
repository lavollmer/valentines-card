interface BoxTextProps {
  Title: string;
  Description: string;
}

const BoxText: React.FC<BoxTextProps> = ({ Title, Description }) => {
  return (
    <div>
      <div className="font-rubik flex flex-col items-center justify-center border-2 border-white rounded-lg p-4">
        <h2 className="font-bold text-lg text-navyBlue">{Title}</h2>
        <p className="text-md text-white">{Description}</p>
      </div>
    </div>
  );
};

export default BoxText;
