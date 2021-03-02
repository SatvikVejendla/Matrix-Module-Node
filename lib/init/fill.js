function fill(matrix, val = 0) {
  for (let i = 0; i < matrix.rows; i++) {
    for (let j = 0; j < matrix.cols; j++) {
      matrix.data[i][j] = val;
    }
  }
  return matrix;
}

module.exports = fill;
