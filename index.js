// const name = "Munusamy";
// const dob = "03-02-1980";
// let msg = "Hello my name is " + name + " & I born on " + dob + " I'm learning Javascript";

// // alert(msg)
// console.log(msg);

// let nunber1 = 5;
// let number2 = 45

// let result = nunber1 * number2;
// console.log(result);

// Object
/*
let person = {
    name: "Munusamy",
    age: 28,
    isAlive: true,
    gender: "Male",
    address: "Chennai, Tamilnadu, India",
    siblings: {
        brother: "Ramar",
        sister: "Swathi"
    }

}

//DOT Notation
person.age = 30;
console.log(person);

// Bracket Notation
console.log(person['gender']);

*/

// Array
/*
let favColors = ["red", "white", "black"];

favColors[4] = "green";
console.log(favColors);
*/

//Function

/*
function greetUser(firstName, lastName){

    //Set of statements

    //  let name = "Munusamy";
     let dob = "03-02-1980";
     let msg = "Hello my name is " + firstName + "" + lastName + " & I born on " + dob + " I'm learning Javascript";

     console.log(msg);
}

function add(num1, num2){
    console.log(num1 + num2);
}

add(45, 55)

greetUser("Munu", "samy");
*/

// Arithmetic Operators
/*
let num1 = 5;
let num2 = 20;

Increment (++)

console.log(num1++);
console.log(num1);

Decrement (--)

console.log(num1--);
console.log(num1);

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

*/

// Assignment Operators
/*
let x = 5;

x++;
x = x+1;

x += 3;
console.log(x);
*/

// Comparison Operators
/*
let x = 5;


// Equality operators 

console.log( x === 5);

console.log( x !== 5);



// Realational opeartors
console.log( x < 5);

console.log( x <= 5);

console.log( x > 5);

console.log( x >= 5);


// String Comparison

console.log( 'Alen' < 'Anbu');

// Comparison of different types


console.log( '1' < 5);

console.log( true == 1);

// Strict Equality Operators
console.log(1 === 1);

console.log( '1' === 1);

// Loose Equality Operators
console.log( 1 == 1);

*/

// Ternary Operator
/*
// If person's age is more than 18,
// They are adults categorey , otherwise,
// They are 'Child' categorey

let age = 24;

let type = age > 18 ? "Adult Ticket" : "Child Ticket";
console.log(type);
*/

// Logical Operator
/*
//HighIncome, CibilScore -> Loan Eligible, InEligible

let highIncome = true;
let cibilScore = false;

// let eligiblePerson = highIncome && cibilScore;
let eligiblePerson = highIncome || cibilScore;
let applicationStatus = !eligiblePerson;

console.log("Loan Status: " + eligiblePerson);
console.log("Application Status: " + applicationStatus);
*/

// Logical Operator with Non-Boolean values
/*
let userColor = "red";
let defaultColor = "black";
let currentColor = userColor || defaultColor;

console.log("Selected Color: " + currentColor);
*/

// Logical Bitwise Operator
/*
//Human code -> Machine code (0, 1)

// 1 -> 00000001 -> 1
// 2 -> 00000010 -> 2
// R -> 00000000 -> 0

// W -> 00000100 -> Write
// R -> 00000010 -> Read
// E -> 00000001 -> Execution

// console.log(1 | 2); //Bitwise OR
// console.log(1 & 2); //Bitwise And

const readPermission = 4;
const wirtePermission = 2;
const executepermission = 1;

let myPermission = 0;

myPermission = myPermission | wirtePermission;

let message = (myPermission && readPermission) ? 'Yes' : 'No';

console.log(message);
*/

//Operator Precendence
/*
let x = (2 + 5) * 10;
console.log(x);
*/

