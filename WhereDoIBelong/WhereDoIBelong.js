function where(arr, num) {
  // Find my place in this sorted array.
  arr.sort(function(a, b) {
    return a - b;
  });

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num)
      return parseInt(i);
  }

  return arr.length;
}

where([40, 60], 50);
