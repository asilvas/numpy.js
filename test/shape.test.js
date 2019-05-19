const test = require('ava');
const lib = require('../src/shape');

test('1d', t => {
  const inputs = [[1, 2, 3]];
  const expectedOutput = [3];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('2d', t => {
  const inputs = [[[1, 2, 3]]];
  const expectedOutput = [1, 3];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('3d', t => {
  const inputs = [[[[1, 2, 3]]]];
  const expectedOutput = [1, 1, 3];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});
