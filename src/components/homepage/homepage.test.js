import React from "react";
import { render, screen } from "@testing-library/react";
import Homepage from "./index";
import "@testing-library/jest-dom";

describe("Homepage", () => {
  it("should render the word homepage on the screen", () => {
    render(<Homepage />);
    const homePage = screen.getByText("Homepage");

    expect(homePage).toBeInTheDocument();
  });
});
