import { FC } from "react";
import { flip, useAppDispatch, useAppSelector } from "../../store/store";
import "./Square.scss";

interface SquareProps {
  value: number;
  index: number;
}

const Square: FC<SquareProps> = ({ value, index }) => {
  const flipped = useAppSelector((state) => state.game.flipped);
  const correct = useAppSelector((state) => state.game.correct);
  const dispatch = useAppDispatch();

  const isFlipped = flipped.includes(index);
  const isCorrect = correct.includes(index);

  const handleFlip = () => {
    if (isCorrect) {
      return;
    }
    dispatch(flip(index));
  };

  return (
    <div
      className={`square ${isFlipped ? "flipped" : isCorrect ? "correct" : ""}`}
      onClick={handleFlip}
    >
      {value}
    </div>
  );
};

export default Square;
