// Remove duplicates in an array.

let dupes = [1, 2, 3, "a", "a", "f", 3, 4, 2, "d", "d"];

function removeDups(arr) {
  let uniqueArr = [];
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];

    if (obj[item]) {
      continue;
    } else {
      obj[item] = 1;
    }
  }

  for (let key in obj) {
    uniqueArr.push(key);
  }

  return uniqueArr;
}

console.log(removeDups(dupes));

//result => [1,2,3,’a’, ‘f’, 4, ‘d’];
