import { render, screen } from "@testing-library/react";
import GetBy from "./GetBy";

test("제목이 있다", () => {
  render(<GetBy />);
  const titleEl = screen.getByRole("heading", { level: 1 });

  expect(titleEl).toBeInTheDocument();
});

test("input이 있다", () => {
  render(<GetBy />);
  const inputEl = screen.getByRole("textbox", { name: "자기소개" });
  expect(inputEl).toBeInTheDocument();
});

test("input에 Tom이 있다", () => {
  render(<GetBy />);
  const inputEl = screen.getByDisplayValue("Tom");
  expect(inputEl).toBeInTheDocument();
});
