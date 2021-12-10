import { Route, MemoryRouter } from "react-router-dom";
import ProductPage from "./index";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { handlers } from "../../mocks/handlers";

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const renderWithRouter = ({ children }) =>
  render(
    <MemoryRouter initialEntries={["products/1"]}>
      <Route path="products/:id">{children}</Route>
    </MemoryRouter>
  );

describe("ProductPage", () => {
  // jest.mock("react-router-dom", () => ({
  //   useParams: jest.fn().mockReturnValue({ id: 1 }),
  // }));
  it("should render Description in an h3", () => {
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useParams: () => ({
        id: 0,
      }),
    }));
    // const history = createMemoryHistory();
    // history.push("/products/1");
    // render(
    //   <Router history={history}>
    //     <ProductPage />
    //   </Router>
    // );
    // screen.logTestingPlaygroundURL();

    render(<ProductPage />);

    const productPage = screen.getByTestId("description");
    const productDescription = screen.getByTestId("temp");

    expect(productPage).toBeInTheDocument();
    expect(productDescription.innerHTML).toHaveTextContent("happy");
  });
});
