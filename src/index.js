module.exports = function reverse (numb) {
  if (numb < 0) numb *= -1;
  let stringFromNumber = numb.toString().split("").reverse().join("");
  return Number(stringFromNumber);
}