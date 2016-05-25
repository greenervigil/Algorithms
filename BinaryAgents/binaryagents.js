function binaryAgent(str) {
  //Split the str variable into an array separated by space
  str = str.split(" ");
  //dec variable will store the dec variable to convert to letters
  //message variable will store the message
  var dec = 0;
  var message = [];

  //loop through the str variable array and parse out the INT value
  //converts the value to a char
  //resets the dec variable to 0
  for (var i=0; i<str.length; i++) {
    dec = parseInt(str[i],2);

    message.push(String.fromCharCode(dec));
    decimal = 0;
  }

  return message.join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
