# numpy.js

AKA Yet-Another-Numpy-to-JS-Port.

## Why

There are a number numpy-to-JS ports out there that cover a small subset of Numpy, especially on the easier stuff.
This project also covers a small subset, but includes some harder to solve ports, and requires no dependencies.
There is some overlap with other projects, but all ports in this repo were created due to incomplete or incorrect
implementations.


## Usage

```
const numpy = require('numpy.js');
```

Supported functions/classes and docs:

* `amax` - https://docs.scipy.org/doc/numpy/reference/generated/numpy.amax.html
* `digitize` - https://docs.scipy.org/doc/numpy-1.14.0/reference/generated/numpy.digitize.html#numpy.digitize
* `dstack` - https://docs.scipy.org/doc/numpy/reference/generated/numpy.dstack.html
* `linspace` - https://docs.scipy.org/doc/numpy/reference/generated/numpy.linspace.html
* `meshgrid` - https://docs.scipy.org/doc/numpy/reference/generated/numpy.meshgrid.html
* `ndarray.flat` - https://docs.scipy.org/doc/numpy/reference/generated/numpy.ndarray.flat.html
* `nditer` - https://docs.scipy.org/doc/numpy-1.14.0/reference/generated/numpy.nditer.html
* `nonzero` - https://docs.scipy.org/doc/numpy-1.14.0/reference/generated/numpy.nonzero.html
* `ravel_multi_index` - https://docs.scipy.org/doc/numpy/reference/generated/numpy.ravel_multi_index.html
* `shape` - https://docs.scipy.org/doc/numpy/reference/generated/numpy.ndarray.shape.html
* `subtract` - https://docs.scipy.org/doc/numpy-1.14.0/reference/generated/numpy.subtract.html
* `transpose` - https://docs.scipy.org/doc/numpy/reference/generated/numpy.transpose.html
* `unravel_index` - https://docs.scipy.org/doc/numpy/reference/generated/numpy.unravel_index.html#numpy.unravel_index
* `vstack` - https://docs.scipy.org/doc/numpy/reference/generated/numpy.vstack.html


## Testing

```
npm test
```

All (> 80) tests were designed and verified against official Python Numpy.


## Contribution

Happy to take contributions. Better yet, if someone wants to own a full port of Numpy, feel free to take what you like.
