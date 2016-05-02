function fearNotLetter(str) {
  //loop through the string to find missing letter
  var letter;
  var pre = str.charCodeAt(0);

  for (var x = 1; x < str.length; x ++){
    if (str.charCodeAt(x) !== pre+1 ){
      letter = String.fromCharCode(str.charCodeAt(x) - 1);
      return letter;
    }else {
      pre++;
    }
  }
  return letter;

}

fearNotLetter("abce");
