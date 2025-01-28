interface BoxTextProps {
  title: string;
  Description: string;
}

const BoxText: React.FC<BoxTextProps> = () => {
  return (
    <div>
      <div className="font-rubik text-white flex flex-col items-center justify-center space-y-6">
        <h1>{title}</h1>
        <h1>{Description}</h1>
      </div>
    </div>
  );
};

export default BoxText;
