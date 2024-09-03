import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";
import Board from "../Board/Board";
import "./Game.scss";

const Game = () => {
  const context = useContext(GameContext);
  const { state } = context;
  const { correct, board } = state;
  const won = correct.length === board.length;
  return (
    <div className={`game ${won ? "won" : ""}`}>
      {won ? <p className="text">You won!</p> : <Board />}
    </div>
  );
};

export default Game;
