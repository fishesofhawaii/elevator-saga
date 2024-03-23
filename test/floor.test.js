const floor = require('../src/floor.js');

test('adds 1 + 2 to equal 3', () => {
  expect(floor.sum(1, 2)).toBe(3);
});

test('sub 2 - 1 to equal 1', () => {
    expect(floor.sub(2, 1)).toBe(1);
});