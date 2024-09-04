import { FC } from "react";
import Game from "./components/Game/Game";
import {
  setNumberOfTiles,
  useAppDispatch,
  useAppSelector,
} from "./store/store";
import "./App.scss";

const App: FC = () => {
  const isInProgress = useAppSelector((state) => state.game.isInProgress);
  const numberOfTiles = useAppSelector((state) => state.game.numberOfTiles);
  const dispatch = useAppDispatch();
  return (
    <div className="app">
      {isInProgress && (
        <input
          type="number"
          min={2}
          step={2}
          value={numberOfTiles}
          onChange={(e) => dispatch(setNumberOfTiles(parseInt(e.target.value)))}
          placeholder="Number of tiles: 20"
        />
      )}
      <Game />
    </div>
  );
};

export default App;
