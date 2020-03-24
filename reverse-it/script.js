const input = document.querySelector('.result__input');
const result = document.querySelector('.result'); 

function reverseHandler(input) {
 
      const reverseString = input.split('').reverse().join('');
      return result.innerHTML = reverseString;
  
    }

document.forms[0].addEventListener('submit', (e) => {
  e.preventDefault();

  reverseHandler(input.value);
})