import { startingBoard } from "../utils/utils";

export enum Actions {
  FLIP = "FLIP",
}

export interface State {
  board: number[];
  flipped: number[];
  correct: number[];
}

export interface Action {
  type: Actions;
  payload: number;
}

export const initialStore: State = {
  board: startingBoard,
  flipped: [],
  correct: [],
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
      return flipTile(state, action.payload);
    }
    default: {
      return state;
    }
  }
};
