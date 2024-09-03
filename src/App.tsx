import { FC } from "react";
import Game from "./components/Game/Game";
import { GameContextProvider } from "./contexts/GameContext";

const App: FC = () => {
  return (
    <GameContextProvider>
      <Game />
    </GameContextProvider>
  );
};

export default App;
