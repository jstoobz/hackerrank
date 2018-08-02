// Challenge Link: https://www.hackerrank.com/challenges/a-very-big-sum

const aVeryBigSum = (ar) => ar.reduce((acc, el) => acc + el, 0);

console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]));