const test = require('ava');
const lib = require('../src/subtract');

test('0d', t => {
  const inputs = [[], [3, 2, 1]];
  const expectedOutput = [];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('1d', t => {
  const inputs = [[1, 2, 3], [3, 2, 1]];
  const expectedOutput = [-2, 0, 2];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('2d', t => {
  const inputs = [[[1, 2, 3]], [[3, 2, 1]]];
  const expectedOutput = [[-2, 0, 2]];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('3d', t => {
  const inputs = [[[[1, 2, 3]]], [[[3, 2, 1]]]];
  const expectedOutput = [[[-2, 0, 2]]];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('3d newaxis', t => {
  const inputs = [[
    [[1, 1, 1]],
    [[2, 2, 2]],
    [[3, 3, 3]],
    [[4, 4, 4]],
    [[5, 5, 5]]], [
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3],
    [4, 4, 4],
    [5, 5, 5]]];
  const expectedOutput = [
    [[ 0,  0,  0],
      [-1, -1, -1],
      [-2, -2, -2],
      [-3, -3, -3],
      [-4, -4, -4]],
     [[ 1,  1,  1],
      [ 0,  0,  0],
      [-1, -1, -1],
      [-2, -2, -2],
      [-3, -3, -3]],
     [[ 2,  2,  2],
      [ 1,  1,  1],
      [ 0,  0,  0],
      [-1, -1, -1],
      [-2, -2, -2]],
     [[ 3,  3,  3],
      [ 2,  2,  2],
      [ 1,  1,  1],
      [ 0,  0,  0],
      [-1, -1, -1]],
     [[ 4,  4,  4],
      [ 3,  3,  3],
      [ 2,  2,  2],
      [ 1,  1,  1],
      [ 0,  0,  0]]];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});
