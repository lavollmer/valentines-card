interface ButtonValProps {
  buttonTitle: string;
}

const ButtonVal: React.FC<ButtonValProps> = ({ buttonTitle }) => {
  return (
    <button className="text-white text-md flex flex-row items-center justify-center rounded-full py-2 px-4 bg-rojo bg-opacity-70 hover:bg-opacity-100 hover:border-2">
      <p>{buttonTitle}</p>
    </button>
  );
};

export default ButtonVal;
