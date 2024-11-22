function calculate(expression) {
    try {
      const result = eval(expression);
      document.getElementById('result').value = result;
    } catch (error) {
      document.getElementById('result').value = "Error";
    }
  }
  
  function appendCharacter(character) {
    const resultField = document.getElementById('result');
    resultField.value += character;
  }
  
  function clearResult() {
    document.getElementById('result').value = '';
  }
  

  function backspace(){
    const resultField = document.getElementById('result');
    resultField.value = resultField.value.slice(0, -1); 
  }
 // document.querySelectorAll('button').forEach(button =>{button.classList.add("animate__animated animate__bounce animation-delay: 2s")

 // })