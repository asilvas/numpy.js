/* https://docs.scipy.org/doc/numpy-1.14.0/reference/generated/numpy.digitize.html#numpy.digitize
*/
module.exports = function digitize(x, bins, { right = false } = {}) {
  let i, bin;
  const results = [];
  
  const inBin = right
    // bins[i-1] < x <= bins[i]
    ? (leftBin, x, rightBin) => leftBin < x && x <= rightBin
    // bins[i-1] <= x < bins[i]
    : (leftBin, x, rightBin) => leftBin <= x && x < rightBin
  ;

  x.forEach(val => {
    if (Array.isArray(val)) {
      return void results.push(digitize(val, bins, right));
    }
    bin = 1;
    for (i = 1; i < bins.length; i++) {
      if (inBin(bins[i-1], val, bins[i])) {
        bin = i;
        //console.log(`inBin:, i:${i}, bin:${bin} left:${bins[i-1]} <= ${val} <= ${bins[i]}`);
        break;
      }
    }
    if (val >= bins[bins.length-1]) bin = right ? bins.length - 1 : bins.length;
    results.push(bin);
  });
  
  return results;
}
