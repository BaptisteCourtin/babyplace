import React from "react";
import PropTypes from "prop-types";
import Calendar from "react-calendar";

function DashCalendar({
  setClickedDay,
  clickedDay,
  setPlaces,
}) {
  const value = new Date();

  return (
    <Calendar
      locale="fr"
      showNeighboringMonth={false}
      value={clickedDay}
      minDetail="month"
      maxDetail="month"
      minDate={value}
      onClickDay={(e) => {
        setClickedDay(e);
        setPlaces("");
      }}
    />
  );
}

export default DashCalendar;

DashCalendar.propTypes = {
  clickedDay: PropTypes.string.isRequired,
  setClickedDay: PropTypes.func.isRequired,
};
