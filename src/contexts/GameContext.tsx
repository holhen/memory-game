import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  useReducer,
} from "react";
import { Action, gameReducer, initialStore, State } from "../store/store";

interface IGameContext {
  state: State;
  dispatch: Dispatch<Action>;
}

const defaultGameContext: IGameContext = {
  state: initialStore,
  dispatch: () => {},
};

export const GameContext = createContext<IGameContext>(defaultGameContext);

export const GameContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialStore);
  const store = {
    state,
    dispatch,
  };
  return <GameContext.Provider value={store}>{children}</GameContext.Provider>;
};