// Conditional Statements
/*
// IF-ELSE

let isRaining = false;
let isCloudy = true;

if(isRaining || isCloudy) {
    console.log("Don't forget to take Umbrella!");
}
else {
    console.log("Sky is normal! Enjoy the weather!");
}

// If hour is between 12AM(0) to 1PM(13) -> Good Morning
// Else if hour is between 1PM(13) to 5PM(17) -> Good Afternoon
// Else hour is between 5PM(17) to 12AM(0) -> Good Evening

let hour = new Date().getHours();

if (hour >= 0 && hour <= 13) {
  console.log("Good Morning!");
} else if (hour >= 13 && hour <= 17) {
  console.log("Good Afternoon!");
} else {
  console.log("Good Evening!");
}

// SWITCH CASE

let grade = "A";

switch (grade) {
  case "S":
    console.log("Super Grade!");
    break;
  case "A":
  case "B":
    console.log("Excellent Grade");
    break;
  case "E":
    console.log("Just Pass!");
    break;
  case "U":
    console.log("Failed Grade!");
    break;
  default:
    console.log("Unknown Grade");
}

let marks = 60;

switch (true) {
  case tmarks > 90:
    console.log("Super Grade!");
    break;
  case marks > 50:
    console.log("Pass!");
    break;
  case marks < 50:
    console.log("Failed Grade");
    break;
  default:
    console.log("Unknown Grade!");
}
*/

// Control Statements
/*
// For Loop
for( let i = 10; i >= 1; i--) {

  if(i % 2 !== 0){

    console.log("OddNumber #" + i);
  }
  }

// While Loop
let i = 15;
while(i >= 1) {
  if( i % 2 !== 0){
    console.log("OddNumber"+i);
  }
  i--;
}

// Do-While Loop
let i = 0;
do {
    if( i % 2 !== 0){
    console.log("OddNumber"+i);
  }
  i++;
}while (i <= 10);

// For-in Loop
const person = {
  name: "Munusamy",
  age: 27,
  gender: "Male"
}

for (let key in person) {

  console.log(key + ": ", person[key]);

}

const colors = ["red", "black", "green"];

for(let index in colors) {
  console.log(key + ": ",colors[index]);
}

// For-of Loop

const colors = ["red", "black", "green"];

for(let color of colors) {
  console.log("Color: "+ color);
}
*/

// JS Object & OOP
/*

// NORMAL WAY TO EXECUTE THIS DOCE

let name = "Munusamy";
let age = 26;
let interest = ["Learning, practicing new things."];
let address = {
  city: "Chennai",
  state: "Tamil Nadu",
};

function greeting() {

  // let msg = "My name is " + name + ", i love " + interest; // 1
  let msg = `My name is ${name}, i love ${interest}`; // 2
  console.log(msg);
}

greeting();

//////////////////  OOP CONCEPT  ////////////////////////// 

const person = {
  name: "Munusamy",
  age: 26,
  interest: ["Learning, practicing new things."],
  isAlive: true,
  address : {
      city: "Chennai",
      state: "Tamil Nadu",
  },

  greeting: function() {
      let msg = `My name is ${this.name}, i love ${this.interest}`; // 2
       console.log(msg);
  }
}

person.greeting();
*/

// Factory Functions
/*
function createPerson(name) { //camelcase : myFirstName
  return{
    name,
    greeting() {
        let msg = `My name is ${this.name}, i love ${this.interest}`; 
         console.log(msg);
    }
  };
}

let munu = createPerson("Munu");
let ramar = createPerson("ramar");
munu.greeting();
ramar.greeting();

// Constructor Functions

function Person(name) { //Pascal -> MyFirstName
  this.name = name,
  this.greeting = function() {
console.log(`My name is ${this.name}`);    
  }
}
let person = new Person("Munusamy");
person.greeting();
*/

// Dynamic Objects
/*
const person = {
  name : "Munu",
}
person.age = 26;
person.greeting = function() {}

delete person.greeting;
delete person.age;

console.log(person);
*/

// Function are Objects
/*
function Person(name, age) {
  this.name = name;
  this.greeting = function() {
    console.log(`My name is ${this.name}`);
  }

}

Person.call({}, "Ramar", "37");
Person.apply({}, "Ramar", "37");

const person = new Person("Ramar")
*/

// Primitive values types vs reference types
/*
// Primitive type
let cart = 5;
function updateCart(cart) {
  cart++;
  
}
updateCart(cart);
console.log("Carts available: " + cart);

// Reference type
let cartObj = {
  value: 5
};
function updateCart(cart) {
  cart.value++;
  
}
updateCart(cartObj);
console.log("Carts available:", cartObj);
*/

