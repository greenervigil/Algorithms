function smallestCommons(arr) {
var minNumber = arr[0];
var maxNumber = arr[1];

if (arr[0]>=arr[1]) {
minNumber = arr[1];
maxNumber = arr[0];
}

function range(minNumber, maxNumber) {
var arr = [];
for (var i = minNumber; i <= maxNumber; i++) {
arr.push(i);
}
return arr;
}


function gcd(a, b) {
return !b ? a : gcd(b, a % b);
}

function lcm(a, b) {
return (a * b) / gcd(a, b);
}

var multiple = minNumber;
range(minNumber, maxNumber).forEach(function(n) {
multiple = lcm(multiple, n);
});

return multiple;
}


smallestCommons([1,5]);
