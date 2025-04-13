// insertAdjacentElement Example
const inserElement = () => {
  const filter = document.querySelector('.filter');

  const h1 = document.createElement('h1');
  h1.textContent = 'insertAdjacentElement';

  filter.insertAdjacentElement('beforebegin', h1)
}

// insertAdjacentText Example
const inserText = () => {
  const item = document.querySelector('li:first-child');

  item.insertAdjacentText('beforebegin', 'insertAdjacentText')
}

// insertAdjacentHTML example
const inserHTML = () => {
  const clearBtn = document.querySelector('#clear');

  clearBtn.insertAdjacentHTML('beforebegin', '<h2>insertAdjacentHTML</h2>')
}

// insertBefore Example
const inserBeforeItem = () => {
  const ul = document.querySelector('ul');

  const li = document.createElement('li');
  li.textContent = 'inserBefore';

  const thirdItem = document.querySelector('li:nth-child(3)');

  ul.insertBefore(li, thirdItem)
}

inserElement();
inserText();
inserHTML();
inserBeforeItem();


/*
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
*/
