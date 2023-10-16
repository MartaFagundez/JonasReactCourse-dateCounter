import React, { useEffect, useState } from "react";

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
  const[date, setDate] = useState(new Date());
  const[dateString, setDateString] = useState(`Today is ${date.toString().split(" ").slice(0,4).join(" ")}`);

  useEffect(() => {
    handleDateString();
  }, [date]);


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
    handleDate();
    
  }

  function handleCountDown() {
    setCount((current) => current - step);
    handleDate();
  }


  // ============= Date handlers ============= //
  function handleDate() {
    const now = new Date();
    setDate(new Date(new Date(now).setDate(now.getDate() + count)));
  }


  // ============= Date String handler ============= //
  function handleDateString() {
    console.log("date " + date.setHours(0, 0, 0, 0).toString());
    console.log("today " + new Date().setHours(0,0,0,0).toString());

    // Comparo ambas fechas llevando la hora a 0 en ambas
    if (date.setHours(0, 0, 0, 0) === new Date().setHours(0,0,0,0)) {
      setDateString(`Today is ${date.toString().split(" ").slice(0,4).join(" ")}`);
    }
    else if (date.setHours(0, 0, 0, 0) > new Date().setHours(0,0,0,0)) {
      setDateString(`${count} days from today is ${date.toString().split(" ").slice(0,4).join(" ")}`);
    }
    else {
      setDateString(`${count.toString().split("").slice(1).join("")} days ago was ${date.toString().split(" ").slice(0,4).join(" ")}`);
    }
  }

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
      {dateString}
    </h3>
    <h3 className="dateString">
      {date.toString()}
    </h3>
  </div>
}
