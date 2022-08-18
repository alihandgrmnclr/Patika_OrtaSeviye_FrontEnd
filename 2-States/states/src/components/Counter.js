import { useState } from 'react';

function Counter() {

  const [counter, setCounter] = useState(0);

  const Increase = function () {
    setCounter(counter + 1);
  }
  const Decrease = function () {
    setCounter(counter - 1);
  }

  return (
    <div> Sayaç: {counter}<br />
      <button onClick={(Increase)}>Arttır</button>
      <button onClick={(Decrease)}>Azalt</button>
    </div>
  )

}

export default Counter