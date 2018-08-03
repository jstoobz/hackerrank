// Challenge Link: https://hackerrank.com/challenges/time-conversion

const timeConversion = (s) => {
  let isPM = false;

  if (s.includes('PM')) isPM = true;

  return s.replace(/[a-z]/gi, '').split(':').reduce((acc, el, i) => {
    if (i === 0 && el !== '12' && isPM) acc.push(+el + 12);
    else if (i === 0 && el === '12' && !isPM) acc.push('00');
    else acc.push(el);
    return acc;
  }, []).join(':');
};

console.log(timeConversion('07:05:45PM'));