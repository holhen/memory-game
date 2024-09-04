import { start, useAppDispatch } from "../../store/store";
import "./StartButton.scss";

const StartButton = () => {
  const dispatch = useAppDispatch();
  const handleStart = () => {
    dispatch(start());
  };
  return (
    <button onClick={handleStart} className="start" type="button">
      Play
    </button>
  );
};

export default StartButton;
