import { FC } from "react";
import { startingBoard } from "../utils/utils";
import Square from "../Square/Square";
import "./Board.css";

const Board: FC = () => {
  const board = startingBoard;
  return (
    <div className="board">
      {board.map((number, index) => (
        <Square key={index} value={number} index={index} />
      ))}
    </div>
  );
};

export default Board;
