import { render, screen } from "@testing-library/react";
import Application from "./Application";

describe("Application", () => {
  it("renders correctly", () => {
    render(<Application />);

    const pageHeading = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", {
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();

    const pElement = screen.getByText("All fields are mandatory");
    expect(pElement).toBeInTheDocument();

    const closeElement = screen.getByTitle("close");
    expect(closeElement).toBeInTheDocument();

    const imgElement = screen.getByAltText("a person with a laptop");
    expect(imgElement).toBeInTheDocument();

    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();

    const NameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(NameElement).toBeInTheDocument();

    const NameElement2 = screen.getByLabelText("Name");
    expect(NameElement2).toBeInTheDocument();

    const NameElement3 = screen.getByPlaceholderText("Fullname");
    expect(NameElement3).toBeInTheDocument();

    const NameElement4 = screen.getByDisplayValue("Jilu");
    expect(NameElement4).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeDisabled();
  });
});
