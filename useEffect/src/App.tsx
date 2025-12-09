// import { useState } from "react";

import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";
import Header from "./components/Header";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <Header />
        <section>
          <Counter />
          <Button />
        </section>
      </div>
    </>
  );
}

export default App;
