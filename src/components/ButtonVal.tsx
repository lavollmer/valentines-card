interface ButtonValProps {
  buttonTitle: string;
}

const ButtonVal: React.FC<ButtonValProps> = ({ buttonTitle }) => {
  return (
    <div>
      <button>{buttonTitle}</button>
    </div>
  );
};

export default ButtonVal;
