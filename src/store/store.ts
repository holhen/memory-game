import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getStartingBoard } from "../utils/utils";
import { useDispatch, useSelector } from "react-redux";

interface State {
  board: number[];
  flipped: number[];
  correct: number[];
  isInProgress: boolean;
  isWon: boolean;
  numberOfTiles: number;
}

const savedState = localStorage.getItem("state");
const defaultNumberOfTiles = 20;

const initialState: State = savedState
  ? JSON.parse(savedState)
  : {
      board: getStartingBoard(defaultNumberOfTiles),
      flipped: [],
      correct: [],
      isInProgress: false,
      isWon: false,
      numberOfTiles: defaultNumberOfTiles,
    };

const startGame = (): State => {
  const newState = {
    ...initialState,
    isInProgress: true,
  };
  localStorage.setItem("state", JSON.stringify(newState));
  return newState;
};

const flipTile = (state: State, tileIndex: number): State => {
  let newState;
  if (state.flipped.length === 1) {
    if (
      state.board[state.flipped[0]] === state.board[tileIndex] &&
      state.flipped[0] !== tileIndex
    ) {
      newState = {
        ...state,
        flipped: [],
        correct: [...state.correct, ...state.flipped, tileIndex],
      };
      localStorage.setItem("state", JSON.stringify(newState));
      return newState;
    }
    newState = {
      ...state,
      flipped: [...state.flipped, tileIndex],
    };
    localStorage.setItem("state", JSON.stringify(newState));
    return newState;
  }
  newState = {
    ...state,
    flipped: [tileIndex],
  };
  localStorage.setItem("state", JSON.stringify(newState));
  return newState;
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    flip: (state: State, action: PayloadAction<number>) => {
      const nextState = flipTile(state, action.payload!);
      if (nextState.correct.length === state.board.length) {
        nextState.isWon = true;
        nextState.isInProgress = false;
        localStorage.removeItem("state");
      }
      return nextState;
    },
    start: () => {
      return startGame();
    },
    setNumberOfTiles: (state: State, action: PayloadAction<number>) => {
      const newState = {
        ...state,
        board: getStartingBoard(action.payload),
        numberOfTiles: action.payload,
      };
      localStorage.setItem("state", JSON.stringify(newState));
      return newState;
    },
  },
});

export const { flip, start, setNumberOfTiles } = gameSlice.actions;

export const store = configureStore({
  reducer: {
    game: gameSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
