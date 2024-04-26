const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed beacause it is constant .


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

//difference between const let and var 
/*
Const ca be used when we dont want to change the variable 
Variables declared with var are not local to the loop, i.e.
 they are in the same scope the for loop is in. Variables declared with let are local to the statement.

*/