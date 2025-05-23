function replaceFirstItem(){
    const firstItem = document.querySelector('li:first-child');

    const li =document.createElement('li');

    li.textContent = 'Replaced First';

    firstItem.replaceWith(li);
}

const replaceSecondItem = () => {
    const secondItem = document.querySelector('li:nth-child(2)');

    secondItem.outerHTML = '<li>Replaced Second</li>';
}

const replaceAllItems = () => {
    const lis = document.querySelectorAll('li');

    lis.forEach((item, index) => {
        if(index === 1) {
            item.innerHTML = 'Replaced Second';
        } else item.innerHTML = 'Replace All';
    });

    lis.forEach((item, index) => index === 2 ? item.outerHTML = '<li>Replaced Third</li>' : item.outerHTML = '<li>Replace All</li>');
}

function replaceChildHeading(){
    const header = document.querySelector('header');
    const h1 = document.querySelector('header h1');

    const h2 = document.createElement('h2');
    h2.id = 'app-title';
    h2.textContent = 'Shopping List h2';
    header.replaceChild(h2, h1);
}

replaceFirstItem();
replaceSecondItem();
replaceAllItems();
replaceChildHeading();