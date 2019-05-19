/* https://docs.scipy.org/doc/numpy-1.14.0/reference/generated/numpy.subtract.html
*/
module.exports = function subtract(a, b) {
  function shape(arr) {
    if (!arr.length) return [];
    const dims = [arr.length]; // 1D
    const dim2d = arr[0].length && dims.push(arr[0].length); // 2D
    const dim3d = dim2d && arr[0][0].length && dims.push(arr[0][0].length); // 3D
    const dim4d = dim3d && arr[0][0][0].length && dims.push(arr[0][0][0].length); // 4D
    return dims;
  }
  
  const aShape = shape(a);
  const bShape = shape(b);

  const ret = aShape.length > 0 ? new Array(aShape[0]) : [];
  
  let x, y, y2, yIdx, z, row, row2, col;
  if (aShape.length === 1) { // 1D
    for (y = 0; y < aShape[0]; y++) {
      ret[y] = a[y] - b[y];
    }
  } else if (aShape.length === 2) { // 2D
    for (y = 0; y < aShape[0]; y++) {
      ret[y] = row = new Array(aShape[1]);
      for (x = 0; x < aShape[1]; x++) {
        row[x] = a[y][x] - b[y][x];
      }
    }
  } else if (aShape.length === 3 && bShape.length === 3) { // 3D
    for (y = 0; y < aShape[0]; y++) {
      ret[y] = row = new Array(aShape[1]);
      for (x = 0; x < aShape[1]; x++) {
        row[x] = col = new Array(aShape[2]);
        for (z = 0; z < aShape[2]; z++) {
          col[z] = a[y][x][z] - b[y][x][z];
        }
      }
    }
  } else if (aShape.length === 3 && bShape.length === 2 && aShape[2] === bShape[1]) { // 3D - 2D
    yIdx = 0;
    for (y = 0; y < aShape[0]; y++) {
      ret[y] = row = new Array(aShape[0]);
      for (y2 = 0; y2 < aShape[0]; y2++, yIdx++) {
        row[y2] = col = new Array(aShape[2]);
        for (z = 0; z < aShape[2]; z++) {
          col[z] = a[y][0][z] - b[y2][z];
        }
      }
    }
  }
  
  return ret;
}
