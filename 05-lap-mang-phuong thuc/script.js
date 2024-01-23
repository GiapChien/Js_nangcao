//// EXPRESSION INITITAL - Khởi tạo một biến/bộ đếm 
// BIỂU THỨC ĐIỀU KIỆN - Điều kiện là vòng lặp sẽ tiếp tục chạy miễn là nó được đáp ứng hoặc cho đến khi điều kiện sai 
// INCREMENT EXPRESSION - Biểu thức sẽ được thực thi sau mỗi lần lặp của vòng lặp. Thường tăng biến 
// STATEMENT - Mã sẽ được thực thi mỗi khi vòng lặp được chạy. Để thực thi một `khối mã`, hãy sử dụng cú pháp `{}`

// for (let i = 0; i <= 10; i++) {
//   if (i === 3) {
//     console.log('7 is my lucky number');
//   } else {
//     console.log('Number ' + i);
//   }
// }

//Nested loops
// for (let i = 1; i <= 10; i++) {
//   console.log('Number ' + i);

//   for (let j = 1; j <= 9; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// //Loop through an array
// const names = ['Brad', 'Sam', 'Sara', 'John', 'Tim'];

// for (let i = 0; i < names.length; i++) {
//   if (names[i] === 'John') {
//     console.log(names[i] + ' is the best');
//   } else {
//     console.log(names[i]);
//   }
// }
///02-break-and-continue
// Break
// for (let i = 0; i <= 10; i++) {
//     if (i === 5) {
//       console.log('Breaking...');
//       break;
//     }
//     console.log(i);
//   }
  
//   // Continue
//   for (let i = 0; i <= 20; i++) {
//     if (i === 13) {
//       console.log('Skipping 13...');
//       continue;
//     }
//     console.log(i);
//   }

//03 while-do-while
let i = 0;

while (i <= 4) {
  console.log('Number ' + i);
  i++;
}

// Loop over arrays
const arr = [10, 20, 30, 40, 50];

while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

// Nesting while loops
// while (i <= 5) {
//   console.log('Number ' + i);

//   let j = 1;
//   while (j <= 5) {
//     console.log(`${i} * ${j} = ${i * j}`);
//     j++;
//   }

//   i++;
// }

// Do While Loop - Always runs once
// do {
//   console.log('Number ' + i);
//   i++;
// } while (i <= 20);

//04-fizzbuzz-challenge
// let j = 1;

// while (j <=10) {
//   if (j % 15 === 0) {
//     console.log('FizzBuzz');
//   } else if (j % 3 === 0) {
//     console.log('Fizz');
//   } else if (j % 5 === 0) {
//     console.log('Buzz');
//   } else {
//     console.log(j);
//   }

//   j++;
// };
//05-traversing-the-dom-elements

// let output;

// // Get child elements from a parent

// const parent = document.querySelector('.parent');

// output = parent.children;

// output = parent.children[1].innerText;
// output = parent.children[1].className;
// output = parent.children[1].nodeName;

// parent.children[1].innerText = 'Child Two';
// parent.children[1].style.color = 'red';

// parent.firstElementChild.innerText = 'Child One';
// parent.lastElementChild.innerText = 'Child Three';

// // Get parent elements from a child

// const child = document.querySelector('.child');

// output = child.parentElement;
// child.parentElement.style.border = '1px solid #ccc';
// child.parentElement.style.padding = '10px';

// // Get sibling elements

// const secondItem = document.querySelector('.child:nth-child(2)');

// output = secondItem;
// output = secondItem.nextElementSibling;

// secondItem.nextElementSibling.style.color = 'green';
// secondItem.previousElementSibling.style.color = 'orange';

// console.log(output);

//06-traversing-the-dom-nodes
// let output;

// // Get child nodes

// const parent = document.querySelector('.parent');

// output = parent.childNodes;
// output = parent.childNodes[0].textContent;
// output = parent.childNodes[0].nodeName;
// output = parent.childNodes[3].textContent;
// output = parent.childNodes[3].outerHTML;

// output = parent.childNodes[3].innerText = 'Child One';
// output = parent.childNodes[5].style.color = 'red';

