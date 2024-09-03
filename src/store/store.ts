import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { startingBoard } from "../utils/utils";
import { useDispatch, useSelector } from "react-redux";

interface State {
  board: number[];
  flipped: number[];
  correct: number[];
  isInProgress: boolean;
  isWon: boolean;
}

const initialState: State = {
  board: startingBoard,
  flipped: [],
  correct: [],
  isInProgress: false,
  isWon: false,
};

const startGame = (): State => {
  return {
    ...initialState,
    isInProgress: true,
  };
};

const flipTile = (state: State, tileIndex: number): State => {
  if (state.flipped.length === 1) {
    if (state.board[state.flipped[0]] === state.board[tileIndex]) {
      return {
        ...state,
        flipped: [],
        correct: [...state.correct, ...state.flipped, tileIndex],
      };
    }
    return {
      ...state,
      flipped: [...state.flipped, tileIndex],
    };
  }
  return {
    ...state,
    flipped: [tileIndex],
  };
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
      }
      return nextState;
    },
    start: () => {
      return startGame();
    },
  },
});

export const { flip, start } = gameSlice.actions;

export const store = configureStore({
  reducer: {
    game: gameSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
