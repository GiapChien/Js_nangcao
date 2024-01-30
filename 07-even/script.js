// const clearBtn = document.querySelector('#clear');

// function onClear() {
//   const itemList = document.querySelector('ul');
//   const items = itemList.querySelectorAll('li');

//   // itemList.innerHTML = '';

//   // items.forEach((item) => item.remove());

//   while (itemList.firstChild) {
//     itemList.removeChild(itemList.firstChild);
//   }
// }

// // JavaScript Event Listener
// clearBtn.onclick = function () {
//   alert('Clear Items');
// };

// clearBtn.onclick = function () {
//   console.log('Clear Items');
// };

// // addEventListener()
// clearBtn.addEventListener('click', () => alert('Clear Items'));

// // Use named function
// clearBtn.addEventListener('click', onClear);

// // removeEventListener()
// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

// // Fire off event from JS
// setTimeout(() => clearBtn.click(), 5000);


//

//02 -mouse-events

// const logo = document.querySelector('img');

// const onClick = () => console.log('click event');
// const onDoubleClick = () => {
//   if (document.body.style.backgroundColor !== 'purple') {
//     document.body.style.backgroundColor = 'purple';
//     document.body.style.color = 'white';
//   } else {
//     document.body.style.backgroundColor = 'white';
//     document.body.style.color = 'black';
//   }
// };
// const onRightClick = () => console.log('right click event');
// const onMouseDown = () => console.log('mouse down event');
// const onMouseUp = () => console.log('mouse up event');
// const onMouseWheel = () => console.log('mouse wheel event');
// const onMouseOver = () => console.log('mouse over event');
// const onMouseOut = () => console.log('mouse out event');
// const onDragStart = () => console.log('drag start event');
// const onDrag = () => console.log('drag event');
// const onDragEnd = () => console.log('drag end event');

// // Event Listeners
// logo.addEventListener('click', onClick);
// logo.addEventListener('dblclick', onDoubleClick);
// logo.addEventListener('contextmenu', onRightClick);
// logo.addEventListener('mousedown', onMouseDown);
// logo.addEventListener('mouseup', onMouseUp);
// logo.addEventListener('wheel', onMouseWheel);
// logo.addEventListener('mouseover', onMouseOver);
// logo.addEventListener('mouseout', onMouseOut);
// logo.addEventListener('dragstart', onDragStart);
// logo.addEventListener('drag', onDrag);
// logo.addEventListener('dragend', onDragEnd);

//03 const logo = document.querySelector('img');

function onClick(e) {
    // Event properties
    // console.log(e.target);
    // console.log(e.currentTarget);
    // console.log(e.type);
    // console.log(e.timeStamp);
    // console.log(e.clientX);
    // console.log(e.clientY);
    // console.log(e.offsetX);
    // console.log(e.offsetY);
    // console.log(e.pageX);
    // console.log(e.pageY);
    // console.log(e.screenX);
    // console.log(e.screenY);
  }
  
  function onDrag(e) {
    document.querySelector('h1').textContent = `X ${e.clientX} Y ${e.clientY}`;
  }
  
  logo.addEventListener('click', onClick);
  logo.addEventListener('drag', onDrag);
  
  // document.body.addEventListener('click', function (e) {
  //   console.log(e.target);
  //   console.log(e.currentTarget);
  // });
  
  // e.preventDefault() method prevents the default behavior
  document.querySelector('a').addEventListener('click', function (e) {
    e.preventDefault();
    console.log('Link was clicked');
  });
  
  /*
  - `target` - The element that triggered the event
  - `currentTarget` - The element that the event listener is attached to (These are the same in this case
  - `type` - The type of event that was triggered
  - `timeStamp` - The time that the event was triggered
  - `clientX` - The x position of the mouse click relative to the window
  - `clientY` - The y position of the mouse click relative to the window
  - `offsetX` - The x position of the mouse click relative to the element
  - `offsetY` - The y position of the mouse click relative to the element
  - `pageX` - The x position of the mouse click relative to the page
  - `pageY` - The y position of the mouse click relative to the page
  - `screenX` - The x position of the mouse click relative to the screen
  - `screenY` - The y position of the mouse click relative to the screen
  */
