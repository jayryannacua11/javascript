const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = itemList.querySelectorAll('li');

const run = () => {
    // className
    // console.log(itemList.className);
    // text.className = 'card dark';

    // classList
    // console.log(itemList.classList);

    itemList.classList.forEach(c => console.log(c));

    // text.classList.add('dark');
    // text.classList.remove('card');

    // text.classList.toggle('dark');
    // text.classList.toggle('hidden');
    // text.classList.replace('card', 'dark');

    // Change Style
    // itemList.style.lineHeight = '3';

    items.forEach((item, index) => item.style.color = (index === 2) ? 'blue' : 'red');
}

document.querySelector('button').onclick = run;

