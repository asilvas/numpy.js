const test = require('ava');
const lib = require('../src/linspace');

test('basic', t => {
  const inputs = [2.0, 3.0, 5];
  const expectedOutput = [2,  2.25,  2.5,  2.75,  3];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});

test('endpoint disabled', t => {
  const inputs = [2.0, 3.0, 5, { endpoint: false }];
  const expectedOutput = [2,  2.2,  2.4,  2.6,  2.8];
  const output = lib.apply(null, inputs);
  t.deepEqual(output, expectedOutput);
});
