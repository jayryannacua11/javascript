function createNewItem(item) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  const button = createButton('remove-item btn-link text-red')

  li.appendChild(button);

  document.querySelector('.items').appendChild(li);
}

const createButton = classes => {
  const button = document.createElement('button');
  button.className = classes;

  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);

  return button;
}

const createIcon = classes => {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon
}

createNewItem('Cheese');
createNewItem('Sauce');
