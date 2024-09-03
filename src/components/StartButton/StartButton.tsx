import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";
import { Actions } from "../../store/store";
import "./StartButton.scss";

const StartButton = () => {
  const context = useContext(GameContext);
  const { dispatch } = context;
  const handleStart = () => {
    dispatch({
      type: Actions.START,
    });
  };
  return (
    <button onClick={handleStart} className="start" type="button">
      Play
    </button>
  );
};

export default StartButton;
