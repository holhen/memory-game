import { FC } from "react";
import Game from "./components/Game/Game";
import { Provider } from "react-redux";
import { store } from "./store/store";

const App: FC = () => {
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  );
};

export default App;
