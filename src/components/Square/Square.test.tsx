import { fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { renderWithProviders } from "../../utils/test-utils";
import Square from "./Square";
import { initialState } from "../../store/store";

describe("WinningMessage component", () => {
  test("flips a tile", () => {
    const { store } = renderWithProviders(<Square value={1} index={0} />);
    const square = screen.getByTestId("square");
    expect(square).toBeInTheDocument();

    fireEvent.click(square);
    expect(store.getState().game.flipped).toContain(0);
  });
  test("does not flip a tile", () => {
    const { store } = renderWithProviders(<Square value={1} index={0} />, {
      preloadedState: {
        game: {
          ...initialState,
          correct: [0],
        },
      },
    });
    const square = screen.getByTestId("square");
    expect(square).toBeInTheDocument();

    fireEvent.click(square);
    expect(store.getState().game).toEqual({
      ...initialState,
      correct: [0],
    });
  });
});
