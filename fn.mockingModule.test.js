const fn = require("./mockingModule");
jest.mock("./mockingModule");

fn.createUser.mockReturnValue({ name: "Mike" });

test("유저 생성", () => {
  const user = fn.createUser("Mike");
  expect(user.name).toBe("Mike");
});

//유용한 메소드들

// toBeCalled() 호출됐으면 통과
// toBeCalledTimes(num)  num번 호출되면 통과
// toBeCalledWith(num1,num2) num1,num2 전달받은 함수가 있냐
// lastCalledWith (num1,num2) 마지막 함수 num1,num2 받았냐
