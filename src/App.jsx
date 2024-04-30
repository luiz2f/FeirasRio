import { useState } from "react";
import Map from "./Map";
import Header from "./Header";
import { getDay } from "./assets/dia";
import WeekCalendar from "./WeekCalendar";

function App() {
  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState(getDay());

  return (
    <>
      <Header />
      <Map selected={selected} />
      <WeekCalendar selected={selected} setSelected={setSelected} />
    </>
  );
}

export default App;
