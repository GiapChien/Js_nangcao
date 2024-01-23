// let x;
// // Array Literal
// const numbers = [12, 45, 33, 29, 39, 102];
// const mixed = [12, 'Hello', true, null];
// // Array Constructor
// const fruits = new Array('apple', 'grape', 'orange');
// // Get value by index
// x = numbers[0];
// x = numbers[0] + numbers[3];
// // console.log(x)
// x = `My favorite fruit is an ${fruits[2]}`;
// x = numbers.length;
// console.log("helo")
// fruits[2] = 'pear';

// // length is not read-only
// // fruits.length = 2;

// fruits[3] = 'strawberry';

// // Using the length as the index will always add on the the end
// fruits[fruits.length] = 'blueberry';
// fruits[fruits.length] = 'peach';

// x = fruits;
// console.log(x);


//Mang
// let x;
// let arr = [28, 38, 44, 29, 109];
// //them 
// arr.push(100)
// //bor  giá trị cuối cùng 
// arr.pop();
// // Thêm giá trị vào đầu mảng
// arr.unshift(99);
// //xoa gia tri đầu tiên
// arr.shift();
// //đảo  mảng
// arr.reverse();
// console.log(arr)
// // Kiểm tra xem có gì trong mảng không
// x = arr.includes(445);
// //tim kiem bien 
// x = arr.indexOf(38);
// //chuyen sang chuỗi
// // x = arr.toString();
// // x = arr.join();
// x = arr.slice(1, 5);
// x = arr.slice(1, 4).reverse().toString().charAt(0);
// console.log(x)

// let x;

// const fruits = ['apple', 'pear', 'orange'];
// const berries = ['strawberry', 'blueberry', 'rasberry'];

// // Nesting arrays

// // Nesting berries inside of fruits
// fruits.push(berries);
// // console.log(fruits)
// x = fruits[3][1];
// console.log(x)
// const allFruits = [fruits, berries];

// x = allFruits[1][2];


// // concat() -Nối các mảng
// x = fruits.concat(berries);
// console.log(x)
// // spread operator (...) - Concatenate with
// x = [...fruits, ...berries];


// const arr = [1, 2, [3, 4, 5], 6, [7, 8]];
// // flat() lam phang 1 mang
// x = arr.flat();
// // console.log(x)
// x = Array.isArray(fruits);
// // x = Array.from('12345');


// console.log(x)
// const a = 1;
// const b = 2;
// const c = 3;
// // Tạo một mảng từ một tập hợp các giá trị
// x = Array.of(a, b);

// console.log(x);


// const arr = [1, 2, 3, 4, 5];


// // Same result as above
// arr.push(6);
// arr.unshift(3);
// // arr.reverse();

// console.log(arr);

// // Challenge 2

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [5, 6, 7, 8, 9, 10];

// // Solution 1
// const arr3 = arr1.slice(1, 4).concat(arr2);
// console.log(arr3);
// // Solution 2
// const arr4 = [...arr1, ...arr2];
// arr4.splice(4, 1);

// console.log(arr4);

// 05-object-literal

// let x;
// // Creating an object
// const person = {
//   name: 'John Doe',
//   age: 30,
//   isAdmin: true,
//   address: {
//     street: '123 Main st',
//     city: 'Boston',
//     state: 'MA',
//   },
//   hobbies: ['music', 'sports'],
// };
// x=person;
// // console.log(x)
// person.name = 'Jane Doe';
// person['isAdmin'] = false;

// //xoa bien
// delete person.age;


// // Create new properties
// person.hasChildren = true;

// // Add functions
// person.greet = function () {
//   console.log(`Hello, my name is ${this.name}`);
// };

// person.greet();
// console.log(x);

// // Keys with multiple words
// const person2 = {
//   'first name': 'Brad',
//   'last name': 'Traversy',
// };

// x = person2['last name'];

// console.log(x);

// let x;

// // Create object using the object constructor
// const todo = new Object();

// todo.id = 1;
// todo.name = 'Buy Milk';
// todo.completed = false;

// x = todo;

// // Object Nesting
// const person = {
//   address: {
//     coords: {
//       lat: 42.9384,
//       lng: -71.3232,
//     },
//   },
// };

// x = person.address.coords.lat;

// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };

// // Spread operator
// const obj3 = { ...obj1, ...obj2 };
// // Same as using ...
// const obj4 = Object.assign({}, obj1, obj2);

// // Array of objects
// const todos = [
//   { id: 1, name: 'Buy Milk' },
//   { id: 2, name: 'Pickup kids from school' },
//   { id: 3, name: 'Take out trash' },
// ];

// x = todos[0].name;

// // Get array of object keys
// x = Object.keys(todo);

// // Get length of an object
// x = Object.keys(todo).length;

// // Get array of object values
// x = Object.values(todo);

// // Get array of object key/value pairs
// x = Object.entries(todo);

// // Check if object has a property
// x = todo.hasOwnProperty('age');

// console.log(x);

// 07-destructuring-naming
//Đặt thuộc tính của đối tượng có cùng tên với biến
const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
  firstName,
  lastName,
  age,
};

console.log(person.age);
const todo = {
    id: 1,
    title: 'Take out trash',
    user: {
      name: 'John',
    },
  };
  
  const {
    id: todoId, // rename id to todoId
    title:helo,
    user: { name }, // destructuring multiple levels
  } = todo;
  
  console.log(helo);
  // Destructuring arrays & using the rest/spread operator
const numbers = [23, 67, 33, 49, 52];

const [first, second,...rest] = numbers;

console.log(first, second, rest);

//09-object-challenge
const library = [
    {
      title: 'The Road Ahead',
      author: 'Bill Gates',
      status: {
        own: true,
        reading: false,
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
      title: 'Mockingjay',
      author: 'Suzanne Collins',
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
  ];
  
  // Step 2
//   library[0].status.read = true;
//   library[1].status.read = true;
//   library[2].status.read = true;

//   console.log(library[2])
  const { title: firstBook } = library[0];

console.log(firstBook);
const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);