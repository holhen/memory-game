import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { renderWithProviders } from "../../utils/test-utils";
import Game from "./Game";
import { initialState } from "../../store/store";

describe("WinningMessage component", () => {
  test("renders the starting screen", () => {
    renderWithProviders(<Game />);
    expect(screen.getByTestId("start-game")).toBeInTheDocument();
  });

  test("renders the board", () => {
    const { store } = renderWithProviders(<Game />, {
      preloadedState: {
        game: {
          ...initialState,
          isInProgress: true,
        },
      },
    });
    const squares = screen.getAllByTestId("square");
    expect(squares.length).toEqual(store.getState().game.board.length);
  });

  test("renders the winning message", () => {
    renderWithProviders(<Game />, {
      preloadedState: {
        game: {
          ...initialState,
          isWon: true,
        },
      },
    });
    expect(screen.getByTestId("winning-message")).toBeInTheDocument();
  });
});
