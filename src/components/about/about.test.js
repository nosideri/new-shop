import React from "react";
import { render, screen } from "@testing-library/react";
import About from "./index";
import "@testing-library/jest-dom";

describe("About", () => {
  it("should render 'About Me' on the screen", () => {
    render(<About />);
    const aboutPage = screen.getByText("About Me");

    expect(aboutPage).toBeInTheDocument();
  });
});
