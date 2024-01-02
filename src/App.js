import { useState } from 'react';

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date('2 Jan 2024');

  date.setDate(date.getDate() + count);

  function minusStep() {
    setStep((curStep) => curStep - 1);
  }

  function addStep() {
    setStep((curStep) => curStep + 1);
  }

  function minusCount() {
    setCount((curCount) => curCount - step);
  }

  function addCount() {
    setCount((curCount) => curCount + step);
  }

  return (
    <div>
      <h1 className="text-center text-primary p-2 my-3">Counter React App</h1>
      <div className="container p-5 my-5 border">
        <div>
          <button className="btn btn-danger " onClick={minusStep}>
            ➖
          </button>
          <span className="text-bold"> Step: {step} </span>
          <button className="btn btn-success" onClick={addStep}>
            ➕
          </button>
        </div>
        <div>
          <span>
            <button className="btn btn-danger" onClick={minusCount}>
              ➖
            </button>
            Count : {count}
            <button className="btn btn-success" onClick={addCount}>
              ➕
            </button>
          </span>
        </div>
        <p>
          <span>
            {count === 0
              ? 'Today is '
              : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </p>
      </div>
    </div>
  );
}
