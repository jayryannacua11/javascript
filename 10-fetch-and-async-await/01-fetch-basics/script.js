// Fetching a JSON file
fetch('./movies.json')
    .then(response => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    });

// Fetchinga text file
fetch('./movies.json')
    .then(response => {
        return response.text();
    })
    .then((data) => {
        console.log(data);
    });

// Fetching from an API
fetch('https://api.github.com/users')
    .then(response => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    });
