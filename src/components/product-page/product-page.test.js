import ProductPage from "./index";
import { screen, waitFor } from "@testing-library/react";
import { renderWithRouterMatch } from "../../utils/testutil";

describe("ProductPage", () => {
  it("should render Description in an h3", async () => {
    renderWithRouterMatch(ProductPage, {
      path: "/products/:id",
      route: "/products/1",
    });

    await waitFor(() => {
      const productPage = screen.getByTestId("description");
      const productDescription = screen.getByTestId("temp");

      expect(productPage).toBeInTheDocument();
      expect(productDescription).toHaveTextContent(
        "3D Hoodie made in Blender."
      );
    });
  });
});
