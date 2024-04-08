import React from './core/react.js';

function Counter({ num }) {
  return <div>count: {num}</div>;
}

function App() {
  return (
    <div>
      hello react
      <Counter num={10} />
      <Counter num={10} />
    </div>
  );
}

export default App;
