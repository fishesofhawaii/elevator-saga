const elevator_util = require('../src/elevator-util.js');

test('getHomeFloor returns maxFloor for odd value', () => {
  expect(elevator_util.getHomeFloor(1, maxFloor = 10)).toBe(10)
});

test('getHomeFloor returns 0 for even value', () => {
  expect(elevator_util.getHomeFloor(2, maxFloor = 10)).toBe(0)
});