import { useState } from "react";
import { getDay } from "./assets/dia";

const semana = [
  { num: 0, day: "DOM" },
  { num: 1, day: "SEG" },
  { num: 2, day: "TER" },
  { num: 3, day: "QUA" },
  { num: 4, day: "QUI" },
  { num: 5, day: "SEX" },
  { num: 6, day: "SAB" },
];

function WeekCalendar({ selected, setSelected }) {
  return (
    <div className="weekholder">
      {semana.map((day) => {
        return (
          <div
            onClick={() => setSelected(day.num)}
            key={day.num}
            className={`day${day.num == getDay() ? " active" : ""}${
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
