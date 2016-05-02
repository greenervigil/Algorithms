function translate(str) {
  var retWord = '';
  var test = /[aeiou]/gi;

  if (str[0].match(test)){
    retWord = str + "way";
  }else {
    var indice = str.indexOf(str.match(test)[0]);
    retWord = str.substr(indice) + str.substr(0, indice) + 'ay';
  }

  return retWord;
}

translate("consonant");
