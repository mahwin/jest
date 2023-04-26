// const mockFn = jest.fn();

// mockFn();
// mockFn(1);

// test("목 함수는 2번 호출됩니다.", () => {
//   expect(mockFn.mock.calls.length).toBe(2);
// });

// test("2번 째 호출될 때 함수에 전달된 첫번째 인수는 1입니다.", () => {
//   expect(mockFn.mock.calls[1][0]).toBe(1);
// });

// const mockFn = jest.fn((num) => num + 1);

// mockFn(10);
// mockFn(20);
// mockFn(30);

// test("10에서 1 증가한 값 11이 반환", () => {
//   expect(mockFn.mock.results[0].value).toBe(11);
// });

// test("20에서 1 증가한 값 21이 반환", () => {
//   expect(mockFn.mock.results[1].value).toBe(21);
// });

// test("30에서 1 증가한 값 31이 반환", () => {
//   expect(mockFn.mock.results[2].value).toBe(31);
// });

// const mockFn = jest.fn();

// mockFn
//   .mockReturnValueOnce(true)
//   .mockReturnValueOnce(false)
//   .mockReturnValueOnce(true)
//   .mockReturnValueOnce(false)
//   .mockReturnValue(true);

// const result = [1, 2, 3, 4, 5].filter((num) => mockFn(num));

// test("1,3,5는 호출입니다.", () => {
//   expect(result).toStrictEqual([1, 3, 5]);
// });

const mockFn = jest.fn();
mockFn.mockResolvedValue({ name: "Mike" });

test("받아온 이름은 Mike", () => {
  mockFn().then((res) => {
    expect(res.name).toBe("Mike");
  });
});
