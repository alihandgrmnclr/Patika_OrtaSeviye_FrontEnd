import A from './components/A/index'
import B from './components/B/index'

function App() {
  return (
    <div className="App">
      <div style={{ color: "blue", backgroundColor: "limegreen", paddingTop: "20px" }} className="mt-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. At vel obcaecati asperiores voluptatum,
        ea odit eligendi modi sequi! Fuga tempore minima praesentium cumque sit natus quaerat impedit quam
        odit eos est debitis autem sint sequi, nesciunt animi voluptatem ullam obcaecati veniam adipisci incidunt
        temporibus quis et. Omnis dicta in reiciendis.
      </div>

      <div className="text-center">
        <A/> 
        <B/>
      </div>
    </div>
  );
}

export default App;
