import React, { useState } from "react";
import Calendar from "react-calendar";

function DashCalendar({ setClickedDay, clickedDay }) {
  const value = new Date();

  return (
    <div>
      <Calendar
        showNeighboringMonth={false}
        value={clickedDay}
        minDetail="year"
        minDate={value}
        onClickDay={(e) => setClickedDay(e)}
      />
    </div>
  );
}

export default DashCalendar;
