// Challenge Link: https://www.hackerrank.com/challenges/mini-max-sum

const miniMaxSum = (arr) => {
  let minSum = arr.sort((a, b) => a - b).reduce((acc, el, i) => {
    if (i !== arr.length - 1) acc += el;
    return acc;
  }, 0);

  let maxSum = arr.sort((a, b) => a - b).reduce((acc, el, i) => {
    if (i !== 0) acc += el;
    return acc;
  }, 0);

  console.log(`${minSum} ${maxSum}`);
};

console.log(miniMaxSum([1, 2, 3, 4, 5]));