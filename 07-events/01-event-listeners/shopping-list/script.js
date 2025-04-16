function onClear(){
    const itemList = document.querySelector('ul');
    const items = itemList.querySelectorAll('li');

    // First Option
    // itemList.innerHTML = '';

    // Second Option
    items.forEach((item) => item.remove());

    // Good Practice
    while (itemList.firstChild){
        itemList.removeChild(itemList.firstChild);
    }
}

const clearBtn = document.querySelector('#clear');

// JS Event Listener
// clearBtn.onclick = function () {
//     alert('Clear Items');
// };

// add Event Listener (You can use many event Listener if you're using this)
// clearBtn.addEventListener('click', () => alert('Clear Items'));
// clearBtn.addEventListener('click', () => console.log('Clear Items'));
clearBtn.addEventListener('click', onClear);

// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

// setTimeout(() => clearBtn.click(), 5000);

