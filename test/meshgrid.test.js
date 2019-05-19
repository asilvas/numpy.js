const test = require('ava');
const lib = require('../src/meshgrid');

test('2x2x2', t => {
  const inputs = [[1, 2] /* x */, [3, 4] /* y */];
  const expectedOutput = [
    [
      [1, 2], [1, 2]
    ],
    [
      [3, 3], [4, 4]
    ]
  ];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('2x2x2 indexing=ij', t => {
  const inputs = [[1, 2] /* y */, [3, 4] /* x */, { indexing: 'ij' }];
  const expectedOutput = [
    [
      [1, 1], [2, 2]
    ],
    [
      [3, 4], [3, 4]
    ]
  ];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('1x4', t => {
  const inputs = [[1, 2, 3, 4]];
  const expectedOutput = [1, 2, 3, 4];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('1x4 indexing=ij', t => {
  const inputs = [[1, 2, 3, 4], { indexing: 'ij' }];
  const expectedOutput = [1, 2, 3, 4];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('2x3x4', t => {
  const inputs = [[1, 2, 3] /* x */, [4, 5, 6, 7] /* y */];
  const expectedOutput = [
    [
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3]
    ], [
      [4, 4, 4],
      [5, 5, 5],
      [6, 6, 6],
      [7, 7, 7]
    ]
  ];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('2x3x4 indexing=ij', t => {
  const inputs = [[1, 2, 3] /* y */, [4, 5, 6, 7] /* x */, { indexing: 'ij' }];
  const expectedOutput = [
    [
      [1, 1, 1, 1],
      [2, 2, 2, 2],
      [3, 3, 3, 3]
    ], [
      [4, 5, 6, 7],
      [4, 5, 6, 7],
      [4, 5, 6, 7]
    ]
  ];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('3x2x3x4', t => {
  const inputs = [[1, 2] /* x */, [3, 4, 5] /* y */, [6, 7, 8, 9] /* z */];
  const expectedOutput = [
    [
      [[1, 1, 1, 1], [2, 2, 2, 2]],
      [[1, 1, 1, 1], [2, 2, 2, 2]],
      [[1, 1, 1, 1], [2, 2, 2, 2]]
    ],
    [
      [[3, 3, 3, 3], [3, 3, 3, 3]],
      [[4, 4, 4, 4], [4, 4, 4, 4]],
      [[5, 5, 5, 5], [5, 5, 5, 5]]
    ],
    [
      [[6, 7, 8, 9], [6, 7, 8, 9]],
      [[6, 7, 8, 9], [6, 7, 8, 9]],
      [[6, 7, 8, 9], [6, 7, 8, 9]]
    ]
  ];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('3x2x3x4 indexing=ij', t => {
  const inputs = [[1, 2] /* y */, [3, 4, 5] /* x */, [6, 7, 8, 9] /* z */, { indexing: 'ij' }];
  const expectedOutput = [
    [
      [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]],
      [[2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2]]
    ],
    [
      [[3, 3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5]],
      [[3, 3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5]]
    ],
    [
      [[6, 7, 8, 9], [6, 7, 8, 9], [6, 7, 8, 9]],
      [[6, 7, 8, 9], [6, 7, 8, 9], [6, 7, 8, 9]]
    ]
  ];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});
