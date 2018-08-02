// Challenge Link: https://hackerrank.com/challenges/simple-array-sum

const simpleArraySum = (ar) => ar.reduce((acc, el) => acc + el, 0);

console.log(simpleArraySum([1, 2, 3, 4, 10, 11]));