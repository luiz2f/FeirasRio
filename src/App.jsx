import { useState } from "react";
import Map from "./Map";
import Header from "./Header";
import { getDay } from "./assets/dia";

function App() {
  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState(getDay());

  return (
    <>
      <Header selected={selected} setSelected={setSelected} />
      <Map selected={selected} />
    </>
  );
}

export default App;
