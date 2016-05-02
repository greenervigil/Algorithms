function unite(arr1, arr2, arr3) {
  var finArray = arr1;
  for (i=0; i<arguments.length; i++) {
    for (h=0; h<arguments[i].length; h++)
      if (finArray.indexOf(arguments[i][h])<0) {
        finArray.push(arguments[i][h]);
      }
    }
  return finArray;
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
