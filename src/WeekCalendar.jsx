import { useState } from "react";

const semana = [
  { num: 0, day: "DOM" },
  { num: 1, day: "SEG" },
  { num: 2, day: "TER" },
  { num: 3, day: "QUA" },
  { num: 4, day: "QUI" },
  { num: 5, day: "SEX" },
  { num: 6, day: "SAB" },
];

function WeekCalendar() {
  const [selected, setSelected] = useState(3);

  return (
    <div className="weekholder">
      {semana.map((day) => {
        return (
          <div
            onClick={() => setSelected(day.num)}
            key={day.num}
            className={`day${day.num == 3 ? " active" : ""}${
              selected === day.num ? " selected" : ""
            }`}
          >
            {day.day}
          </div>
        );
      })}
    </div>
  );
}

export default WeekCalendar;
