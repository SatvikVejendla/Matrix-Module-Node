function toArray(matrix) {
  let arr = [];
  for (let i = 0; i < matrix.rows; i++) {
    let temp = [];
    for (let j = 0; j < matrix.cols; j++) {
      temp.push(matrix.data[i][j]);
    }
    arr.push(temp);
  }
  return arr;
}

module.exports = toArray;
