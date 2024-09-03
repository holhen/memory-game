import { FC } from "react";
import { startingBoard } from "../../utils/utils";
import Square from "../Square/Square";

const Board: FC = () => {
  const board = startingBoard;
  return (
    <>
      {board.map((number, index) => (
        <Square key={index} value={number} index={index} />
      ))}
    </>
  );
};

export default Board;
