//  querySelectorAll()

const listItems = document.querySelectorAll('.item');
console.log(listItems[1].innerText);

// listItems.forEach((item, index) => {
//     item.style.color = 'red'

//     if(index === 1){
//         item.remove();
//     }

//     if(index === 0){
//         item.innerHTML = `Mangoes
//           <button class="remove-item btn-link text-red">
//             <i class="fa-solid fa-xmark"></i>
//           </button>`
//     }
// });

// You need to convert this into an array first
const listItems2 = document.getElementsByClassName('item');

console.log(listItems2);

const listItemsArray = Array.from(listItems2)

listItemsArray.forEach(item => console.log(item.innerText));

const listItems3 = document.getElementsByTagName('li');