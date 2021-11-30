import React from "react";
import { Router } from "react-router-dom";
import ProductPage from "./index";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom";

describe("ProductPage", () => {
  jest.mock("react-router-dom", () => ({
    useParams: jest.fn().mockReturnValue({ id: 1 }),
  }));
  it("should render Description in an h3", () => {
    const history = createMemoryHistory();
    history.push("/products/1");
    render(
      <Router history={history}>
        <ProductPage />
      </Router>
    );
    screen.logTestingPlaygroundURL();
    // const productPage = wrapper.find("h3");
    const productPage = screen.getByTestId("description");

    expect(productPage).toEqual("Description:");
  });
});
