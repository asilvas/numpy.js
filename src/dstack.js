/* https://docs.scipy.org/doc/numpy/reference/generated/numpy.dstack.html
*/
module.exports = function dstack(input) {
  if (!Array.isArray(input[0])) return [[input]]; // 1D
  
  const rows = input.length;
  
  const is3D = Array.isArray(input[0][0]);
  const cols = input[0].length;
  const depth = is3D && input[0][0].length;
  
  const arr = new Array(cols);
  let x, y, z, row, col;
  if (is3D) { // 3D
    for (x = 0; x < cols; x++) {
      arr[x] = row = new Array(depth);
      for (z = 0; z < depth; z++) {
        row[z] = col = new Array(rows);
        for (y = 0; y < rows; y++) {
          col[y] = input[y][x][z];
        }
      }
    }
    
    return arr;
  } else { // 2D
    for (x = 0; x < cols; x++) {
      arr[x] = row = new Array(rows);
      for (y = 0; y < rows; y++) {
        row[y] = input[y][x];
      } 
    }
    
    return [arr];
  }
}