//Enumerating Properties of an Object
/*
const user = {
  name: "Munu",
  getFullName() {
    console.log(`My name is ${this.name}`);
  }
}


for(let key in user)
{
  console.log(key, user[key]);
}

for (let key of Object.keys(user)) {
  console.log(key);
}

for (let entry of Object.entries(user)) {
  console.log(entry);
}



// Cloning an JS Object

const user = {
  name: "Munu",
  getFullName() {
    console.log(`My name is ${this.name}`);
  }
}

// let another = Object.assign({ age:26 }, user); // 1st way of assigning one Object Values into another Object
// console.log(another);

let another = {
  ...user
}        // 2nd way of assigning one Object Values into another Object
console.log(another);
*/

// JS Math Object
/*
console.log(Math.abs(-3));
console.log(Math.ceil(0.6));
console.log(Math.floor(3.2));
console.log(Math.random());
console.log(Math.random() * (100 - 1) + 1);
console.log(Math.round(1.4));
console.log(Math.round(1.5));

let result = Math.max(45, 74, 15, 35);
console.log("Maximum result: " + result);


let result1 = Math.min(45, 74, 15, 35);
console.log("Minimum result1: " + result1);
*/

// JS String Object
/*
// let firstName = "Munu";
// let lastName = "Samy";

const fName = new String("Munu");
console.log(firstName.length);
console.log(firstName.charAt(2));
console.log(firstName.charCodeAt(3));
console.log(firstName.concat(' ', lastName));
console.log(firstName.includes("Mu"));
console.log(firstName.startsWith("Mu"));
console.log(firstName.endsWith("nu"));
console.log(firstName.indexOf("u"));
console.log(firstName.repeat(3));
console.log(firstName.replace("Munu", "munu"));

//JS Template Literals

const name = "Ramar";
const message = "Thank you for Practicing " + name + " \"JavaScript\" through Youtube Channel";
console.log(message);

const message2 = `Thank you for Practicing ${name}
 \"JavaScript\" through Youtube Channel`;
console.log(message2);
*/

// JS Date Object

// const date = Date().toString();
/*
const now = new Date();

const anotherDate = new Date();

let [month, date, year] = new Date().toLocaleDateString("en-IN").split("/");

console.log(month, date, year);
// console.log(date);

console.log(now.getFullYear());

console.log(anotherDate.getFullYear());
*/

// Adding element to an Js Array

// const items = ["Apple", "Lemon", "Grapes"];

// // PUSH -> added values to last in a array
// fruits.push("Orange", "Strawberries");

// // UNSHIFT -> added values to first in a array
// fruits.unshift("Gauva");

// //SPLICE -> added values to center of the array
// fruits.splice(3, 0, "Watermelons", "Bananas")

// console.log(items);
// console.log(items.indexOf("Grapes") !== -1);
// console.log(items.includes("Grapes"));

/////////////// Array Methods /////////////////////

// Finding Element in a JS Reference Array

// const orders = [
//   {id: 1, item: "SmartPhone", quantity: 1},
//   {id: 2, item: "AC", quantity: 1},
//   {id: 3, item: "Maggi", quantity: 3},
// ]

// let result = orders.find((order) => {
//   return order.item === "Maggi";
// });  //1st way

// let result = orders.find((order) => order.item === "Maggi"); //2nd way

// console.log(result);

// Removing an Element in JS Array

// const number = [1, 2, 3, 4,5];

// // POP -> poped the last element in the array
// // number.pop();

// // SHIFT -> Remove the first element in the array
// // number.shift();

// // SPLICE -> Remove the specified element from an array
// number.splice(2, 1)

// console.log(number);

// Emptying JS Array
/*
let numbers = [1, 2, 3, 4];

// Solution 1 
numbers = [];

// Solution 2
numbers.length = 0;

// Solution 3
numbers.splice(0, numbers.length);

// Solution 4
while(numbers.length) numbers.pop();

console.log(numbers);
*/

// Combining & Extracting Element in an Array
/*
const shopping_cart = ["Maggi", "Beans", "Masala"];
const additional_cart = ["Matchbox", "Salt"];

// Combine -> use Concat method
let recipe = shopping_cart.concat(additional_cart);


// Extract -> use Slice method
let extractedInfo = recipe.slice(1, 3)
console.log(recipe);
console.log(extractedInfo);
*/

