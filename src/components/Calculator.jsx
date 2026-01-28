import React, { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const inputDigit = (digit) => {
    if (waitingForSecondOperand) {
      setDisplay(String(digit));
      setWaitingForSecondOperand(false);
    } else {
      setDisplay(display === '0' ? String(digit) : display + digit);
    }
  };

  const inputDot = () => {
    if (waitingForSecondOperand) {
      setDisplay('0.');
      setWaitingForSecondOperand(false);
      return;
    }
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const clear = () => {
    setDisplay('0');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const performOperation = (nextOperator) => {
    const inputValue = parseFloat(display);

    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator);
      setDisplay(String(result));
      setFirstOperand(result);
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
  };

  const calculate = (firstOperand, secondOperand, operator) => {
    switch (operator) {
      case '+':
        return firstOperand + secondOperand;
      case '-':
        return firstOperand - secondOperand;
      case '*':
        return firstOperand * secondOperand;
      case '/':
        return firstOperand / secondOperand;
      case '=':
        return secondOperand;
      default:
        return secondOperand;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-80">
        <div className="mb-4 p-4 bg-gray-800 rounded-lg text-right">
          <span className="text-white text-3xl font-mono overflow-x-auto block">
            {display}
          </span>
        </div>

        <div className="grid grid-cols-4 gap-3">
          <button onClick={clear} className="col-span-2 bg-red-500 hover:bg-red-600 text-white p-4 rounded-lg font-bold text-lg transition-colors cursor-pointer">AC</button>
          <button onClick={() => performOperation('/')} className="bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-lg font-bold text-lg transition-colors cursor-pointer">÷</button>
          <button onClick={() => performOperation('*')} className="bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-lg font-bold text-lg transition-colors cursor-pointer">×</button>

          <button onClick={() => inputDigit(7)} className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-4 rounded-lg font-bold text-lg transition-colors cursor-pointer">7</button>
          <button onClick={() => inputDigit(8)} className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-4 rounded-lg font-bold text-lg transition-colors cursor-pointer">8</button>
          <button onClick={() => inputDigit(9)} className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-4 rounded-lg font-bold text-lg transition-colors cursor-pointer">9</button>
          <button onClick={() => performOperation('-')} className="bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-lg font-bold text-lg transition-colors cursor-pointer">-</button>

          <button onClick={() => inputDigit(4)} className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-4 rounded-lg font-bold text-lg transition-colors cursor-pointer">4</button>
          <button onClick={() => inputDigit(5)} className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-4 rounded-lg font-bold text-lg transition-colors cursor-pointer">5</button>
          <button onClick={() => inputDigit(6)} className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-4 rounded-lg font-bold text-lg transition-colors cursor-pointer">6</button>
          <button onClick={() => performOperation('+')} className="bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-lg font-bold text-lg transition-colors cursor-pointer">+</button>

          <button onClick={() => inputDigit(1)} className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-4 rounded-lg font-bold text-lg transition-colors cursor-pointer">1</button>
          <button onClick={() => inputDigit(2)} className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-4 rounded-lg font-bold text-lg transition-colors cursor-pointer">2</button>
          <button onClick={() => inputDigit(3)} className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-4 rounded-lg font-bold text-lg transition-colors cursor-pointer">3</button>
          <button onClick={() => performOperation('=')} className="row-span-2 bg-green-500 hover:bg-green-600 text-white p-4 rounded-lg font-bold text-lg transition-colors flex items-center justify-center cursor-pointer">=</button>

          <button onClick={() => inputDigit(0)} className="col-span-2 bg-gray-200 hover:bg-gray-300 text-gray-800 p-4 rounded-lg font-bold text-lg transition-colors cursor-pointer">0</button>
          <button onClick={inputDot} className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-4 rounded-lg font-bold text-lg transition-colors cursor-pointer">.</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
