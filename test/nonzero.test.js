const test = require('ava');
const lib = require('../src/nonzero');

test('2d', t => {
  const inputs = [[
    [1, 0, 0],
    [0, 2, 0],
    [1, 1, 0]
  ]];
  const expectedOutput = [
    [0, 1, 2, 2],
    [0, 1, 0, 1]
  ];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('3d', t => {
  const inputs = [[
    [[1, 0], [0, 0], [1, 1]],
    [[1, 0], [0, 0], [1, 1]]
  ]];
  const expectedOutput = [
    [0,0,0,1,1,1],
    [0,2,2,0,2,2],
    [0,0,1,0,0,1]
  ];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('3d histo', t => {
  const inputs = [[
    [[1, 0, 0], [0, 0, 2], [0, 0, 0]],
    [[0, 0, 0], [0, 1, 0], [0, 0, 0]],
    [[0, 0, 0], [0, 0, 0], [0, 0, 5]]
  ]];
  const expectedOutput = [
    [0, 0, 1, 2],
    [0, 1, 1, 2],
    [0, 2, 1, 2]
  ];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('3d large', t => {
  const inputs = [[[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[2,2,2,2,2,2,2,2],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[3,3,3,3,3,3,3,3],[0,0,0,0,0,0,0,0]]]];
  const expectedOutput = [[0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4,
    4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6], [0, 1, 2, 3, 4, 5, 6, 7, 0, 1, 2, 3, 4, 5, 6, 7, 0, 1, 2, 3, 4, 5,
    6, 7, 0, 1, 2, 3, 4, 5, 6, 7, 0, 1, 2, 3, 4, 5, 6, 7]];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});
