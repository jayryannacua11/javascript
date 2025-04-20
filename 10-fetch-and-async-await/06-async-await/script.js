const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({name: 'John', age: 20});
    }, 1000);
});

// Then method
// promise.then(data => console.log(data));

async function getPromise() {
    const response = await promise;
    console.log(response);
}

// getPromise();

// Then
// async function getUser() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(data => console.log(data));
// }

// Async
async function getUser() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    console.log(data); 
}

// Async Arrow Function
const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    console.log(data); 
}


getUser();
getPosts();