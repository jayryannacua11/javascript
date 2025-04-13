// Quick & Dirty
// function createListItem(item){
//     const li = document.createElement('li');

//     li.innerHTML= `${item}
//           <button class="remove-item btn-link text-red">
//             <i class="fa-solid fa-xmark"></i>
//           </button>`;

//     document.querySelector('.items').appendChild(li);
// }

const createListItem = item => {
    const li = document.createElement('li');

    li.innerHTML= `${item}
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>`;

    document.querySelector('.items').appendChild(li);
}


// Clean & Performant
const createNewItem = item => {
    const li = document.createElement('li');
    const button = document.createElement('button');
    const icon = document.createElement('i');

    li.appendChild(document.createTextNode(item));
    button.className = 'remove-item btn-link text-red';
    icon.className = 'fa-solid fa-xmark';

    button.appendChild(icon);
    li.appendChild(button);
    document.querySelector('.items').appendChild(li);
}



createListItem('Eggs');
createNewItem('Cheese');