// Given a String S, reverse the string without reversing its individual words. Words are separated by dots.

function reverseStr(str) {
  let arr = str.split(".");
  let reversedArr = arr.reverse();
  return arr.join(".");
}

console.log(reverseStr("sdfsdfd.sdfsdf"));
