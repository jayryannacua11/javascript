// My Answer
// const insertAfter = (newEl, existingEl) => {
//     const ul = document.querySelector('ul');

//     const asd = existingEl.insertAdjacentElement('afterend', newEl)
  
//     ul.insertBefore(existingEl, asd)
// }

// Solution
const insertAfter = (newEl, existingEl) => {
    existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
}

// New element to insert
const li = document.createElement('li');
li.textContent = 'Insert Me After!';

// Existing element to insert after
const firstItem = document.querySelector('li:first-child');

insertAfter(li, firstItem);