import { rest } from "msw";
import mockData from "../components/mockData/data";

export const handlers = [
  rest.get("/api/product/:id", (req, res, ctx) => {
    const { id } = req.params;
    const item = mockData.find((item) => item.id === +id);
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json(item)
    );
  }),

  rest.get("/api/products", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockData));
  }),
];
