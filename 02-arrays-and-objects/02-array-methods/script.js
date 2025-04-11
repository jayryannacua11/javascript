let x;

const arr = [34, 55, 94, 20, 15];

// arr.push(100); //Add to end
// arr.pop(); //Cut the end
// arr.unshift(99) //Add to start
// arr.shift() //Cut to start
// arr.reverse();

x = arr.includes(20);

x = arr.indexOf(34);

x = arr.slice(1, 4); //It does not manipulate the original array
// x = arr.splice(1, 4); //It takes the the values of the original array

// x = arr.splice(3,1);

x = arr.splice(1, 4).reverse().toString().charAt(0);

console.log(x, arr);

