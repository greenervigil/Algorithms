function rot13(str) { // LBH QVQ VG!
  var code = "";
  for(var i=0; i<str.length; i++){
        if(str.charCodeAt(i) < 65 || str.charCodeAt(i) > 91) {
            code += String.fromCharCode(str.charCodeAt(i));
            continue;
        }
        if(str.charCodeAt(i) < 78){
            code += String.fromCharCode(str.charCodeAt(i) + 13);
        }
        else{
            code += String.fromCharCode(str.charCodeAt(i) - 13);

        }
    }
  return code;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
