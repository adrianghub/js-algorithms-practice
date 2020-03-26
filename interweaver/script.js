const firstInput = document.querySelector('.result__input--first');
const secondInput = document.querySelector('.result__input--second');
const resultContainer = document.querySelector('.result'); 

function zipIt(first, second) {

  if(isNaN(first) || isNaN(second)) {
    resultContainer.classList.add('error');
    return resultContainer.innerHTML = 'Podane parametry muszą mieć wartość liczbową 😐';
  }

  const firstArray = [...String(first)];
  const secondArray = [...String(second)];
  const resultArray = [];
  
  for(let i=0; i < firstArray.length + secondArray.length; i++){
    if(typeof firstArray[i] !== 'undefined') resultArray.push(firstArray[i]);
    if(typeof secondArray[i] !== 'undefined') resultArray.push(secondArray[i]);
  }

  if(firstArray.length > 10 || secondArray.length > 10) {
    resultContainer.classList.add('error');
    return resultContainer.innerHTML = "Akceptowalna wartość nie może przekraczać 10 znaków 😐";  
  }

  if(firstArray.value === '' && secondArray.value === '') {
    return resultContainer.innerHTML = '';
  }

  const result = resultArray.join('');
  resultContainer.classList.remove('error');
  return resultContainer.innerHTML = result; 
}


document.forms[0].addEventListener('submit', (e) => {
  e.preventDefault();

  zipIt(firstInput.value, secondInput.value);
})
