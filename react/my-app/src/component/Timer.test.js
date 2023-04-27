import Timer from "./Timer";
import { render } from "@testing-library/react";

test("초 표시", () => {
  Date.now = jest.fn(() => 1);
  const el = render(<Timer />);
  expect(el).toMatchSnapshot();
});
