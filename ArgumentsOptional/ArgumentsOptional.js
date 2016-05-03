function add() {
  var check = function(num) {
    if (typeof num !== 'number') {
      return undefined;
    } else
      return num;
  };

  if (arguments.length > 1 ) {
    var a = check(arguments[0]);
    var b = check(arguments[1]);
    if (a === undefined || b === undefined) {
      return undefined;
    }else {
      return a + b;
    }
  } else {
    var c = check(arguments[0]);

    if(check(c)){
      return function(arg) {
        if (c === undefined || check(arg) === undefined){
          return undefined;
        }else {
          return c + arg;
        }
      };
    }
  }
}

add(2,3);
