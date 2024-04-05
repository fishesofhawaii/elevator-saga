const elevator_util = require('../src/elevator-util.js');

test('getHomeFloor returns maxFloor for odd value', () => {
  expect(elevator_util.getHomeFloor(1, maxFloor = 10)).toBe(10)
});

test('getHomeFloor returns 0 for even value', () => {
  expect(elevator_util.getHomeFloor(2, maxFloor = 10)).toBe(0)
});

test('logic test', () => {
  let current = 1
  let queue = [2, 3, 4, 5]
  let expected = [2, 3, 4, 5]

  expect(elevator_util.getOptimalQueue(queue, current)).toStrictEqual(expected)
});

test('logic test', () => {
  let current = 6
  let queue = [5, 4, 3, 2]
  let expected = [5, 4, 3, 2]

  expect(elevator_util.getOptimalQueue(queue, current)).toStrictEqual(expected)
});


test('logic test', () => {
  let current = 3
  let queue = [2, 4, 5]
  let expected = [2, 4, 5]

  expect(elevator_util.getOptimalQueue(queue, current)).toStrictEqual(expected)
});

test('logic test', () => {
  let current = 3
  let queue = [4, 5, 2]
  let expected = [4, 5, 2]

  expect(elevator_util.getOptimalQueue(queue, current)).toStrictEqual(expected)
});

test('logic test', () => {
  let current = 3
  let queue = [4, 5, 1, 2]
  let expected = [4, 5, 2, 1]

  expect(elevator_util.getOptimalQueue(queue, current)).toStrictEqual(expected)
});

test('logic test', () => {
  let current = 5
  let queue = [1, 6, 8, 3]
  let expected = [3, 1, 6, 8]

  expect(elevator_util.getOptimalQueue(queue, current)).toStrictEqual(expected)
});

test('logic test', () => {
  let current = 5
  let queue = [1, 2, 3, 4, 6, 7, 8, 9]
  let expected = [4, 3, 2, 1, 6, 7, 8, 9]

  expect(elevator_util.getOptimalQueue(queue, current)).toStrictEqual(expected)
});

test('logic test', () => {
  let current = 5
  let queue = [6, 3, 2, 1, 4, 7, 8, 9]
  let expected = [6, 7, 8, 9, 4, 3, 2, 1]

  expect(elevator_util.getOptimalQueue(queue, current)).toStrictEqual(expected)
});

test('logic test', () => {
  let current = 0
  let queue = [1]
  let expected = [1]

  expect(elevator_util.getOptimalQueue(queue, current)).toStrictEqual(expected)
});

test('logic test', () => {
  let current = 0
  let queue = [3, 1]
  let expected = [1, 3]

  expect(elevator_util.getOptimalQueue(queue, current)).toStrictEqual(expected)
});

test('logic test', () => {
  let current = 0
  let queue = [3, 0]
  let expected = [3, 0]

  expect(elevator_util.getOptimalQueue(queue, current)).toStrictEqual(expected)
});

test('logic test', () => {
  let current = 0
  let queue = [3, 0, 1, 2]
  let expected = [1, 2, 3, 0]

  expect(elevator_util.getOptimalQueue(queue, current)).toStrictEqual(expected)
});

test('logic test', () => {
  let current = 0
  let queue = [3, 1]
  let expected = [1, 3]

  expect(elevator_util.getOptimalQueue(queue, current)).toStrictEqual(expected)
});

test('logic test', () => {
  let current = 0
  let queue = [1, 3]
  let expected = [1, 3]

  expect(elevator_util.getOptimalQueue(queue, current)).toStrictEqual(expected)
});


test('should return first elevator from the list', () => {
  let elevators = [{elevator: true}]
  let currentFloor = 1
  let expected = elevators[0]

  expect(elevator_util.getOptimalElevator(elevators, currentFloor)).toStrictEqual(expected)
});
