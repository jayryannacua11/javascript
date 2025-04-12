// Falsy Values
// - false
// - 0
// - "" or ''
// - null
//  - undefined
// - NaN

// Truthy Values
// - Everything else that is not falsy
// - true
// - '0'
// - ' '
// - 'false'
// - []
// - {}
// - function () {}

// Truthy and falsy caveats
const children = 0;

if (!isNaN(children)) {
    console.log(`You have ${children} children`);
}else console.log('Please enter number of children');

// Checking for empty arrays
const posts = [];

if (posts.length > 0){ //Because [] is truthy
    console.log('List Posts');
}else console.log('No Posts');

// Checking for empty objects
const user = {};

if (Object.keys(user).length > 0) { //Because {} is truthy
    console.log('List user');
} else console.log('No User');

// Loose Equality (==)
console.log(false === 0);
