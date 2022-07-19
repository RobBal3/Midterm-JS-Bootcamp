// Group by property
let arr = [
  { name: "Alice", job: "Data Analyst", country: "AU" },
  { name: "Bob", job: "Pilot", country: "US" },
  { name: "Lewis", job: "Pilot", country: "US" },
  { name: "Karen", job: "Software Eng", country: "CA" },
  { name: "Jona", job: "Painter", country: "CA" },
  { name: "Jeremy", job: "Artist", country: "SP" },
];

// Version 2
function group(arr, prop) {
  let obj = {};

  arr.forEach((item) => {
    if (!obj[item[prop]]) {
      obj[item[prop]] = undefined;
    }
  });

  for (let key in obj) {
    obj[key] = arr.filter((item) => {
      return item[prop] === key;
    });
  }

  return obj;
}

// Version 1
// function group(arr, prop) {
//   let groupedObj = {};

//   arr.map((item) => {
//     groupedObj[item[prop]] = arr.filter((el) => {
//       return el[prop] === item[prop];
//     });
//   });

//   return groupedObj;
// }

console.log(group(arr, "country"));

//result => {
// 	AU: [{name: 'Alice', job: 'Data Analyst', country: 'AU'}],
// 	US: [{name: 'Bob', job: 'Pilot', country: 'US'},
//   {name: 'Lewis', job: 'Pilot', country: 'US'}],
// ……
// }
