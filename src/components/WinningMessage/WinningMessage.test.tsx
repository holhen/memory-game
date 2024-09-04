import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { renderWithProviders } from "../../utils/test-utils";
import WinningMessage from "./WinningMessage";

describe("WinningMessage component", () => {
  test("renders the component", () => {
    renderWithProviders(<WinningMessage />);
    expect(screen.getByTestId("winning-message")).toBeInTheDocument();
    expect(screen.getByTestId("start-button")).toBeInTheDocument();
  });
});
