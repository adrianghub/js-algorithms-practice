const input = document.querySelector('.result__input');
const result = document.querySelector('.result'); 

function reverseMe(input) {

    if(typeof input !== 'string') {
  
      throw new Error ("Ooops. Nie przekazałeś wartości typu  string!");
      
    } else {
  
      input.toLowerCase();
      const reverseString = input.split('').reverse().join('');
      return result.innerHTML = reverseString;
  
    }
   
  }

document.forms[0].addEventListener('submit', (e) => {
  e.preventDefault();

  reverseMe(input.value);
})