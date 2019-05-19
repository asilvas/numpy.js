const test = require('ava');
const lib = require('../src/amax');

test('1d array', t => {
  const inputs = [[0, 1, 3, 4]];
  const expectedOutput = 4;
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('2d array', t => {
  const inputs = [[[0, 1], [2, 3]]];
  const expectedOutput = 3;
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('3d array', t => {
  const inputs = [[
    [[0, 1]],
    [[2, 3]]
  ]];
  const expectedOutput = 3;
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});
