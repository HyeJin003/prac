import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Controller from "./components/Controller";
import Header from "./components/Header";
import Viewer from "./components/Viewer";

function App() {
  const [count, setCount] = useState(0);
  // const [click, setClick] = useState("");
  // 미리 이벤트클릭 함수 하면 더 유용
  const onClickButton = (value) => {
    console.log("value", value);
    setCount(count + value);
    console.log("ㅠㅜ히히힣");
  };
  return (
    <div className="App">
      <Header />
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Button onClickButton={onClickButton} />
        <Controller />
      </section>
    </div>
  );
}

export default App;
