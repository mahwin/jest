const fn = {
  add: (num1, num2) => num1 + num2,
  makeUser: (name, age) => ({ name, age }),
  throwErr: () => {
    throw new Error("에러 발생");
  },

  //콜백
  getName: (callback) => {
    const name = "Mike";
    setTimeout(() => {
      callback(name);
    }, 3000);
  },

  //promise
  getAge: () => {
    const age = 30;
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(age), 3000;
      });
    });
  },
};

module.exports = fn;
