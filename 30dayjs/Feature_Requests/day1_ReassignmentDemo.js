// Reassignment Demo: 
//Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.
console.log("First we declare and initialize a let and a const variable") 
let x=10
console.log("X=",x);
const y=100
console.log("Y=",y);
console.log("now we will try to assign new values")
x=5
console.log("X after changing:",x);
//y=10
console.log("While changing the value of y we ended up getting the following error message: y=10 ^ TypeError: Assignment to constant variable");
console.log("Y remains intact:",y);
console.log("Which implies that we cannot reassign values to const type variables, whereas we can do the same to let");


