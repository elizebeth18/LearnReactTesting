import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Users from "./Users";
import { server } from "../../mocks/node";
import { http, HttpResponse } from "msw";

describe("Users", () => {
  test("display users list", async () => {
    render(<Users />);
    const usersList = await screen.findAllByRole("listitem");
    expect(usersList).toHaveLength(3);
  });

  test("renders the error", async () => {
    //rerun the server test handler to mimick the error scenario
    server.use(
      http.get("https://jsonplaceholder.typicode.com/users", () => {
        return HttpResponse.json(
          {
            errorMessage: "Error fetching users",
          },
          { status: 500 },
        );
      }),
    );
    render(<Users />);
    const error = await screen.findByText("Error fetching users");
    expect(error).toBeInTheDocument();
  });
});
