# Matrix-Module-Node
A simple Node JS module for Matrix and Vector math, including Array-Matrix conversions


# Set up

### NPM

To install the package, use this following command in your terminal.


```npm install matrix-module-node```

Once you did this, add the following code to the top of your file to import the library.

```
const Matrix = require("matrix-module-node")
```

Then, to create a simple 2x2 matrix, use the following line:

```
let m = new Matrix(2,2);
```


# Documentation


```new Matrix(rows, cols)```

Creates a new matrix of zeros

Parameters    |   What it is    | Required
--------------|-----------------|---------
rows          | number of rows in your matrix | Yes
cols          | number of cols in your matrix | Yes


```m.randomize(range1, range2)```

Randomizes all the values in your matrix
Default: Random number between 0 and 1

Parameters    |  What it is     | Required  |  Default Value
--------------|-----------------|-----------|----------------
range1        | the minimum value possible for the random values | No | 0
range2        | the maximum value possible for the random values | No | 1


```m.fill(val)```

Fills the matrix with a value
Default: Fills the matrix with 0

Parameters    |  What it is     | Required | Default Value
--------------|-----------------|----------|--------------
val           | the number that you want to fill all the slots in the matrix with  | No | 0


```Matrix.fromArray(arr)```

Parameters    |    What it is   |  Required
--------------|-----------------|-----------
arr           |  The array that you want to convert to a matrix | Yes


```m.toArray()```

Converts an existing matrix called "m" into an array with respective rows and columns.
