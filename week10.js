// arr.push(index)

	
// Uncaught ReferenceError: obj["1"] is not defined
// when the value is not defined
// obj.hasOwnPorperty(' ') -> boolean


for(let i = 1; i <= 10 ; i++){
    console.log(2**i);
    // console.log(Math.pow(2,i));
}

for(let i = 2; i <= 1024 ; i *= 2){
  console.log(i);
}

let i = 1;
while(i<=10){
    console.log(2**i);
    i++;
}

// Write a piece of code using do/while loop to get user’s name and show an alert with a welcome
// message including user’s name. Keep asking user for an input if a number is entered instead of a string.
// 7


// if user is defined in do, the user value doesn't work in while loop  
let user;
do {
  user = prompt("Please enter your name:");
} while (!isNaN(user) || user === "");

alert("Welcome " + user + "!");


// How do we access “cheese”?

let shopping = ['bread','milk','cheese','hummus','noodles'];

shopping["2"]
shopping[2]
shopping['2']

// How can I access 1?

let random = ['tree',795,[0,1,2]];
random[2][1]


// What if I access an index that doesn’t have anything stored? ex) shopping[10];

// --> "undefined"


// Adding/Removing Array Elements

let fruits = ['Apple', 'Banana'];
// Add ‘Orange’ to the end of the array
fruits.push('Orange')
console.log(fruits)
// Remove the last element of the array
fruits.pop()
console.log(fruits)
// Add ’Mango’ to the front of the array
fruits.unshift('Mango')
console.log(fruits)
// Remove the first element of the array
fruits.shift()
console.log(fruits)

for(let i = 0; i < fruits.length; i++){
  console.log(fruits[i])
}

for(let fruit of fruits){
  console.log(fruit)
}




let sequence = [1, 1, 2, 3, 5, 8, 13];


// Write a loop in 2 different ways to print only odd numbers from this array:
for (let i = 0; i < sequence.length; i++) {

  if (sequence[i] % 2 !== 0) {
    console.log(sequence[i]);
  }
}

for(let item of sequence){
  if (item % 2 !== 0) {
    console.log(item);
  }
}

// To access values of object properties:
  // objectName.propertyName e.g. person.age
  // objectName["propertyName"] e.g. person[“age”]
  // ^^ This is useful when the propertyName is a variable

const person = {
  name:['Bob','Smith'],
  age:32,
  gender:'male',
  interests:['music','skiing'],
};

// How can you change person’s age?
person['age'] = 12
person.age = 10

//console.log this statement using the person object defined above: ”my name is Bob Smith. I am interested in music and skiing”
console.log("my name is " + person.name[0] + " " + person.name[1] + ". I am interests in " + person.interests[0] + " and " + person.interests[1])
console.log(`My name is ${person.name[0]} ${person.name[1]}`);
//Loop through object’s properties
let person = {
  name:'Celeste',
  age: 31,
  height: '170cm'
};

for(let key in person) {
  console.log("person's " + key + " is " + person[key] )
}



//Array of Objects - Activity



let student1 = {
  ID: "A00022",
  GPA: 3.0,
  program: "CIT"
  };

let student2 = {
  ID: "A01000",
  GPA: 3.1,
  program: "CST"
  };

let student3 = {
  ID: "A00114",
  GPA: 3.2,
  program: "CIT"
  };
let students = [student1, student2, student3];

let count = 0;
for (let student of students){
  if(student["program"] === "CIT" && student["GPA"] > 3){
    count++;
  }
}
console.log(count)

// let count = 0;
// for (let i = 0; i < students.length; i++) {
//   if (students[i].program === "CIT" && students[i].GPA > 3) {
//     count++;
//   }
// }
// console.log("Number of students in CIT program with GPA above 3: " + count);



  