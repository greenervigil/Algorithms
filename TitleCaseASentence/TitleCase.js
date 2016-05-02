function titleCase(str) {
  str = str.toLowerCase().split(" ");
  for (var s in str) {
    str[s] = str[s].replace(str[s].charAt(0), str[s].charAt(0).toUpperCase());
  }
  return str.join(" ");
  }

titleCase("I'm a little tea pot");
