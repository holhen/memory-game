import { FC, useContext } from "react";
import { GameContext } from "../../contexts/GameContext";
import { Actions } from "../../store/store";
import "./Square.scss";

interface SquareProps {
  value: number;
  index: number;
}

const Square: FC<SquareProps> = ({ value, index }) => {
  const context = useContext(GameContext);
  const { state, dispatch } = context;
  const { flipped, correct } = state;
  const isFlipped = flipped.includes(index);
  const isCorrect = correct.includes(index);

  const handleFlip = () => {
    if (isCorrect) {
      return;
    }
    dispatch({
      type: Actions.FLIP,
      payload: index,
    });
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
