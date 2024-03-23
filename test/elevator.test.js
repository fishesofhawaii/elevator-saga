const elevator = require('../src/elevator.js');

test('adds 1 + 2 to equal 3', () => {
  expect(elevator.sum(1, 2)).toBe(3);
});

test('sub 2 - 1 to equal 1', () => {
    expect(elevator.sub(2, 1)).toBe(1);
});