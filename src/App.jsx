import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
//import './App.css';
import Screen from './components/Screen';
import ButtonsContainer from './components/ButtonsContainer';
import Button from './components/Button';

function App() {
  const [input, setInput] = useState('');
  const [prevInput, setPrevInput] = useState('');
  const [operator, setOperator] = useState('');

  const operations = {
    '+': (a, b) => a / 1 + b / 1,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
  };
  const regExOperators = /\+|\-|\*|\//;

  const getResult = (firstNumber, secondNumber, operator) => {
    if (operator in operations) {
      return operations[operator](firstNumber, secondNumber);
    }
  };

  const btnValues = [
    ['+', '-', '*', '/'],
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    [0, '.', 'AC', '='],
  ];

  function getInput(buttonValue) {
    if (buttonValue === 'AC') {
      setInput(() => '');
      setOperator(() => '');
      setPrevInput(() => '');
      console.log('reset');
    } else if (buttonValue === '.' && !input.includes('.')) {
      setInput(() => input + buttonValue);
    } else if (
      buttonValue === '=' &&
      prevInput !== '' &&
      !regExOperators.test(input)
    ) {
      setPrevInput(() => getResult(prevInput.slice(0, -1), input, operator));
      setInput(() => operator);
    } else if (buttonValue === '=' && regExOperators.test(input)) {
      return;
    } else if (regExOperators.test(buttonValue) && input === '') {
      return;
    } else if (typeof buttonValue === 'number' && !regExOperators.test(input)) {
      setInput(() => input + buttonValue);
    } else if (
      regExOperators.test(buttonValue) &&
      input !== '' &&
      prevInput === ''
    ) {
      setPrevInput(() => input);
      setOperator(() => buttonValue);
      setInput(() => buttonValue);
    } else if (typeof buttonValue === 'number' && regExOperators.test(input)) {
      setPrevInput(() => prevInput + operator);
      setInput(() => input.substring(1) + '' + buttonValue);
    } else if (
      regExOperators.test(buttonValue) &&
      prevInput !== '' &&
      !regExOperators.test(input)
    ) {
      setPrevInput(() => getResult(prevInput.slice(0, -1), input, operator));
      setOperator(() => buttonValue);
      setInput(() => buttonValue);
    } else if (
      regExOperators.test(buttonValue) &&
      prevInput !== '' &&
      regExOperators.test(input)
    ) {
      setOperator(() => buttonValue);
      setInput(() => buttonValue);
    }
  }

  return (
    <>
      <div className='main-container'>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <div className='calc-container'>
        <Screen input={input} prevInput={prevInput} />
        <ButtonsContainer>
          {btnValues.flat().map((value, index) => (
            <Button value={value} key={index} onClick={() => getInput(value)} />
          ))}
        </ButtonsContainer>
      </div>
    </>
  );
}

export default App;
