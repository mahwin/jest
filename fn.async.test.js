const fn = require("./fn");

//callback 패턴
test("3초 후에 받아온 이름 Mike", (done) => {
  function callback(name) {
    expect(name).toBe("Mike");
    done();
  }
  fn.getName(callback);
});

//done라는 콜백을 종료 시점에 실행해야 비동기처리에 대한 테스트가 가능함.

//promise 패턴
test("3초 후에 받아온 나이는 30", () => {
  return fn.getAge().then((age) => {
    expect(age).toBe(30);
  });
});
//프로미스의 경우 꼭 return 해줘야 함.

// resolves,rejects
test("3초 후에 받아온 나이는 30", () => {
  expect(fn.getAge()).resolves.toBe(30);
});

//async await
test("3초 후에 받아온 나이는 30", async () => {
  const age = await fn.getAge();
  expect(age).toBe(30);
});
