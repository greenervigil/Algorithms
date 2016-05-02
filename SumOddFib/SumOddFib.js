function sumFibs(num) {
   var pNumber = 0;
    var cNumber = 1;
    var result = 0;
    while (cNumber <= num) {
        if (cNumber % 2 !== 0) {
            result += cNumber;
        }
        var next = cNumber + pNumber;
        pNumber = cNumber;
        cNumber = next;
    }

    return result;
}

sumFibs(4);
