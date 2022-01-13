//net ninja
//function

name = 'shaun';
const greet =() => 'hello';
let resultOne = greet();
console.log(resultOne);

//method

let resultTwo = name.toUpperCase();
console.log(resultTwo);

let people =['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// people.forEach(function(person){
//     console.log(person);
// });

const logPerson = (person,index) => {
    console.log(`${index} - hello ${person}`)
};
people.forEach(logPerson);

// people.forEach((person, index) => {
//     console.log(index, person);
// });
////////////////////
//dmitripavlutin.com

function myFunction(){
    console.log(this);
}
//simple invocation
myFunction(); //logs global object (window)
///////////
const myObject = {
    myMethod(items){
        console.log(this); //log myObject
        const callback = () => {
            console.log(this); // logs myObject 
        };
        items.forEach(callback);
    }
};
myObject.myMethod([1,2,3]);

// this value inside function equals to this of the outer function myMethod
