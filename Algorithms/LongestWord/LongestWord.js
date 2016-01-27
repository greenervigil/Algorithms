function findLongestWord(str) {
  var array = str.split(" ");
  var longest = 0;
  for (var i = 0; i < array.length; i++){
    if (array[i].length > longest){
      longest = array[i].length;
    }
  }
  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");