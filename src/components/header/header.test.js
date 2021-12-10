import React from "react";
import { render, screen } from "@testing-library/react";
import { Router, MemoryRouter, Link } from "react-router-dom";
import Header from "./index";
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom";

describe("Header", () => {
  it("should render the title 'Madi's Shop'", () => {
    const history = createMemoryHistory();
    history.push("/");
    render(
      <Router history={history}>
        <Header />
      </Router>
    );
    const header = screen.getByText("Madi's Shop");

    expect(header).toBeInTheDocument();
  });
});
