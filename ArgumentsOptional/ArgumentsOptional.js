function add() {
  const check = (num) => {
    return typeof num !== 'number'? undefined : num;
  };

  if (arguments.length > 1 ) {
    const a = check(arguments[0]);
    const b = check(arguments[1]);
    return (a === undefined || b === undefined) ? undefined : a + b;
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
