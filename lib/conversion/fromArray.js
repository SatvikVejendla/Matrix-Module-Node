function fromArray(arr) {
  if (arr[0].constructor === Array) {
    let m = {
      rows: arr.length,
      cols: arr[0].length,
      data: new Array(arr.length),
    };
    for (let i = 0; i < arr.length; i++) {
      m.data[i] = new Array(arr[0].length);
    }
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        m.data[i][j] = arr[i][j];
      }
    }
    return m;
  } else {
    let m = {
      rows: 1,
      cols: arr.length,
      data: new Array(1),
    };
    for (let i = 0; i < arr.length; i++) {
      m.data[0] = new Array(1);
    }
    for (let i = 0; i < arr.length; i++) {
      m.data[0][i] = arr[i];
    }
    return m;
  }
}

module.exports = fromArray;
