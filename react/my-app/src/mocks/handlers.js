import { rest } from "msw";

export const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/todos", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, title: "청소", completed: true },
        { id: 1, title: "방 청소", completed: true },
        { id: 1, title: "거실 청소", completed: false },
      ])
    );
  }),

  // rest.post("/author/:authodId/:postId", responseResolver),
];
