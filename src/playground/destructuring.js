//Object destructuring

// const book = {
//     title: 'Shitty Titties',
//     author: 'Nutty Scottsman',
//     publisher: {
//         //name: 'Poonguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

//Array destructuring 
const address = [];

const [, city, state = 'Nutt York'] = address;

console.log(`You are in ${state}.`)

const menu = ['Coffee', '$2.00', '$2.50', '$3.00'];
const [item,,price] = menu;
console.log(`A medium ${item} costs ${price}`);