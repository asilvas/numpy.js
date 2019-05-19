/* https://docs.scipy.org/doc/numpy/reference/generated/numpy.ndarray.flat.html
*/
module.exports = function flat(arr) {
  let result = [];

  arr.forEach(v => {
    if (Array.isArray(v)) {
      result = result.concat(flat(v));
    } else {
      result.push(v);
    }
  });
  
  return result;
}
