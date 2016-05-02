function pair(str) {
  //split the string to an array
  str = str.split("");
  var geneticPair = [];
  //loop through each character and push character and its match
  //as an array to the str array
  for (var x in str){
    if (str[x] == 'G'){
      var aArray = [str[x], 'C'];
      geneticPair.push(aArray);
    }else if (str[x] == 'C') {
      var nArray = [str[x], 'G'];
      geneticPair.push(nArray);
    }else if (str[x] == 'A'){
      var xArray = [str[x], 'T'];
      geneticPair.push(xArray);
    }else {
      var tArray = [str[x], 'A'];
      geneticPair.push(tArray);
    }
  }

  return geneticPair;
}

pair("GCG");
