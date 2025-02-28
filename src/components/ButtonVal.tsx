interface ButtonValProps {
  buttonTitle: string;
}

const ButtonVal: React.FC<ButtonValProps> = ({ buttonTitle }) => {
  return (
    <button className="text-black text-md flex flex-row items-center justify-center rounded-full py-2 px-8 bg-white bg-opacity-70 hover:bg-opacity-100 hover:border-2">
      <p>{buttonTitle}</p>
    </button>
  );
};

export default ButtonVal;
