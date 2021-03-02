function randomize(matrix, range1 = 0, range2 = 1) {
  for (var i = 0; i < matrix.rows; i++) {
    for (var j = 0; j < matrix.cols; j++) {
      matrix.data[i][j] = Math.random() * (range2 - range1) + range1;
    }
  }
  return matrix;
}

module.exports = randomize;
