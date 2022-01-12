// const arr = [1,2,3,4];
// let arr2 = arr.map(elemet => elemet**2)
// .filter(elemet => elemet>2)
// console.log(arr2);

// const book ={
//     name : "blueBook",
//     pages : 32
// };
// console.log(book.name);
// console.log(book["pages"]);
//The Net Ninja

const user ={
    email :"aaaaa@thenetninja.co.uk",
    name : "crystal",
    age :30,
    location : "berlin",
    blogs: ["why mac & cheese rules", "10 things"]
};
// console.log(user.name);
// user.age =35;
// console.log(user);
//same as user["location"]
// const key ="location";
// console.log(user["key"]);
// user["name"] = "chun-li";
// console.log(user.name);

// console.log(typeof user);

//function expression : variable = function
// const speak = function(){
//     console.log("hi");
// };
// speak();
// greet();

//function declaration 
//hoisting
// function greet(){
//     console.log("hello there");
// }

// const bill = function (products, tax){
//     let total =0;
//     for(let i=0; i<products.length; i++){
//         total+= products[i] + products[i] *tax;
//     }
//     return total;
// }

// const bill = (products, tax) => {
//     let total =0;
//     for(let i=0; i<products.length; i++){
//         total+= products[i] + products[i] *tax;
//     }
//     return total;
// }

// console.log(bill([10,15,30], 0.2));

const name ="shaun";
//function
const greet = () => "hello";
let resultOne =greet();
console.log(resultOne);

//method
let resultTwo= name.toUpperCase()
console.log(resultTwo);

//callbacks
const myFunc = (callbackFunc) => {
    let value =50;
    callbackFunc(value);
};
myFunc(value => {
    console.log(value);

});





