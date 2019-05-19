const test = require('ava');
const lib = require('../src/ndarray.flat');

test('1d', t => {
  const inputs = [[1, 2, 3]];
  const expectedOutput = [1, 2, 3];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('2d', t => {
  const inputs = [[[1, 2, 3], [4, 5, 6]]];
  const expectedOutput = [1, 2, 3, 4, 5, 6];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('3d', t => {
  const inputs = [[[[1, 2], [3, 4], [5, 6]]]];
  const expectedOutput = [1, 2, 3, 4, 5, 6];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});
