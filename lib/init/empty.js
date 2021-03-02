function empty(matrix) {
  matrix.data = new Array(matrix.rows);
  for (let i = 0; i < matrix.rows; i++) {
    matrix.data[i] = new Array(matrix.cols);
  }
}
