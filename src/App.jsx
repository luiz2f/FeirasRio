import { useState } from "react";
import Map from "./Map";
import Header from "./Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Map />
    </>
  );
}

export default App;
