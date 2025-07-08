
//! Conversion of JSON text to JS object
// noinspection ES6ConvertVarToLetConst,JSUnresolvedReference,SpellCheckingInspection

var object1 = JSON.parse('{"roll":101,"name":"Mayank","age":20}');
console.log(object1);           // Prints whole object
console.log(object1.roll);
console.log(object1.name);      // Mayank
console.log(object1.age);       // 20


//! Conversion of Javascript object into a string
var object2 = {name:"John", age:20, city: "New York"};
var myJSON = JSON.stringify(object2);
console.log(myJSON);





