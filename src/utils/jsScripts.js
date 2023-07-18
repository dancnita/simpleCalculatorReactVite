const btnValues = [
  ['+', '-', '*', '/'],
  [7, 8, 9],
  [4, 5, 6],
  [1, 2, 3],
  [0, '.', 'AC', '='],
];

const regExOperators = /\+|\-|\*|\//;

const operations = {
  '+': (a, b) => a / 1 + b / 1,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
};

function resetInput(setInput, setOperator, setPrevInput) {
  setInput('');
  setOperator('');
  setPrevInput('');
}

function equalInput(prevInput, input, setPrevInput, operator, setInput) {
  if ((prevInput && Number(input)) || input === 0) {
    setPrevInput(getResult(prevInput, input, operator));
    setInput(operator);
  }
}

function operatorInput(
  valueBtn,
  input,
  prevInput,
  operator,
  setInput,
  setOperator,
  setPrevInput
) {
  if (Number(input) && !prevInput) {
    setOperator(valueBtn);
    setPrevInput(input);
    setInput(valueBtn);
  } else if (regExOperators.test(input)) {
    setOperator(valueBtn);
    setInput(valueBtn);
  } else if (Number(input) && prevInput) {
    setPrevInput(getResult(prevInput, input, operator));
    setOperator(valueBtn);
    setInput(valueBtn);
  }
}

function pointInput(value, input, setInput) {
  input.toString().includes('.') || regExOperators.test(input)
    ? input
    : setInput(input + value);
}

function numInput(
  valueBtn,
  input,
  setInput,
  prevInput,
  setPrevInput,
  operator,
  setOperator
) {
  if (regExOperators.test(input)) {
    setInput(valueBtn);
    setPrevInput(prevInput + operator);
  } else {
    setInput(input + valueBtn);
  }
}

function getResult(firstNumber, secondNumber, operator) {
  if (operator in operations) {
    return operations[operator](firstNumber.slice(0, -1), secondNumber);
  }
}

export {
  btnValues,
  resetInput,
  regExOperators,
  numInput,
  operatorInput,
  equalInput,
  pointInput,
};
