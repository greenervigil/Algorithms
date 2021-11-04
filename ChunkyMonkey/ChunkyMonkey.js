function chunk(arr, size) {
  // Break it up.
  let newArray = [];
  for (let i = 0; i < arr.length; i += size){
    newArray.push(arr.slice(i, i+size));
  }
  return newArray;
}

chunk(["a", "b", "c", "d"], 2);
