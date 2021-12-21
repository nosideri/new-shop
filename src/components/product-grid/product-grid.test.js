import ProductGrid from "./index";
import { render, screen, waitFor } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

describe("ProductGrid", () => {
  it("should render 'Featured Products - Coming soon'", async () => {
    const history = createMemoryHistory();
    history.push("/");
    render(
      <Router history={history}>
        <ProductGrid />
      </Router>,
      {
        path: "/products",
        route: "/products",
      }
    );

    await waitFor(() => {
      const productPage = screen.getByTestId("featured");

      expect(productPage).toBeInTheDocument();
      expect(productPage).toHaveTextContent("Featured Products - Coming soon");
    });
  });
  it("should show 3 products", async () => {
    const history = createMemoryHistory();
    history.push("/");
    render(
      <Router history={history}>
        <ProductGrid />
      </Router>,
      {
        path: "/products",
        route: "/products",
      }
    );

    await waitFor(() => {
      const prodGrid = screen.getAllByTestId("product");

      expect(prodGrid).toHaveLength(3);
    });
  });
});
