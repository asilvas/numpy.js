const test = require('ava');
const lib = require('../src/ravel_multi_index');

test('simple1', t => {
  const inputs = [[1, 0], [2, 2]];
  const expectedOutput = 2;
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('simple2', t => {
  const inputs = [[2, 66], [17, 94]];
  const expectedOutput = 254;
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('simple3', t => {
  const inputs = [[2, 1, 4], [4, 3, 6]];
  const expectedOutput = (2*3 + 1)*6 + 4;
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('exampl1', t => {
  const inputs = [[[1, 2], [10, 20]], [5, 100]];
  const expectedOutput = [110, 220];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('exampl1.1', t => {
  const inputs = [[[3, 5], [7, 9]], [6, 33]];
  const expectedOutput = [106, 174];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('exampl2', t => {
  const inputs = [[[3, 4], [10, 20]], [20, 100]];
  const expectedOutput = [310, 420];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('exampl3', t => {
  const inputs = [[[2, 3], [10, 20]], [4, 100]];
  const expectedOutput = [210, 320];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('exampl4', t => {
  const inputs = [[[3, 3], [10, 20]], [4, 100]];
  const expectedOutput = [310, 320];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('3x3x2', t => {
  const inputs = [[[3,6,6],[4,5,1]], [7,6]];
  const expectedOutput = [22, 41, 37];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('big index', t => {
  const inputs = [[[1, 29], [3, 5], [3, 117], [19, 2], [2379, 1284], [2, 2], [0, 1]], [41, 7, 120, 36, 2706, 8, 6]];
  const expectedOutput = [5627771580, 117259570957];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('4x4', t => {
  const inputs = [[3,1,4,1], [6,7,8,9]];
  const expectedOutput = 1621;
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test.skip('order=F', t => {
  const inputs = [[[3,6,6],[4,5,1]], [7,6], { order: 'F' }];
  const expectedOutput = [31, 41, 13];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test.skip('mode=clip', t => {
  const inputs = [[[3,6,6],[4,5,1]], [4,6], { mode: 'clip' }];
  const expectedOutput = [22, 23, 19];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test.skip('mode=(clip,wrap)', t => {
  const inputs = [[[3,6,6],[4,5,1]], [4,4], { mode: ['clip', 'wrap'] }];
  const expectedOutput = [12, 13, 13];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});
