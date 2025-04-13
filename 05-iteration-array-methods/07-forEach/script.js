const socials = ['Twitter', 'Linkedin', 'Facebook', 'Instagram'];

// console.log(socials.__proto__);

// socials.forEach(function (social) {
//     console.log(social);
// });

// socials.forEach((social, index, arr) => console.log(`${index} - ${social}`, arr));

function logSocials(social){
    console.log(social);
}

socials.forEach(logSocials);

const socialObjs = [
    {name: 'Twitter', url: 'https://Twitter.com'},
    {name: 'Facebook', url: 'https://Facebook.com'},
    {name: 'Linkedin', url: 'https://Linkedin.com'},
    {name: 'Instagram', url: 'https://Instagram.com'},
];

socialObjs.forEach(item => console.log(item.url));