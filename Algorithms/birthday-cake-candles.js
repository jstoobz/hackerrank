// Challenge Link: https://hackerrank.com/challenges/birthday-cake-candles

const birthdayCakeCandles = (ar) => {
  let max = Math.max(...ar);
  return ar.filter(el => el === max).length;
};

console.log(birthdayCakeCandles([3, 2, 1, 3]));