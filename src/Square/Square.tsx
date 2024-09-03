import { FC } from "react";
import "./Square.css";

interface SquareProps {
  value: number;
  index: number;
}

const Square: FC<SquareProps> = ({ value }) => {
  return <div className="square">{value}</div>;
};

export default Square;
