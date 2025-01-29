interface BoxTextProps {
  Title: string;
  Description: string;
}

const BoxText: React.FC<BoxTextProps> = ({ Title, Description }) => {
  return (
    <div>
      <div className="font-rubik flex flex-col items-center text-center justify-center border-4 border-white rounded-lg p-4 m-2 space-y-2 h-48 w-48 hover:bg-white hover:text-black">
        <h2 className="font-bold text-lg text-navyBlue">{Title}</h2>
        <p className="text-md text-black">{Description}</p>
      </div>
    </div>
  );
};

export default BoxText;
