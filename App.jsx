import React from './core/react.js';

let count = 10;
let props = { id: '111' };

function Counter({ num }) {
  const handleClick = () => {
    console.log('click');
    count++;
    props = {};
    React.update();
  };

  return (
    <div {...props}>
      count: {count}
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
