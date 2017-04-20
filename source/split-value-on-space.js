var gonzales = require("gonzales");
module.exports = function splitValueOnSpace(value) {
  var valueAST = gonzales.srcToCSSP(value, "value");
  var values = [];
  var currentValue = ["value"];
  for (var i = 1; i < valueAST.length; i++) {
    v = valueAST[i];
    if (v[0] === 's') {
      values.push(gonzales.csspToSrc(currentValue));
      currentValue = ["value"]
    } else {
      currentValue.push(v);
    }
  }
  if (currentValue.length > 0) {
    values.push(gonzales.csspToSrc(currentValue));
  }
  return values;
}
