/* https://docs.scipy.org/doc/numpy/reference/generated/numpy.meshgrid.html
*/
module.exports = function meshgrid(...arrays) {
  const lastArg = arrays[arrays.length-1];
  let opts = {};
  if (!Array.isArray(lastArg)) {
    opts = lastArg;
    arrays.pop();
  }
  const { sparse = false, copy = false, indexing = 'xy' } = opts;
  
  // 0-1D returns as is
  if (arrays.length <= 1) return arrays[0];
  
  const is3D = Array.isArray(arrays[2]);
  const is2D = !is3D;
  
  const cols = arrays[0].length;
  const rows = arrays[1].length;
  const depth = is3D && arrays[2].length;

  const results = [];
  
  function getResult(arr, rows, cols, depth, dimension) {
    const s = {};
    let row, col;
    const result = [];
    for (s.y = 0; s.y < rows; s.y++) {
      row = [];
      for (s.x = 0; s.x < cols; s.x++) {
        if (!depth) {
          row.push(arr[s[dimension]]);
        } else {
          col = [];
          for (s.z = 0; s.z < depth; s.z++) {
            col.push(arr[s[dimension]]);
          }
          row.push(col);
        }
      }
      result.push(row);
    }
    return result;
  }
  
  let x, y, z, row, col, result;
  if (is2D) {
    if (indexing === 'xy') {
      results.push(getResult(arrays[0], rows, cols, 0, 'x'));
      results.push(getResult(arrays[1], rows, cols, 0, 'y'));
    } else { // ij
      results.push(getResult(arrays[0], cols, rows, 0, 'y'));
      results.push(getResult(arrays[1], cols, rows, 0, 'x'));
    }
  } else { // 3D
    if (indexing === 'xy') {
      results.push(getResult(arrays[0], rows, cols, depth, 'x'));
      results.push(getResult(arrays[1], rows, cols, depth, 'y'));
      results.push(getResult(arrays[2], rows, cols, depth, 'z'));
    } else { // ij
      results.push(getResult(arrays[0], cols, rows, depth, 'y'));
      results.push(getResult(arrays[1], cols, rows, depth, 'x'));
      results.push(getResult(arrays[2], cols, rows, depth, 'z'));
    }
  }
  
  return results;
}
