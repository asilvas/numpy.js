const test = require('ava');
const lib = require('../src/unravel_index');
const ravel = require('../src/ravel_multi_index');

test('simple1', t => {
  const inputs = [ravel([1, 0], [2, 2]), [2, 2]];
  const expectedOutput = [1, 0];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('simple2', t => {
  const inputs = [ravel([2, 66], [17, 94]), [17, 94]];
  const expectedOutput = [2, 66];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('simple3', t => {
  const inputs = [ravel([2, 1, 4], [4, 3, 6]), [4, 3, 6]];
  const expectedOutput = [2, 1, 4];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('exampl1', t => {
  const inputs = [ravel([[1, 2], [10, 20]], [5, 100]), [5, 100]];
  const expectedOutput = [[1, 2], [10, 20]];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('exampl1.1', t => {
  const inputs = [ravel([[3, 5], [7, 9]], [6, 33]), [6, 33]];
  const expectedOutput = [[3, 5], [7, 9]];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('exampl2', t => {
  const inputs = [ravel([[3, 4], [10, 20]], [20, 100]), [20, 100]];
  const expectedOutput = [[3, 4], [10, 20]];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('exampl3', t => {
  const inputs = [ravel([[2, 3], [10, 20]], [4, 100]), [4, 100]];
  const expectedOutput = [[2, 3], [10, 20]];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('exampl4', t => {
  const inputs = [ravel([[3, 3], [10, 20]], [4, 100]), [4, 100]];
  const expectedOutput = [[3, 3], [10, 20]];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('3x3x2', t => {
  const inputs = [ravel([[3,6,6],[4,5,1]], [7,6]), [7,6]];
  const expectedOutput = [[3,6,6],[4,5,1]];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('big index', t => {
  const inputs = [ravel([[1, 29], [3, 5], [3, 117], [19, 2], [2379, 1284], [2, 2], [0, 1]], [41, 7, 120, 36, 2706, 8, 6]), [41, 7, 120, 36, 2706, 8, 6]];
  const expectedOutput = [[1, 29], [3, 5], [3, 117], [19, 2], [2379, 1284], [2, 2], [0, 1]];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('4x4', t => {
  const inputs = [ravel([3,1,4,1], [6,7,8,9]), [6,7,8,9]];
  const expectedOutput = [3,1,4,1];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});
