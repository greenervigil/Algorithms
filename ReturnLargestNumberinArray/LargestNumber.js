function largestOfFour(arr) {
  // You can do this!
  var highNum = [];
  for (var i in arr){
    var max = 0;
    for (var j in arr[i]){
      //if (arr[i][j] > arr[i][j]) {
       if( arr[i][j] > max) {
        max = (arr[i][j]);
      }
    }highNum[i] = max;
  }
  return highNum;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
