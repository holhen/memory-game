import { fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { renderWithProviders } from "../../utils/test-utils";
import StartButton from "./StartButton";

describe("WinningMessage component", () => {
  test("starts the game", () => {
    const { store } = renderWithProviders(<StartButton />);
    const startButton = screen.getByTestId("start-button");
    expect(startButton).toBeInTheDocument();

    fireEvent.click(startButton);
    expect(store.getState().game.isInProgress).toBeTruthy();
  });
});
