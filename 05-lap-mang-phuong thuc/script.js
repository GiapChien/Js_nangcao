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
let j = 1;

while (j <=10) {
  if (j % 15 === 0) {
    console.log('FizzBuzz');
  } else if (j % 3 === 0) {
    console.log('Fizz');
  } else if (j % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(j);
  }

  j++;
};
