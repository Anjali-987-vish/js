//primitive datatypes = String , Number , Boolean , null , undefined , symbol ,BigInt

//Non premitive datatypes = Array , Objects, Functions 

//Javascript is a dynamically type language .



//******************************premitive*******************************


//The predefined data types provided by JavaScript language are known as primitive data types.





const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);



//***************************Non premitive ****************************************

//The data types that are derived from primitive data types of the JavaScript language are known as non-primitive data types


// Reference type(Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Anjali",
    age: 22,
}

const myFunction = function(){
    console.log("Hey cutie");
}

console.log(typeof anotherId);
