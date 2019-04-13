document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn').addEventListener('click', function() {
  
      let result = document.createElement('div');
      result.id = ('result');
      let resultContents = document.getElementById('resultContents');
      if (resultContents.hasChildNodes()) {
          resultContents.removeChild(resultContents.firstChild);
      }
      resultContents.appendChild(result);
  
      let fizzNum = document.getElementById('fizzNum');
      let buzzNum = document.getElementById('buzzNum');
      let fizzNumVal = document.getElementById('fizzNum').value;
      let buzzNumVal = document.getElementById('buzzNum').value;
  
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
  })
  