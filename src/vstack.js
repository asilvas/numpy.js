/* https://docs.scipy.org/doc/numpy/reference/generated/numpy.vstack.html
*/
module.exports = function vstack(arrays) {
  if (arrays[0][0].length !== arrays[1][0].length) throw new Error('Inputs must be of same size/shape');

  // 1D
  if (!Array.isArray(arrays[0][0])) return arrays;
  
  // 2D
  const rows = [];
  arrays.forEach(arr => arr.map(row => rows.push(row)));
 
  return rows;
}
