import {
  flip,
  gameReducer,
  initialState,
  setNumberOfTiles,
  start,
  State,
} from "./store";

describe("Reducer tests", () => {
  test("should return the initial state", () => {
    expect(gameReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });
  test("should start the game", () => {
    expect(gameReducer(initialState, start())).toEqual({
      ...initialState,
      isInProgress: true,
    });
  });
  test("should set the correct number of tiles", () => {
    expect(gameReducer(initialState, setNumberOfTiles(2))).toEqual({
      ...initialState,
      board: [1, 1],
      numberOfTiles: 2,
    });
  });
  test("should flip the given index", () => {
    expect(gameReducer(initialState, flip(2))).toEqual({
      ...initialState,
      flipped: [2],
    });
  });
  test("should add the given index to flipped tiles", () => {
    const prevState: State = {
      ...initialState,
      board: [1, 1, 2, 2, 3, 3],
      flipped: [2],
    };

    expect(gameReducer(prevState, flip(4))).toEqual({
      ...initialState,
      board: [1, 1, 2, 2, 3, 3],
      flipped: [2, 4],
    });
  });
  test("should add the given index to correct tiles", () => {
    const prevState: State = {
      ...initialState,
      board: [1, 1, 2, 2, 3, 3],
      flipped: [2],
    };

    expect(gameReducer(prevState, flip(3))).toEqual({
      ...initialState,
      board: [1, 1, 2, 2, 3, 3],
      flipped: [],
      correct: [2, 3],
    });
  });
  test("should win the game", () => {
    const prevState: State = {
      ...initialState,
      board: [1, 1, 2, 2, 3, 3],
      correct: [0, 1, 2, 3],
      flipped: [4],
    };

    expect(gameReducer(prevState, flip(5))).toEqual({
      ...initialState,
      board: [1, 1, 2, 2, 3, 3],
      correct: [0, 1, 2, 3, 4, 5],
      isInProgress: false,
      isWon: true,
    });
  });
});
