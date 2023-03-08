// arr.push(index)

	
// Uncaught ReferenceError: obj["1"] is not defined
// when the value is not defined
// obj.hasOwnPorperty(' ') -> boolean


for(let i = 1; i <= 10 ; i++){
    console.log(2**i)
}

let i = 1;
while(i<=10){
    console.log(2**i);
    i++;
}

// Write a piece of code using do/while loop to get user’s name and show an alert with a welcome
// message including user’s name. Keep asking user for an input if a number is entered instead of a string.
// 7


let namee;

do {
  namee = prompt("Please enter your name:");
} while (!isNaN(namee) || namee === "");

alert("Welcome " + namee + "!");


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
