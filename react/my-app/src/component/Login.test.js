import { render, screen } from "@testing-library/react";
import Login from "./Login";

import userEvent from "@testing-library/user-event";

const user = userEvent.setup();
describe("Login test", () => {
  test("처음에는 Login 버튼이 있다.", () => {
    render(<Login />);
    const btnEl = screen.getByRole("button");
    expect(btnEl).toHaveTextContent("Login");
  });
  const user = userEvent.setup();
  test("한번 클릭하면 logout이 됨", async () => {
    render(<Login />);
    const btnEl = screen.getByRole("button");
    await user.click(btnEl);
    expect(btnEl).toHaveTextContent("Logout");
  });

  test("tap,space,enter로 동작", async () => {
    render(<Login />);
    const btnEl = screen.getByRole("button");
    await user.tab();
    await user.keyboard(" ");
    await user.keyboard(" "); //스페이스
    await user.keyboard("{Enter}"); //엔터

    expect(btnEl).toHaveTextContent("Logout");
  });
});
