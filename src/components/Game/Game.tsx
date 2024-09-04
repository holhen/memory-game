import Board from "../Board/Board";
import WinningMessage from "../WinningMessage/WinningMessage";
import StartGame from "../StartGame/StartGame";
import "./Game.scss";
import { useAppSelector } from "../../store/store";

const Game = () => {
  const isInProgress = useAppSelector((state) => state.game.isInProgress);
  const isWon = useAppSelector((state) => state.game.isWon);

  const content = isInProgress ? (
    <Board />
  ) : isWon ? (
    <WinningMessage />
  ) : (
    <StartGame />
  );
  return (
    <div
      className={`game ${isInProgress ? "in-progress" : isWon ? "won" : ""}`}
      data-testid="game"
    >
      {content}
    </div>
  );
};

export default Game;
