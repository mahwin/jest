import { render, screen } from "@testing-library/react";
import MyPage from "./MyPage";

// render => 버츄얼 돔만듬
// screen => dom 요소에 접근가능.

test("유저가 없으면 로그인 버튼을 보여줍니다.", () => {
  render(<MyPage />);
  const txtEl = screen.getByText(/로그인을 해주세요/);
  const btnEl = screen.getByRole("button");
  expect(txtEl).toBeInTheDocument();
  expect(btnEl).toBeInTheDocument();
  expect(txtEl).toHaveTextContent("로그인");
});

test("유저가 있으면 환영문구.", () => {
  render(<MyPage user={{ name: "Mike" }} />);
  const txtEl = screen.getByText(/Mike님 환영합니다/);
  expect(txtEl).toBeInTheDocument();
});
