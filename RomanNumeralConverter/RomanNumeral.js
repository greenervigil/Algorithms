function convert(num) {
    var romanNum = '',
        number = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        romanNumerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    for (var i = 0; i < number.length; i++) {
        while (num >= number[i]) {
            romanNum += romanNumerals[i];
            num -= number[i];
        }
    }
    return romanNum;
}
convert(36); 
