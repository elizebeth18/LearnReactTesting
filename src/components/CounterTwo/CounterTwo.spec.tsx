import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import CounterTwo from "./CounterTwo";
import user from "@testing-library/user-event";

describe("CounterTwo", () => {
  test("renders correctly", () => {
    render(<CounterTwo count={0} />);
    const TextElement = screen.getByText("Counter Two");
    expect(TextElement).toBeInTheDocument();
  });

  test("handlers are called", async () => {
    user.setup();
    const incrementHandler = vi.fn();
    const decrementHandler = vi.fn();

    render(
      <CounterTwo
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />,
    );
    const incrementBtn = screen.getByRole("button", {
      name: "Increment",
    });
    const decrementBtn = screen.getByRole("button", {
      name: "Decrement",
    });
    await user.click(incrementBtn);
    await user.click(decrementBtn);
    //expect(incrementHandler).toHaveBeenCalledTimes(1);
    //expect(decrementHandler).toHaveBeenCalledTimes(1);
    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
