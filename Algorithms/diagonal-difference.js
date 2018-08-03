// Challenge Link: https://hackerrank.com/challenges/diagonal-difference

const diagonalDifference = (arr) => {
  let diff = arr.reduce((acc, el, i) => {
    acc[0] += el[i];
    acc[1] += el[arr.length - i - 1];
    return acc;
  }, [0, 0]);

  return Math.abs(diff[0] - diff[1]);
};

console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]));