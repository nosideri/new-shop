import React from "react";
import { render, screen } from "@testing-library/react";
import TermsOfUse from "./index";
import "@testing-library/jest-dom";

describe("Terms Of Use", () => {
  it("should render the words 'Terms of Use' on the screen", () => {
    render(<TermsOfUse />);
    const touPage = screen.getByText("Terms of Use");

    expect(touPage).toBeInTheDocument();
  });
});
