// Challenge 1

// Solution 1
// function getCelsius(f) {
//     const celsius = (f - 32) * 5 / 9;
//     return celsius;
// }


// Solution 2
const getCelsius = f => ((f - 32) * 5 / 9).toFixed(2);

console.log(`CHALLENGE 1: The temperature is ${getCelsius(35)}\xB0C`);

// Challenge 2

// Solution 1
// function minMax(arr) {
//     const min = Math.min(...arr);
//     const max = Math.max(...arr);

//     return {
//         min,
//         max
//     };
// }

// Solution 2
const minMax = arr => {
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return {
        min,
        max,
    };
}

console.log("CHALLENGE 2: " +  JSON.stringify(minMax([1, 2, 3, 4, 5])));

((length, width) => {
    const area = length * width;
    
    const output = `CHALLENGE 3: The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;
    
    console.log(output);
})(10, 5);
    