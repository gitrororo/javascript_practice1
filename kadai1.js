const execBtn = document.getElementById('execBtn')
execBtn.addEventListener('click', function() {

  const result = document.createElement('div');
  const resultContent = document.getElementById('resultContent');
  const fizzNum = document.getElementById('fizzNum');
  const buzzNum = document.getElementById('buzzNum');
  const fizzNumVal = fizzNum.value;
  const buzzNumVal = buzzNum.value;
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

  if (resultContent.hasChildNodes()) {
      resultContent.removeChild(resultContent.firstChild);
  }
  resultContent.appendChild(result);

  if (fizzNumVal ==='' || buzzNumVal ==='') {
    result.textContent = ('整数値を入力してください');
  } else if (isNaN(fizzNumVal)){
    result.textContent = ('整数値を入力してください');
  } else if (isNaN(buzzNumVal)){
    result.textContent = ('整数値を入力してください');
  } else {
    fizzBuzz(fizzNumVal, buzzNumVal);   
    }
})  