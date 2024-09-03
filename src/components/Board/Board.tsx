import { FC } from "react";
import Square from "../Square/Square";
import { useAppSelector } from "../../store/store";

const Board: FC = () => {
  const board = useAppSelector((state) => state.game.board);
  return (
    <>
      {board.map((number, index) => (
        <Square key={index} value={number} index={index} />
      ))}
    </>
  );
};

export default Board;
