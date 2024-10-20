// Activity 1

// Task 1: Declare a variable using var, assign it a number, and log the value to the console.
// Task 2: Declare a variable using let, assign it a string, and log the value to the console.

var variable=123
console.log(variable);
let variable2="String"
console.log(variable2);

//Code ran successfully!
/*
@AshxTag ➜ /workspaces/code-repo-js (main) $ node assignments_js/day1.js 
123
String
*/


// Activity 2: Constant Declaration

//     Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
const boolean=true
console.log(boolean);

//Code ran successfully!
/*@AshxTag ➜ /workspaces/code-repo-js (main) $ node assignments_js/day1.js 
123
String
true*/


// Activity 3: Data Types

//     Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
let n=5
let name="Ashhe"
let possible=true
let object=null
let a=[1,2,3,4,5]
console.log(typeof n);
console.log(typeof name);
console.log(typeof possible);
console.log(typeof object);
console.log(typeof a);

//Code ran successfully!
/*
@AshxTag ➜ /workspaces/code-repo-js (main) $ node assignments_js/day1.js 
123
String
true
number
string
boolean
object
object
*/


// Activity 4: Reassigning Variables

//     Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
let val=5
console.log(val);
val=6
console.log(val);
//Code ran successfully!
/*
@AshxTag ➜ /workspaces/code-repo-js (main) $ node assignments_js/day1.js 
123
String
true
number
string
boolean
object
object
5
6
*/


// Activity 5: Understanding const

//     Task 6: Try reassigning a variable declared with const and observe the error.
const x=101
x=202
console.log(x);

//Code ran into an error!  !--TypeError: Assignment to constant variable
/*
x=202
 ^

TypeError: Assignment to constant variable.
    at Object.<anonymous> (/workspaces/code-repo-js/assignments_js/day1.js:87:2)
    at Module._compile (node:internal/modules/cjs/loader:1546:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1691:10)
    at Module.load (node:internal/modules/cjs/loader:1317:32)
    at Module._load (node:internal/modules/cjs/loader:1127:12)
    at TracingChannel.traceSync (node:diagnostics_channel:315:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:217:24)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:166:5)
    at node:internal/main/run_main_module:30:49

Node.js v22.9.0
*/
