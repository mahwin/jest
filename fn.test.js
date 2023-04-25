const fn = require("./fn");

test("1 = 1", () => {
  expect(1).toBe(1);
});

test("1+3=4", () => {
  expect(fn.add(1, 3)).toBe(4);
});
