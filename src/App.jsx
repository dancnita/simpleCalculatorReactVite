import { useState } from 'react';
import CalcContainer from './components/CalcContainer';
import Screen from './components/Screen';
import ButtonsContainer from './components/ButtonsContainer';
import Button from './components/Button';
import {
  btnValues,
  resetInput,
  regExOperators,
  numInput,
  operatorInput,
  equalInput,
  pointInput,
} from './utils/jsScripts';

function App() {
  const [input, setInput] = useState('');
  const [prevInput, setPrevInput] = useState('');
  const [operator, setOperator] = useState('');
  //
  function btnClickHandler(valueBtn) {
    valueBtn === 'AC'
      ? resetInput(setInput, setOperator, setPrevInput)
      : valueBtn === '='
      ? equalInput(prevInput, input, setPrevInput, operator, setInput)
      : regExOperators.test(valueBtn)
      ? operatorInput(
          valueBtn,
          input,
          prevInput,
          operator,
          setInput,
          setOperator,
          setPrevInput
        )
      : valueBtn === '.'
      ? pointInput(valueBtn, input, setInput)
      : numInput(
          valueBtn,
          input,
          setInput,
          prevInput,
          setPrevInput,
          operator,
          setOperator
        );
  }

  return (
    <>
      <CalcContainer>
        <Screen input={input} prevInput={prevInput} />
        <ButtonsContainer>
          {btnValues.flat().map((value, index) => (
            <Button
              value={value}
              key={index}
              onClick={() => btnClickHandler(value)}
            />
          ))}
        </ButtonsContainer>
      </CalcContainer>
    </>
  );
}

export default App;
