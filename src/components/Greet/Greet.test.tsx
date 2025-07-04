/**
 * Greet should render text hello and if a name is passed into the
 * component, It should render the hello followed by the name
 */
import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });

  describe("Nested", () => {
    test("renders name correctly", () => {
      render(<Greet name="Jilu" />);
      const textElement = screen.getByText("Hello Jilu");
      expect(textElement).toBeInTheDocument();
    });
  });
});
