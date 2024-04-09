import React from './core/react.js';

function Counter({ num }) {
  const handleClick = () => {
    console.log('click');
  };

  return (
    <div>
      count: {num}
      <button onClick={handleClick}>click</button>
    </div>
  );
}

function App() {
  return (
    <div>
      hello react
      <Counter num={10} />
    </div>
  );
}

export default App;
