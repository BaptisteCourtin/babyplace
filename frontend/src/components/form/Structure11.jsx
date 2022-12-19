import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { AiFillCodeSandboxCircle } from "react-icons/ai";

function Structure11() {
  const [closedDays, setClosedDays] = useState([]);

  const isOpenDay = (e) => {
    const clickedDayFormated = `${e.getFullYear()}-${e.getMonth() + 1
      }-${e.getDate()}`;
    if (closedDays.length > 0) {
      const indexOfDay = closedDays.indexOf(clickedDayFormated);
      if (indexOfDay !== -1) {
        const tempArray = [...closedDays];
        tempArray.splice(indexOfDay, 1);
        setClosedDays(tempArray);
      } else {
        setClosedDays([...closedDays, clickedDayFormated]);
      }
    } else {
      setClosedDays([...closedDays, clickedDayFormated]);
    }
  };

  const tileDisable = ({ date, view }) => {
    if (closedDays.length > 0 && view === "month") {
      const formatedDate = `${date.getFullYear()}-${date.getMonth() + 1
        }-${date.getDate()}`;
      if (closedDays.includes(formatedDate)) {
        return "selected";
      }
      return "";
    }
  };
  return (
    <div className="structure11 page-left">
      <div className="agendaSection">
        <Calendar
          showNeighboringMonth={false}
          minDetail="month"
          maxDetail="month"
          onClickDay={(e) => {
            isOpenDay(e);
          }}
          tileClassName={(e) => tileDisable(e)}
        />
      </div>
    </div>
  );
}

export default Structure11;
