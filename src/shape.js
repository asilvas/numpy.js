/* https://docs.scipy.org/doc/numpy/reference/generated/numpy.ndarray.shape.html
*/
module.exports = function shape(arr) {
  function getSizeOfDimension(dim) {
    const first = dim[0];
    if (!Array.isArray(first)) return;
    return first.length;
  }  
  
  let dim = arr.length;
  let shape = [dim];
  while ((dim = getSizeOfDimension(arr)) > 0) {
    shape.push(dim++);
    arr = arr[0];
  }
  
  return shape;
}
