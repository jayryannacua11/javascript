function removeClearButton() {
    const clearBtn = document.querySelector('#clear');
    clearBtn.remove();
}

removeClearButton();

function removeFirstItem() {
    const ul = document.querySelector('ul');
    const li = document.querySelector('li:first-child');

    ul.removeChild(li);
}

// removeFirstItem();

const removeItem = itemNumber => {
    const ul = document.querySelector('ul');
    const li = document.querySelector(`li:nth-child(${itemNumber})`);

    ul.removeChild(li);
}

const removeItem2 = itemNumber => {
    const ul = document.querySelector('ul');
    const li = document.querySelectorAll('#item-list li');
    li[itemNumber - 1].remove();

    ul.removeChild(li);
}

const removeItem3 = itemNumber => {
    const li = document.querySelectorAll('li');
    li[itemNumber - 1].remove();
}

const removeItem4 = itemNumber => document.querySelectorAll('#item-list li')[itemNumber - 1].remove();

// removeItem(2);
// removeItem2(2);
// removeItem3(4);
removeItem3(3);