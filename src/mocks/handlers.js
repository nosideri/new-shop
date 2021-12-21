import { rest } from "msw";
import mockData from "../components/mockData/data";

const env = process.env.NODE_ENV;
const host = env === "test" ? "http://localhost:3005" : "";

export const handlers = [
  rest.get(`${host}/api/product/:id`, (req, res, ctx) => {
    const { id } = req.params;
    const item = mockData.find((item) => item.id === +id);
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json(item)
    );
  }),

  rest.get(`${host}/api/products`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockData));
  }),
];
