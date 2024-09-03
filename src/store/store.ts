import { startingBoard } from "../utils/utils";

export enum Actions {
  FLIP = "FLIP",
  START = "START",
}

export interface State {
  board: number[];
  flipped: number[];
  correct: number[];
  isInProgress: boolean;
  isWon: boolean;
}

export interface Action {
  type: Actions;
  payload?: number;
}

export const initialState: State = {
  board: startingBoard,
  flipped: [],
  correct: [],
  isInProgress: false,
  isWon: false,
};

const startGame = () => {
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

export const gameReducer = (state: State, action: Action) => {
  switch (action.type) {
    case Actions.FLIP: {
      const nextState = flipTile(state, action.payload!);
      if (nextState.correct.length === state.board.length) {
        nextState.isWon = true;
        nextState.isInProgress = false;
      }
      return nextState;
    }
    case Actions.START: {
      return startGame();
    }
    default: {
      return state;
    }
  }
};