// output = parent.firstChild;
// output = parent.lastChild;

// parent.lastChild.textContent = 'Hello';

// // Get parent node

// const child = document.querySelector('.child');

// output = child.parentNode;
// output = child.parentElement;

// child.parentNode.style.backgroundColor = '#ccc';
// child.parentNode.style.padding = '10px';

// // Get sibling nodes
// const secondItem = document.querySelector('.child:nth-child(2)');

// output = secondItem.nextSibling;
// output = secondItem.previousSibling;

// console.log(output);

// function createListItem(item) {
//   const li = document.createElement('li');

//   li.innerHTML = `${item}
//   <button class="remove-item btn-link text-red">
//     <i class="fa-solid fa-xmark"></i>
//   </button>`;

//   document.querySelector('.items').appendChild(li);
// }

// // Clean & Performant
// function createNewItem(item) {
//   const li = document.createElement('li');
//   li.appendChild(document.createTextNode(item));

//   const button = document.createElement('button');
//   button.className = 'remove-item btn-link text-red';

//   const icon = document.createElement('i');
//   icon.className = 'fa-solid fa-xmark';

//   button.appendChild(icon);
//   li.appendChild(button);

//   document.querySelector('.items').appendChild(li);
// }

// createListItem('Eggs');
// createNewItem('Cheese');
function insertElement() {
  const filter = document.querySelector('.filter');

  const h1 = document.createElement('h1');
  h1.textContent = 'insertAdjacentElement';

  filter.insertAdjacentElement('beforebegin', h1);
}

// insertAdjacentText Example
function insertText() {
  const item = document.querySelector('li:first-child');

  item.insertAdjacentText('beforebegin', 'insertAdjacentText');
}

// insertAdjacentHTML example
function insertHTML() {
  const clearBtn = document.querySelector('#clear');

  clearBtn.insertAdjacentHTML('afterend', '<h2>insertAdjacentHTML</h2>');
}

// insertBefore Example
function insertBeforeItem() {
  const ul = document.querySelector('ul');

  const li = document.createElement('li');
  li.textContent = 'insertBefore';

  const thirdItem = document.querySelector('li:nth-child(3)');

  ul.insertBefore(li, thirdItem);
}

insertElement();

/*
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
*/
//

// const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

// // View prototype chain
// console.log(socials.__proto__);

// // Long form
// socials.forEach(function (item) {
//   console.log(item);
// });

// // Short form
// socials.forEach((item) => console.log(item));

// // We can also pass in the index and original array
// socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));

// // Using a named function
// function logSocials(social) {
//   console.log(social);
// }

// socials.forEach(logSocials);

// // Array of objects
// const socialObjs = [
//   { name: 'Twitter', url: 'https://twitter.com' },
//   { name: 'Facebook', url: 'https://facebook.com' },
//   { name: 'Linkedin', url: 'https://linkedin.com' },
//   { name: 'Instagram', url: 'https://instagram.com' },
// ];

// socialObjs.forEach((item) => console.log(item.url));

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// const evenNumbers = numbers.filter(function (number) {
//   return number % 2 === 0;
// });

// // Short version
// const evenNumbers2 = numbers.filter((number) => number % 2 === 0);

// // Same with forEach
// const evenNumbers3 = [];
// numbers.forEach((number) => {
//   if (number % 2 === 0) {
//     evenNumbers.push(number);
//   }
// });

// const companies = [
//   { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
//   { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
//   { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
//   { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
//   { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
//   { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
//   { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
//   { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
//   { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
// ];

// // Get only retail companies
// const retailCompanies = companies.filter(
//   (company) => company.category === 'Retail'
// );
// // console.log(retailCompanies);

// // Get companies that started in or after 1980 and ended in or before 2005
// const earlyCompanies = companies.filter(
//   (company) => company.start >= 1980 && company.end <= 2005
// );
// // console.log(earlyCompanies);

// // Get companies that lasted 10 years or more
// const longCompanies = companies.filter(
//   (company) => company.end - company.start >= 10
// );

// console.log(longCompanies);
