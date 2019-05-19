/* https://docs.scipy.org/doc/numpy-1.14.0/reference/generated/numpy.nonzero.html
*/
module.exports = function nonzero(arr) {
  const rows = [];
  const cols = [];
  const depth = [];
  
  let x, y, z, row, col;
  for (y = 0; y < arr.length; y++) {
    row = arr[y];
    for (x = 0; x < row.length; x++) {
      col = row[x];
      if (!Array.isArray(col)) {
        if (col > 0) {
          rows.push(y);
          cols.push(x);
        }
      } else {
        for (z = 0; z < col.length; z++) {
          if (col[z] > 0) {
            rows.push(y);
            cols.push(x);
            depth.push(z);
          }
        }
      }
    }
  }
  
  return depth.length > 0 ? [rows, cols, depth] : [rows, cols];
}
