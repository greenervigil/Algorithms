function steamroller(arr) {
  // I'm a steamroller, baby
   var newArray=[];

  for (var i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      newArray.push(arr[i]);
    } else {
      flatten(arr[i]);
    }
  }

  function flatten(arr) {
    for (var j = 0; j < arr.length; j++) {
      if (!Array.isArray(arr[j])) {
        newArray.push(arr[j]);
      } else {
        flatten(arr[j]);
      }
    }
  }

  return newArray;
}

steamroller([1, [2], [3, [[4]]]]);
