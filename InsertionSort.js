const InsertionSort = (numbers) => {
  for (let i = 1; i < numbers.length; i++) {
    let curr = numbers[i];
    let left = i - 1;
    while (left >= 0 && numbers[left] > curr) {
      numbers[left + 1] = numbers[left];
      left--;
    }
    numbers[left + 1] = curr;
  }

  return numbers;
};

console.log(InsertionSort([4, 10, 3, 2, 1]));
