import Header from "./Components/Header/Header"
import Main from "./Components/Main/Main"
import { useState } from "react";

function App() {
  const [name, setName] = useState(false)
  const navbar = () => {
    setName((name) => setName(!name))
  }
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App