// JS Spread operator
/*
const shopping_cart = ["Maggi", "Beans", "Masala"];
const additional_cart = ["Matchbox", "Salt"];

// Combine -> use Concat method
// let recipe = shopping_cart.concat(additional_cart);

let recipe = [...shopping_cart, 45, {name: "Munu"}, ...additional_cart];
console.log(recipe);
*/

// Js Array: Iterating Elements
/*
const dailyRoutine = ["Wake up", "Eat", "Sleep"];

//For-of
// for(let routine of dailyRoutine) {
//   console.log(routine);
// }

// //For-in
// for(let routine in dailyRoutine) {
//   console.log(routine, dailyRoutine[routine]);
// }

dailyRoutine.forEach((routine, RoutineIndex) => {
  console.log(RoutineIndex, routine);
});
*/

// Joining & Spliting Arrays
/*
const dailyRoutine = ["Wake up", "Eat", "Sleep"];

let dailyRoutines = dailyRoutine.join(", ");

console.log(dailyRoutines);

let fullName = "Munu samy";

let name  = fullName.split(" ");
console.log(name);

let postTitle = "This is my Post!";

let postSlug = postTitle.toLowerCase().split(" ");

let finalSlug = postSlug.join("_");

console.log(finalSlug);
*/

// Sorting JS Array
/*
// const students = [3, 8, 1 ];

// students.sort((a, b) => {
//   return b - a;
// });

// students.sort();

// students.reverse();
const students = [
  { id: 3, name: "Maya"},
  { id: 8, name: "Guna"},
  { id: 1, name: "Munu"},
]
students.sort((a, b) =>{
  
  // a < b => -1
  if (a.id < b.id ) return -1

  // a > b => 1
  if (a.id > b.id ) return 1

  // a === b => 0
  return 0;
})

console.log(students);
*/

// Primitives: Testing JS Array

// const queue_by_age = [24, 32, 45];

// // let isAllowed = queue_by_age.every((value, index, array) => {
// //   return value >= 18;
// // });

// let isAllowed = queue_by_age.some((value, index, array) => {
//   return value >= 15;
// })

// console.log("isAllowed: ", isAllowed);

// Testing is it Odd or Even
/*
const numbers = [ 1, 2, 3, 4, 5];

// every
// let isEven = numbers.every((value) => {
//   return value % 2 === 0;
// });

// console.log("isEven: ", isEven);

// some
let isEven = numbers.some((value) => {
  return value % 2 === 0;
});

console.log("isEven: ", isEven);
*/

// Testing elements is JS Array - Reference types
/*
const items = [
  { id: 1, name: "Mobiles", isDeliverable: true},
  { id: 2, name: "Accessories", isDeliverable: true},
  { id: 3, name: "TV", isDeliverable: false},
];

let allDeliverable = items.every((value) => {
  return value.isDeliverable == true;
});
let notDeliverable = items.some((value) => {
  return value.isDeliverable == true;
});



console.log("AllDeliverales", allDeliverable);
console.log("NotDeliverales", notDeliverable);

*/

// Filtering JS Array
/*
const queue_by_age = [24, 32, 45];

let adults = queue_by_age.filter((value) =>  value >= 18);

console.log(adults);

const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((value) => {
  return value % 2 == 0;
});
const oddNumbers = numbers.filter((value) => {
  return value % 2 == 1;
});

console.log("evenNumbers", evenNumbers);
console.log("oddNumbers", oddNumbers);

const cart_items = [
  { id: 1, items: 'Android Mobile', cost: '6500'},
  { id: 2, items: 'Iphone Mobile', cost: '27000'},
  { id: 3, items: 'Windows Mobile', cost: '8500'},
];

let affordablePhones = cart_items.filter((value) => {
  return value.cost < 10000;
});

console.log("Affordable Phones", affordablePhones);
*/

// Find in a JS Array
/*
const cart_items = [
  { id: 1, items: 'Android Mobile', cost: '6500'},
  { id: 2, items: 'Iphone Mobile', cost: '27000'},
  { id: 3, items: 'Windows Mobile', cost: '8500'},
];

let affordable = cart_items.find((value) => {
  return value.cost , 10000;
});

console.log("Affordable Phones", affordable);
*/

