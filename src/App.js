import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>React Calculator</h1>
      <div className="container">
        <div className="output">
          <div className="previous-operand">
            6609809809809809098098098098098098
          </div>
          <div className="current-operand">7700000000000000</div>
        </div>
        <button className="span-two">AC</button>
        <button>DEL</button>
        <button>÷</button>

        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>×</button>

        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>

        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>-</button>

        <button>.</button>
        <button>0</button>
        <button className="span-two">=</button>
      </div>
    </div>
  );
}

export default App;
