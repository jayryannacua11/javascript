try {
    console.log(x);
} catch(err) {
    console.log('Error: ' + err);
}

function double(num) {
    if(isNaN(num)){
        throw new Error(num + ' is not a number');
    }

    return num * 2;
}

try {
    console.log(double('asd'));
} catch(err) {
    console.log(err);
}
