const execBtn = getElementById('execBtn')
document.execBtn.addEventListener('click', function() {

  const result = document.createElement('div');
  const resultContents = document.getElementById('resultContents');
  const fizzNum = document.getElementById('fizzNum');
  const buzzNum = document.getElementById('buzzNum');
  const fizzNumVal = fizzNum.value;
  const buzzNumVal = buzzNum.value;

  result.id = ('result');
  if (resultContents.hasChildNodes()) {
      resultContents.removeChild(resultContents.firstChild);
  }
  resultContents.appendChild(result);

  if (fizzNumVal ==="" || buzzNumVal ==="") {
    result.textContent = ('整数値を入力してください');
  } else if (isNaN(fizzNumVal)){
    result.textContent = ('整数値を入力してください');
  } else if (isNaN(buzzNumVal)){
    result.textContent = ('整数値を入力してください');
  } else {
  const fizzBuzz = (fizz, buzz) => {
    for (let i = 1; i < 100; i++)  {
      if (i % fizz === 0 && i % buzz === 0) {
          result.innerHTML += (`FizzBuzz ${i}<br>`);
      } else if (i % fizz === 0 && i % buzz !== 0) {
          result.innerHTML += (`Fizz ${i}<br>`);
      } else if (i % fizz !== 0 && i % buzz === 0) {
          result.innerHTML += (`Buzz ${i}<br>`);
      }
    }
  };
  
  fizzBuzz(fizzNumVal, buzzNumVal);   
    }
})  