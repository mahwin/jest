const fn = require("./fn");
const dbFn = require("./dbFn");

// let num = 0;
// beforeEach(() => {
//   // 모든 테스트 전 초기화
//   num = 0;
// });

// afterEach(() => {
//   // 모든 테스트 후 초기화
//   num = 0;
// });

// test("0 더하기 1은 1이야", () => {
//   num = fn.add(num, 1);
//   expect(num).toBe(1);
// });

// test("0 더하기 2은 2이야", () => {
//   num = fn.add(num, 2);
//   expect(num).toBe(2);
// });

// test("0 더하기 3은 3이야", () => {
//   num = fn.add(num, 3);
//   expect(num).toBe(3);
// });

//한번만 가져오고 계속 쓰면 됨. beforeEach로 호출하면 매번 디비를 가져옴.
beforeAll(async () => {
  user = await dbFn.connectUserDb();
});

afterAll(async () => {
  return dbFn.disconnectDb();
});

test("이름은 Mike", () => {
  expect(user.name).toBe("Mike");
});

test("나이는 30", () => {
  expect(user.age).toBe(30);
});

test("성별은 남성", () => {
  expect(user.gender).toBe("male");
});

describe("Car 관련 작업", () => {
  let car;
  beforeAll(async () => {
    car = await dbFn.connectCarDb();
  });

  afterAll(async () => {
    return dbFn.disconnectDb();
  });

  test("이름은 Mike", () => {
    expect(car.brand).toBe("bmw");
  });

  test("나이는 30", () => {
    expect(car.name).toBe("z4");
  });

  test("성별은 남성", () => {
    expect(car.color).toBe("red");
  });
});

test.only("이것만 테스트 할래", () => {
  expect(fn.add(0, 5)).toBe(5);
});
