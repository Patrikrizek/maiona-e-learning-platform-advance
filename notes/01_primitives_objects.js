// Primitives Types / Value Types - String, Number, Boolean
var oldVariable = 'avoid to use var';
const firstChoice = 'this should be your default variable choice';
let secondChoice = 'this is your second default option';

// Objects - Reference Types - Object, Array, Function
const myArray = [4, 5, 8, 10, -5];

function myFunction(parm1, parm2) {
    console.log('Logical code using arguments.');
}

let myArrowFunction = (parm1, parm2) => {
    console.log('This is an arrow function using arguments and stored as variable. The Arrow function inherits "this" reference of the object.')
};

const myObject = {
    name: 'Patrick',
    age: 30,
    isHappy: true,
    displayText: function (parm1, parm2) {
        return 'This is property function called "displayText" of the "myObject".'
    }
};