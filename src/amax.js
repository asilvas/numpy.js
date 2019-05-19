/* https://docs.scipy.org/doc/numpy/reference/generated/numpy.amax.html
*/
module.exports = function amax(input) {
  if (!Array.isArray(input)) return input;
  
  return input.reduce((state, el) => {
    const val = Array.isArray(el) ? amax(el) : el;
    return Math.max(val, state);
  }, -1);
}
