function myName(){
    console.log("A");
    console.log("N");
    console.log("J");
    console.log("A");
    console.log("L");
    console.log("I");
}

myName();


function addTwoNumbers(n1,n2){
console.log(n1+n2);
}
addTwoNumbers(4,5);


function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

 console.log(loginUserMessage("Anjali"))
// console.log(loginUserMessage("Anjali"))

