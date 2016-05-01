function repeat(str, num) {
  // repeat after me
  var count = 1;
  var newStr="";
  if (num < 0){
    return "";
  }
  do {
    newStr+=str;
    count ++;
  }while(count <= num);
  return newStr;
}

repeat("abc", 3);