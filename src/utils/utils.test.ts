import { getStartingBoard } from "./utils";

describe("utils test", () => {
  test("getStartingBoard", () => {
    const boardLength = 20;
    const board = getStartingBoard(boardLength);
    expect(board.length).toEqual(boardLength);

    for (const number of board) {
      expect(number).toBeGreaterThanOrEqual(1);
      expect(number).toBeLessThanOrEqual(10);
    }
  });
});
