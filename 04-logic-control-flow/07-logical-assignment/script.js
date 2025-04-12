// ||= assigns the right side value only if the left is a falsy value

    let a = false;

    // if (!a){
    //     a = 10;
    // }

    // or you can use this
    a ||= 10;

console.log(a);

// &&= assigns the right side value only if the left is a truthy value;
    let b = 10;
    
    // if(b) {
    //     b = 20;
    // }

    // or you can use this
    b &&= 20;

    console.log(b);

// ??= assigns the right side value only if the left is null or undefined.
    let c = null;

    if (c === null || c === undefined){
        c = 20;
    }

    // or you can use this
    c ??= 20;

    console.log(c);