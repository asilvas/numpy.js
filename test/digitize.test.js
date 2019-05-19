const test = require('ava');
const lib = require('../src/digitize');

test('1d array ltr', t => {
  const inputs = [
    [0.2, 6.4, 3.0, 1.6],
    [0.0, 1.0, 2.5, 4.0, 10.0], { right: false }
  ];
  const expectedOutput = [1, 4, 3, 2];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('1d v2 array ltr', t => {
  const inputs = [
    [1.2, 10.0, 12.4, 15.5, 20.],
    [0, 5, 10, 15, 20], { right: false }
  ];
  const expectedOutput = [1, 3, 3, 4, 5];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('1d v2 array rtl', t => {
  const inputs = [
    [1.2, 10.0, 12.4, 15.5, 20.],
    [0, 5, 10, 15, 20], { right: true }
  ];
  const expectedOutput = [1, 2, 3, 4, 4];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('2d ltr', t => {
  const inputs = [[
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5]
  ], [1, 3, 5], { right: false }];
  const expectedOutput = [[1, 1, 2, 2 ,3],
  [1, 1, 2 ,2, 3],
  [1, 1, 2, 2, 3]];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});
