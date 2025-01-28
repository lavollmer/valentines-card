interface BoxTextProps {
  Title: string;
  Description: string;
}

const BoxText: React.FC<BoxTextProps> = ({ Title, Description }) => {
  return (
    <div>
      <div className="font-rubik text-white flex flex-col items-center justify-center space-y-6">
        <h1>{Title}</h1>
        <h1>{Description}</h1>
      </div>
    </div>
  );
};

export default BoxText;
