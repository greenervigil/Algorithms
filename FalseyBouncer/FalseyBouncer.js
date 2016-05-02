function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var newArray = arr.filter(cleanUp);
  return newArray;

  function cleanUp(val){
    return Boolean(val);
  }

}

bouncer([7, "ate", "", false, 9]);
