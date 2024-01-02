export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  return (
    <div>
      <h1 className="text-center p-2 my-3">Counter React App</h1>
      <div className="container p-5 my-5 border">
        <div>
          <button className="btn btn-danger ">➖</button>
          <span>Step: </span>
          <button className="btn btn-success">➕</button>
        </div>
        <div>
          <button className="btn btn-danger">➖</button>
          <span>Count : </span>
          <button className="btn btn-success">➕</button>
        </div>
      </div>
    </div>
  );
}
