/* https://docs.scipy.org/doc/numpy/reference/generated/numpy.unravel_index.html#numpy.unravel_index
*/
module.exports = function unravel_index(indices, dims/*, { order='C' } = {}*/) {
  indices = Array.isArray(indices) ? indices : [indices];
  const is1D = indices.length === 1;

  const cols = !is1D ? indices.length : dims.length;
  const rows = !is1D ? (cols * dims.length) / cols : 1;
  const results = [];

  let i, i2, row, col, val, v;
  for (i = 0; i < rows; i++) results.push([]);
  for (i = 0, row = rows - 1, col = cols - 1; i < indices.length; i++) {
    val = indices[i];
    for (i2 = dims.length-1; i2 >= 0; --i2) {
      v = Math.floor(val) % dims[i2];
      if (is1D) results[i][i2] = v;
      else results[i2 % rows][i] = v;
      col--;
      if (col < 0) {
        col = cols - 1;
        row--;
      }

      val /= dims[i2];
    }
  }
  
  return results.length > 1 ? results : results[0];
}