//04keyboard-events
const itemInput = document.getElementById('item-input');

const onKeyPress = (e) => {
  console.log('keypress');
};

const onKeyUp = (e) => {
  console.log('keyup');
};

const onKeyDown = (e) => {
  // key
  // if (e.key === 'Enter') {
  //   alert('You pressed enter');
  // }

  // keyCode
  // https://www.toptal.com/developers/keycode/table-of-all-keycodes
//   if (e.keyCode === 13) {
//     alert('You pressed enter');
//   }

//   // code
//   if (e.code === 'Digit1') {
//     console.log('You pressed 1');
//   }

//   // repeat
//   if (e.repeat) {
//     console.log('You are holding down ' + e.key);
//   }

//   // shiftKey, ctrlKey & altKey
//   console.log('Shift: ' + e.shiftKey);
//   console.log('Control: ' + e.ctrlKey);
//   console.log('Alt: ' + e.altKey);

//   if (e.shiftKey && e.key === 'K') {
//     console.log('You hit shift + K');
//   }
// };

// // Event Listeners
// itemInput.addEventListener('keypress', onKeyPress);
// itemInput.addEventListener('keyup', onKeyUp);
// itemInput.addEventListener('keydown', onKeyDown);


//06
// function showKeyCodes(e) {
// }

// window.addEventListener('keydown', showKeyCodes);

// //
// function showKeyCodes(e) {
//     const insert = document.getElementById('insert');
//     insert.innerHTML = '';
  
//     const keyCodes = {
//       'e.key': e.key === ' ' ? 'Space' : e.key,
//       'e.keyCode': e.keyCode,
//       'e.code': e.code,
//     };
  
//     for (let key in keyCodes) {
//       const div = document.createElement('div');
//       div.className = 'key';
//       const small = document.createElement('small');
  
//       const keyText = document.createTextNode(key);
//       const valueText = document.createTextNode(keyCodes[key]);
  
//       small.appendChild(keyText);
//       div.appendChild(valueText);
//       div.appendChild(small);
  
//       insert.appendChild(div);
//     }
//   }
  
//   window.addEventListener('keydown', showKeyCodes);

//   //
//   const itemInput = document.getElementById('item-input');
// const priorityInput = document.getElementById('priority-input');
// const checkbox = document.getElementById('checkbox');
// const heading = document.querySelector('h1');

// function onInput(e) {
//   heading.textContent = e.target.value;
// }

// function onChecked(e) {
//   const isChecked = e.target.checked;
//   heading.textContent = isChecked ? 'Checked' : 'Not Checked';
// }

// function onFocus() {
//   console.log('Input is focused');
//   itemInput.style.outlineStyle = 'solid';
//   itemInput.style.outlineWidth = '1px';
//   itemInput.style.outlineColor = 'red';
// }

// function onBlur() {
//   console.log('Input is not focused');
//   itemInput.style.outlineStyle = 'none';
// }

// // input, change, focus and blur events
// itemInput.addEventListener('input', onInput);
// priorityInput.addEventListener('change', onInput);
// checkbox.addEventListener('input', onChecked);
// itemInput.addEventListener('focus', onFocus);
// itemInput.addEventListener('blur', onBlur);
// //

const form = document.getElementById('item-form');

function onSubmit(e) {
  e.preventDefault();

  // Get value with .value
  const item = document.getElementById('item-input').value;
  const priority = document.getElementById('priority-input').value;

  if (item === '' || priority === '0') {
    alert('Please fill in all fields');
    return;
  }

  console.log(item, priority);
}

// Using the FormData Object
function onSubmit2(e) {
  e.preventDefault();

  const formData = new FormData(form);

  // Get individual items
  const item = formData.get('item');
  const priority = formData.get('priority');

  console.log(item, priority);

  // Get al entried as an Iterator
  const entries = formData.entries();
  console.log(entries);

  // Loop through entries
  for (let entry of entries) {
    console.log(entry[1]);
  }
}

form.addEventListener('submit', onSubmit2);