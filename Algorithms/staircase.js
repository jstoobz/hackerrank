// Challenge Link: https://hackerrank.com/challenges/staircase

const staircase = (n) => {
  let result = '';
  for (let i = 1; i <= n; i++) result += ' '.repeat(n - i) + '#'.repeat(i) + '\n';
  console.log(result);
};

console.log(staircase(6));