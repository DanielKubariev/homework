function task1(h, w) {
  var out = "";
  for (var i = 1; i <= h; i++) {
    for (var k = 1; k <= w; k++) {
      out += "* ";
    }
    out += "\n";
  }
  return "\n" + out;
}
console.log(task1(7,7));