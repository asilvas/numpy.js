/* https://docs.scipy.org/doc/numpy/reference/generated/numpy.transpose.html
*/
module.exports = function transpose(a/*, axes*/) {
  
  // [[[0, 1], [2, 3]]] = [[0, 2], [1, 3]]
  // [
  //   [0, 1],
  //   [2, 3]
  // ] = [
  //   [0, 2],
  //   [1, 3]
  // ]
  // result[0][0] = idx[0][0]
  // result[0][1] = idx[1][0]
  // result[1][0] = idx[0][1]
  // result[1][1] = idx[1][1]
  
  /* [[0, 1, 2], [3, 4, 5], [6, 7, 8]] = [[0, 3, 6], [1, 4, 7], [2, 5, 8]])
     [
       [0, 1, 2],
       [3, 4, 5],
       [6, 7, 8]
     ] = [
       [0, 3, 6],
       [1, 4, 7],
       [2, 5, 8]
     ]
     result[0][0] = idx[0][0]
     result[0][1] = idx[1][0]
     result[0][2] = idx[2][0]
     result[1][0] = idx[0][1]
     result[1][1] = idx[1][1]
     result[1][2] = idx[2][1]
     result[2][0] = idx[0][2]
     result[2][1] = idx[1][2]
     result[2][2] = idx[2][2]
  */

  /* [[[0, 1], [2, 3], [4, 5]]], [[0, 2, 4], [1, 3, 5]]);
     [
       [0, 1],
       [2, 3],
       [4, 5]
     ] = [
       [0, 2, 4],
       [1, 3, 5]
     ]
     result[0][0] = idx[0][0]
     result[0][1] = idx[1][0]
     result[0][2] = idx[2][0]
     result[1][0] = idx[0][1]
     result[1][1] = idx[1][1]
     result[1][2] = idx[2][1]
  */
  
  // 1D - cannot transpose flat array, return as-is
  if (!Array.isArray(a[0])) return a;

  // source rows x cols
  const rows = a.length;
  const cols = a[0].length;
  
  // output is transposed, cols x rows
  const arr = a[0].map(() => a.map(() => [])); // init matrix
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      arr[col][row] = a[row][col];
    }
  }

  return arr;
}
