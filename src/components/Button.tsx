import { PropsWithChildren } from "react";

type Props = {
  onClick?: () => void;
} & PropsWithChildren<{}>;

const Button = ({ onClick, children }: Props) => {
  return (
    <button
      onClick={onClick}
      className={
        "border py-2 px-4 rounded-xl text-2xl text-green-500 border-solid border-green-500 hover:text-white hover:bg-green-500 hover:scale-125 scale-100 ease-in-out transition-all hover:shadow hover:shadow-green-500"
      }
    >
      {children}
    </button>
  );
};

export default Button;
