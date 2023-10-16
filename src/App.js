import React, { useState } from "react";

export default function App() {
  return (
    <div className="app">
      <Counter />
    </div>
  );
}

// ============= COMPONENTE COUNTER ============= //
function Counter() {
  const[step, setStep] = useState(1);
  const[count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);


  // ============= Step Handlers ============= //
  function handleStepUp() {
    setStep((current) => current + 1);
  }

  function handleStepDown() {
    step > 1 && setStep((current) => current - 1);
  }


  // ============= Count Handlers ============= //
  function handleCountUp() {
    setCount((current) => current + step);    
  }

  function handleCountDown() {
    setCount((current) => current - step);
  }

  
  // ============== JSX ================ //
  return <div className="counter">
    <div className="step">
      <button className="btn" onClick={handleStepDown}>-</button>
      <p>Step: {step}</p>
      <button className="btn" onClick={handleStepUp}>+</button>
    </div>

    <div className="count">
      <button className="btn" onClick={handleCountDown}>-</button>
        <p>Count: {count}</p>
      <button className="btn" onClick={handleCountUp}>+</button>
    </div>

    <h3 className="dateString">
      <span>{count === 0 ? "Today is " 
            : count > 0 ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
      </span>
      <span>{date.toDateString()}</span>
    </h3>
  </div>
}
