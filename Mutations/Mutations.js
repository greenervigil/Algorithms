function mutation(arr) {
  var test = arr[1].toLowerCase();
  var comp = arr[0].toLowerCase();
  for (var i = 0; i < test.length; i++){
    if(comp.indexOf(test[i]) < 0)
      return false;
  }
  return true;
}

mutation(["hello", "hey"]);
