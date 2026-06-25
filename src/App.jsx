import { useState } from "react";
import "./App.css";
import Increment from "./Increment";
import Decrement from "./Decrement";
import Reset from "./Reset";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <h1>Let's Count..</h1>

        <h2>{count}</h2>
        <Increment count={count} setCount={setCount} />
        <Decrement count={count} setCount={setCount} />
        <Reset setCount={setCount} />
      </div>
    </>
  );
}

export default App;
