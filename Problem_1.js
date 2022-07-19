// 1. Use array methods to turn data into result

let data = [
  ["The", "red", "horse"],
  ["Plane", "over", "the", "ocean"],
  ["Chocolate", "ice", "cream", "is", "awesome"],
  ["this", "is", "a", "long", "sentence"],
];

function groupeWords(arr) {
  return arr.reduce((prev, cur) => {
    prev.push(cur.join(" "));
    return prev;
  }, []);
}

console.log(groupeWords(data));

// Result
[
  "The red horse",
  "Plane over the ocean",
  "Chocolate ice cream is awesome",
  "this is a long sentence",
];
