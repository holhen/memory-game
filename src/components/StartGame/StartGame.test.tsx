import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { renderWithProviders } from "../../utils/test-utils";
import StartGame from "./StartGame";

describe("WinningMessage component", () => {
  test("renders the component", () => {
    renderWithProviders(<StartGame />);
    expect(screen.getByTestId("start-game")).toBeInTheDocument();
  });
});
