import React, { useState } from "react";
import Calendar from "react-calendar";

function DashCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <Calendar onChange={onChange} showNeighboringMonth={false} value={value} />
  );
}

export default DashCalendar;
