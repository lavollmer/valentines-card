interface ButtonValProps {
  buttonTitle: string;
}

const ButtonVal: React.FC<ButtonValProps> = ({ buttonTitle }) => {
  return (
    <button className="text-white flex flex-row items-center justify-center space-x-2 py-2 px-4 rounded-full bg-rojo bg-opacity-80">
      <p>{buttonTitle}</p>
    </button>
  );
};

export default ButtonVal;
