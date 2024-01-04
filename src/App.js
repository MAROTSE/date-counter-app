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

  const date = new Date();
  date.setDate(date.getDate() + count);

  const stepOnchange = (e) => {
    setStep(Number(e.target.value));
  };

  const countOnchange = (e) => {
    setCount(Number(e.target.value));
  };

  const handleReset = () => {
    setStep(1);
    setCount(0);
  };

  const lessCount = () => setCount((curCount) => curCount - step);
  const addCount = () => setCount((curCount) => curCount + step);

  return (
    <div>
      <h1 className="text-center text-primary p-4 my-4 text-uppercase">
        Date Counter App
      </h1>
      <div className="container p-5 my-5 border">
        <div>
          <input
            type="range"
            min="0"
            max="10"
            value={step}
            onChange={stepOnchange}
          />
          <span className="text-bold"> Step: {step} </span>
        </div>
        <div>
          <button className="btn btn-danger" onClick={lessCount}>
            ➖
          </button>
          <input type="text" value={count} onChange={countOnchange} />

          <button className="btn btn-success" onClick={addCount}>
            ➕
          </button>
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
        {step !== 1 || count !== 0 ? (
          <div>
            <button className="btn btn-danger" onClick={handleReset}>
              Reset
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
