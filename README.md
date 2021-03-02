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

```Matrix.fromArray(arr)```

Parameters    |    What it is   |  Required
--------------|-----------------|-----------
arr           |  The array that you want to convert to a matrix | Yes


```m.toArray()```

Converts an existing matrix called "m" into an array with respective rows and columns.
