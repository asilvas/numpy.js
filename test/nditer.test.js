const test = require('ava');
const lib = require('../src/nditer');

function nditerToResult(input) {
  const it = new lib(input[0]);
  const results = [];
  for (const v of it) {
    results.push(v); 
  }
  return results;
}

test('1d', t => {
  const inputs = [[1, 2, 3]];
  const expectedOutput = [1, 2, 3];
  const output = nditerToResult(inputs);
  t.deepEqual(output, expectedOutput);
});

test('2d', t => {
  const inputs = [[[1, 2, 3], [4, 5, 6]]];
  const expectedOutput = [1, 2, 3, 4, 5, 6];
  const output = nditerToResult(inputs);
  t.deepEqual(output, expectedOutput);
});

test('3d', t => {
  const inputs = [[[[1, 2], [3, 4], [5, 6]]]];
  const expectedOutput = [1, 2, 3, 4, 5, 6];
  const output = nditerToResult(inputs);
  t.deepEqual(output, expectedOutput);
});
