const test = require('ava');
const lib = require('../src/transpose');

test('1d', t => {
  const inputs = [[10, 20, 30]];
  const expectedOutput = [10, 20, 30];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('1d /w axes', t => {
  const inputs = [[10, 20, 30], [0]];
  const expectedOutput = [10, 20, 30];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('2d', t => {
  const inputs = [[[0, 1], [2, 3]]];
  const expectedOutput = [[0, 2], [1, 3]];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('2d-wide', t => {
  const inputs = [[[0, 1], [2, 3], [4, 5]]];
  const expectedOutput = [[0, 2, 4], [1, 3, 5]];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('2d-skinny', t => {
  const inputs = [[[1], [2], [3]]];
  const expectedOutput = [[1, 2, 3]];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test.skip('2d-skinny /w axes', t => {
  const inputs = [[[1], [2], [3]], [0, 1]];
  const expectedOutput = [[1], [2], [3]];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('2d-skinny /w axes inverted', t => {
  const inputs = [[[1], [2], [3]], [1, 0]];
  const expectedOutput = [[1, 2, 3]];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('3x3', t => {
  const inputs = [[[0, 1, 2], [3, 4, 5], [6, 7, 8]]];
  const expectedOutput = [[0, 3, 6], [1, 4, 7], [2, 5, 8]];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test.skip('3x3 /w axes', t => {
  const inputs = [[[0, 1, 2], [3, 4, 5], [6, 7, 8]], [0, 1]];
  const expectedOutput = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('3x3 /w axes inverted', t => {
  const inputs = [[[0, 1, 2], [3, 4, 5], [6, 7, 8]], [1, 0]];
  const expectedOutput = [[0, 3, 6], [1, 4, 7], [2, 5, 8]];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});
