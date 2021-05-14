const arr = [];
for (let i = 1; i <= 240000; i++) {
  arr.push(i);
}

const solution = (arr, n) => {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor(arr.length / 2);
  let count = 0;

  while (start <= end) {
    mid = Math.floor((end + start) / 2);
    if (n > arr[mid]) {
      start = mid + 1;
    } else if (n < arr[mid]) {
      end = mid - 1;
    } else {
      return mid;
    }
    console.log(count, start, end);
    count++;
  }
};

console.log(solution(arr, 12000));
