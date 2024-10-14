interface Props {
  name: string;
  color?: "primary" | "secondary";
  onClick: () => void;
}

const Button = ({ name, color, onClick }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
