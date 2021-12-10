import React from "react";
import { render, screen } from "@testing-library/react";
import Contact from "./index";
import "@testing-library/jest-dom";

describe("Contact", () => {
  it("should render 'Contact' on the screen", () => {
    render(<Contact />);
    const contactPage = screen.getByText("Contact");

    expect(contactPage).toBeInTheDocument();
  });
});
