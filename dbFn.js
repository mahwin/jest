const dbFn = {
  connectUserDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res({ name: "Mike", age: 30, gender: "male" });
      }, 500);
    });
  },

  connectCarDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res({ brand: "bmw", name: "z4", color: "red" });
      }, 500);
    });
  },

  disconnectDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res();
      }, 500);
    });
  },
};

module.exports = dbFn;
