/* https://docs.scipy.org/doc/numpy/reference/generated/numpy.linspace.html
*/
module.exports = function linspace(start, stop, num = 50, { endpoint=true/*, retstep=false, dtype=null*/ } = {}) {
  if (num < 2) {
    return num === 1 ? [start] : [];
  }
  const ret = new Array(num);
  const step = (stop - start) / (endpoint ? num-1 : num);
  for (let i = 0; i < num; i++) {
    ret[i] = start + (step * i);
  }
  return ret;
}
