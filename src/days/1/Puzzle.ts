const first = (input: string) => {
  const lines = input.trim().split(/\n/);
  let sum = 0;
  lines.forEach((line) => {
    const nums = line.split('').filter((s) => s.match('\\d'));
    sum += Number.parseInt(nums[0] + nums[nums.length - 1]);
  });
  return `${sum}`;
};

const expectedFirstSolution = 'solution 1';

const numOf = (str: string) => {
  const num = Number.parseInt(str);
  if (isNaN(num)) {
    switch (str) {
      case 'one':
        return '1';
      case 'two':
        return '2';
      case 'three':
        return '3';
      case 'four':
        return '4';
      case 'five':
        return '5';
      case 'six':
        return '6';
      case 'seven':
        return '7';
      case 'eight':
        return '8';
      case 'nine':
        return '9';
    }
  }
  return str;
};
const second = (input: string) => {
  const lines = input.trim().split(/\n/);
  let sum = 0;
  lines.forEach((line) => {
    const digits = [
      ...line.matchAll(
        /(?=(\d|one|two|three|four|five|six|seven|eight|nine))/g
      ),
    ];
    sum += Number.parseInt(
      numOf(digits[0][1]) + numOf(digits[digits.length - 1][1])
    );
  });
  return `${sum}`;
};

const expectedSecondSolution = 'solution 2';

export { first, expectedFirstSolution, second, expectedSecondSolution };
