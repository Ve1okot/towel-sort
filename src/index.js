
// You should implement your task here.

function towelSort (matrix) {
  for (let i = 0; j < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let column = i % 2
      if (column === 0) {
        return j
      } else {
        return (matrix[i].length - j - 1)
      }
    }
  }
}

module.exports = function towelSort (matrix) {
  return [];
}