// MAP() in JS Array
/*
const number = [1, 2, 3, 4, 5];

let final = number.map((value) => {
  return value * 2;
});

console.log(final);

const people = [
  { id: 1, firstNmae: "Munu", lastName: "samy"},
  { id: 2, firstNmae: "Maya", lastName: "kannan"},
  { id: 3, firstNmae: "Guna", lastName: "sekar"},
];

let final = people.map((value) => {
let fullName = [value.firstNmae, value.lastName].join(" ");
let obj = { id: value.id, fullName};
return obj;
});

console.log(final);
*/

// JS Array -> Chaining Methods
/*
const products = [
  { id: 1, title: "Android Mobile", cost: 6500 },
  { id: 2, title: "Iphone Mobile", cost: 27000 },
  { id: 3, title: "HeadPhone", cost: 2500 },
];

let final = products
  .sort((a, b) => a.cost - b.cost) //ascending
  .sort((a, b) => {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 1;
  })
  .filter((value) => value.cost <= 8000)
  .map((value) => value.title + " - ₹" + value.cost);

console.log(final);
*/

// JS Array -> Reduce Method
/*
const donations = [45, 78, 95, 65, 4851]

const totalDonations = donations.reduce((previousValue, currentValue) => {
  return previousValue + currentValue;
});

console.log("totalDonation",totalDonations);

// object reference - reduce method
const shoppingcart = [
  { id: 1, item: "Organic Milk", cost: 45},
  { id: 2, item: "Bread", cost: 20},
  { id: 3, item: "Maggi", cost: 12},
];

// ES6 -> Extracting
const addCost = (accumulator, currentValue) => accumulator + currentValue.cost;

let totalCost = shoppingcart.reduce(addCost, 10);

console.log("Your total amount is: ", totalCost);
*/

// JavaScript: Difference
/*
// sort(), find() vs filter vs map() vs reduce

const numbers = [34, 54, 65, 12, 78];

//sort()
//[34,4,54,65,12,78] -> sorting using charCodeAt
// let result = numbers.sort();

// find()
// let result = numbers.find((value) => {
//   return value > 50;
// });

// filter()
// let result = numbers.filter((value) => {
//   return value > 50;
// });

// map()
// let result = numbers.map((value) => {
//   // return value > 50;
//   return "#" + value;
// });

let result1 = numbers.map((accumulator, currentValue) => {
  return accumulator + currentValue;
});


// reduce()
let result = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(result1);
console.log(result);

*/

////////////////////// Javascript Functions ////////////////////////////

// JS Function declaration vs Function Expression
/*
// Add two no
let num1 = 45;
let num2 = 8785;

// Fuction Declaration
function addNo() {
  let result = num1 + num2;
  console.log(result);
}

// Function Expression (Named Function Expression)
const addNo = function addNo() {
  let result = num1 + num2;
  console.log(result);
};

// Anonymous Function Expression
const addNo = () => {
  let result = num1 + num2;
  console.log(result);
};

const addNo = new Function("console.log(num1 + num2)");
addNo();
*/

// JS-Hoisting
/*
// addNoDeclaration();
// Function Declaration
function addNoDeclaration() {
  console.log("Adding no of fuctions. declaration");
}
// addNoDeclaration();


// Function Expression
let addNoExpression = function() {
  console.log("Adding no of fuctions. declaration");
};


addNoExpression();
*/

// JS Self Invoking Function
/*
// Add two no

// Immediately Invoked Function Expression (IIFE)
(() => {
  let num1 = 45844;
  let num2 = 84554;

  let result = num1 + num2;
  (function displayNumber() {

    console.log("Result:",result);
  })();
})();

// sumNumbers();
*/

// JS Function Arguements
/*
function sumExpense(  ) {
  let total = 0;

  for(let value of arguments) {
    total += value;
  }
return total;
  // console.log(arguments);

  // return (result = tiffin + lunch + petrol);
}
let result = sumExpense(65, 250, 99, 84, 95, 65, 10);
console.log(`Your Total Expencies: ₹${result}`);
*/

// JS Rest Operator
/*
function sumExpense(...expences) {
  Function 
console.log(expences);
}
let result = sumExpense(65, 250, 99, 84, 95, 65, 10);
console.log(`Your Total Expencies: ₹${result}`);
*/


// JS -> Error Handling(try, catch)