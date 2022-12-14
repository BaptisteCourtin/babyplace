import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Calendar from "react-calendar";

function DashCalendar({
  setClickedDay,
  clickedDay,
  Lundi,
  Mardi,
  Mercredi,
  Jeudi,
  Vendredi,
  Samedi,
  Dimanche,
}) {
  const value = new Date();

  const [dayId, setDayId] = useState("");
  useEffect(() => {
    setDayId(clickedDay.getDay());
  }, [clickedDay]);

  const days = [
    {
      id: 0,
      value: Dimanche,
    },
    {
      id: 1,
      value: Lundi,
    },
    {
      id: 2,
      value: Mardi,
    },
    {
      id: 3,
      value: Mercredi,
    },
    {
      id: 4,
      value: Jeudi,
    },
    {
      id: 5,
      value: Vendredi,
    },
    {
      id: 6,
      value: Samedi,
    },
  ];

  return (
    <Calendar
      showNeighboringMonth={false}
      value={clickedDay}
      minDetail="month"
      maxDetail="month"
      minDate={value}
      onClickDay={(e) => setClickedDay(e)}
      className={days.findIndex((d) =>
        d.id === dayId && d.value ? "notWorked" : "worked"
      )}
    />
  );
}

export default DashCalendar;

DashCalendar.propTypes = {
  Lundi: PropTypes.string.isRequired,
  Mardi: PropTypes.string.isRequired,
  Mercredi: PropTypes.string.isRequired,
  Jeudi: PropTypes.string.isRequired,
  Vendredi: PropTypes.string.isRequired,
  Samedi: PropTypes.string.isRequired,
  Dimanche: PropTypes.string.isRequired,
  clickedDay: PropTypes.string.isRequired,
  setClickedDay: PropTypes.func.isRequired,
};
