// ===============================
// function arrToObj(arr) {
//   var obj = {};
//   arr.reduce(function (accumulator, currentObj) {
//     obj[currentObj[0]] = currentObj[1];
//   }, 0);
//   return obj;
// }

// function arrToObj(arr) {
//   return arr.reduce(function (accumulator, currentObj) {
//     accumulator[currentObj[0]] = currentObj[1];
//     return accumulator;
//   }, {});
// }

// const obj1 = arrToObj([
//   ["name", "Son Dang"],
//   ["age", 21],
//   ["address", "Ha Noi"],
// ]);
// console.log(obj1);

// var langsFe = ["Dart", "PHP", "TS", "JS"];
// var langsBe = ["Python", "Go", "Java"];

// langs.slice();
// console.log(langs.las);

// Viết hàm tại đây
// function getLastElement(arr) {
//   return arr.splice(-1);
//   // return arr[arr.length - 1];
// }

// // Ví dụ sử dụng
// var animals = ["Monkey", "Tiger", "Elephant"];
// var result = getLastElement(animals);

// console.log(result); // Expected: "Elephant"
// console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']

// ====================
// var keyAge = "age";
// var keyAddress = "address";
// var myInfo = {
//   name: "Hy",
//   "full-name": "Duong Khang Hy",
//   [keyAge]: 24,
// };

// myInfo[keyAddress] = "Viet Nam";

// delete myInfo[keyAge];
// console.table(myInfo);

// =====================
