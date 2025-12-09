// import { useState } from "react";

import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Todo from "./pages/Todo";

function App() {
  const [content, setContent] = useState("");

  return (
    <>
      <Header />
      <Todo />
      <Footer />
    </>
  );
}

export default App;
