/* istanbul ignore file */
// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  rest.get("/latest", (req, res, ctx) => {
    const base = req.url.searchParams.get("base");
    if (base === "USD") {
      return res(
        ctx.status(200),
        ctx.json({
          success: true,
          timestamp: 1623663843,
          base: "USD",
          date: "2021-06-14",
          rates: { EUR: 0.824935, TRY: 8.39975 },
        })
      );
    }
    if (base === "404") {
      return res(
        ctx.status(404),
        ctx.json({
          success: false,
          timestamp: 1623663843,
          base: "USD",
          date: "2021-06-14",
          rates: { EUR: 0.824935, TRY: 8.39975 },
        })
      );
    }
    if (base === "500") {
      return res(ctx.status(500));
    }
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        timestamp: 1623663843,
        base: "EUR",
        date: "2021-06-14",
        rates: { TRY: 10.187943, USD: 1.212096, EUR: 1, 404: 1, 500: 1 },
      })
    );
  }),
];
