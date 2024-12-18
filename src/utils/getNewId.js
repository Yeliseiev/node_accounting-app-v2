const getNewId = (array) => {
  return Math.max(0, ...array.map((el) => el.id)) + 1;
};

module.exports = {
  getNewId,
};
