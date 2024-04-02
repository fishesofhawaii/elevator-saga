const floor_util = require('../src/floor-util.js');

test('adds 1 + 2 to equal 3', () => {
  expect(floor_util.sum(1, 2)).toBe(3);
});

test('sub 2 - 1 to equal 1', () => {
    expect(floor_util.sub(2, 1)).toBe(1);
});