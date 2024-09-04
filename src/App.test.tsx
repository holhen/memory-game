import { fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { renderWithProviders } from "./utils/test-utils";
import { initialState } from "./store/store";

describe("App component", () => {
  test("renders the component", () => {
    renderWithProviders(<App />);
    expect(screen.getByTestId("app")).toBeInTheDocument();
    expect(screen.getByTestId("game")).toBeInTheDocument();
  });
  test("renders an input", () => {
    const { store } = renderWithProviders(<App />, {
      preloadedState: {
        game: {
          ...initialState,
          isInProgress: true,
        },
      },
    });
    const numericInput = screen.getByTestId("numeric-input");
    expect(numericInput).toBeInTheDocument();

    fireEvent.change(numericInput, { target: { value: 2 } });
    expect(store.getState().game.numberOfTiles).toEqual(2);
  });
});
