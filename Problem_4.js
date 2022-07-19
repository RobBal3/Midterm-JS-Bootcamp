// Group by property

let arr = [
  { name: "Alice", job: "Data Analyst", country: "AU" },
  { name: "Bob", job: "Pilot", country: "US" },
  { name: "Lewis", job: "Pilot", country: "US" },
  { name: "Karen", job: "Software Eng", country: "CA" },
  { name: "Jona", job: "Painter", country: "CA" },
  { name: "Jeremy", job: "Artist", country: "SP" },
];

function group(arr, prop) {
  let groupedObj = {};

  arr.map((item) => {
    groupedObj[item[prop]] = arr.filter((item1) => {});
  });

  return groupedObj;
}

console.log(group(arr, "country"));
