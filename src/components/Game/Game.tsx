import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";
import Board from "../Board/Board";
import "./Game.scss";
import WinningMessage from "../WinningMessage/WinningMessage";
import StartGame from "../StartGame/StartGame";

const Game = () => {
  const context = useContext(GameContext);
  const { state } = context;
  const { isInProgress, isWon } = state;
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
    >
      {content}
    </div>
  );
};

export default Game;
