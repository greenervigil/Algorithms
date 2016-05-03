function find(arr, func) {
  var number;
  for (var x = 0; x < arr.length; x++) {
    if (func(arr[x])) {
      // Store the first case and break the loop
      num = arr[x];
      return number;
    }
  }
  return number;
}

find([1, 2, 3, 4], function(number) {
  return number % 2 === 0;
});

function find(arr, func) {
  return arr.filter(func)[0];
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });
