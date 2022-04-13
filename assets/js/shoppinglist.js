//DIV TOGGLE
const shopping_toggleButton = document.querySelector('#shopping-toggleList');
const shopping_listDiv = document.querySelector('.shopping-list');

//User INPUT
const shopping_userInput = document.querySelector('.shopping-userInput');
const shopping_button = document.querySelector('button.shopping-description');
const shopping_p = document .querySelector('p.shopping-description');
let shopping_listItem = document.querySelectorAll('li.shopping-li');

//ADD ITEM
const shopping_addItemInput = document.querySelector('.shopping-addItemInput');
const shopping_addItemButton = document.querySelector('button.shopping-addItemButton');

//Remove Item
const shopping_removeItemButton = document.querySelector('button.shopping-removeItemButton');
  
//list items 
const shopping_listItems = document.querySelectorAll('li.shopping-li');


shopping_toggleButton.addEventListener('click', () => {
  if (shopping_listDiv.style.display == 'none') {
    shopping_listDiv.style.display = 'block';
    shopping_toggleButton.textContent = 'Hide list';
   } else {
    shopping_listDiv.style.display = 'none';
    shopping_toggleButton.textContent = 'Show list';
   }
});


shopping_button.addEventListener('click', () => {
  shopping_lastPickedColor = shopping_userInput.value;
  shopping_listItem = document.querySelectorAll('li.shopping-li');
   for(let i = 0; i < shopping_listItem.length; i++) {
    shopping_listItem[i].style.color = shopping_lastPickedColor;
    }
  shopping_p.innerHTML = 'The list colour is: ' + shopping_lastPickedColor;
});


shopping_addItemButton.addEventListener('click', () => {
  let list = document.querySelector('#shopping-ul');
  let li = document.createElement('li');
  li.textContent = shopping_addItemInput.value;
  let appendedItem = list.appendChild(li);
 
  shopping_addItemInput.value = '';
});



shopping_removeItemButton.addEventListener('click', () => {
  let list = document.querySelector('#shopping-ul');
  let li = document.querySelector('.shopping-li');
  list.removeChild(li);;
});


shopping_listDiv.addEventListener('mouseover', (event) => {
  if(event.target.tagName == 'LI') {
  event.target.style.textTransform = 'uppercase';
  }
});

shopping_listDiv.addEventListener('mouseout', (event) => {
  if(event.target.tagName == 'LI') {
  event.target.style.textTransform = 'lowercase';
  }
});


