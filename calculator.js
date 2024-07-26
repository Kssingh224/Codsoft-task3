document.addEventListener('DOMContentLoaded', function() {
  const display = document.getElementById('display');
  let currentInput = '0';
  let currentOperator = null;
  let previousInput = null;
  let operatorClicked = false;

  const updateDisplay = () => {
    display.textContent = currentInput;
  };

  const clearAll = () => {
    currentInput = '0';
    currentOperator = null;
    previousInput = null;
    operatorClicked = false;
    updateDisplay();
  };

  const handleNumberClick = (num) => {
    if (currentInput === '0' || operatorClicked) {
      currentInput = num;
      operatorClicked = false;
    } else {
      currentInput += num;
    }
    updateDisplay();
  };

  const handleOperatorClick = (operator) => {
    if (currentOperator !== null) {
      calculateResult();
    }
    currentOperator = operator;
    previousInput = currentInput;
    operatorClicked = true;
  };

  const handleDecimalClick = () => {
    if (!currentInput.includes('.')) {
      currentInput += '.';
      updateDisplay();
    }
  };

  const calculateResult = () => {
    let result;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    switch (currentOperator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        return;
    }

    if (!isFinite(result)) {
      result = 'Error';
    }

    currentInput = result.toString();
    currentOperator = null;
    previousInput = null;
    updateDisplay();
  };

  document.getElementById('zero').addEventListener('click', () => handleNumberClick('0'));
  document.getElementById('one').addEventListener('click', () => handleNumberClick('1'));
  document.getElementById('two').addEventListener('click', () => handleNumberClick('2'));
  document.getElementById('three').addEventListener('click', () => handleNumberClick('3'));
  document.getElementById('four').addEventListener('click', () => handleNumberClick('4'));
  document.getElementById('five').addEventListener('click', () => handleNumberClick('5'));
  document.getElementById('six').addEventListener('click', () => handleNumberClick('6'));
  document.getElementById('seven').addEventListener('click', () => handleNumberClick('7'));
  document.getElementById('eight').addEventListener('click', () => handleNumberClick('8'));
  document.getElementById('nine').addEventListener('click', () => handleNumberClick('9'));

  document.getElementById('add').addEventListener('click', () => handleOperatorClick('+'));
  document.getElementById('subtract').addEventListener('click', () => handleOperatorClick('-'));
  document.getElementById('multiply').addEventListener('click', () => handleOperatorClick('*'));
  document.getElementById('divide').addEventListener('click', () => handleOperatorClick('/'));


  document.getElementById('decimal').addEventListener('click', handleDecimalClick);

  document.getElementById('equals').addEventListener('click', calculateResult);

  document.getElementById('clear').addEventListener('click', clearAll);
});
