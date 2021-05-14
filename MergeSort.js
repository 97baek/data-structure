const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  const result = [];
  let lt = 0;
  let rt = 0;

  while (lt < left.length && rt < right.length) {
    if (left[lt] < right[rt]) result.push(left[lt++]);
    else result.push(right[rt++]);
  }

  return [...result, ...left.slice(lt), ...right.slice(rt)];
};

console.log(mergeSort([100, 83, 5, 4, 3, 2, 6, 10, 1]));
