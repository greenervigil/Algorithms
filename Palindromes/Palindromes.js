function palindrome(str) {
  // Good luck!
  var palString = str.replace(/[\W_]/g, "").toLowerCase();
  var revString = palString.split("").reverse().join("");
  if (revString === palString) {
    return true;

  }else {
    return false;
  }
  
}
  



palindrome("0_0 (: /-\ :) 0-0");