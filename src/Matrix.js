const { conversion, debug, init } = require("../lib/export");

class Matrix {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;

    init.empty(this);
    init.fill(this);
  }

  static fromArray(arr) {
    let m = conversion.fromArray(arr);
    return m;
  }
  toArray() {
    let arr = conversion.toArray(this);
    return arr;
  }

  static subtract(a, b) {
    let result = new Matrix(a.rows, a.cols);
    for (var i = 0; i < result.rows; i++) {
      for (var j = 0; j < result.cols; j++) {
        result.data[i][j] = a.data[i][j] - b.data[i][j];
      }
    }
    return result;
  }

  randomize(r1 = 0, r2 = 1) {
    init.randomize(this, r1, r2);
  }

  static transpose(matrix) {
    let result = new Matrix(matrix.cols, matrix.rows);
    for (var i = 0; i < matrix.rows; i++) {
      for (var j = 0; j < matrix.cols; j++) {
        result.data[j][i] = matrix.data[i][j];
      }
    }
    return result;
  }
  static multiply(a, b) {
    if (a.cols != b.rows) {
      console.log("Columns must match rows");
      return undefined;
    }
    let result = new Matrix(a.rows, b.cols);

    for (let i = 0; i < result.rows; i++) {
      for (let j = 0; j < result.cols; j++) {
        let sum = 0;
        for (let k = 0; k < a.cols; k++) {
          sum += a.data[i][k] * b.data[k][j];
        }
        result.data[i][j] = sum;
      }
    }
    return result;
  }
  multiply(n) {
    if (n instanceof Matrix) {
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
          this.data[i][j] *= n.data[i][j];
        }
      }
    } else {
      for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.cols; j++) {
          this.data[i][j] *= n;
        }
      }
    }
  }

  map(func) {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.cols; j++) {
        let val = this.data[i][j];
        this.data[i][j] = func(val);
      }
    }
  }
  static map(matrix, func) {
    let result = new Matrix(matrix.rows, matrix.cols);
    for (var i = 0; i < matrix.rows; i++) {
      for (var j = 0; j < matrix.cols; j++) {
        let val = matrix.data[i][j];
        result.data[i][j] = func(val);
      }
    }
    return result;
  }

  fill(val = 0) {
    init.fill(this, val);
  }

  add(n) {
    if (n instanceof Matrix) {
      for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.cols; j++) {
          this.data[i][j] += n.data[i][j];
        }
      }
    } else {
      for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.cols; j++) {
          this.data[i][j] += n;
        }
      }
    }
  }

  table() {
    debug.table(this);
  }

  info() {
    debug.info(this);
  }
}

module.exports = Matrix;
