// ARRAY

// Declaring an Array
let myArray = [];

// Array can contain multiple data types
let multipleDataTypes = ['Hello World!', 1, 2, true, null, { name: 'Patrick' }];


// ARRAY METHODS

// toString()
// The JavaScript method toString() converts an array to a string separated by a comma.
let rgb = ['blue', 'red', 'green'];
console.log(rgb.toString()); // blue, red, green

// join()
// The JavaScript join() method combines all array elements into a string. It is similar to toString() method, but here you can specify the separator instead of the default comma.

let names = ['Patrick', 'Josh', 'Elizabeth'];
console.log(names.join('-')); // Patrick-Josh-Elizabeth

// concat()
// This method combines two arrays together or add more items to an array and then return a new array.
let firstNumbers = [1, 2, 3];
let secondNumbers = [4, 5, 6];
let merged = firstNumbers.concat(secondNumbers);
console.log(merged); // [1, 2, 3, 4, 5, 6]

// push()
// This method adds items to the end of an array and changes the original array.
let browsers = ['chrome', 'firefox', 'edge'];
browsers.push('safari', 'opera mini');
console.log(browsers);
// ["chrome", "firefox", "edge", "safari", "opera mini"]

// pop()
// This method removes the last item of an array and returns it.
let animals = ['lion', 'elephant', 'giraffe'];
animals.pop(); // "giraffe"
console.log(animals); // ["lion", "elephant"]

// shift()
// This method removes the first item of an array and returns it.
let clothes = ['trousers', 't-shirt', 'boots'];
clothes.shift(); // "trousers"
console.log(clothes); // ["t-shirt", "boots"]

// unshift()
// This method adds an item(s) to the beginning of an array and changes the original array.
let food = ['apple', 'pear', 'plum'];
food.unshift('mango');
console.log(food); //  ["mango", "apple", "pear", "plum"]

// splice()
// This method changes an array, by adding, removing and inserting elements.
// The syntax is:

// array.splice(index[, deleteCount, element1, ..., elementN])
// Index here is the starting point for removing elements in the array
// deleteCount is the number of elements to be deleted from that index
// element1, …, elementN is the element(s) to be added

// Removing items
// If the second parameter is not declared, every element starting from the given index will be removed from the array:
let colors = ['green', 'yellow', 'blue', 'purple'];
colors.splice(0, 3);
console.log(colors); // ["purple"]
// deletes ["green", "yellow", "blue"]

// Adding items
let schedule = ['I', 'have', 'a', 'meeting', 'with'];
// adds 3 new elements to the array
schedule.splice(5, 0, 'some', 'clients', 'tomorrow');
console.log(schedule);
// ["I", "have", "a", "meeting", "with", "some", "clients", "tomorrow"]


// slice()
// This method copies a given part of an array and returns that copied part as a new array. It does not change the original array.
// The best way to use slice() is to assign it to a new variable.
let message = 'congratulations'
const abbrv = message.slice(0, 7) + 's!';
console.log(abbrv); // returns "congrats!"

// split()
// This method is used for strings. It divides a string into substrings and returns them as an array.
// Here’s the syntax:string.split(separator, limit);
let firstName = 'hello, my name is bolaji, I am a dev.';
firstName.split(',', 2); // ["hello", " my name is bolaji"]

// indexOf()
// This method looks for an item in an array and returns the index where it was found else it returns -1
let fruits = ['apple', 'orange', false, 3];
fruits.indexOf('orange'); // returns 1
fruits.indexOf(3); // returns 3
fruits.indexOf(null); // returns -1 (not found)

// lastIndexOf()
// This method works the same way indexOf() does except that it works from right to left. It returns the last index where the item was found
let anotherFruits = ['apple', 'orange', false, 3, 'apple'];
anotherFruits.lastIndexOf('apple'); // returns 4

// filter()
// This method creates a new array if the items of an array pass a certain condition.
const countryCode = ['+234', '+44', '+233', '+234'];
const uk = countryCode.filter(code => code === '+44');
console.log(uk); // ["+44"]

// map()
// This method creates a new array by manipulating the values in an array.
const userNames = ['tina', 'danny', 'mark', 'bolaji'];
const display = userNames.map(item => {
    return '<li>' + item + '</li>';
})
const render = '<ul>' + display.join('') + '</ul>';
// document.write(render);

// reduce()
// This method is good for calculating totals.
const setOfNumbers = [100, 300, 500, 70];
const sum = setOfNumbers.reduce((accumulator, value) => accumulator + value);
console.log(sum); // still returns 970

// forEach()
// This method is good for iterating through an array.
const setOfColors = ['green', 'yellow', 'blue'];
setOfColors.forEach((item, index) => console.log(index, item));
// returns the index and the every item in the array
// 0 "green"
// 1 "yellow"
// 2 "blue"

// every()
// This method checks if all items in an array pass the specified condition and returntrue if passed, else false.
const anotherSetOfNumbers = [1, -1, 2, 3];
let allPositive = anotherSetOfNumbers.every((value) => {
    return value >= 0;
})
console.log(allPositive); // would return false

// some()
// This method checks if an item (one or more) in an array pass the specified condition and return true if passed, else false.
const otherNumbers = [1, -1, 2, 3];
let atLeastOnePositive = otherNumbers.some((value) => {
    return value >= 0;
})
console.log(atLeastOnePositive); // would return true

// includes()
// This method checks if an array contains a certain item. It is similar to .some(), but instead of looking for a specific condition to pass, it checks if the array contains a specific item.
let users = ['paddy', 'zaddy', 'faddy', 'baddy'];
users.includes('baddy'); // returns true


// ARRAY MANIPULATION
// Check the console for results
const characters = ['a', 'b'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(numbers, 'push >>', numbers.push(4));
console.log(numbers, 'pop >>', numbers.pop());
console.log(numbers, 'shift >>', numbers.shift());
console.log(numbers, 'unshift >>', numbers.unshift(0));
console.log(characters, 'concat >>', characters.concat('c'));
console.log(characters, 'join >>', characters.join('-'));
console.log(characters, 'slice >>', characters.slice(1));
console.log(characters, 'indexOf >>', characters.indexOf('b'));
console.log(characters, 'includes >>', characters.includes('c'));
console.log(numbers, 'find >>', numbers.find(n => n % 2 === 0));
console.log(numbers, 'findIndex >>', numbers.findIndex(n => n % 2 !== 0));
console.log(numbers, 'map >>', numbers.map(n => n * 2));
console.log(numbers, 'filter >>', numbers.filter(n => n % 2 === 0));
console.log(numbers, 'reduce >>', numbers.reduce((acc, cur) => acc + cur));
console.log(numbers, 'every >>', numbers.every(x => x < 6));
console.log(numbers, 'some >>', numbers.some(n => n > 6));
console.log(numbers, 'reverse >>', numbers.reverse());