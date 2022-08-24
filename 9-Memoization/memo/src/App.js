import { useState, useMemo } from 'react';
import './App.css';
import Header from "./components/Header"

function App() {

  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  const data = useMemo(() => {          // useMemo kullanarak her defa renderlanmasının önüne geçiyoruz
    return calculateObject();
  }, [])

  // const data = calculateObject();    // Bunu kullanırsak calculate işlemi inputa her veri girdiğimizde devam ederdi

  return (
    <div className="App">
      <Header data={data}/> {/* Header içine Propları parametre olarak yolladık */}
      <hr />

      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>

      <br /><br />
      <input value={text} onChange={({target}) => setText(target.value)} />  
    </div>
  );

}

function calculateObject() {
  console.log("Calculating Object...");
  for(let i = 0; i <1000000000; i++){}
  console.log("Calculated");

  return { name: "Alihan" }
}

export default App;
