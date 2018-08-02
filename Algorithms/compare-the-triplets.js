// Challenge Link: https://hackerrank.com/challenges/compare-the-triplets

const compareTriplets = (a, b) => {
  return a.reduce((acc, el, i) => {
    if (el > b[i]) acc[0]++;
    if (el < b[i]) acc[1]++;
    return acc;
  }, [0, 0]);
};

console.log(compareTriplets([5, 6, 7], [3, 6, 10]));