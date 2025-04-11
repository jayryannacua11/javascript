// Step 1
const library = [
    {
      title: 'The Road Ahead',
      author: 'Bill Gates',
      status: {
        own: true,
        reading: true,
        read: false,
      },
    },
    {
      title: 'Steve Jobs',
      author: 'Walter Isaacson',
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
    {
      title: 'Mockingjay: The Final Book of The Hunger Games',
      author: 'Suzanne Collins',
      status: {
        own: true,
        reading: false,
        read: true,
      },
    },
  ];

// Step 2
for(x = 0; x < library.length; x++){
    library[x].status.read = true;
}

// Step 3
const { title: firstBook } = library[0];

console.log(firstBook);

// Step 4
const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);
