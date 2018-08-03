// Challenge Link: https://hackerrank.com/challenges/plus-minus

const plusMinus = (arr) => {
  let sorted = arr.reduce((acc, el) => {
    if (el > 0) acc[0]++;
    if (el < 0) acc[1]++;
    if (el === 0) acc[2]++;
    return acc;
  }, [0, 0, 0]);

  sorted.forEach(el => console.log((el / arr.length).toFixed(6)));
};

console.log(plusMinus([-4, 3, -9, 0, 4, 1]));