function truncate(str, num) {
  // Clear out that junk in your trunk
  if (num > 3 ) {
    if (str.length > num) {
       str = str.slice(0, (num-3)) + "...";
    }
  }else {
    str = str.slice(0, num) + "...";
  }
  return str;
}

truncate("A-tisket a-tasket A green and yellow basket", 11);