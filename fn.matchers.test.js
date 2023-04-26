const fn = require("./fn");

// test("이름과 나이를 전달받아서 객체로 반환", () => {
//   expect(fn.makeUser("Mike", 30).toBe({ name: "Mike", age: 30 }));
// });
//실패 => 객체나 배열은 반복적으로 값을 확인해야 하기 떄문에 toEqual을 사용!.

// toEqual
test("이름과 나이를 전달받아서 객체로 반환", () => {
  expect(fn.makeUser("Mike", 30)).toEqual({ name: "Mike", age: 30 });
});

// toStrictEqual
test("이름과 나이를 전달받아서 객체로 반환", () => {
  expect(fn.makeUser("Mike", 30)).toStrictEqual({ name: "Mike", age: 30 });
});
// toStrictEqual는 key값이 비어 있는 곳도 확인해줌. 보다 엄격한 테스트

// toBeNull
test("null은 null입니다.", () => {
  expect(null).toBeNull();
});

// toBeTruthy
// toBeFalsy
test("0은 false입니다.", () => {
  expect(fn.add(1, -1)).toBeFalsy();
});

// teBeGreaterThan
// toBeGreaterThanOREqual
// toBeLessThan
// toBeLessThanOrEqual

// test("Id는 10자 이하여야 합니다.", () => {
//   const id = "012345678910";
//   expect(id.length).toBeLessThanOrEqual(10);
// });
// 실패

test("Id는 10자 이하여야 합니다.", () => {
  const id = "0123456789";
  expect(id.length).toBeLessThanOrEqual(10);
});

// toBeCloseTo => 부동소수점 오류 해결
test("0.1 + 0.2 = 0.3 입니다.", () => {
  expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
});

// toMatch 정규 표현식

test("abc에 b가 있습니다.", () => {
  expect("abc").toMatch(/a/);
});

// toContain 배열 안에서 특정 요소 존재여부

test("유저 리스트에 Mike가 있나?", () => {
  const user = "Mike";
  const userList = ["Mike", "A", "B"];
  expect(userList).toContain(user);
});

// toThrow 에러가 제대로 발생하는지

test("에러 발생 코드입니다.", () => {
  expect(() => fn.throwErr()).toThrow("에러 발생");
});
