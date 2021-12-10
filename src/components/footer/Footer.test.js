import React from "react";
import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import Footer from "./index";
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom";

describe("Footer", () => {
  it("should render the words 'Copyright 2021 Madi's Shop'", () => {
    const history = createMemoryHistory();
    history.push("/");
    render(
      <Router history={history}>
        <Footer />
      </Router>
    );
    const footer = screen.getByText("Copyright 2021 Madi's Shop");

    expect(footer).toBeInTheDocument();
  });
});
