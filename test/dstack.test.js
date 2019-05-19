const test = require('ava');
const lib = require('../src/dstack');

test('1d x2', t => {
  const inputs = [[
    1, 2
  ]];
  const expectedOutput = [
    [
      [1, 2]
    ]
  ];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('2d 1x2', t => {
  const inputs = [[
    [1, 2]
  ]];
  const expectedOutput = [
    [
      [1],
      [2]
    ]
  ];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('2d 2x2', t => {
  const inputs = [[
    [1, 2],
    [3, 4]
  ]];
  const expectedOutput = [
    [
      [1, 3],
      [2, 4]
    ]
  ];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('2d 2x3', t => {
  const inputs = [[
    [1, 2, 3],
    [2, 3, 4]
  ]];
  const expectedOutput = [
    [
      [1, 2],
      [2, 3],
      [3, 4]
    ]
  ];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('2d 3x3', t => {
  const inputs = [[
    [1, 2, 3],
    [2, 3, 4],
    [5, 6, 7]  
  ]];
  const expectedOutput = [
    [
      [1, 2, 5],
      [2, 3, 6],
      [3, 4, 7]
    ]
  ];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

// 3 = dst[1][0][0] = src[0][1][0] = dst[x][z][y]
// 7 = dst[1][0][1] = src[1][1][0] = dst[x][z][y]
test('3d 2x2x2', t => {
  const inputs = [[
    [[1,2],[3,4]],
    [[5,6],[7,8]],
  ]];
  const expectedOutput = [
    [[1,5],[2,6]],
    [[3,7],[4,8]]
  ];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

// 4 = dst[3][0][1] = src[0][3][0] = dst[x][z][y]
test('3d 2x3x1', t => {
  const inputs = [[
    [[1],[2],[3]],
    [[2],[3],[4]]
  ]];
  const expectedOutput = [
    [[1, 2]],
    [[2, 3]],
    [[3, 4]]
  ];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

// 4 = dst[2][0][1] = src[1][2][0] = dst[x][z][y]
// 5 = dst[0][0][2] = src[2][0][0] = dst[x][z][y]
test('3d 3x3x1', t => {
  const inputs = [[
    [[1],[2],[3]],
    [[2],[3],[4]],
    [[5],[6],[7]]
  ]];
  const expectedOutput = [
    [[1, 2, 5]],
    [[2, 3, 6]],
    [[3, 4, 7]]
  ];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('3d 3x1x6', t => {
  const inputs = [[
    [[4,4,4,4,4,4]],
    [[5,5,5,5,5,5]],
    [[6,6,6,6,6,6]]
  ]];
  const expectedOutput = [[
    [4, 5, 6],
    [4, 5, 6],
    [4, 5, 6],
    [4, 5, 6],
    [4, 5, 6],
    [4, 5, 6]
  ]];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});
