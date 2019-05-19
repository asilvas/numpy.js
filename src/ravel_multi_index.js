/* https://docs.scipy.org/doc/numpy/reference/generated/numpy.ravel_multi_index.html
*/
module.exports = function ravel_multi_index(multiIndex, dims/*, { mode='raise', order='C' } = {}*/) {
  // 1D
  
  // [[2, 1, 4], [4, 3, 6]] = (2*3 + 1)*6 + 4 = 46
  // 2*3=6+1=7*6=42+4=46
  // (((idx[0][0]*dim[1])+idx[0][1])*dim[2])+idx[0][2]
  
  // vs 2D
  
  // [[[3,6,6],[4,5,1]], [7,6]] = [22, 41, 37]
  // 3*6=18+4=22
  // (idx[0][0]*dim[1])+idx[1][0]
  // 6*6=36+5=41
  // (idx[0][1]*dim[1])+idx[1][1]
  // 6*6=36+1=37
  // (idx[0][2]*dim[1])+idx[1][2]
  
  const arrays = Array.isArray(multiIndex[0]) ? multiIndex : [multiIndex]; 
  const is1D = arrays.length === 1;
  
  // results are based on number of columns in each array, unless it's a 1D input
  const indexes = new Array(is1D ? 1 : arrays[0].length).fill(0);
  const cells = is1D ? arrays[0].length : arrays.length;
  let i, idx, dimV, elV, cell;
  
  for (i = 0; i < indexes.length; i++) {
    for (cell = 0; cell < cells; cell++) {
      dim = (cell + 1) % dims.length;
      dimV = (cell === (cells-1)) ? 1 : dims[dim];
      elV = is1D ? arrays[i][cell] : arrays[cell % arrays.length][i];
      indexes[i] = (indexes[i] + elV) * dimV;
    }
  }

  return indexes.length === 1 ? indexes[0] : indexes;
}
