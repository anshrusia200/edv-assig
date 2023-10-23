import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import CodeEditorComponent from "./components/CodeEditor";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CodeEditorComponent />
    </>
  );
}

export default App;
