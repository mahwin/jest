import { render, screen } from "@testing-library/react";
import UserList from "./UserList";

describe("UserList test", () => {
  const users = ["Tom", "Jane", "Mike"];
  test("ul이 있다.", () => {
    render(<UserList users={users} />);
    const ulEl = screen.getByRole("list");
    expect(ulEl).toBeInTheDocument();
  });

  test("li는 3개가 맞습니까", () => {
    render(<UserList users={users} />);
    const liEls = screen.getAllByRole("listitem");
    expect(liEls).toHaveLength(3);
  });
  //get getAll => 없으면 에러
  //query 는 null이나 빈배열임 그래서 없는걸 체크하려면 query를 사용.

  test("0.5초 뒤 제목 등장", async () => {
    render(<UserList users={users} />);
    const title = await screen.findByRole(
      "heading",
      { name: "사용자 목록" },
      { timeout: 2000 }
    );
    screen.debug(); // 간략한 돔트리보여줌
    expect(title).toBeInTheDocument();
  });
});
