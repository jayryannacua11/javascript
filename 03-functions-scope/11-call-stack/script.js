// const first = () => console.log('first ...');
// const second = () => console.log('second ...');
// const third = () => console.log('third ...');

// first();
// second();
// third();

const fourth = () => {
    console.log('fourth...');
    fifth();
}

const fifth = () => {
    console.log('fifth...');
    sixth();
}

const sixth = () => {
    console.log('sixth...');
}

fourth();