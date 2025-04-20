// fetch('https://httpstat.us/200')
//     .then(res => {
//         return res
//     })
//     .then(() => {
//         console.log('success');
//     });

// Will not catch error like 404 or 500 (Test with response.ok)
// fetch('https://httpstat.us/404')
//     .then(res => {
//         if(!res.ok){
//             throw new Error('Request Failed');
//         }

//         return res;
//     })
//     .then(() => {
//         console.log('success');
//     })
//     .catch(err => {
//         console.log(err);
//     });

// Check for specific error/code
fetch('https://httpstat.us/404')
    .then(res => {
        if (res.status === 404){
            throw new Error('Not Found');
        } else if (res.status === 500) {
            throw new Error('Server Error');
        } else if (res.status !== 200) {
            throw new Error('Request Failed');
        }

        return res;
    })
    .then(() => {
        console.log('success');
    })
    .catch(err => {
        console.log(err);
    });


// Catch runs on a network error but not on 404/500sh
// fetch('https://hello123.net')
//     .then(res => {
//         return res;
//     })
//     .then(() => {
//         console.log('success');
//     })
//     .catch(err => {
//         console.log(err);
//     })