# numpy.js

AKA Yet-Another-Numpy-to-JS-Port.

## Why

There are a number numpy-to-JS ports out there that cover a small subset of Numpy, especially on the easier stuff.
This project also covers a small subset, but includes some harder to solve ports, and requires no dependencies.
There is some overlap with other projects, but all ports in this repo were created due to incomplete or incorrect
implementations.


## Usage

```
const { linspace, nonzero, shape, subtract } = require('numpy.js');
```

* linspace - https://docs.scipy.org/doc/numpy/reference/generated/numpy.linspace.html
* nonzero - https://docs.scipy.org/doc/numpy-1.14.0/reference/generated/numpy.nonzero.html
* shape - https://docs.scipy.org/doc/numpy/reference/generated/numpy.ndarray.shape.html
* subtract - https://docs.scipy.org/doc/numpy-1.14.0/reference/generated/numpy.subtract.html

## Testing

```
npm test
```

All tests were designed and verified against official Python Numpy.


## Contribution

Happy to take contributions. Better yet, if someone wants to own a full port of Numpy, feel free to take what you like.
