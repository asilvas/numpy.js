const test = require('ava');
const lib = require('../src/vstack');

test('1d array', t => {
  const inputs = [[
    [1, 2, 3],
    [2, 3, 4]
  ]];
  const expectedOutput = [
    [1, 2, 3],
    [2, 3, 4]
  ];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('1dx3 array', t => {
  const inputs = [[
    [1, 2, 3],
    [2, 3, 4],
    [5, 6, 7]
  ]];
  const expectedOutput = [
    [1, 2, 3],
    [2, 3, 4],
    [5, 6, 7]
  ];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('2d array', t => {
  const inputs =  [[
    [[1], [2], [3]],
    [[2], [3], [4]]
  ]];
  const expectedOutput = [
    [1],
    [2],
    [3],
    [2],
    [3],
    [4]
  ];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('2d array wide', t => {
  const inputs = [[
    [[1, 1.1], [2, 2.2]],
    [[3, 3.3], [4, 4.4]]
  ]];
  const expectedOutput = [
    [1, 1.1],
    [2, 2.2],
    [3, 3.3],
    [4, 4.4]
  ];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('2dx3 array wide', t => {
  const inputs = [[
    [[1, 1.1], [2, 2.2]],
    [[3, 3.3], [4, 4.4]],
    [[5, 5.5], [6, 6.6]]
  ]];
  const expectedOutput = [
    [1, 1.1],
    [2, 2.2],
    [3, 3.3],
    [4, 4.4],
    [5, 5.5],
    [6, 6.6]
  ];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('3x3x1', t => {
  const inputs = [[
    [[1],[2],[3]],
    [[2],[3],[4]],
    [[5],[6],[7]]
  ]];
  const expectedOutput = [
    [1],
    [2],
    [3],
    [2],
    [3],
    [4],
    [5],
    [6],
    [7]
  ];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('3x3x3', t => {
  const inputs = [[
    [[1, 11, 111],[2, 22, 222],[3, 33, 333]],
    [[21, 211, 2111],[31, 311, 3111],[41, 411, 4111]],
    [[52, 522, 5222],[62, 622, 6222],[72, 722, 7222]]
  ]];
  const expectedOutput = [
    [   1,   11,  111],
    [   2,   22,  222],
    [   3,   33,  333],
    [  21,  211, 2111],
    [  31,  311, 3111],
    [  41,  411, 4111],
    [  52,  522, 5222],
    [  62,  622, 6222],
    [  72,  722, 7222]
  ];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('3x1x6', t => {
  const inputs = [[
    [
      [4,4,4,4,4,4]
    ],
    [
      [5,5,5,5,5,5]
    ],
    [
      [6,6,6,6,6,6]
    ]
  ]];
  const expectedOutput = [
    [4, 4, 4, 4, 4, 4],
    [5, 5, 5, 5, 5, 5],
    [6, 6, 6, 6, 6, 6]
  ];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('4x2x3', t => {
  const inputs = [[
    [
      [1, 2, 3],
      [11, 21, 33]
    ],
    [
      [4, 5, 6],
      [44, 55, 66]
    ],
    [
      [7, 8, 9],
      [77, 88, 99]
    ],
    [
      [10, 11, 12],
      [100, 110, 120]
    ]
  ]];
  const expectedOutput = [
    [  1,   2,   3],
    [ 11,  21,  33],
    [  4,   5,   6],
    [ 44,  55,  66],
    [  7,   8,   9],
    [ 77,  88,  99],
    [ 10,  11,  12],
    [100, 110, 120]
  ];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});
