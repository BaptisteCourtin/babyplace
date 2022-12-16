import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";

function Structure11() {
  const [closedDays, setClosedDays] = useState([]);
  const isOpenDay = (e) => {
    const clickedDayFormated = `${e.getFullYear()}-${
      e.getMonth() + 1
    }-${e.getDate()}`;
    if (closedDays.length > 0) {
      const indexOfDay = closedDays.indexOf(clickedDayFormated);
      if (indexOfDay === -1) {
        setClosedDays([...closedDays, clickedDayFormated]);
      } else {
        const tempArray = closedDays;
        tempArray.splice(indexOfDay, 1);
        setClosedDays(tempArray);
      }
    } else setClosedDays([...closedDays, clickedDayFormated]);
  };

  return (
    <div className="structure11 page-left">
      <div className="agendaSection">
        <Calendar
          showNeighboringMonth={false}
          minDetail="month"
          maxDetail="month"
          onClickDay={(e) => isOpenDay(e)}
        />
      </div>
    </div>
  );
}

export default Structure11;
