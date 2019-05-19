/* https://docs.scipy.org/doc/numpy-1.14.0/reference/generated/numpy.nditer.html
*/
module.exports = class nditer {
  constructor(arr) {
    if (!(this instanceof nditer)) return new nditer(arr);

    this.arr = arr;
    this.y = 0;
    this.x = 0;
    this.z = 0;
    this.next = this.nextY;
  }
  
  [Symbol.iterator]() {
    return {
      next: () => this.next()
    };
  }
  
  nextZ() {
    this.next = this.nextZ;
    if (this.z >= this.arr[this.y][this.x].length) {
      this.x++;
      return this.nextX();
    }
     
    const v = this.arr[this.y][this.x][this.z];
    if (!Array.isArray(v)) {
      this.z++;
      return { done: false, value: v };
    }
    
    this.z++;
    return this.nextZ();
  }
  
  nextX() {
    this.next = this.nextX;
    if (this.x >= this.arr[this.y].length) {
      this.y++;
      return this.nextY();
    }
    
    const v = this.arr[this.y][this.x];
    if (!Array.isArray(v)) {
      this.x++;
      return { done: false, value: v };
    }
    
    this.z = 0;
    return this.nextZ();
  }
  
  nextY() {
    this.next = this.nextY;
    if (this.y >= this.arr.length) return { done: true };
    
    const v = this.arr[this.y];
    if (!Array.isArray(v)) {
      this.y++;
      return { done: false, value: v };
    }
    
    this.x = 0;
    return this.nextX();
  }
}
